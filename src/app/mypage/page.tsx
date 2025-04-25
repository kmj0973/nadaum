import Info from "./_components/Info";
import Header from "../_components/Header";

export default function MyPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="마이페이지" />
      <Info />
    </div>
  );
}
