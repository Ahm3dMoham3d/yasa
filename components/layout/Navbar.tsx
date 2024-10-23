"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Navbar() {
  const currentPath = usePathname();
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/services",
      title: "Services",
    },
    {
      to: "/about-us",
      title: "About Us",
    },
  ];
  return (
    <nav className="max-w-[1440px] mx-auto p-4 w-full">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image width={150} height={150} alt="yasa_logo" src={logo} />
        </Link>

        {/* Links for larger screens */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {links.map((e, i) => (
            <Link
              className={`text-lg  hover:text-foreground transition-colors ${
                currentPath === e.to ? "text-foreground" : "text-foreground/60"
              }`}
              key={i}
              href={e.to}
            >
              {e.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="text-lg" asChild size={"default"}>
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            ref={menuRef}
            onClick={() => setMenuOpen(!menuOpen)}
            variant="ghost"
          >
            <div>
              {menuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 items-center mt-2 md:hidden bg-primary/5 pb-4 pt-2 px-2 rounded-md"
        >
          {links.map((e, i) => (
            <Link
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`text-lg hover:bg-primary hover:text-white transition-colors text-center w-full rounded-md py-2 ${
                currentPath === e.to ? "bg-primary text-white" : ""
              } `}
              key={i}
              href={e.to}
            >
              {e.title}
            </Link>
          ))}
          <Button
            asChild
            variant={"outline"}
            className="text-lg w-full"
            size={"default"}
          >
            <Link
              onClick={() => setMenuOpen((prev) => !prev)}
              href={"contact-us"}
            >
              Contact Us
            </Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
