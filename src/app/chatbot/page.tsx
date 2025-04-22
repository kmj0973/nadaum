"use client";

import { useState } from "react";
import Header from "../_components/Header";
import Chat from "./_components/Chat";

export default function AuthPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const res = await fetch("/chatbot/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  };

  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="AI 챗봇" />
      {/* 채팅 영역 */}
      <div className="w-[90%] flex flex-col gap-8 py-5 mt-5 overflow-auto flex-1">
        {messages.length == 0 ? (
          <div>오늘의 식단</div>
        ) : (
          messages.map((message, index) => (
            <Chat key={index} role={message.role} message={message.content} />
          ))
        )}
      </div>
      {/* 입력 영역 */}
      <div className="relative w-full flex justify-center items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="무엇이든 물어보세요"
          className="bg-[#F2F2F2] w-[90%] h-[55px] my-5 p-3 pr-10 text-sm rounded-xl"
        />
        <svg
          onClick={sendMessage}
          className="absolute right-8"
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
      </div>
    </div>
  );
}
