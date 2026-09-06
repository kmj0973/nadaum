import { NextResponse } from "next/server";
import { getAdminAuth } from "../../../../firebase/firebaseAdmin";

// Firebase ID 토큰은 수명이 1시간이라 쿠키에 그대로 담으면 금방 만료된다.
// 검증 후 세션 쿠키(24시간)로 교환해서 내려준다.
const SESSION_EXPIRES_IN = 60 * 60 * 24 * 1000; // 1일 (ms)

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token || typeof token !== "string") {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const adminAuth = getAdminAuth();
    await adminAuth.verifyIdToken(token);
    const sessionCookie = await adminAuth.createSessionCookie(token, {
      expiresIn: SESSION_EXPIRES_IN,
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_EXPIRES_IN / 1000,
    });
    return response;
  } catch (error) {
    console.error("토큰 검증 실패:", error);
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
