"use client";

import { useState } from "react";

export default function SearchResults() {
  const [navbarSlide, setNavbarSlide] = useState<boolean>(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("click");
    setNavbarSlide(!navbarSlide);
    console.log(navbarSlide);
  };

  return (
    <div
      className={`fixed bottom-0 w-full max-w-[500px] h-[500px] bg-white/70 backdrop-blur-2xl rounded-t-xl flex flex-col justify-start items-center py-4 gap-4 transition-transform duration-300 ease-in-out ${
        navbarSlide ? "translate-y-0" : "translate-y-[93%]"
      }`}
    >
      <button onClick={handleClick}>
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl mb-1"></div>
        <div className="w-[100px] h-[1px] bg-[#b7b7b7] rounded-2xl"></div>
      </button>
      <div className="w-[90%] h-[50px] flex items-center gap-2">
        <div className="bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl">
          종목별 &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M7.00033 1.08325L4.08366 5.08325L1.16699 1.08325"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="bg-white w-[78px] h-[27px] text-[12px] drop-shadow-sm flex justify-center items-center rounded-2xl">
          예약순 &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M7.00033 1.08325L4.08366 5.08325L1.16699 1.08325"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex flex-col items-center overflow-auto gap-5">
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
