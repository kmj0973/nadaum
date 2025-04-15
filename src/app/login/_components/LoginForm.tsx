"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { auth } from "../../../../firebase/firebasedb";
import { setCookie } from "@/global/cookies";
import { useRouter } from "next/navigation";

export default function LoginForm() {
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

      if (user) {
        console.log("로그인 완료:", user);

        setCookie("token", await user.getIdToken());
        // 리다이렉션
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
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
        <button
          type="submit"
          className="rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base"
        >
          로그인
        </button>
      </form>
      <div className="text-[#797979] font-light text-sm tablet:text-base">
        카카오 로그인으로 시작하기
      </div>
    </div>
  );
}
