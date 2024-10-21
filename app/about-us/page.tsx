import { Eye, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import mission from "@/public/aboutus/1.jpg";
import vision from "@/public/aboutus/2.jpg";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "At YASA International Marine Services, we specialize in providing seamless and reliable solutions for marine logistics. From transit services to supply chain management and customs clearance, our experienced team is dedicated to ensuring smooth and efficient operations for every voyage. With a commitment to safety, precision, and customer satisfaction, we help you navigate the complexities of global maritime transportation. Trust YASA International Marine Services to deliver excellence in every aspect of marine logistics.",
};

export default function page() {
  return (
    <div className='grid gap-8 md:grid-cols-2'>
      <div id='mission'>
        <div className='flex items-center gap-4 mb-2'>
          <Target className='w-14 h-14' />
          <h1 className='text-4xl font-bold'>
            Our <span className='text-primary'>Mission</span>
          </h1>
        </div>

        <p className='text-black/80'>
          To provide world-classified agency services to our principals’ fleet
          and transportation partners through superior management and technical
          talent using the most effective process and communications so that
          maximum profitability for both of principals and Elephant are
          achieved. To ensure that relations with our principals, partners,
          employees and Authorities are at all times ethical and responsible
        </p>
      </div>
      <div className='relative w-full min-h-[200px] h-[30svh] md:h-[40svh] rounded-md'>
        <Image
          className='rounded-md'
          alt='Yasa_Ships'
          src={mission}
          placeholder='blur'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className='relative w-full min-h-[200px] h-[30svh] md:h-[40svh] rounded-md'>
        <Image
          className='rounded-md'
          alt='Yasa_Ships'
          src={vision}
          placeholder='blur'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div id='vision'>
        <div className='flex items-center gap-4 mb-2'>
          <Eye className='w-14 h-14' />
          <h1 className='text-4xl font-bold'>
            Our <span className='text-primary'>Vision</span>
          </h1>
        </div>

        <p className='text-black/80'>
          Our aim is to establish{" "}
          <span className='font-bold'>YASA International</span> as a watchword
          for dependability with customers and principals, the key nations of
          our trading philosophy are incorporated in our logo, we are “Fair,
          Creative and Efficient” We believe obvious solutions are not always
          the best, by supplementing our skills and experience with creative,
          imaginative qualities, we constantly f ind new and satisfactory ways
          of fulfilling our clients’ needs
        </p>
      </div>
    </div>
  );
}
