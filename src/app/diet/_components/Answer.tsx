"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuthStore } from "@/hooks/useAuthStore";
import { db } from "../../../../firebase/firebasedb";
import EachDietCard from "./EachDietCard";

export default function Answer() {
  const [content, setContet] = useState<string | undefined>(undefined);
  const uid = useAuthStore((state) => state.uid);

  useEffect(() => {
    const getContent = async () => {
      if (!uid) return;
      const docSnap = await getDoc(doc(db, "users", uid));

      if (!docSnap.data()?.diet) return;
      setContet(
        docSnap
          .data()
          ?.diet.split(/(아침|점심|저녁|총 칼로리)/g)
          .map((p: string) => p.trim())
          .filter(Boolean)
      );
    };
    getContent();
  }, [uid]);
  console.log(content);
  return (
    <div className="w-[90%] flex flex-col justify-center items-center py-5 flex-1 gap-5">
      {content === undefined ? (
        <div className="text-[#b7b7b7]">아직 식단을 만들지 않았어요</div>
      ) : (
        <>
          <EachDietCard time={content[0]} content={content[1]} />
          <EachDietCard time={content[2]} content={content[3]} />
          <EachDietCard time={content[4]} content={content[5]} />
          <div className="text-[#676767] text-sm tablet:text-lg flex items-center gap-2 py-3">
            총 칼로리
            <span className="font-extrabold text-3xl tablet:text-4xl text-[#18B491]">
              {content != "" && content[7].slice(2, 13)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
