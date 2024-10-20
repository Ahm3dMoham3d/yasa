import { Facebook, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto p-4 grid  lg:grid-cols-2 gap-2">
      <div>
        <p>All rights reserved to YASA International Marine Services 2024</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap lg:justify-end">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          +20 10 2601 2050
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          +20 10 7005 0622
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          +20 10 3378 7227
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Square No. 6, Al-Noor Cooperative City, Salam 2.
        </div>
      </div>
      <Link
        className="order-last lg:order-none text-foreground/70 hover:text-foreground transition-colors"
        href={"/about-us/legal-information"}
      >
        Legal Information
      </Link>
      <Link
        className="flex lg:justify-end items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
        href={"/about-us/legal-information"}
      >
        <Facebook className="w-5 h-5" />
        Facebook Page
      </Link>
    </footer>
  );
}
