import Card from "@/components/ui/card";
import { data } from "@/data/services";

import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className="font-bold text-4xl mb-4">
        Our <span className="text-primary">Services</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-row">
        {data.map((e, i) => {
          return (
            <Link
              className={
                e.slug === "transit-services"
                  ? "lg:col-span-3 md:col-span-2"
                  : ""
              }
              href={`/services/${e.slug}`}
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
