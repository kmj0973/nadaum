"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../../../../firebase/firebasedb";
import { useRouter } from "next/navigation";
import { setCookie } from "../../../global/cookies";

export default function SignUpForm() {
  const router = useRouter();
  const [checkEmail, setCheckEmail] = useState<boolean>(true);
  const [checkNick, setCheckNick] = useState<boolean>(true);
  const [checkPassword, setCheckPassword] = useState<boolean>(true);
  const [checkAll, setCheckAll] = useState<boolean>(true);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const displayName = formData.get("displayName") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password || !displayName) {
        setCheckAll(false);
        return;
      }

      if (displayName.length < 3 && password.length < 6) {
        setCheckNick(false);
        setCheckPassword(false);
        setCheckAll(true);
        return;
      }

      if (displayName.length < 3) {
        setCheckNick(false);
        setCheckAll(true);
        return;
      } else if (displayName.length >= 3) {
        setCheckNick(true);
        setCheckAll(true);
      }

      if (password.length < 6) {
        setCheckPassword(false);
        setCheckAll(true);
        return;
      } else if (password.length >= 6) {
        setCheckPassword(true);
        setCheckAll(true);
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
      setCheckEmail(false);
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
          {checkNick ? null : (
            <div className="text-red-400 text-sm absolute top-10">
              닉네임은 3자 이상 입력해주세요
            </div>
          )}
        </div>
        <div className="relative">
          <input
            className="w-full outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
          />
          {checkEmail ? null : (
            <div className="text-red-400 text-sm absolute top-10">
              이메일이 중복입니다
            </div>
          )}
        </div>

        <div className="relative">
          <input
            className="w-full outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
          />
          {checkPassword ? null : (
            <div className="text-red-400 text-sm absolute top-10">
              비밀번호는 6자 이상 입력해주세요
            </div>
          )}
        </div>
        <div className="relative">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base"
          >
            회원가입
          </button>
          {checkAll ? null : (
            <div className="text-red-400 text-sm absolute top-2">
              모든 항목을 입력해주세요
            </div>
          )}
        </div>
      </form>
      <div className="text-[#797979] font-light text-sm tablet:text-base">
        카카오로 회원가입 하기
      </div>
    </div>
  );
}
