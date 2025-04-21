import Header from "../_components/Header";
import Chat from "./_components/Chat";

export default function AuthPage() {
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col items-center scroll-auto">
      <Header title="AI 챗봇" />
      <Chat />
      <div className="w-[90%] flex flex-col gap-8 py-5 mt-5 overflow-auto flex-1">
        <div className="font-medium ml-10 border-2">
          육류를 포함한 식단으로 바꿔줘. 다이어트 중이라 칼로리는 최대한 적게
          구성해서 만들어줘. 간식을 제외하고 작성해줘.
        </div>
        <div className="font-medium mr-10 border-2">
          아침 닭가슴살 100g삶은 계란 2개(노른자 1개, 흰자 2개)오트밀 40g +
          아몬드밀크블루베리 한 줌 (20~30g)양배추, 오이, 파프리카 샐러드 점심
          소고기 우둔살(또는 닭가슴살) 120g현미밥 100g (or 고구마 100g)브로콜리,
          버섯볶음나물 반찬 (간장, 들기름 소량 사용) 저녁 연어구이(또는
          닭가슴살) 120g나물 반찬 (기름 최소)두부 반모 (or 삶은 콩 50g)샐러드
          (양배추, 상추, 치커리 + 발사믹 드레싱)
        </div>
        <div className="font-medium ml-10 border-2">
          육류를 포함한 식단으로 바꿔줘. 다이어트 중이라 칼로리는 최대한 적게
          구성해서 만들어줘. 간식을 제외하고 작성해줘.
        </div>
        <div className="font-medium mr-10 border-2">
          아침 닭가슴살 100g삶은 계란 2개(노른자 1개, 흰자 2개)오트밀 40g +
          아몬드밀크블루베리 한 줌 (20~30g)양배추, 오이, 파프리카 샐러드 점심
          소고기 우둔살(또는 닭가슴살) 120g현미밥 100g (or 고구마 100g)브로콜리,
          버섯볶음나물 반찬 (간장, 들기름 소량 사용) 저녁 연어구이(또는
          닭가슴살) 120g나물 반찬 (기름 최소)두부 반모 (or 삶은 콩 50g)샐러드
          (양배추, 상추, 치커리 + 발사믹 드레싱)
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <input
          placeholder="무엇이든 물어보세요"
          className="bg-[#F2F2F2] w-[90%] h-[55px] my-5 p-3 text-sm rounded-xl"
          type="text"
        />
        <svg
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
