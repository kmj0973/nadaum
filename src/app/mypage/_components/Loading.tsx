export default function Loading({ color }: { color: string }) {
  return (
    <div
      className={`w-8 h-8 border-4 border-${color} border-t-transparent rounded-full animate-spin`}
    />
  );
}
