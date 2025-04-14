import Image from "next/image";
import photomap from "../../public/images/photomap.png";
import Navbar from "./_components/Navbar";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <div className="bg-white w-full flex flex-col items-center gap-5 py-5 pb-[66px]">
        <div className="relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]">
          <div className="text-[16px] tablet:text-lg font-bold mt-5 ml-5">
            내 근처 공공시설 찾기
          </div>
          <div className="absolute bottom-3 right-5 text-[13px] text-[#767676] ">
            더 알아보기 {">"}
          </div>
        </div>
        <div className="rounded-xl shadow-md w-[90%] h-[466px] tablet:h-[540px] flex flex-col items-center justify-center gap-4">
          <div className="w-[85%] text-xl tablet:text-2xl font-bold mb-3">
            나다운 모습 가꾸기
          </div>
          <div className="bg-[#F8F8F8] rounded-2xl w-[85%] h-[100px] tablet:h-[120px]">
            <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
              캐릭터 챗봇 AI
            </div>
            <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
              나만의 PT 선생님 만들기
            </div>
          </div>
          <div className="bg-[#F8F8F8] rounded-2xl w-[85%] h-[100px] tablet:h-[120px]">
            <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
              산책로 경로 추천
            </div>
            <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
              나만의 야외 코스 만들기
            </div>
          </div>
          <div className="bg-[#F8F8F8] rounded-2xl w-[85%] h-[100px] tablet:h-[120px]">
            <div className="text-[16px] tablet:text-xl font-semibold mt-5 ml-5">
              동네 헬스장 찾기
            </div>
            <div className="text-[13px] tablet:text-base text-[#767676] font-normal ml-5">
              운동이 쉬워지는 첫걸음
            </div>
          </div>
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

          <div className="w-full max-w-[240px] tablet:max-w-[280px]">
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
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="text-white tablet:text-lg mb-2 tablet:mb-4">
              원하는 지역을 찾아보세요
            </div>
            <button className="bg-white/15 text-white border-1 border-white rounded-2xl tablet:text-lg w-[120px] tablet:w-[140px] h-[36px] tablet:h-[40px]">
              검색하기
            </button>
          </div>
        </div>
        <div className="w-[90%] flex justify-between items-center">
          <div className="font-semibold rounded-xl shadow-md w-[48%] h-[140px] tablet:h-[200px] p-2">
            출석체크
          </div>
          <div className="font-semibold rounded-xl shadow-md w-[48%] h-[140px] tablet:h-[200px] p-2">
            운동기록
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
