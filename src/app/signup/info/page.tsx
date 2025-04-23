import Header from "@/app/_components/Header";
import InfoForm from "../_components/InfoForm";

export default function InfoPage() {
  return (
    <div className="bg-white w-full min-h-[750px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-around">
        <InfoForm />
      </div>
    </div>
  );
}
