import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (token && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/mypage")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/chatbot")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/diet")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/map")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
