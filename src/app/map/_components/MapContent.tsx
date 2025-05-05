"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import SearchResults from "./SearchResults";

export default function MapContent() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ["clusterer", "drawing", "services"],
  });

  const [lat, setLat] = useState<number>(37.566535);
  const [lng, setLng] = useState<number>(126.977969);
  //데이터를 가져와서 필터를 하고 필터에 따른 맵마커, 그 정보를 서치결과에 보내주기
  const [datas, setDatas] = useState([]);
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
        `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_OPENDATA_API_KEY}/json/facilities/1/10/`
      )
        .then((res) => res.json())
        .then((json) => json.facilities.row);
      setDatas(data);
    };

    getData();
  }, []);
  console.log(datas);
  const clickHandle = () => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(
      "서울특별시 구로구 오류로 36-25 50플러스 수영장",
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          const markers = [];

          for (let i = 0; i < data.length; i++) {
            markers.push({
              position: {
                lat: Number(data[i].y),
                lng: Number(data[i].x),
              },
              content: data[i].place_name,
            });

            setLat(Number(data[i].y));
            setLng(Number(data[i].x));

            bounds.extend(
              new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x))
            );
          }
          setMarkers(markers);
        }
      }
    );
    console.log(markers);
  };

  return (
    <div className="w-full h-full flex-1">
      <div className="w-full bg-white flex justify-around items-center">
        <div
          onClick={clickHandle}
          className="text-sm flex justify-center items-center flex-1 p-2 border-b-2"
        >
          공공체육시설
        </div>
        <div className="text-sm flex justify-center items-center flex-1 p-2">
          헬스장
        </div>
        <div className="text-sm flex justify-center items-center flex-1 p-2">
          산책로
        </div>
      </div>
      <Map center={{ lat: lat, lng: lng }} className="w-full h-full">
        {/* <MapMarker position={{ lat: lat, lng: lng }}></MapMarker> */}

        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <SearchResults datas={datas} />
    </div>
  );
}
