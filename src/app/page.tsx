import Image from "next/image";
import photomap from "../../public/images/photomap.png";
import Navbar from "./_components/Navbar";
import Link from "next/link";
import CardSlider from "./_components/CardSlider";
import HealthSvg from "./_svg/HealthSvg";
import AiSvg from "./_svg/AiSvg";
import DietSvg from "./_svg/DietSvg";
import DietCard from "./_components/DietCard";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <div className="bg-white w-full flex flex-col items-center gap-5 py-5 pb-[66px]">
        <DietCard />
        <div className="rounded-xl shadow-md w-[90%] h-[466px] tablet:h-[540px] flex flex-col items-center justify-center gap-4">
          <div className="w-[85%] text-xl tablet:text-2xl font-bold mb-3">
            나다운 모습 가꾸기
          </div>
          <Link
            href="/chatbot"
            className="bg-[#F8F8F8] flex justify-between rounded-2xl drop-shadow-lg w-[85%] h-[100px] tablet:h-[120px] cursor-pointer"
          >
            <div>
              <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
                캐릭터 챗봇 AI
              </div>
              <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
                나만의 PT 선생님 만들기
              </div>
            </div>
            <AiSvg />
          </Link>
          <Link
            href="/map?q=gym"
            className="bg-[#F8F8F8] flex justify-between rounded-2xl drop-shadow-lg w-[85%] h-[100px] tablet:h-[120px] cursor-pointer"
          >
            <div>
              <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
                동네 헬스장 찾기
              </div>
              <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
                운동이 쉬워지는 첫걸음
              </div>
            </div>
            <HealthSvg />
          </Link>
          <Link
            href="/diet"
            className="bg-[#F8F8F8] flex justify-between rounded-2xl drop-shadow-lg w-[85%] h-[100px] tablet:h-[120px] cursor-pointer"
          >
            <div>
              <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
                나만의 식단 추천
              </div>
              <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
                내 취향대로, 내 입맛대로
              </div>
            </div>
            <DietSvg />
          </Link>
        </div>
        <div className="bg-[#18B491] rounded-xl shadow-md w-[90%] h-[564px] tablet:h-[670px] flex flex-col items-center justify-center gap-5 tablet:gap-7 p-4">
          <div>
            <div className="text-white text-2xl tablet:text-3xl font-semibold text-center mb-2 tablet:mb-4">
              근처 체육시설을
              <br />
              간편하게 찾아보세요
            </div>
            <div className="text-[#EEEEEE] text-[13px] tablet:text-[16px] text-center">
              카카오맵 지도 연동 시스템을 사용하여
              <br />
              쉽게 찾을 수 있습니다
            </div>
          </div>

          <Link
            href="/map?q=public"
            className="w-full max-w-[240px] tablet:max-w-[280px] relative"
          >
            <Image
              src={photomap}
              alt="photomap"
              sizes="100vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className="absolute top-0 w-full h-full max-h-[280px] bg-black/30 rounded-xl"></div>
          </Link>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="text-white tablet:text-lg mb-2 tablet:mb-4">
              원하는 지역을 찾아보세요
            </div>
            <Link href="/map?q=public" className="cursor-pointer">
              <div className="bg-white/15 hover:bg-white/40 animate-color duration-200 text-white flex justify-center items-center border-1 border-white rounded-2xl tablet:text-lg w-[120px] tablet:w-[140px] h-[36px] tablet:h-[40px]">
                검색하기
              </div>
            </Link>
          </div>
        </div>
        <CardSlider />
      </div>
      <Navbar />
    </div>
  );
}
