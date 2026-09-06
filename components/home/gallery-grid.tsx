import Image from "next/image";
import { referenceMedia } from "@/data/reference-media";

const tilePatterns = [
  "lg:col-span-5 lg:row-span-4",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-3 lg:row-span-3",
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-3 lg:row-span-3",
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-4 lg:row-span-3",
];

export function GalleryGrid() {
  return (
    <div className="mt-8 grid auto-rows-[118px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[145px] sm:grid-cols-3 lg:auto-rows-[92px] lg:grid-cols-12">
      {referenceMedia.gallery.map((item, index) => (
        <figure key={item.src} className={`relative overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-brand-dark/10 transition-transform duration-300 hover:-translate-y-0.5 ${tilePatterns[index % tilePatterns.length]} ${index === 0 ? "row-span-2" : ""}`}>
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 42vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          <figcaption className="sr-only">{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
