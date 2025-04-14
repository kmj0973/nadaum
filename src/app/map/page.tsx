"use client";

import Image from "next/image";
import Header from "../_components/Header";
import photomap from "../../../public/images/photomap.png";
import { useState } from "react";

export default function MapPage() {
  const [navbarSlide, setNavbarSlide] = useState<boolean>(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("click");
    setNavbarSlide(!navbarSlide);
    console.log(navbarSlide);
  };

  return (
    <div className="relative bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[40px] bg-white flex justify-around items-center">
        <div className="text-sm flex justify-center items-center flex-1 p-2 border-b-2">
          공공체육시설
        </div>
        <div className="text-sm flex justify-center items-center flex-1 p-2">
          헬스장
        </div>
        <div className="text-sm flex justify-center items-center flex-1 p-2">
          산책로
        </div>
      </div>
      <div className="bg-white w-full h-full text-white">
        <Image
          src={photomap}
          alt="photomap"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div
        className={`fixed bottom-0 w-full max-w-[500px] h-[500px] bg-white/70 backdrop-blur-2xl rounded-t-xl flex flex-col justify-start items-center py-4 gap-4 transition-transform duration-300 ease-in-out ${
          navbarSlide ? "translate-y-0" : "translate-y-[90%]"
        }`}
      >
        <button
          onClick={handleClick}
          className="border-1 rounded-[50%] p-1 text-sm"
        >
          UP
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
    </div>
  );
}
