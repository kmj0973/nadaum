"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

type publcData = {
  MAIN_IMG: string;
  ORG_LINK: string;
};

export default function CardSlider() {
  const [publicData, setPublicData] = useState<publcData[]>([]);

  useEffect(() => {
    const getPublicData = async () => {
      try {
        const res = await fetch(
          `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_OPENDATA_API_KEY}/json/culturalEventInfo/1/5/`
        );
        const json = await res.json();
        setPublicData(json.culturalEventInfo.row); // 여기서 제대로 확인됨
      } catch (err) {
        console.error("공공데이터 요청 실패:", err);
      }
    };

    getPublicData();
  }, []);

  console.log(publicData);
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
      {publicData.map((data, index) => (
        <SwiperSlide
          key={index}
          className={`relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px] bg-cover`}
          style={{
            backgroundImage: `url(${data.MAIN_IMG})`,
          }}
        >
          <div className="w-full h-full bg-black/20"></div>
          <Link
            href={data.ORG_LINK}
            className="absolute bottom-6 right-5 font-bold text-[13px] text-white "
          >
            더 알아보기 {">"}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
