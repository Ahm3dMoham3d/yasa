import Image from "next/image";
import about_bg from "@/public/about.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[40svh] items-center gap-8">
      <div>
        <h1 className="text-4xl mb-4 font-bold">
          About <span className="text-primary">YASA</span>
        </h1>

        <p>
          At Yasa, we provide top-quality marine services for the maritime
          industry, specializing in provisions, bunkers, and lubricants. Our
          mission is to lead in Egypt by ensuring safety, integrity, and
          customer satisfaction. We facilitate smooth operations with our custom
          clearance and safety certifications. Join us on our journey to
          success!
        </p>

        <Button asChild variant={"default"} className="mt-4 me-2">
          <Link href={"about-us"}>Our work</Link>
        </Button>

        <Button asChild variant={"outline"} className="mt-4">
          <Link href={"about-us/legal-information"}>Legal Information</Link>
        </Button>
      </div>

      <div className="relative w-full min-h-[200px] h-[30svh] md:h-[50svh]">
        <Image
          className="rounded-md"
          alt="Yasa_Ships"
          src={about_bg}
          placeholder="blur"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
