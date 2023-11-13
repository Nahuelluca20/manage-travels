import {IncomingHttpHeaders} from "http";

import {headers} from "next/headers";
import {NextResponse} from "next/server";
import {Webhook, WebhookRequiredHeaders} from "svix";

import {prisma} from "@/lib/prisma";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);

    return NextResponse.json({}, {status: 400});
  }

  const eventType: EventType = evt.type;

  if (eventType === "user.created" || eventType === "user.updated") {
    const {id, ...attributes} = evt.data;

    await prisma.user.upsert({
      where: {external_id: id as string},
      create: {
        external_id: id as string,
        name: attributes.first_name + " " + attributes.last_name,
        email: (attributes.email_addresses as any)[0].email_address,
        attributes,
        posts: {},
      },
      update: {
        name: attributes.first_name + " " + attributes.last_name,
        email: (attributes.email_addresses as any)[0].email_address,
        attributes,
        posts: {},
      },
    });

    return NextResponse.json({message: "Received"}, {status: 200});
  }

  return NextResponse.json({message: "500"}, {status: 500});
}

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;

export const POST = handler;

export const PUT = handler;
