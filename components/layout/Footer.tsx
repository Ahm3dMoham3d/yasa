import { Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { data } from "@/data/services";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto p-4">
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="flex flex-col" id="social">
          <div>
            <Image width={150} height={150} alt="yasa_logo" src={logo} />
            <p className="mt-4 text-sm text-foreground/70">
              YASA International Marine Services offers comprehensive solutions
              for marine logistics,
            </p>

            <div className="flex items-center gap-2 mt-2">
              <Link href={"#"}>
                <Facebook className="w-8 h-8 bg-primary p-1.5 text-white rounded-md" />
              </Link>

              <Link href={"#"}>
                <Linkedin className="w-8 h-8 bg-primary p-2 text-white rounded-md" />
              </Link>
            </div>
          </div>

          <div className="mt-auto ">
            <Link
              className="text-foreground/65 hover:text-foreground transition-colors w-auto"
              href={"/legal-information"}
            >
              Legal Information
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2" id="quick_links">
          <h4 className="text-xl">Quick Links</h4>
          <div>
            <Link
              className="text-foreground/65 hover:text-foreground transition-colors w-auto"
              href={"/services/transit-services/vessels-tolls-calculator"}
            >
              Vessels Tolls Calculator
            </Link>
          </div>

          <div>
            <Link
              className="text-foreground/65 hover:text-foreground transition-colors w-auto"
              href={"/services/transit-services/yachts-tolls-calculator"}
            >
              Yachts Tolls Calculator
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2" id="quick_links">
          <h4 className="text-xl">Services</h4>
          {data.map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className="text-foreground/65 hover:text-foreground transition-colors w-auto"
                  href={`/services/${e.slug}`}
                >
                  {e.title}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2" id="contact_us">
          <h4 className="text-xl">Contact</h4>
          <div className="flex items-center gap-2">
            <Image width={20} height={20} src="/whatsapp.svg" alt="whatsapp" />
            <span>+20 10 2601 2050</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+20 10 3378 7227 </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-lg">info@yasa-international.com</span>
          </div>

          <div>
            <Button asChild size={"default"}>
              <Link href={"/contact-us"}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full"></hr>
      <p className="text-center text-sm">
        All rights reserved to YASA International Marine Services 2024
      </p>
    </footer>
  );
}
