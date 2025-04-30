"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuthStore } from "@/hooks/useAuthStore";
import { db } from "../../../../firebase/firebasedb";

export default function Answer() {
  const [content, setContet] = useState<string | undefined>(undefined);
  const uid = useAuthStore((state) => state.uid);

  useEffect(() => {
    const getContent = async () => {
      if (!uid) return;
      const docSnap = await getDoc(doc(db, "users", uid));
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
    <div className="w-[90%] flex flex-col justify-center items-center py-5 overflow-y-auto flex-1">
      {content === undefined ? (
        <div className="text-[#b7b7b7]">아직 식단을 만들지 않았어요</div>
      ) : (
        <div className="whitespace-pre-line tablet:text-xl">{content}</div>
      )}
    </div>
  );
}
