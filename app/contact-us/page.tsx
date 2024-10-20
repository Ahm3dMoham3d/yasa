import type { Metadata } from "next";
import ContactUsForm from "./ContactUsForm";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "At YASA International Marine Services, we're here to assist you with all your marine logistics needs. Whether you have inquiries about our services, need support, or want to discuss a custom solution, feel free to reach out to us.",
};

export default function page() {
  return (
    <>
      <h1 className="text-4xl mb-4 font-bold">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="grid lg:grid-cols-2">
        <ContactUsForm />
      </div>
    </>
  );
}
