import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // .env.local에 넣어야 해
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "당신은 헬스 트레이너이자 영양사입니다. 사용자에게 운동 및 식단을 친절하게 조언해주세요.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = chat.choices[0].message?.content;
    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "문제가 발생했어요!" }, { status: 500 });
  }
}
