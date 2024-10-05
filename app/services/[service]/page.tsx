import { data } from "@/data/services";
import Image from "next/image";

export async function generateStaticParams() {
  const paths = data.map((item) => ({
    service: item.slug,
  }));
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const pagedata = data.find((e) => e.slug === params.service);

  return {
    title: pagedata
      ? `${pagedata.title} | YASA International Marine Services`
      : "Service Not Found",
    description: pagedata
      ? pagedata.description
      : "Discover our marine services at YASA International.",
  };
}

interface PageProps {
  params: { service: string };
}

const ServicePage = async ({ params }: PageProps) => {
  const pagedata = data.find((e) => e.slug === params.service) || {
    title: "",
    alt: "",
    src: "",
    slug: "",
    description: "",
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{pagedata.title}</h1>
      <div className="relative w-full min-h-[200px] h-[30svh] md:h-[50svh] rounded-md">
        <Image
          className="rounded-md"
          alt={pagedata.alt}
          src={pagedata.src}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p className="text-2xl mt-4">{pagedata.description}</p>
    </div>
  );
};

export default ServicePage;
