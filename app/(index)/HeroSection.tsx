import { Button } from "@/components/ui/button";
import hero_bg from "@/public/hero.webp";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold ">
          <span className="text-primary">Trusted Partner</span> for Seamless
          Marine Solutions
        </h1>

        <p className="mb-3 mt-2 text-xl text-foreground/80">
          Delivering innovative and reliable services to navigate your marine
          challenges.
        </p>
        <div className="flex gap-4 mb-4 justify-center">
          <Button asChild size={"lg"}>
            <Link href={"services"}>Our Services</Link>
          </Button>
          <Button asChild size={"lg"} variant={"outline"}>
            <Link href={"contact-us"}>Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="relative w-full min-h-[200px] h-[30svh] md:h-[50svh] rounded-md">
        <Image
          className="rounded-md"
          alt="Yasa_Ships"
          src={hero_bg}
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
