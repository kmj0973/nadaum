"use client";

import { useEffect, useState } from "react";
import BreakfastSvg from "../_svg/BreackfastSvg";
import DinnerSvg from "../_svg/DinnerSvg";
import LunchSvg from "../_svg/LunchSvg";
import { useAuthStore } from "@/hooks/useAuthStore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebasedb";
import Link from "next/link";

export default function DietCard() {
  const [diet, setDiet] = useState<string>("breakfast");
  const [content, setContet] = useState<string | undefined>(undefined);
  const [breakfast, setBreakfast] = useState<string>("");
  const [lunch, setLunch] = useState<string>("");
  const [dinner, setDinner] = useState<string>("");
  const uid = useAuthStore((state) => state.uid);

  const now = new Date();

  const dayIndex = now.getDay(); // 1 (월요일)
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = days[dayIndex];
  const month = now.getMonth() + 1;
  const day = now.getDate();

  useEffect(() => {
    const getContent = async () => {
      if (!uid) return;
      const docSnap = await getDoc(doc(db, "users", uid));
      setContet(docSnap.data()?.diet);

      if (docSnap.data()?.diet === undefined) return;
      const parts = docSnap
        .data()
        ?.diet.split(/(아침|점심|저녁|총 칼로리)/g)
        .map((p: string) => p.trim())
        .filter(Boolean);
      setBreakfast(parts[1].replace(/\([^)]*\)/g, "").trim());
      setLunch(parts[3].replace(/\([^)]*\)/g, "").trim());
      setDinner(parts[5].replace(/\([^)]*\)/g, "").trim());
    };
    getContent();
  }, [uid]);

  return (
    <div
      className={`relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px] flex justify-center transition-colors duration-300 ease-in-out ${
        diet == "breakfast"
          ? "bg-[#3AA5D3]"
          : diet == "lunch"
          ? "bg-[#EF9400]"
          : "bg-[#2061A3]"
      }`}
    >
      <div className="flex-1 flex flex-col h-full justify-around py-4 pl-3 tablet:py-5 tablet:pl-5 gap-2">
        <div className="text-[32px]/9 tablet:text-4xl font-bold text-white">
          <div>
            {month}월 {day}일
          </div>
          <div>{dayName}요일</div>
        </div>
        <div className="flex">
          <div
            onClick={() => setDiet("breakfast")}
            className={`${
              diet !== "breakfast" && "hover:scale-150 duration-200"
            }`}
          >
            <BreakfastSvg diet={diet} />
          </div>
          <div
            onClick={() => setDiet("lunch")}
            className={`${diet !== "lunch" && "hover:scale-150 duration-200"}`}
          >
            <LunchSvg diet={diet} />
          </div>
          <div
            onClick={() => setDiet("dinner")}
            className={`${diet !== "dinner" && "hover:scale-150 duration-200"}`}
          >
            <DinnerSvg diet={diet} />
          </div>
        </div>
      </div>
      <Link
        href="/diet"
        className="flex-1 flex justify-center items-center overflow-y-auto whitespace-pre-line text-white text-[14px] tablet:text-[15px] font-semibold p-2"
      >
        {content === undefined
          ? "식단을 만들어주세요!"
          : diet === "breakfast"
          ? breakfast
          : diet === "lunch"
          ? lunch
          : dinner}
      </Link>
    </div>
  );
}
