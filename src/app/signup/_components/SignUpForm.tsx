"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormEvent } from "react";
import { auth } from "../../../../firebase/firebasedb";
import { useRouter } from "next/navigation";
import { setCookie } from "../../../global/cookies";

export default function SignUpForm() {
  const router = useRouter();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const displayName = formData.get("displayName") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password || !displayName) {
        alert("모든 항목을 입력해 주세요.");
        return;
      }

      // 회원가입
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 유저 프로필 업데이트
      if (user) {
        await updateProfile(user, { displayName: displayName });
        console.log("회원가입 완료:", user);

        setCookie("token", await user.getIdToken());
        // 리다이렉션
        router.push("/signup/info");
      }
    } catch (error) {
      console.log(error);
      alert("이메일이 중복입니다.");
    }
  };
  return (
    <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5">
      <div className="w-full text-4xl tablet:text-[40px] font-semibold mb-10">
        회원가입
      </div>
      <form
        onSubmit={handleSignUp}
        className="w-full flex flex-col gap-10 mb-6"
      >
        <input
          className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
          type="text"
          name="displayName"
          placeholder="닉네임을 입력하세요"
        />
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
          회원가입
        </button>
      </form>
      <div className="text-[#797979] font-light text-sm tablet:text-base">
        카카오로 회원가입 하기
      </div>
    </div>
  );
}
