"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import meats from "@/../public/images/meats.jpg";
import fishes from "@/../public/images/fishes.jpg";
import fruits from "@/../public/images/fruits.jpg";
import milks from "@/../public/images/milks.jpg";
import nuts from "@/../public/images/nuts.jpg";
import vegetables from "@/../public/images/vegetables.jpg";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { useAuthStore } from "@/hooks/useAuthStore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebasedb";

export default function DietPage() {
  const params = useSearchParams();
  const router = useRouter();

  const uid = useAuthStore((state) => state.uid);
  const { append, status } = useChat({
    onFinish: async (message) => {
      if (uid) {
        await updateDoc(doc(db, "users", uid), {
          diet: message.content,
        });
      }
    },
  });
  const [food, setFood] = useState<string | null>(null);
  const [info, setInfo] = useState<{
    age: number;
    gender: string;
    height: number;
    weight: number;
  }>({ age: 0, gender: "", height: 0, weight: 0 });

  useEffect(() => {
    const getInfo = async () => {
      if (uid) {
        const docSnap = await getDoc(doc(db, "users", uid));
        if (docSnap.data) {
          const age = docSnap.data()?.age;
          const gender = docSnap.data()?.gender;
          const height = docSnap.data()?.height;
          const weight = docSnap.data()?.weight;
          setInfo({ age, gender, height, weight });
        }
      }
    };
    getInfo();
  }, [uid]);

  const handleRequestDiet = async () => {
    if (!params) return;
    const purpose = params.get("p");
    const carb = params.get("carb");
    const protein = params.get("protein");
    const grassi = params.get("grassi");

    await append({
      role: "user",
      content: `
당신은 전문 영양사입니다.

목표: 사용자의 신체 정보(성별:${info.gender}, 나이:만${2025 - info.age}세, 키:${
        info.height
      }cm, 몸무게:${
        info.weight
      }kg)를 바탕으로 ${purpose}을 위한 식단을 작성해주세요.
포함할 음식 카테고리: ${food} 중심으로 식사를 구성하세요.
탄수화물, 단백질, 지방의 함량 수준은 "낮음", "중간", "높음" 으로 구분합니다.
- 탄수화물: ${carb}
- 단백질: ${protein}
- 지방: ${grassi}

아침, 점심, 저녁으로 구분해서 제시하며, 다음 형식을 지켜주세요:

- 주요 단백질원 (닭가슴살, 소고기, 연어 등)과 정확한 g 수
- 탄수화물원 (현미밥, 고구마 등)과 g 수
- 채소, 과일 종류와 간단한 양 (예: 블루베리 한 줌)
- 부재료(나물반찬, 아몬드밀크 등) 추가 가능
- 조리 방법은 간단히 (삶기, 굽기 등) 설명
- 기름, 소금 사용은 최소화

답변은 다음 예시 형식처럼 깔끔하게 해주세요:

아침
• 닭가슴살 100g
• 삶은 계란 2개 (노른자 1개, 흰자 2개)
• 오트밀 40g + 아몬드밀크
• 블루베리 한 줌 (20~30g)
• 양배추, 오이, 파프리카 샐러드

점심
• 소고기 우둔살 120g (또는 닭가슴살)
• 현미밥 100g (또는 고구마 100g)
• 브로콜리, 버섯볶음
• 나물 반찬 (간장, 들기름 소량)

저녁
• 연어구이 120g (또는 닭가슴살)
• 나물 반찬 (기름 최소)
• 두부 반모 (또는 삶은 콩 50g)
• 샐러드 (양배추, 상추, 치커리 + 발사믹 드레싱)

총 칼로리: 1800kcal
`,
    });

    router.replace("/diet");
  };

  return (
    <div className="relative bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <div className="flex flex-col justify-center items-center gap-3 mb-2">
        <div className="font-semibold text-3xl tablet:text-4xl text-center">
          먹고싶은 음식을
          <br />
          선택해주세요
        </div>
        <div className="text-[#676767] text-[12px] tablet:text-base">
          원하는 음식으로 식단을 구성해드려요.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 tablet:gap-5 items-start mx-5">
        <div
          onClick={() => setFood("육류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={meats}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "육류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">육류</div>
        </div>
        <div
          onClick={() => setFood("수산물류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={fishes}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "수산물류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">수산물류</div>
        </div>
        <div
          onClick={() => setFood("유제품류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={milks}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "유제품류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">유제품류</div>
        </div>

        <div
          onClick={() => setFood("채소류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={vegetables}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "채소류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">채소류</div>
        </div>
        <div
          onClick={() => setFood("과일류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={fruits}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "과일류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">과일류</div>
        </div>
        <div
          onClick={() => setFood("곡류/견과류")}
          className="flex flex-col justify-center items-center text-sm tablet:text-base gap-1 cursor-pointer"
        >
          <div className="w-[100px] h-[100px] tablet:w-[120px] tablet:h-[120px] rounded-[50%] overflow-hidden relative">
            <Image
              className="object-cover"
              src={nuts}
              fill
              alt="https://www.freepik.com/free-photo/close-up-spoons-bowls-with-nuts_2278043.htm"
            />
            {food == "곡류/견과류" ? (
              <div className="absolute w-full h-full bg-black/50 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tablet:absolute tablet:top-2"
                  width="33"
                  height="59"
                  viewBox="0 0 33 59"
                  fill="none"
                >
                  <path
                    d="M10 53.5277L15.1219 57.8154L23.75 50.5889"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="font-medium">곡류/견과류</div>
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center">
        <a
          className="text-[12px] text-[#b7b7b7]"
          href="https://www.freepik.com/free-photo/top-view-meat-with-garlic-herbs_9263566.htm"
        >
          이미지 출처 freepik
        </a>
        <button
          onClick={handleRequestDiet}
          className={`absolute bottom-0 cursor-pointer w-full max-w-[500px] bg-[#18B491] text-white text-center transition-all duration-300 ease-in-out   ${
            food === null ? "h-0" : "h-[80px] pb-5"
          }`}
        >
          {food === null ? null : status != "ready" ? (
            <div className="text-white animate-pulse">답변 생성중...</div>
          ) : (
            <div className="">완료</div>
          )}
        </button>
      </div>
    </div>
  );
}
