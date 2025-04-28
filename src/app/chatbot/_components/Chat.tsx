"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useChat } from "@ai-sdk/react";
import Header from "@/app/_components/Header";
import Comment from "./Comment";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebasedb";
import { useAuthStore } from "@/hooks/useAuthStore";

type CommentType = {
  id: string;
  role: string;
  content: string;
};

export default function Chat() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [conversations, setConversations] = useState<Array<CommentType>>([]);
  const uid = useAuthStore((state) => state.uid);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    onFinish: async (message) => {
      const userId = uuidv4();
      if (uid)
        await updateDoc(doc(db, "users", uid), {
          conversations: arrayUnion(
            {
              id: userId,
              role: "user",
              content: input,
            },
            {
              id: message.id,
              role: message.role,
              content: message.content,
            }
          ),
        });
    },
  });

  useEffect(() => {
    const getConversations = async () => {
      if (uid) {
        const docSnap = await getDoc(doc(db, "users", uid));

        if (docSnap.exists()) {
          setConversations(docSnap.data().conversations);
        }
      }
    };
    getConversations();
  }, [uid]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, conversations]);

  return (
    <>
      <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
        <Header title="AI 챗봇" />
        {/* 채팅 영역 */}
        <div className="w-[90%] flex flex-col gap-8 py-5 mt-5 overflow-y-auto flex-1">
          {conversations &&
            conversations.map((message) => (
              <Comment
                key={message.id}
                role={message.role}
                message={message.content}
              />
            ))}
          {messages.length == 0 && conversations.length == 0 ? (
            <div className="flex justify-center items-center h-full">
              당신의 트레이너 &apos;AI 챗봇&apos;에게 물어보세요!
            </div>
          ) : (
            messages.map((message) => (
              <Comment
                key={message.id}
                role={message.role}
                message={message.content}
              />
            ))
          )}
          {status !== "ready" && (
            <div className="text-gray-500 animate-pulse whitespace-pre-line">
              GPT가 응답을 작성 중이에요...
            </div>
          )}
          <div ref={scrollRef}></div>
        </div>
        {/* 입력 영역 */}
        <div className="relative w-full flex justify-center items-center">
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="무엇이든 물어보세요"
            className="bg-[#F2F2F2] w-[90%] resize-none outline-none my-5 p-3 pr-10 text-sm rounded-xl"
          />
          <button
            className="absolute right-8 cursor-pointer"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M10.9368 17.7087C14.6763 17.7087 17.7077 14.6773 17.7077 10.9378C17.7077 7.1984 14.6763 4.16699 10.9368 4.16699C7.19742 4.16699 4.16602 7.1984 4.16602 10.9378C4.16602 14.6773 7.19742 17.7087 10.9368 17.7087Z"
                stroke="#676767"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M20.303 21.3637C20.5959 21.6566 21.0708 21.6566 21.3637 21.3637C21.6566 21.0708 21.6566 20.5959 21.3637 20.303L20.303 21.3637ZM15.0947 16.1553L20.303 21.3637L21.3637 20.303L16.1553 15.0947L15.0947 16.1553Z"
                fill="#676767"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
