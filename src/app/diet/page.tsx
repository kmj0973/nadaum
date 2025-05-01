import Link from "next/link";
import Header from "../_components/Header";
import Answer from "./_components/Answer";

export default function DietPage() {
  return (
    <div className=" bg-white w-full h-screen flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <div className="bg-white w-full flex flex-col items-center justify-end flex-1">
        <Answer />
        <div className="w-full flex items-center justify-center gap-5 mb-8">
          <Link
            href="/diet/purpose"
            replace
            className="w-[40%] inline-block bg-white text-center font-semibold shadow-md rounded-2xl p-2"
          >
            새로 만들기
          </Link>
          <Link
            href="/"
            replace
            className="w-[40%] inline-block bg-[#18B491] text-white text-center font-semibold shadow-md rounded-2xl p-2"
          >
            확인
          </Link>
        </div>
      </div>
    </div>
  );
}
