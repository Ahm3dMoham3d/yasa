import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-[70svh] flex items-center justify-center flex-col gap-3">
      <div className="text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl">Sorry this page is not available</p>
      </div>
      <Button size={"lg"} asChild>
        <Link href={"/"}>Return to home</Link>
      </Button>
    </div>
  );
}
