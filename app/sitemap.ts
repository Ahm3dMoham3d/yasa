import { MetadataRoute } from "next";
import { data } from "@/data/services";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services: MetadataRoute.Sitemap = data.map((e) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${e.slug}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },

    ...services,

    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/transit-services/vessels-tolls-calculator`,
    },

    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/transit-services/yachts-tolls-calculator`,
    },
  ];
}
