import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "YASA International Marine Services operates in full compliance with international maritime laws and regulations, ensuring the highest standards of safety, transparency, and ethical conduct in all our services. Our legal policies cover all aspects of marine logistics, including terms of service, privacy policy, and liability limitations.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Legal <span className="text-primary">Information</span>
      </h1>

      <div className="mb-4 text-lg">
        <p className="mb-2">
          All company documents are registered and official with the Ministry of
          Supply and Internal Trade of Egypt - Internal Trade Development
          Authority - Central Administration for Commercial Registration -
          Distinguished Commercial Registration Office in Suez.
        </p>

        <p className="mb-2">Tax Registration Number: 765543427</p>
        <p className="mb-2">
          Company Address: Building No. 20, Square No. 6, Al-Noor Cooperative
          City, Salam 2.
        </p>
        <p>Commercial Registration Number: 78824</p>
      </div>
    </div>
  );
}
