"use client";

import { doc, setDoc } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { db } from "../../../../firebase/firebasedb";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/useAuthStore";

export default function InfoForm() {
  const router = useRouter();
  const uid = useAuthStore((state) => state.uid);
  const [gender, setGender] = useState<string>("male");
  const [error, setError] = useState<string>("");

  const handleMale = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (gender === "male") return;
    setGender("male");
  };

  const handleFemale = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (gender === "female") return;
    setGender("female");
  };

  const handleInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const age = Number(formData.get("age") as string);
      const height = Number(formData.get("height") as string);
      const weight = Number(formData.get("weight") as string);

      if (!uid) {
        setError("회원 정보가 없습니다.");
        return;
      }

      if (!age || !height || !weight) {
        setError("모든 항목을 입력해주세요");
        return;
      }

      if (age > 2024 || age < 1900) {
        setError("출생연도를 정확히 입력해주세요");
        return;
      }

      if (height < 50 || height > 300) {
        setError("키를 정확히 입력해주세요");
        return;
      }

      if (weight < 10 || weight > 500) {
        setError("몸무게를 정확히 입력해주세요");
        return;
      }

      await setDoc(
        doc(db, "users", uid),
        {
          gender: gender,
          age: age,
          height: height,
          weight: weight,
        },
        { merge: true }
      );

      router.replace("/mypage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5">
      <div className="w-full text-4xl tablet:text-[40px] font-semibold mb-10">
        내 정보 입력하기
      </div>
      <form
        onSubmit={handleInfo}
        className="w-full flex flex-col gap-10 mb-6 font-light text-[#767676]"
      >
        <div>
          <div className="mb-4">성별</div>
          <div className="bg-[#F1F1F5] cursor-pointer w-full h-[55px] rounded-xl flex items-center justify-center py-1 gap-1">
            <div
              onClick={handleMale}
              className={`${
                gender === "male" && "bg-white"
              } h-full rounded-xl flex-1 flex justify-center items-center ml-1 drop-shadow-md transition duration-200 ease-in-out`}
            >
              남자
            </div>
            <div
              onClick={handleFemale}
              className={`${
                gender === "female" && "bg-white"
              } h-full rounded-xl flex-1 flex justify-center items-center mr-1 drop-shadow-md transition duration-200 ease-in-out`}
            >
              여자
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="mb-2">
            출생연도
          </label>
          <input
            placeholder="예) 2001"
            name="age"
            className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
            type="number"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="height" className="mb-2">
            키(cm)
          </label>
          <input
            placeholder="예) 175"
            name="height"
            className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="weight" className="mb-2">
            몸무게(kg)
          </label>
          <input
            placeholder="예) 70"
            name="weight"
            className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
            type="number"
          />
        </div>
        <div className="relative">
          <div className="w-full text-center text-red-400 text-sm absolute top-2">
            {error}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-[#18B491]  mt-10 py-3 text-white text-sm tablet:text-base"
          >
            입력하기
          </button>
        </div>
      </form>
    </div>
  );
}
