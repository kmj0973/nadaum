"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../../../firebase/firebasedb";
import { useAuthStore } from "@/hooks/useAuthStore";
import Loading from "./Loading";

export default function LoginForm() {
  const saveUser = useAuthStore((state) => state.saveUser);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      if (!email || !password) {
        setError("이메일과 비밀번호를 확인해주세요");
        return;
      }
      if (password.length < 6) {
        setError("이메일과 비밀번호를 확인해주세요");
        return;
      }

      setIsLoading(false);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user.displayName) saveUser(user.displayName, email, user.uid);
      const token = await user.getIdToken();

      // 서버에 토큰 전달 → 서버가 HttpOnly 쿠키로 설정
      await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setIsLoading(true);
      setError("이메일과 비밀번호를 확인해주세요");
    }
  };

  return (
    <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5">
      <div className="w-full text-4xl tablet:text-[40px] font-semibold mb-10">
        로그인
      </div>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-10 mb-6">
        <input
          className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
        />
        <input
          className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="relative">
          {!error ? null : (
            <div className="w-full text-center text-red-400 text-sm absolute top-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base flex justify-center items-center"
          >
            {isLoading ? "로그인" : <Loading color="white" />}
          </button>
        </div>
      </form>
    </div>
  );
}
