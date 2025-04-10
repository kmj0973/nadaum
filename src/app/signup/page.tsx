import Header from "../_components/Header";

export default function SignUpPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="" />
      <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-around">
        <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5">
          <div className="w-full text-4xl tablet:text-[40px] font-semibold mb-10">
            회원가입
          </div>
          <form className="w-full flex flex-col gap-10 mb-6">
            <input
              className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
              type="text"
              placeholder="이름을 입력하세요"
            />
            <input
              className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
              type="email"
              placeholder="이메일을 입력하세요"
            />
            <input
              className="outline-none border-b-1 border-[#767676] focus:border-black px-0.5 py-2 text-sm tablet:text-base"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            <button className="rounded-sm bg-[#18B491] mt-10 py-3 text-white text-sm tablet:text-base">
              회원가입
            </button>
          </form>
          <div className="text-[#797979] font-light text-sm tablet:text-base">
            카카오로 회원가입 하기
          </div>
        </div>
        <div className="max-w-[290px] tablet:max-w-[380px] w-full flex flex-col items-center gap-5 text-sm tablet:text-base my-10">
          <div className="">
            이미 계정이 있으신가요?{" "}
            <span className="border-b-2 font-semibold">로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
}
