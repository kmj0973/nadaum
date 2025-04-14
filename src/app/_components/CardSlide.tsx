"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CardSlide() {
  return (
    <Swiper
      className="custom-swiper-pagination relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]"
      modules={[Autoplay, Pagination]}
      loop={true}
      spaceBetween={10} // 슬라이스 사이 간격
      slidesPerView={1} // 보여질 슬라이스 수
      pagination={{ clickable: true }}
      speed={500}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
      }}
    >
      <SwiperSlide className="relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]">
        <div className="text-[16px] tablet:text-lg font-bold mt-5 ml-5">
          내 근처 공공운동시설 찾기
        </div>
        <Link
          href="/map?q=public"
          className="absolute bottom-6 right-5 text-[13px] text-[#767676] "
        >
          더 알아보기 {">"}
        </Link>
      </SwiperSlide>
      <SwiperSlide className="relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]">
        <div className="text-[16px] tablet:text-lg font-bold mt-5 ml-5">
          내 근처 헬스장 찾기
        </div>
        <Link
          href="/map?q=gym"
          className="absolute bottom-6 right-5 text-[13px] text-[#767676] "
        >
          더 알아보기 {">"}
        </Link>
      </SwiperSlide>
      <SwiperSlide className="relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]">
        <div className="text-[16px] tablet:text-lg font-bold mt-5 ml-5">
          내 근처 산책로 찾기
        </div>
        <Link
          href="/map?q=walking"
          className="absolute bottom-6 right-5 text-[13px] text-[#767676]"
        >
          더 알아보기 {">"}
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
