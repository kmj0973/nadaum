import Link from "next/link";
import Header from "../_components/Header";
import Answer from "./_components/Answer";

export default function DietPage() {
  return (
    <div className=" bg-white w-full h-screen flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <div className="bg-white w-full flex flex-col items-center justify-around flex-1">
        <Answer />
        <Link
          href="/diet/purpose"
          replace
          className=" w-full bg-[#18B491] text-white text-center p-4"
        >
          식단 만들기
        </Link>
      </div>
    </div>
  );
}
