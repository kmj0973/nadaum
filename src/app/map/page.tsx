"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../_components/Header";
import SearchResults from "./_components/SearchResults";
import { useEffect, useState } from "react";

export default function MapPage() {
  const [lat, setLat] = useState<number>(37.566535);
  const [lng, setLng] = useState<number>(126.977969);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);
    });
  }, []);

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
          center={{ lat: lat, lng: lng }}
          style={{ width: "100%", height: "100%" }}
        >
          <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
        </Map>
        <SearchResults />
      </div>
    </>
  );
}
