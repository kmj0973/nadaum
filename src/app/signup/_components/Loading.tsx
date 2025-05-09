export default function Loading({ color }: { color: string }) {
  return (
    <div
      className={`w-6 h-6 border-2 border-${color} border-t-transparent rounded-full animate-spin`}
    />
  );
}
