import { useStore } from "@/store/useStore";

export default function Home() {
  const theme = useStore((s) => s.theme);
  return <div>Home</div>;
}