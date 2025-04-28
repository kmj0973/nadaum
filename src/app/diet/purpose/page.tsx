import Header from "@/app/_components/Header";
import SelectForm from "../_components/SelectForm";

export default function DietPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <div className="flex flex-col justify-center items-center gap-3 mb-2">
        <div className="font-semibold text-3xl">목적을 선택해주세요</div>
        <div className="text-[#676767] text-[12px]">
          원하는 목적으로 식단을 구성해드려요.
        </div>
      </div>
      <SelectForm />
    </div>
  );
}
