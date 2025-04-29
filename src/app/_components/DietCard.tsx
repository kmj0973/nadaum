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
      className={`relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px] flex transition-colors duration-300 ease-in-out ${
        diet == "breakfast"
          ? "bg-[#3AA5D3]"
          : diet == "lunch"
          ? "bg-[#EF9400]"
          : "bg-[#2061A3]"
      }`}
    >
      <div className="flex flex-col h-full justify-around py-4 pl-3 gap-2">
        <div className="text-[32px]/9 font-bold text-white">
          <div>04월 25일</div>
          <div>금요일</div>
        </div>
        <div className="flex">
          <div onClick={() => setDiet("breakfast")} className="">
            <BreakfastSvg diet={diet} />
          </div>
          <div onClick={() => setDiet("lunch")}>
            <LunchSvg diet={diet} />
          </div>
          <div onClick={() => setDiet("dinner")}>
            <DinnerSvg diet={diet} />
          </div>
        </div>
      </div>
      <Link
        href="/diet"
        className="flex-1 flex justify-center items-center overflow-scroll whitespace-pre-line text-white text-[14px] font-semibold p-2"
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
