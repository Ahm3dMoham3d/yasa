import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactUsSection() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-10">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="grid gap-4 lg:grid-cols-2 mt-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image width={20} height={20} src="/whatsapp.svg" alt="whatsapp" />
            <a href="https://wa.me/+201026012050" target="_blank">
              Message on WhatsApp{" "}
              <span className="text-primary">+20 10 2601 2050</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+201070050622">
              Call <span className="text-primary">+20 10 7005 0622</span>{" "}
              Operation Manger
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+201033787227">
              Call <span className="text-primary">+20 10 3378 7227 </span> Info
              Manger
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@yasa-international.com">
              Email us{" "}
              <span className="text-primary">info@yasa-international.com</span>
            </a>
          </div>

          <h4 className="text-xl">Need a more specific service ?</h4>
          <Button className="max-w-[250px]" asChild variant={"default"}>
            <Link href={"contact-us"}>Write for us</Link>
          </Button>
        </div>
        <iframe
          className="rounded-md w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13828.171750204705!2d32.565533572165585!3d29.94944354954281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1456251b7167171d%3A0x2605a79d3006f493!2sMina&#39;%20ash%20Shatt!5e0!3m2!1sen!2seg!4v1729331287338!5m2!1sen!2seg"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
