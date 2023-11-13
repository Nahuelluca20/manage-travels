import {authMiddleware, redirectToSignIn} from "@clerk/nextjs";
import {NextResponse} from "next/server";

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
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

    if (auth.userId) {
      return NextResponse.rewrite(new URL(`/app${path === "/" ? "" : path}`, req.url));
    } else if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
      // rewrite root application to `/home` folder
      return NextResponse.rewrite(new URL(`/home${path === "/" ? "" : path}`, req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      // if (hostname === "app.localhost:3000") {
      //   return NextResponse.rewrite(new URL(`/app${path === "/" ? "" : path}`, req.url));
      // }

      return NextResponse.redirect(new URL("/", req.url));
    }

    // Default case: redirect to sign in
    return redirectToSignIn({returnBackUrl: req.url});
  },
  publicRoutes: ["/", "/api/webhook/user"],
});
