import Script from "next/script";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch(
    `http://openapi.seoul.go.kr:8088/${process.env.OPENDATA_API_KEY}/json/facilities/1/5/`
  )
    .then((res) => res.json())
    .then((json) => json.facilities.row);
  console.log(data);
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
