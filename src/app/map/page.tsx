"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import Header from "../_components/Header";
import SearchResults from "./_components/SearchResults";

export default function MapPage() {
  const[loading,error] = useKakaoLoader({
    appkey: "09c5187431487129ccfc232265096da4",
  });

  return (
    <>
      <div className="relative bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
        <Header title="" />
        <div className="w-full h-[40px] bg-white flex justify-around items-center">
          <div className="text-sm flex justify-center items-center flex-1 p-2 border-b-2">
            공공체육시설
          </div>
          <div className="text-sm flex justify-center items-center flex-1 p-2">
            헬스장
          </div>
          <div className="text-sm flex justify-center items-center flex-1 p-2">
            산책로
          </div>
        </div>
        {loading?<Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100%", height: "400px" }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: "#000" }}>Hello World!</div>
          </MapMarker>
        </Map>:null}
        <SearchResults />
      </div>
    </>
  );
}
