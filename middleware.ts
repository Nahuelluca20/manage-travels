import {authMiddleware, redirectToSignIn} from "@clerk/nextjs";
import {NextResponse} from "next/server";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  afterAuth(auth, req, evt) {
    const url = req.nextUrl;

    const searchParams = req.nextUrl.searchParams.toString();
    // Get the pathname of the request (e.g. /, /about, /blog/first-post)
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
    let hostname = req.headers
      .get("host")!
      .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

    // rewrite root application to `/home` folder
    if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
      return NextResponse.rewrite(new URL(`/home${path === "/" ? "" : path}`, req.url));
    }

    if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
      if (!auth.userId && !auth.isPublicRoute) {
        return redirectToSignIn({returnBackUrl: req.url});
      } else if (auth.userId) {
        NextResponse.rewrite(new URL(`/app${path === "/" ? "" : path}`, req.url));

        return NextResponse.redirect(new URL("/travels", req.url));
      }
    }
  },
});
