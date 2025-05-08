"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../../../firebase/firebasedb";
import { setCookie } from "@/global/cookies";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/useAuthStore";

export default function LoginForm() {
  const saveUser = useAuthStore((state) => state.saveUser);
  const [checkAll, setCheckAll] = useState<boolean>(true);

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user.displayName) saveUser(user.displayName, email, user.uid);
      if (user) {
        setCheckAll(true);

        setCookie("token", await user.getIdToken());
        // 리다이렉션
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
      setCheckAll(false);
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
          {checkAll ? null : (
            <div className="w-full absolute top-3 text-center text-red-400 text-sm">
              잘못된 이메일 또는 비밀번호입니다
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
