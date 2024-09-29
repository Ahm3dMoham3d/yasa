import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "../globals.css";

const noto = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html dir={params.locale == "ar" ? "rtl" : "ltr"} lang={params.locale}>
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
