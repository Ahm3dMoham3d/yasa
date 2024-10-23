import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const font = localFont({
  src: [
    { path: "./fonts/eurostile.woff2", weight: "400", style: "normal" },
    { path: "./fonts/eurostile-bold.woff2", weight: "700", style: "bold" },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | YASA International Marine Services",
    default: "YASA International Marine Services",
  },
  description:
    "YASA International Marine Services offers comprehensive solutions for marine logistics, including transit services, supply chain management, and custom clearance. Trust our expert team to ensure smooth operations and safety in every voyage.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow w-full max-w-[1440px] mx-auto p-4 mb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
