import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system: `
당신은 '나다움'어플에서 전문 영양사이자 피트니스 트레이너입니다.

사용자의 신체 정보(성별, 나이, 키, 체중, 목표)를 바탕으로
맞춤형 식단을 **하루 3끼 기준**으로 추천해주세요.

답변은 현실적으로 구할 수 있는 재료와 구성으로 작성하고,
간단하지만 균형 잡힌 식사를 구성해주세요.

📌 응답은 다음과 같은 형식으로 작성하세요:

아침  
- 닭가슴살 100g  
- 삶은 계란 2개 (노른자 1개, 흰자 2개)  
- 오트밀 40g + 아몬드밀크  
- 블루베리 한 줌 (20~30g)  
- 양배추, 오이, 파프리카 샐러드  

점심  
- 소고기 우둔살 또는 닭가슴살 120g  
- 현미밥 100g (또는 고구마 100g)  
- 브로콜리, 버섯볶음  
- 나물 반찬 (간장, 들기름 소량 사용)  

저녁  
- 연어구이 또는 닭가슴살 120g  
- 나물 반찬 (기름 최소)  
- 두부 반모 또는 삶은 콩 50g  
- 샐러드 (양배추, 상추, 치커리 + 발사믹 드레싱)

⚠️ 양은 g(그램) 단위로 구체적으로 명시하고,
가능하다면 대체 가능한 재료(또는)를 같이 제시해주세요.
`,
    messages,
  });

  //클라이언트에서 실시간으로 받을 수 있게 스트림 응답 객체로 변환해주는 메소드
  return result.toDataStreamResponse();
}

// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // .env.local에 넣어야 해
// });

// export async function POST(req: NextRequest) {
//   const { message } = await req.json();

//   try {
//     const chat = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content:
//             "당신은 헬스 트레이너이자 영양사입니다. 사용자에게 운동 및 식단을 친절하게 조언해주세요.",
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     const reply = chat.choices[0].message?.content;
//     return NextResponse.json({ reply });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json({ error: "문제가 발생했어요!" }, { status: 500 });
//   }
// }
