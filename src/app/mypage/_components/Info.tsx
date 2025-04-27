"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import basicProfile from "@/../public/images/basicProfile.png";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebasedb";

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
    <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-start gap-10">
      <div className="w-[85%] flex justify-center items-center gap-5 mt-5">
        <div className="">
          <Image src={basicProfile} width={80} height={80} alt="basic-image" />
        </div>
        <div className="flex-1">
          {displayName ? (
            <div className="">
              <span className="text-xl font-bold">{displayName}</span>님
            </div>
          ) : (
            <span className="text-gray-500 animate-pulse">로딩중</span>
          )}
          <div className="text-[10px]">{email}</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center flex-1 gap-10">
        <div className="bg-[#18B491] w-[90%] h-[140px] rounded-2xl flex flex-col items-center">
          <div className="w-[90%] flex justify-between items-center py-2">
            <div className="font-bold text-white">나의 정보</div>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M7 0.799072C3.13158 0.799072 0 4.25075 0 8.51459C0 12.7784 3.13158 16.2301 7 16.2301C10.8684 16.2301 14 12.7784 14 8.51459C14 4.25075 10.8684 0.799072 7 0.799072ZM7 15.4179C3.53684 15.4179 0.736842 12.3317 0.736842 8.51459C0.736842 4.69744 3.53684 1.61123 7 1.61123C10.4632 1.61123 13.2632 4.69744 13.2632 8.51459C13.2632 12.3317 10.4632 15.4179 7 15.4179ZM7 7.09331C6.28158 7.09331 5.71053 7.72273 5.71053 8.51459C5.71053 9.30645 6.28158 9.93587 7 9.93587C7.71842 9.93587 8.28947 9.30645 8.28947 8.51459C8.28947 7.72273 7.71842 7.09331 7 7.09331ZM7 9.12371C6.68684 9.12371 6.44737 8.83945 6.44737 8.51459C6.44737 8.16942 6.68684 7.90547 7 7.90547C7.31316 7.90547 7.55263 8.16942 7.55263 8.51459C7.55263 8.83945 7.31316 9.12371 7 9.12371ZM10.6842 7.09331C9.96579 7.09331 9.39474 7.72273 9.39474 8.51459C9.39474 9.30645 9.96579 9.93587 10.6842 9.93587C11.4026 9.93587 11.9737 9.30645 11.9737 8.51459C11.9737 7.72273 11.4026 7.09331 10.6842 7.09331ZM10.6842 9.12371C10.3711 9.12371 10.1316 8.83945 10.1316 8.51459C10.1316 8.16942 10.3711 7.90547 10.6842 7.90547C10.9974 7.90547 11.2368 8.16942 11.2368 8.51459C11.2368 8.83945 10.9974 9.12371 10.6842 9.12371ZM3.31579 7.09331C2.59737 7.09331 2.02632 7.72273 2.02632 8.51459C2.02632 9.30645 2.59737 9.93587 3.31579 9.93587C4.03421 9.93587 4.60526 9.30645 4.60526 8.51459C4.60526 7.72273 4.03421 7.09331 3.31579 7.09331ZM3.31579 9.12371C3.00263 9.12371 2.76316 8.83945 2.76316 8.51459C2.76316 8.16942 3.00263 7.90547 3.31579 7.90547C3.62895 7.90547 3.86842 8.16942 3.86842 8.51459C3.86842 8.83945 3.62895 9.12371 3.31579 9.12371Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="w-[90%] flex-1 flex items-end pb-2">
            <div className="h-full flex-2/5 flex flex-col items-center">
              <div className="text-[10px] bg-white py-0.5 px-3 rounded-2xl font-medium">
                나이
              </div>
              <div className="flex-1 flex justify-center items-center font-bold text-white">
                {!info.age ? "??세" : `만${2025 - info.age}세`}
              </div>
            </div>
            <div className="w-[1px] h-[80%] bg-white"></div>
            <div className="h-full flex-3/5 flex flex-col items-center">
              <div className="text-[10px] bg-white py-0.5 px-3 rounded-2xl font-medium">
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
              <div className="text-[10px] bg-white py-0.5 px-3 rounded-2xl font-medium">
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
        <div className="flex flex-col justify-center items-center font-semibold">
          당신의 기초대사량은?
          {!info.age ? (
            <div className="text-3xl text-[#18B491] font-bold">
              정보를 입력해주세요
            </div>
          ) : (
            <div className="text-3xl text-[#18B491] font-bold">
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
        <div className="bg-[#18B491] w-[90%] h-[170px] rounded-2xl flex flex-col items-center justify-center gap-1.5">
          <div className="font-bold text-white">오늘의 추천 식단</div>
          <div className="bg-[#F1F1F5] text-[12px] cursor-pointer w-[90%] h-[24px] rounded-2xl flex items-center justify-center py-1 gap-1">
            <div
              className={`bg-white h-full rounded-2xl flex-1 flex justify-center items-center ml-1 drop-shadow-md`}
            >
              아침
            </div>
            <div
              className={`h-full rounded-2xl flex-1 flex justify-center items-center mr-1 drop-shadow-md`}
            >
              점심
            </div>
            <div
              className={`h-full rounded-2xl flex-1 flex justify-center items-center mr-1 drop-shadow-md`}
            >
              저녁
            </div>
          </div>
          <div className="w-[85%] text-[12px] font-semibold text-white">
            - 닭가슴살 샐러드 (닭가슴살 100g, 상추, 토마토, 오이, 당근)
            <br />
            - 현미밥 100g
            <br />- 계란후라이 1개
          </div>
          <div className="w-[90%] flex justify-end text-white font-bold text-sm">
            총 칼로리 500kcal
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          logout();
          router.replace("/login");
        }}
        className="bg-[#EFEFEF] text-[#7C7C7C] px-5 py-1 rounded-2xl cursor-pointer mb-5"
      >
        로그아웃
      </button>
    </div>
  );
}
