"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth, db } from "../../../../firebase/firebasedb";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { useAuthStore } from "@/hooks/useAuthStore";
import Loading from "./Loading";

export default function SignUpForm() {
  const router = useRouter();
  const saveUser = useAuthStore((state) => state.saveUser);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const displayName = formData.get("displayName") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password || !displayName) {
        setError("모든 항목을 입력해주세요");
        return;
      }

      if (password.length < 6) {
        setError("비밀번호는 최소 6자 이상 입력해주세요");
        return;
      }

      if (displayName.length < 3) {
        setError("닉네임은 최소 3자 이상 입력해주세요");
        return;
      }

      // 회원가입
      setIsLoading(false);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // 유저 프로필 업데이트
      if (user) {
        await updateProfile(user, { displayName: displayName });
        if (user.displayName) saveUser(user.displayName, email, user.uid);

        //데이터베이스 추가
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          conversations: [],
        });
      }
      const token = await user.getIdToken();

      // 서버에 토큰 전달 → 서버가 HttpOnly 쿠키로 설정
      await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      router.push(`/signup/info?uid=${user.uid}`);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
      setError("중복된 이메일입니다");
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
        <div className="relative">
          <input
            className="w-full outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
            type="text"
            name="displayName"
            placeholder="닉네임을 입력하세요"
          />
        </div>
        <div className="relative">
          <input
            className="w-full outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="relative">
          <input
            className="w-full outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="w-full flex justify-center items-center cursor-pointer rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base"
          >
            {isLoading ? "회원가입" : <Loading color="white" />}
          </button>
          {!error ? null : (
            <div className="w-full text-center text-red-400 text-sm absolute top-2">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
