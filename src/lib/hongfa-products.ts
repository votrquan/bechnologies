import productsData from "@/data/hongfa/products.json";
import seriesData from "@/data/hongfa/series.json";

export type HongfaSpec = { label: string; value: string };

export type HongfaProductDetail = {
  id: string;
  slug: string;
  name: string;
  model: string;
  series: string;
  seriesSlug: string;
  type: string;
  range?: string;
  description: string;
  shortDescription?: string;
  features: string[];
  specs: HongfaSpec[];
  related: string[];
  docs: { href: string; label: string }[];
  image: string | null;
  sourceUrl: string;
  category: string;
};

export type HongfaSeries = {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  category: string;
  href: string;
  image?: string | null;
  models: string[];
};

export const hongfaProductDetails =
  productsData.products as HongfaProductDetail[];
export const hongfaSeriesList = seriesData.series as HongfaSeries[];

export function getHongfaProductBySlug(slug: string) {
  return hongfaProductDetails.find(
    (p) => p.slug === slug.toLowerCase() || p.model.toLowerCase() === slug.toLowerCase()
  );
}

export function getHongfaSeriesBySlug(slug: string) {
  return hongfaSeriesList.find((s) => s.slug === slug.toLowerCase());
}

export function getRelatedHongfaProducts(product: HongfaProductDetail) {
  const fromSeries = hongfaProductDetails.filter(
    (p) => p.seriesSlug === product.seriesSlug && p.slug !== product.slug
  );
  if (fromSeries.length) return fromSeries;
  return product.related
    .map((id) => getHongfaProductBySlug(id))
    .filter((p): p is HongfaProductDetail => Boolean(p));
}
