import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const ServicesSection = dynamic(() => import("./ServicesSection"));
const AboutSection = dynamic(() => import("./AboutSection"));
const ContactUsSection = dynamic(() => import("./ContactUsSection"));

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <AboutSection />

      <ContactUsSection />
    </>
  );
}
