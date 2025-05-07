import Header from "@/app/_components/Header";
import InfoForm from "../_components/InfoForm";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="bg-white w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="bg-white w-full h-full flex flex-col items-center justify-around p-5">
        <InfoForm />
        <Link href="/" className="text-[#767676] text-sm mb-2">
          다음에 입력하기
        </Link>
      </div>
    </div>
  );
}
