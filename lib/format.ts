const idr = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export function formatIDR(value: number): string {
  return idr.format(value);
}

export function formatPriceRangeLabel(products: { price: number }[]): string {
  if (products.length === 0) return "";
  const min = Math.min(...products.map((p) => p.price));
  const max = Math.max(...products.map((p) => p.price));
  if (min === max) return formatIDR(min);
  return `${formatIDR(min)} – ${formatIDR(max)}`;
}
