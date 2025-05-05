"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function SearchResults({ datas }: { datas: [] }) {
  const [navbarSlide, setNavbarSlide] = useState<boolean>(true);
  const locationRef = useRef(null);
  const exerciseRef = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setNavbarSlide(!navbarSlide);
  };

  return (
    <div
      className={`z-10 fixed bottom-0 w-full max-w-[500px] h-[500px] bg-white/70 backdrop-blur-2xl rounded-t-xl flex flex-col justify-start items-center py-4 gap-4 transition-transform duration-300 ease-in-out ${
        navbarSlide ? "translate-y-0" : "translate-y-[93%]"
      }`}
    >
      <button onClick={handleClick} className="cursor-pointer">
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl mb-1"></div>
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl"></div>
      </button>
      <div className="w-[90%] h-[50px] flex items-center gap-2">
        <select
          ref={locationRef}
          defaultValue="강남구"
          className="bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center text-center rounded-2xl"
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
        <select
          ref={exerciseRef}
          defaultValue="풋살장"
          className="text-center bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl"
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
        <button
          type="submit"
          onClick={() => {
            console.log(locationRef.current?.value);
            console.log(exerciseRef.current?.value);
          }}
          className="text-center bg-[#18B491] text-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl"
        >
          검색
        </button>
      </div>
      <div className="w-full flex flex-col items-center overflow-auto gap-5">
        {datas.map((data, index) => (
          <div
            key={index}
            className="bg-white w-[90%] h-[150px] rounded-md shrink-0 overflow-auto"
          >
            <Link
              href={data.FT_HOMEPAGE}
              className="inline-block ml-2 mt-2 font-semibold"
            >
              {data.FT_TITLE}
            </Link>
            <div className="ml-7 my-4 pr-5">
              <div className="text-[13px] font-medium">
                평일: {data.FT_WD_TIME}
              </div>
              <div className="text-[13px] font-medium">
                주말: {data.FT_WE_TIME}
              </div>
              <div className="text-[13px] font-medium">{data.FT_ADDR}</div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                  이용료 : {data.FT_MONEY == "" ? "무료" : data.FT_MONEY}
                </div>
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                  전화문의 : {data.FT_PHONE}
                </div>
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                  주차 : {data.FT_PARK}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white w-[90%] h-[150px] rounded-md shrink-0">
          <div className="m-4 font-semibold">동대문헬스장</div>
          <div className="ml-7 my-4">
            <div className="text-[13px] font-medium">월~일 00:00-24:00</div>
            <div className="text-[13px] font-medium">
              서울시 동대문구 동대문동
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                24시간 영업
              </div>
              <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                최저가
              </div>
              <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2">
                바보
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
