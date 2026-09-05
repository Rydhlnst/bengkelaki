import { useId } from "react";
import { cn } from "@/lib/utils";
import { getBrand } from "@/data/brands";
import type { Product } from "@/data/products";

export function BatteryArt({ product, className, priorityLabel }: {
  product: Pick<Product, "name" | "brandSlug" | "voltage" | "capacity" | "vehicleType" | "batteryType">;
  className?: string;
  priorityLabel?: string;
}) {
  const id = useId().replace(/:/g, "");
  const brand = getBrand(product.brandSlug);
  const motor = product.vehicleType === "motor";
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label={`Ilustrasi aki ${product.name}`} className={cn("h-auto w-full", className)}>
      <defs>
        <linearGradient id={`${id}-case`} x2="0.8" y2="1"><stop stopColor="#454d55"/><stop offset="1" stopColor="#12191e"/></linearGradient>
        <linearGradient id={`${id}-top`} x2="0" y2="1"><stop stopColor="#65717b"/><stop offset="1" stopColor="#252e35"/></linearGradient>
        <linearGradient id={`${id}-metal`}><stop stopColor="#798894"/><stop offset=".45" stopColor="#edf4f7"/><stop offset="1" stopColor="#71828d"/></linearGradient>
        <radialGradient id={`${id}-shadow`}><stop stopColor="#0c232b" stopOpacity=".28"/><stop offset="1" stopColor="#0c232b" stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="248" cy="308" rx="194" ry="32" fill={`url(#${id}-shadow)`}/>
      <g transform={motor ? "translate(62 -12) scale(.77 1.05)" : undefined}>
        <path d="M95 130 335 130 335 303 95 283Z" fill={`url(#${id}-case)`}/>
        <path d="m335 130 59-39v177l-59 35Z" fill="#111b22"/>
        <path d="m88 120 58-42h255l-61 48Z" fill={`url(#${id}-top)`}/>
        <path d="m88 120 252 6v21l-252-7Z" fill="#172129"/>
        <path d="m340 126 61-48v21l-61 48Z" fill="#0b141a"/>
        <path d="M190 91V59q0-9 9-9h92q9 0 9 9v32" fill="none" stroke="#1a242c" strokeWidth="12"/>
        <path d="M197 77V61h96v15" fill="none" stroke="#7a858b" strokeWidth="2"/>
        {[140, 341].map((x, i) => <g key={x}>
          <ellipse cx={x} cy="93" rx="21" ry="8" fill={i ? "#121b22" : "#b72c32"}/>
          <path d={`M${x-12} 69h24v22q-12 8-24 0Z`} fill={`url(#${id}-metal)`}/>
          <ellipse cx={x} cy="69" rx="12" ry="5" fill="#d8e3e9"/>
          <text x={x} y="72" textAnchor="middle" fontSize="12" fontWeight="800" fill="#263943">{i ? "−" : "+"}</text>
        </g>)}
        {[166, 192, 218, 244, 270, 296].map(x => <ellipse key={x} cx={x} cy="111" rx="9" ry="3" fill="#0a1219"/>)}
        {[355, 369, 383].map(x => <path key={x} d={`M${x} 152v110`} stroke="#33414a" strokeWidth="4"/>)}
        <path d="m112 157 205 5v110l-205-16Z" fill="#164e63"/>
        <path d="m112 157 205 5v12l-205-5Z" fill="#06b6d4"/>
        <text x="127" y="207" fill="white" fontSize="29" fontWeight="900" letterSpacing="-1">{brand?.name.toUpperCase()}</text>
        <text x="128" y="232" fill="white" fontSize="12" fontWeight="700">{product.voltage} / {product.capacity} / {product.batteryType.toUpperCase()}</text>
        <text x="128" y="248" fill="white" opacity=".75" fontSize="9" letterSpacing="2">{motor ? "MOTORCYCLE BATTERY" : "AUTOMOTIVE BATTERY"}</text>
        <path d="m105 279 222 18" stroke="#66727b" strokeOpacity=".4" strokeWidth="3"/>
      </g>
      {priorityLabel && <text x="240" y="345" textAnchor="middle" fill="currentColor" fontSize="12">{priorityLabel}</text>}
    </svg>
  );
}
