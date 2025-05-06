export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_OPENDATA_API_KEY;
  const apiUrl = `http://openapi.seoul.go.kr:8088/${apiKey}/json/facilities/1/800/`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("API 요청 실패:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
