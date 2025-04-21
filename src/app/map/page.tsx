"use client";

import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import Header from "../_components/Header";
import SearchResults from "./_components/SearchResults";

export default function MapPage() {
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
        <Map
          center={{ lat: 37.566535, lng: 126.977969 }}
          style={{ width: "100%", height: "100%" }}
        >
          <MarkerClusterer averageCenter={true} minLevel={10} />
        </Map>
        <SearchResults />
      </div>
    </>
  );
}
