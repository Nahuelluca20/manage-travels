import {Webhook} from "svix";
import {headers} from "next/headers";
import {WebhookEvent} from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
}
