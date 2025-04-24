"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import { useRouter } from "next/navigation";

export default function MyPage() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  return (
    <div
      onClick={() => {
        logout();
        router.replace("/");
      }}
    >
      auth
    </div>
  );
}
