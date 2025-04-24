import { deleteCookie } from "@/global/cookies";
import { create } from "zustand";

type AuthState = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  saveUser: (displayName: string, email: string, uid: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  uid: null,
  displayName: null,
  email: null,
  saveUser: (displayName, email, uid) => {
    set({ displayName, email, uid });
  },
  logout: () => {
    deleteCookie("token");
    set({ displayName: null, email: null, uid: null });
  },
}));
