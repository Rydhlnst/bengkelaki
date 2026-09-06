import Link from "next/link";
import { ArrowUpRightIcon, BikeIcon, CarIcon } from "@/lib/icons";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { title: "Aki Mobil", caption: "Untuk city car, MPV, SUV, dan kendaraan niaga.", href: "/aki-mobil", Icon: CarIcon, code: "12V" },
  { title: "Aki Motor", caption: "Untuk motor matic, bebek, sport, dan harian.", href: "/aki-motor", Icon: BikeIcon, code: "MF" },
];

export function CategoryCards() {
  return (
    <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2">
      {categories.map(({ title, caption, href, Icon, code }) => (
        <Card key={href} className="group overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <Link href={href}>
            <CardContent className="flex items-center justify-between gap-3 p-5 sm:gap-5 sm:p-8">
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-red text-white transition-transform group-hover:scale-105 sm:size-11 sm:rounded-xl">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-black tracking-tight sm:mt-6 sm:text-2xl">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{caption}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-brand-red sm:mt-5">
                  Lihat pilihan <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <span className="text-5xl font-black tracking-[-0.08em] text-brand-yellow sm:text-8xl">{code}</span>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
