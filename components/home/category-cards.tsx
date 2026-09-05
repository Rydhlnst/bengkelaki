import Link from "next/link";
import { ArrowUpRightIcon, BikeIcon, CarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BatteryArt } from "@/components/site/battery-art";
import { getProduct } from "@/data/products";

const categories = [
  { title: "Aki Mobil", caption: "Siap untuk perjalanan berikutnya.", description: "City car, MPV, SUV, hingga kendaraan niaga.", href: "/aki-mobil", product: "gs-astra-ns40zl", Icon: CarIcon },
  { title: "Aki Motor", caption: "Starter ringan. Aktivitas lancar.", description: "Motor matic, bebek, dan sport harian Anda.", href: "/aki-motor", product: "yuasa-ytx5l-bs", Icon: BikeIcon },
];

export function CategoryCards() {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {categories.map(({ title, caption, description, href, product, Icon }) => (
        <Card key={href} className="group relative rounded-2xl border bg-background py-0 shadow-none transition-shadow hover:shadow-lg">
          <Link href={href} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <CardContent className="grid grid-cols-[1.1fr_1fr] items-center gap-0 p-5 sm:p-7">
              <div className="relative z-10">
                <span className="mb-5 grid size-11 place-items-center rounded-xl border bg-muted text-primary"><Icon className="size-5"/></span>
                <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm font-semibold">{caption}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary">Jelajahi pilihan <ArrowUpRightIcon className="size-4"/></span>
              </div>
              <BatteryArt product={getProduct(product)!} className="origin-center scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-115"/>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
