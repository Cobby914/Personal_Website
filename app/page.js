import { useStore } from "@/store/useStore";

export default function Home() {
  const theme = useStore((s) => s.theme); // ❌ server component
  return <div>Home</div>;
}