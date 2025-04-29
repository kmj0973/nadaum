import Link from "next/link";
import Header from "../_components/Header";
import Answer from "./_components/Answer";

export default function DietPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <Answer />
      <Link
        href="/diet/purpose"
        replace
        className="w-full h-[80px] bg-[#18B491] text-white text-center pt-4"
      >
        식단 만들기
      </Link>
    </div>
  );
}
