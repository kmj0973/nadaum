import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
      strategy="beforeInteractive"/> */}
      {children}
    </>
  );
}
