import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/site/json-ld";
import { business } from "@/config/business";

export type Crumb = { label: string; href?: string };

function absoluteUrl(path: string) {
  return new URL(path, business.siteUrl).toString();
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Beranda", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? "/"),
    })),
  };

  return (
    <>
      <Breadcrumb className="text-xs">
        <BreadcrumbList className="normal-case">
          {allItems.map((item, i) => (
            <BreadcrumbItem key={item.label + i}>
              {i > 0 ? <BreadcrumbSeparator /> : null}
              {item.href && i < allItems.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <JsonLd data={jsonLd} />
    </>
  );
}
