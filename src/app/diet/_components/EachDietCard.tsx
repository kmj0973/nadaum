export default function EachDietCard({
  time,
  content,
}: {
  time: string | undefined;
  content: string | undefined;
}) {
  return (
    <div
      className={`text-white rounded-xl shadow-md overflow-auto w-[90%] h-[150px] tablet:h-[200px] flex flex-col justify-around ${
        time == "아침"
          ? "bg-[#3AA5D3]"
          : time == "점심"
          ? "bg-[#EF9400]"
          : "bg-[#2061A3]"
      }`}
    >
      <div className="flex-1/4 p-3">
        <div className="text-black font-extrabold bg-white inline-block px-5 py-0.5 rounded-2xl">
          {time}
        </div>
      </div>
      <div className="flex-3/4 flex justify-center items-start font-bold pl-10 pr-5 pb-2 text-[12px] tablet:text-base whitespace-pre-line">
        <div className="flex-1">{content}</div>
      </div>
    </div>
  );
}
