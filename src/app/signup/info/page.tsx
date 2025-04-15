import Header from "@/app/_components/Header";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="bg-white w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-around">
        <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5">
          <div className="w-full text-4xl tablet:text-[40px] font-semibold mb-10">
            내 정보 입력하기
          </div>
          <form className="w-full flex flex-col gap-10 mb-6 font-light text-[#767676]">
            <div>
              <div className="mb-4">성별</div>
              <div className="bg-[#F1F1F5] w-full h-[55px] rounded-2xl flex items-center justify-center py-1 gap-1">
                <div className="bg-white h-full rounded-2xl flex-1 flex justify-center items-center ml-1 drop-shadow-md">
                  남자
                </div>
                <div className="h-full rounded-2xl flex-1 flex justify-center items-center mr-1 drop-shadow-md">
                  여자
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2">
                나이(출생연도)
              </label>
              <input
                id="age"
                className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
                type="number"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2">
                키(cm)
              </label>
              <input
                id="height"
                className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="weight" className="mb-2">
                몸무게(kg)
              </label>
              <input
                id="weight"
                className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-black text-sm tablet:text-base"
                type="number"
              />
            </div>
            <button className="rounded-sm bg-[#18B491] mt-15 py-3 text-white text-sm tablet:text-base">
              입력하기
            </button>
          </form>
          <Link href="/" className="text-[#767676] text-sm">
            다음에 입력하기
          </Link>
        </div>
      </div>
    </div>
  );
}
