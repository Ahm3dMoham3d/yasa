import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { data } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
export default function ServicesSection() {
  return (
    <div className="my-8">
      <h1 className="text-4xl mb-4 font-bold">
        Our <span className="text-primary">Services</span>
      </h1>
      <div className="w-full h-full">
        <Carousel>
          <CarouselContent>
            {data.map((e, i) => {
              return (
                <CarouselItem
                  className="rounded-md basis-1/2 lg:basis-1/3"
                  key={i}
                >
                  <Link href={`/services/${e.slug}`}>
                    <div className="relative w-full min-h-[200px] h-[40svh] md:h-[60svh] rounded-md">
                      <div className="absolute w-full h-full bg-gradient-to-b from-black/30 z-50 rounded-md px-4 py-6">
                        <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                          {e.title}
                        </h3>
                      </div>
                      <Image
                        className="rounded-md"
                        src={e.src}
                        alt={e.slug}
                        priority
                        loading={"eager"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
