import Link from "next/link";
import Header from "../_components/Header";
import SignUpForm from "./_components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-around">
        <SignUpForm />
        <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5 text-sm tablet:text-base my-10">
          <div className="">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="border-b-2 font-semibold">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
