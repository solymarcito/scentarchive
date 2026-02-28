import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirectToHome = ["/scentarchive", "/index.html"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const pathLower = path.toLowerCase();

  // Force root to serve homepage via internal rewrite (avoids 404 on "/")
  if (path === "/" || path === "") {
    return NextResponse.rewrite(new URL("/home", request.url));
  }
  if (redirectToHome.some((p) => pathLower === p || pathLower === `${p}/`)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/scentarchive", "/scentarchive/", "/index.html", "/home"],
};
