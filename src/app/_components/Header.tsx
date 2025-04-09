export default function Header({ title }: { title: string | null }) {
  return (
    <div className="relative w-full h-[60px] flex items-center justify-center">
      <svg
        className="absolute top-5 left-7"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 17"
        fill="none"
      >
        <path
          d="M19 8.5H1M1 8.5L7.75 1.5M1 8.5L7.75 15.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="text-[20px] font-semibold">{title}</div>
    </div>
  );
}
