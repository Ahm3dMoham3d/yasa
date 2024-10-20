import type { Metadata } from "next";
import Card from "@/components/ui/card";
import Link from "next/link";
import { TransitServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Transit Services",
  description:
    "Our Transit Services offer reliable and efficient transportation for both cargo and passengers across various marine routes. We ensure timely departures and arrivals, providing comprehensive logistics support to meet your specific needs. With a focus on safety and customer satisfaction, we strive to optimize your transit experience.",
};

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Transit Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TransitServices.map((e, i) => {
          return (
            <Link
              className={
                e.slug === "transit-services"
                  ? "lg:col-span-3 md:col-span-2"
                  : ""
              }
              href={`/services/transit-services/${e.slug}`}
              key={i}
            >
              <Card description="" title={e.title} img={e.src} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
