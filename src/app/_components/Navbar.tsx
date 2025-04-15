import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white fixed bottom-0 w-full max-w-[500px] h-[60px] drop-shadow-xl flex justify-around items-center ">
      <Link
        href="/"
        className="flex flex-col justify-center items-center gap-0.5 flex-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M1.71484 14.0572L12.022 4.62866L22.2863 14.0187"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.14355 11.4858V21.7716H18.8578V11.4858"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-center text-[12px]">홈</div>
      </Link>
      <Link
        href="/map?q=public"
        className="flex flex-col justify-center items-center flex-1 mt-0.5 gap-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.5996 10C21.5996 17 12.5996 23 12.5996 23C12.5996 23 3.59961 17 3.59961 10C3.59961 7.61305 4.54782 5.32387 6.23565 3.63604C7.92348 1.94821 10.2127 1 12.5996 1C14.9866 1 17.2757 1.94821 18.9636 3.63604C20.6514 5.32387 21.5996 7.61305 21.5996 10Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5996 13C14.2565 13 15.5996 11.6569 15.5996 10C15.5996 8.34315 14.2565 7 12.5996 7C10.9428 7 9.59961 8.34315 9.59961 10C9.59961 11.6569 10.9428 13 12.5996 13Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-center text-[12px]">공공체육시설</div>
      </Link>
      <Link
        href="/chatbot"
        className="flex flex-col justify-center items-center gap-0.5 flex-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 11.5C21.0034 12.8199 20.695 14.1219 20.1 15.3C19.3944 16.7118 18.3097 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.8781 19.6951 8.69999 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92177 4.44061 8.37487 5.27072 7.03257C6.10082 5.69027 7.28825 4.60559 8.69999 3.90003C9.8781 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47088C20.0052 6.94698 20.885 8.91567 21 11V11.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-center text-[12px]">AI 챗봇</div>
      </Link>
      <Link
        href="/mypage"
        className="flex flex-col justify-center items-center gap-0.5 flex-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9996 11.9999C14.3665 11.9999 16.2853 10.0811 16.2853 7.71418C16.2853 5.34725 14.3665 3.42847 11.9996 3.42847C9.63265 3.42847 7.71387 5.34725 7.71387 7.71418C7.71387 10.0811 9.63265 11.9999 11.9996 11.9999Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M2.57129 20.5713V18.3087C2.6117 16.6853 4.25496 15.396 6.23945 15.4291H17.7603C19.7448 15.396 21.388 16.6853 21.4284 18.3087V20.5713"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-center text-[12px]">프로필</div>
      </Link>
    </nav>
  );
}
