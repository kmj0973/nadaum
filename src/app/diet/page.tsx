"use client";

import Link from "next/link";
import Header from "../_components/Header";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebasedb";
import { useAuthStore } from "@/hooks/useAuthStore";

export default function DietPage() {
  const [content, setContet] = useState<string | undefined>(undefined);
  const uid = useAuthStore((state) => state.uid);
  useEffect(() => {
    const getContent = async () => {
      if (!uid) return;
      const docSnap = await getDoc(doc(db, "users", uid));
      setContet(docSnap.data()?.diet);
    };
    getContent();
  }, [uid]);

  console.log(content);
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto gap-5">
      <Header title="오늘의 식단" />
      <div className="w-[90%] flex flex-col justify-center items-center py-5 overflow-y-auto flex-1">
        {content === undefined ? (
          <div className="text-[#b7b7b7]">아직 식단을 만들지 않았어요</div>
        ) : (
          <div className="whitespace-pre-line">{content}</div>
        )}
      </div>
      <Link
        href="/diet/purpose"
        replace
        className="w-full h-[80px] bg-[#18B491] text-white text-center pt-4"
      >
        식단 만들기
      </Link>
    </div>
  );
}
