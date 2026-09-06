import { deleteCookie } from "@/global/cookies";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebasedb";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  saveUser: (displayName: string, email: string, uid: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      uid: null,
      displayName: null,
      email: null,
      saveUser: (displayName, email, uid) => {
        set({ displayName, email, uid });
      },
      logout: () => {
        // 쿠키·스토어만 지우면 Firebase 세션(IndexedDB)이 브라우저에 남는다
        signOut(auth).catch(console.error);
        deleteCookie("token");
        set({ displayName: null, email: null, uid: null });
      },
    }),
    {
      name: "auth-store", // localStorage 키 이름
    }
  )
);
