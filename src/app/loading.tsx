export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-white w-full min-h-[650px] h-[100vh] flex flex-col justify-center items-center scroll-auto">
      <p className="text-gray-500 animate-pulse">Loading...</p>
    </div>
  );
}
