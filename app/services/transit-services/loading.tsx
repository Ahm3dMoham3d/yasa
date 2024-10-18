import { loader as Loader } from "@/components/ui/loader";
export default function loading() {
  return (
    <div className="min-h-[75svh] flex items-center justify-center">
      <Loader />
    </div>
  );
}
