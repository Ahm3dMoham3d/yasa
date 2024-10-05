"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "@/data/services";

export default function ServicesSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="my-8">
      <h1 className="text-4xl mb-4 font-bold">
        Our <span className="text-primary">Services</span>
      </h1>
      <div className="w-full h-full">
        <Carousel items={cards} />
      </div>
    </div>
  );
}
