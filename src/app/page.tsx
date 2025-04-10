export default function HomePage() {
  return (
    <div className="w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <div className="bg-white w-full flex flex-col items-center gap-5 py-5">
        <div className="relative rounded-xl shadow-md w-[90%] h-[166px] tablet:h-[186px]">
          <div className="text-lg font-bold mt-5 ml-5">
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
      </div>
    </div>
  );
}
