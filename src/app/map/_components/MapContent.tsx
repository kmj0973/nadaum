"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import SearchResults from "./SearchResults";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMapStore } from "@/hooks/useMapStore";

type datasType = {
  AR_CD_NAME: string;
  FT_KIND_NAME: string;
  FT_HOMEPAGE: string;
  FT_TITLE: string;
  FT_ADDR: string;
  FT_ADDR_DETAIL: string;
  FT_MONEY: string;
  FT_WD_TIME: string;
  FT_WE_TIME: string;
  FT_PHONE: string;
  FT_PARK: string;
};

export default function MapContent() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ["clusterer", "drawing", "services"],
  });

  const params = useSearchParams();
  const location = useMapStore((state) => state.location);
  const exercise = useMapStore((state) => state.exercise);
  const [lat, setLat] = useState<number>(37.566535);
  const [lng, setLng] = useState<number>(126.977969);
  //데이터를 가져와서 필터를 하고 필터에 따른 맵마커, 그 정보를 서치결과에 보내주기
  const [filteredDatas, setFilteredDatas] = useState<datasType[]>([]);
  const [datas, setDatas] = useState<datasType[]>([]);
  const [info, setInfo] = useState<{
    position: { lat: number; lng: number };
    content: string;
  }>();
  const [markers, setMarkers] = useState<
    {
      position: { lat: number; lng: number };
      content: string;
    }[]
  >([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);
    });

    const getData = async () => {
      const data = await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_OPENDATA_API_KEY}/json/facilities/1/800/`
      )
        .then((res) => res.json())
        .then((json) => json.facilities.row);
      setDatas(data);
    };

    getData();
    console.log("fetch");
  }, []);

  useEffect(() => {
    if (datas.length === 0) return;

    let filtered: datasType[] = [];

    filtered = datas.filter(
      (data) =>
        data.AR_CD_NAME + "구" === location && data.FT_KIND_NAME === exercise
    );

    setFilteredDatas(filtered);
  }, [datas, location, exercise]);

  const handleFilteredMarkers = () => {
    if (!filteredDatas.length) return;

    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers: typeof markers = [];

    // Promise.all로 모든 비동기 요청 처리
    Promise.all(
      filteredDatas.map((item) => {
        return new Promise<void>((resolve) => {
          ps.keywordSearch(item.FT_ADDR, (data, status) => {
            if (status === kakao.maps.services.Status.OK && data.length > 0) {
              const first = data[0];
              console.log(first);
              newMarkers.push({
                position: {
                  lat: Number(first.y),
                  lng: Number(first.x),
                },
                content: item.FT_TITLE,
              });

              bounds.extend(
                new kakao.maps.LatLng(Number(first.y), Number(first.x))
              );
            }
            resolve(); // 검색 완료 시 Promise 해제
          });
        });
      })
    ).then(() => {
      setMarkers(newMarkers);
      if (newMarkers.length > 0) {
        setLat(newMarkers[0].position.lat);
        setLng(newMarkers[0].position.lng);
      } else {
        alert("검색된 장소가 없습니다.");
      }
    });
  };

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full bg-white flex justify-around items-center">
        <Link
          href="/map?q=public"
          replace
          className={`text-sm flex justify-center items-center flex-1 p-2 ${
            params.get("q") === "public" && "border-b-2"
          }`}
        >
          공공체육시설
        </Link>
        <Link
          href="/map?q=gym"
          replace
          className={`text-sm flex justify-center items-center flex-1 p-2 ${
            params.get("q") === "gym" && "border-b-2"
          }`}
        >
          헬스장
        </Link>
        <Link
          href="/map?q=walking"
          replace
          className={`text-sm flex justify-center items-center flex-1 p-2 ${
            params.get("q") === "walking" && "border-b-2"
          }`}
        >
          산책로
        </Link>
      </div>
      <Map center={{ lat: lat, lng: lng }} className="w-full flex-1">
        <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div className="text-center text-sm">{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <SearchResults
        filteredDatas={filteredDatas}
        params={params.get("q")}
        onButtonClick={handleFilteredMarkers}
      />
    </div>
  );
}
