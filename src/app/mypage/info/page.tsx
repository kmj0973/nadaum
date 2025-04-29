import Header from "@/app/_components/Header";
import Link from "next/link";
import InfoForm from "../_components/InfoForm";

export default function InfoPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-screen flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="bg-white w-full h-full flex flex-col items-center justify-around">
        <InfoForm />
      </div>
      <Link href="/mypage" className="text-[#767676] text-sm mb-2">
        다음에 입력하기
      </Link>
    </div>
  );
}
