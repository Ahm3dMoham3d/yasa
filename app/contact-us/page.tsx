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
      <div className="grid lg:grid-cols-2 gap-8">
        <ContactUsForm />
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
