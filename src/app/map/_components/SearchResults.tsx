"use client";

import { useMapStore } from "@/hooks/useMapStore";
import { useState } from "react";
import { datasType } from "../_types/types";
import FacilitiesCard from "./FacilitiesCard";
import GymCard from "./GymCard";

export default function SearchResults({
  filteredDatas,
  params,
  onButtonClick,
}: {
  filteredDatas: datasType[];
  params: string | null;
  onButtonClick: () => void;
}) {
  const [navbarSlide, setNavbarSlide] = useState<boolean>(true);
  const location = useMapStore((state) => state.location);
  const exercise = useMapStore((state) => state.exercise);
  const setLocation = useMapStore((state) => state.setLocation);
  const setExercise = useMapStore((state) => state.setExercise);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setNavbarSlide(!navbarSlide);
  };

  return (
    <div
      className={`z-10 fixed bottom-0 w-full max-w-[500px] h-[370px] tablet:h-[450px] bg-white/70 backdrop-blur-2xl rounded-t-xl flex flex-col justify-start items-center py-4 gap-4 transition-transform duration-300 ease-in-out ${
        navbarSlide
          ? "translate-y-0"
          : "translate-y-[85%] tablet:translate-y-[88%]"
      }`}
    >
      <button onClick={handleClick} className="cursor-pointer  pt-2">
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl mb-1"></div>
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl"></div>
      </button>
      <div className="w-[90%] h-[50px] flex items-center justify-between">
        <div className="flex gap-2">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setLocation(e.target.value);
            }}
            value={location}
            className="text-center font-semibold bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl"
          >
            <option value="강남구">강남구</option>
            <option value="강동구">강동구</option>
            <option value="강북구">강북구</option>
            <option value="강서구">강서구</option>
            <option value="관악구">관악구</option>
            <option value="광진구">광진구</option>
            <option value="구로구">구로구</option>
            <option value="금천구">금천구</option>
            <option value="노원구">노원구</option>
            <option value="도봉구">도봉구</option>
            <option value="동대문구">동대문구</option>
            <option value="동작구">동작구</option>
            <option value="마포구">마포구</option>
            <option value="서대문구">서대문구</option>
            <option value="서초구">서초구</option>
            <option value="성동구">성동구</option>
            <option value="성북구">성북구</option>
            <option value="송파구">송파구</option>
            <option value="양천구">양천구</option>
            <option value="영등포구">영등포구</option>
            <option value="용산구">용산구</option>
            <option value="은평구">은평구</option>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
            <option value="중랑구">중랑구</option>
          </select>
          {params === "public" && (
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setExercise(e.target.value);
              }}
              value={exercise}
              className="text-center font-semibold bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl"
            >
              <option value="풋살장">풋살장</option>
              <option value="축구장">축구장</option>
              <option value="테니스장">테니스장</option>
              <option value="족구장">족구장</option>
              <option value="야구장">야구장</option>
              <option value="수영장">수영장</option>
              <option value="생활체육관">생활체육관</option>
              <option value="배드민턴장">배드민턴장</option>
              <option value="배구장">배구장</option>
              <option value="농구장">농구장</option>
              <option value="골프연습장">골프연습장</option>
            </select>
          )}
        </div>
        <button
          onClick={onButtonClick}
          className="text-center bg-[#18B491] text-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl"
        >
          검색
        </button>
      </div>
      {params === "public" ? (
        <FacilitiesCard filteredDatas={filteredDatas} />
      ) : (
        <GymCard filteredDatas={filteredDatas} />
      )}
    </div>
  );
}
