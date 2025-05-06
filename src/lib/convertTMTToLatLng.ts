// lib/convertTMToLatLng.ts
import proj4 from "proj4";

// TM 중부 원점 (EPSG:2097) → WGS84 (EPSG:4326) 정의
const TM_MID =
  "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs";
const WGS84 = "+proj=longlat +datum=WGS84 +no_defs";

/**
 * TM 중부 좌표계 좌표를 WGS84 위도/경도로 변환합니다.
 * @param x TM 좌표계의 X값 (동쪽)
 * @param y TM 좌표계의 Y값 (북쪽)
 * @returns { lat: number, lng: number }
 */
export function convertTMToLatLng(
  x: number,
  y: number
): { lat: number; lng: number } {
  const [lng, lat] = proj4(TM_MID, WGS84, [x, y]);
  return { lat, lng };
}
