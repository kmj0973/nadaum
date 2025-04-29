"use client";

import Link from "next/link";
import { useState } from "react";

export default function SelectForm() {
  const [purpose, setPurpose] = useState<string>("다이어트");
  const [carb, setCarb] = useState<string>("낮음");
  const [protein, setProtein] = useState<string>("낮음");
  const [grassi, setGrassi] = useState<string>("낮음");

  return (
    <>
      <div className="w-[80%] h-full text-[12px] flex flex-col items-center gap-10 flex-1">
        <div className="w-full">
          <div className="mb-2">목적</div>
          <div className="bg-[#F1F1F5] cursor-pointer w-full h-[40px] rounded-2xl flex items-center justify-center p-0.5 gap-0.5">
            <div
              onClick={() => setPurpose("다이어트")}
              className={`${purpose == "다이어트" && "bg-white"}
         h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              다이어트
            </div>
            <div
              onClick={() => setPurpose("벌크업")}
              className={`${purpose == "벌크업" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              벌크업
            </div>
            <div
              onClick={() => setPurpose("체중 유지")}
              className={`${purpose == "체중 유지" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              체중 유지
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2">탄수화물</div>
          <div className="bg-[#F1F1F5] cursor-pointer w-full h-[40px] rounded-2xl flex items-center justify-center p-0.5 gap-0.5">
            <div
              onClick={() => setCarb("낮음")}
              className={`${carb == "낮음" && "bg-white"}
         h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              낮음
            </div>
            <div
              onClick={() => setCarb("중간")}
              className={`${carb == "중간" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              중간
            </div>
            <div
              onClick={() => setCarb("높음")}
              className={`${carb == "높음" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              높음
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2">단백질</div>
          <div className="bg-[#F1F1F5] cursor-pointer w-full h-[40px] rounded-2xl flex items-center justify-center p-0.5 gap-0.5">
            <div
              onClick={() => setProtein("낮음")}
              className={`${protein == "낮음" && "bg-white"}
         h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              낮음
            </div>
            <div
              onClick={() => setProtein("중간")}
              className={`${protein == "중간" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              중간
            </div>
            <div
              onClick={() => setProtein("높음")}
              className={`${protein == "높음" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              높음
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2">지방</div>
          <div className="bg-[#F1F1F5] cursor-pointer w-full h-[40px] rounded-2xl flex items-center justify-center p-0.5 gap-0.5">
            <div
              onClick={() => setGrassi("낮음")}
              className={`${grassi == "낮음" && "bg-white"}
         h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              낮음
            </div>
            <div
              onClick={() => setGrassi("중간")}
              className={`${grassi == "중간" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              중간
            </div>
            <div
              onClick={() => setGrassi("높음")}
              className={`${grassi == "높음" && "bg-white"}
             h-full rounded-2xl flex-1 flex justify-center items-center drop-shadow-md transition duration-200 ease-in-out`}
            >
              높음
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/diet/food?p=${purpose}&carb=${carb}&protein=${protein}&grassi=${grassi}`}
        replace
        className="w-full h-[80px] bg-[#18B491] text-white text-center pt-4"
      >
        다음으로
      </Link>
    </>
  );
}
