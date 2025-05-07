"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import SearchResults from "./SearchResults";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMapStore } from "@/hooks/useMapStore";
import { datasType } from "../_types/types";

export default function MapContent() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ["clusterer", "drawing", "services"],
  });

  const params = useSearchParams().get("q");
  const location = useMapStore((state) => state.location);
  const exercise = useMapStore((state) => state.exercise);
  const lat = useMapStore((state) => state.lat);
  const lng = useMapStore((state) => state.lng);
  const setLat = useMapStore((state) => state.setLat);
  const setLng = useMapStore((state) => state.setLng);
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
  /**
   * @returns 데이터 fetch 훅
   */
  useEffect(() => {
    const fetchFacilitiesData = async () => {
      try {
        const res = await fetch(`/api/facilities`);
        const json = await res.json();
        const rows: datasType[] = json.facilities.row;

        setDatas(rows);
      } catch (err) {
        console.error("공공데이터 요청 실패:", err);
      }
    };
    const fetchGymData = async () => {
      try {
        const res = await fetch(`/api/gym`);
        const json = await res.json();
        const rows: datasType[] = json.LOCALDATA_104201.row;

        setDatas(rows);
      } catch (err) {
        console.error("공공데이터 요청 실패:", err);
      }
    };
    if (params === "public") fetchFacilitiesData();
    else if (params === "gym") fetchGymData();
  }, [params]);

  //fetch data 필터링 훅
  useEffect(() => {
    if (!datas.length || !location || !exercise) return;
    let filtered: datasType[] = [];

    if (params === "public") {
      filtered = datas.filter(
        (data) =>
          data.AR_CD_NAME + "구" === location && data.FT_KIND_NAME === exercise
      );
    } else if (params === "gym") {
      filtered = datas.filter((data) => {
        const addressParts = data.RDNWHLADDR?.split(" ");
        const district =
          addressParts && addressParts.length >= 2 ? addressParts[1] : "";
        return district === location && data.DTLSTATENM == "영업중";
      });
    }

    setFilteredDatas(filtered);
  }, [params, datas, location, exercise]);

  /**
   *
   * @returns 헬스장 마커 생성 핸들러
   */
  const handleGymFilteredMarkers = () => {
    if (!filteredDatas.length) return;

    const geocoder = new kakao.maps.services.Geocoder();
    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers: typeof markers = [];

    Promise.all(
      filteredDatas.map((item) => {
        return new Promise<void>((resolve) => {
          geocoder.addressSearch(item.RDNWHLADDR || "", (result, status) => {
            if (status === kakao.maps.services.Status.OK && result.length > 0) {
              const { x, y } = result[0];

              newMarkers.push({
                position: {
                  lat: Number(y),
                  lng: Number(x),
                },
                content: item.BPLCNM,
              });

              bounds.extend(new kakao.maps.LatLng(Number(y), Number(x)));
            }
            resolve();
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

  /**
   *
   * @returns 공공체육시설 마커 생성 핸들러
   */
  const handleFilteredMarkers = () => {
    if (!filteredDatas.length) return;

    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers: typeof markers = [];

    // Promise.all로 모든 비동기 요청 처리
    Promise.all(
      filteredDatas.map((item) => {
        return new Promise<void>((resolve) => {
          ps.keywordSearch(item.FT_ADDR || item.BPLCNM, (data, status) => {
            if (status === kakao.maps.services.Status.OK && data.length > 0) {
              const first = data[0];

              newMarkers.push({
                position: {
                  lat: Number(first.y),
                  lng: Number(first.x),
                },
                content: item.FT_TITLE || item.BPLCNM,
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
            params === "public" && "border-b-2"
          }`}
        >
          공공체육시설
        </Link>
        <Link
          href="/map?q=gym"
          replace
          className={`text-sm flex justify-center items-center flex-1 p-2 ${
            params === "gym" && "border-b-2"
          }`}
        >
          헬스장
        </Link>
        {/* <Link
          href="/map?q=walking"
          replace
          className={`text-sm flex justify-center items-center flex-1 p-2 ${
            params === "walking" && "border-b-2"
          }`}
        >
          산책로
        </Link> */}
      </div>
      <Map center={{ lat: lat, lng: lng }} className="w-full flex-1">
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
        params={params}
        onButtonClick={
          params === "public" ? handleFilteredMarkers : handleGymFilteredMarkers
        }
      />
    </div>
  );
}
