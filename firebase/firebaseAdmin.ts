import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// 서버 전용. FIREBASE_SERVICE_ACCOUNT_KEY에는 Firebase 콘솔 > 프로젝트 설정 >
// 서비스 계정에서 발급한 JSON 전체를 한 줄로 넣는다. (NEXT_PUBLIC_ 금지)
export function getAdminAuth() {
  const app =
    getApps()[0] ??
    initializeApp({
      credential: cert(
        JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
      ),
    });
  return getAuth(app);
}
