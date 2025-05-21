import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const response = NextResponse.json({ success: true });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // 개발 중엔 false 가능
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1일
  });

  return response;
}
