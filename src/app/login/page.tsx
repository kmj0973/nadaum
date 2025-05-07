import Link from "next/link";
import Header from "../_components/Header";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-around p-5">
        <LoginForm />
        <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5 text-sm tablet:text-base my-10">
          <Link
            href="/signup"
            className="w-full border-1 border-[#767676] rounded-sm py-3 flex justify-center items-center"
          >
            회원가입
          </Link>
          <div className="">
            회원가입 없이{" "}
            <Link href="/" className="border-b-2 font-semibold">
              둘러보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
