import Image from "next/image";

export default function Card({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative min-h-[450px] bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <Image
        className="rounded-xl"
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute top-0 start-0 end-0 bg-gradient-to-b from-black/30 rounded-md w-full h-full">
        <div className="p-4 md:p-5">
          <h3 className="text-4xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
