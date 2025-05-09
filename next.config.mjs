import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public", // service worker와 manifest.json이 생성될 위치 설정
  disable: process.env.NODE_ENV === "development", // 개발 환경에서는 PWA 비활성화
  register: true,
  skipWaiting: true,
  swcMinify: true,
  buildExcludes: [/middleware-manifest\.json$/], // 일부 캐시 제외
});

export default nextConfig;
