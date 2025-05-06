import Header from "../_components/Header";
import MapContent from "./_components/MapContent";

export default async function MapPage() {
  return (
    <>
      <div className="relative bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
        <Header title="" />
        <MapContent />
      </div>
    </>
  );
}
