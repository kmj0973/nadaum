import Header from "../_components/Header";
import MapContent from "./_components/MapContent";

export default async function MapPage() {
  // const data = await fetch(
  //   `http://openapi.seoul.go.kr:8088/${process.env.OPENDATA_API_KEY}/json/facilities/1/5/`
  // )
  //   .then((res) => res.json())
  //   .then((json) => json.facilities.row);
  // console.log(data);
  return (
    <>
      <div className="relative bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
        <Header title="" />
        <MapContent />
      </div>
    </>
  );
}
