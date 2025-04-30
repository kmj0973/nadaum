"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import basicProfile from "@/../public/images/basicProfile.png";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebasedb";
import Link from "next/link";
import DietCard from "@/app/_components/DietCard";

export default function Info() {
  const logout = useAuthStore((state) => state.logout);
  const uid = useAuthStore((state) => state.uid);
  const displayName = useAuthStore((state) => state.displayName);
  const email = useAuthStore((state) => state.email);
  const router = useRouter();
  const [info, setInfo] = useState<{
    age: number;
    gender: string;
    height: number;
    weight: number;
  }>({ age: 0, gender: "", height: 0, weight: 0 });

  useEffect(() => {
    const getInfo = async () => {
      if (uid) {
        const docSnap = await getDoc(doc(db, "users", uid));
        if (docSnap.data) {
          const age = docSnap.data()?.age;
          const gender = docSnap.data()?.gender;
          const height = docSnap.data()?.height;
          const weight = docSnap.data()?.weight;
          setInfo({ age, gender, height, weight });
        }
      }
    };
    getInfo();
  }, [uid]);

  return (
    <div className="bg-white w-full h-[calc(100vh-60px)] min-h-[750px] tablet:min-h-[850px] flex flex-col items-center justify-start gap-10">
      <div className="w-[85%] flex justify-center items-center gap-5 mt-5">
        <div className="">
          <Image
            src={basicProfile}
            width={80}
            height={80}
            alt="basic-image"
            className="tablet:w-[90px] tablet:h-[90px]"
          />
        </div>
        <div className="flex-1">
          {displayName ? (
            <div className="text-base tablet:text-lg">
              <span className="text-xl tablet:text-2xl font-bold">
                {displayName}
              </span>
              님
            </div>
          ) : (
            <span className="text-gray-500 animate-pulse">로딩중</span>
          )}
          <div className="text-[10px] tablet:text-sm">{email}</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center flex-1 gap-10">
        <div className="bg-[#18B491] w-[90%] h-[140px] tablet:text-lg rounded-2xl flex flex-col items-center">
          <div className="w-[90%] flex justify-between items-center py-2">
            <div className="font-bold text-white text-base">나의 정보</div>
            <Link href="/mypage/info" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="white" />
                <circle cx="8" cy="2" r="2" fill="white" />
                <circle cx="14" cy="2" r="2" fill="white" />
              </svg>
            </Link>
          </div>
          <div className="w-[90%] flex-1 flex items-end pb-2">
            <div className="h-full flex-2/5 flex flex-col items-center">
              <div className="text-[10px] tablet:text-sm bg-white py-0.5 px-3 rounded-2xl font-medium">
                나이
              </div>
              <div className="flex-1 flex justify-center items-center font-bold text-white">
                {!info.age ? "??세" : `만${2025 - info.age}세`}
              </div>
            </div>
            <div className="w-[1px] h-[80%] bg-white"></div>
            <div className="h-full flex-3/5 flex flex-col items-center">
              <div className="text-[10px] tablet:text-sm bg-white py-0.5 px-3 rounded-2xl font-medium">
                신체 정보
              </div>
              <div className="flex-1 flex flex-col justify-center items-center font-bold text-white">
                {!info.height ? (
                  <>
                    <div>??cm</div>
                    <div>??kg</div>
                  </>
                ) : (
                  <>
                    <div>{info.height}cm</div>
                    <div>{info.weight}kg</div>
                  </>
                )}
              </div>
            </div>
            <div className="w-[1px] h-[80%] bg-white"></div>
            <div className="h-full flex-2/5 flex flex-col items-center">
              <div className="text-[10px] tablet:text-sm bg-white py-0.5 px-3 rounded-2xl font-medium">
                성별
              </div>
              <div className="flex-1 flex justify-center items-center font-bold text-white">
                {info.gender == "male" && "남"}
                {info.gender == "female" && "여"}
                {!info.gender && "??"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center font-semibold tablet:text-xl">
          나의 기초대사량은?
          {!info.age ? (
            <div className="text-3xl text-[#18B491] font-bold">
              정보를 입력해주세요
            </div>
          ) : (
            <div className="text-3xl text-[#18B491] font-bold tablet:text-4xl">
              {info.gender == "male" &&
                Math.ceil(
                  66.47 +
                    13.75 * info.weight +
                    5 * info.height -
                    6.76 * (2025 - info.age)
                )}
              {info.gender == "female" &&
                Math.ceil(
                  655.1 +
                    9.56 * info.weight +
                    1.85 * info.height -
                    4.68 * (2025 - info.age)
                )}
              Kcal
            </div>
          )}
        </div>
        <DietCard />
        <button
          onClick={() => {
            logout();
            router.replace("/login");
          }}
          className="bg-[#EFEFEF] text-[#7C7C7C] px-5 py-1 rounded-2xl cursor-pointer mb-5 tablet:m-10"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
