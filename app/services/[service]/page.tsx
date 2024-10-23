import { Button } from "@/components/ui/button";
import { data } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
const services = data.filter((e) => e.slug !== "transit-services");
export async function generateStaticParams() {
  return services.map((item) => ({
    service: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const pagedata = services.find((e) => e.slug === params.service);

  return {
    title: pagedata ? `${pagedata.title}` : "Service Not Found",
    description: pagedata
      ? pagedata.description
      : "Discover our marine services at YASA International.",
  };
}

interface PageProps {
  params: { service: string };
}

const ServicePage = async ({ params }: PageProps) => {
  const pagedata = services.find((e) => e.slug === params.service);

  if (!pagedata) {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-xl">The requested service could not be found.</p>
      </div>
    );
  }

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
      <p className="text-xl mt-4">{pagedata.description}</p>
      <Button className="mt-4">
        <Link href={"/contact-us"}>Request your service now</Link>
      </Button>
    </div>
  );
};

export default ServicePage;
