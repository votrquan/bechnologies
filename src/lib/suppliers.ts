import { productMenuBrands } from "@/lib/product-menu";
import { hongfaProducts, productCategories } from "@/lib/products";

export type SupplierId = "hongfa" | "skf";

export type SupplierInfo = {
  id: SupplierId;
  name: string;
  shortName: string;
  category: string;
  title: string;
  description: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoIsSvg?: boolean;
  image: string;
  tags: string[];
  href: string;
  productCount: number;
};

export const suppliers: SupplierInfo[] = [
  {
    id: "hongfa",
    name: "Hongfa",
    shortName: "HONGFA",
    category: "FULL CATALOG",
    title: "Rơ le, hạ thế & linh kiện công nghiệp",
    description:
      "Danh mục Hongfa đầy đủ — rơ le, mô-đun điện tử, thiết bị điện áp thấp, đầu nối, tụ điện, cảm biến và thiết bị đóng cắt.",
    logo: "/images/hongfa/hongfa-logo.png",
    logoWidth: 140,
    logoHeight: 33,
    image: "/images/hongfa/catalog-p16.jpg",
    tags: ["Rơ le", "Contactor", "MCB", "MCCB", "Connector"],
    href: "/product?brand=hongfa",
    productCount: hongfaProducts.length,
  },
  {
    id: "skf",
    name: "SKF",
    shortName: "SKF",
    category: "ROTATING EQUIPMENT",
    title: "Vòng bi, phớt & bôi trơn",
    description:
      "Vòng bi, phớt chặn dầu, hệ thống bôi trơn và thiết bị liên quan giúp cải thiện độ tin cậy và hiệu năng máy móc.",
    logo: "/images/skf/skf-logo.svg",
    logoWidth: 86,
    logoHeight: 32,
    logoIsSvg: true,
    image: "/images/skf/skf-hero.jpg",
    tags: ["Vòng bi", "Phớt", "Bôi trơn", "Bảo trì", "Giám sát"],
    href: "/product?brand=skf",
    productCount: 0,
  },
];

export function getSupplier(id: string | null | undefined) {
  if (!id) return null;
  return suppliers.find((s) => s.id === id) ?? null;
}

export function getSupplierCategories(brand: SupplierId) {
  if (brand === "hongfa") {
    return productCategories.filter((c) => c.id !== "all");
  }
  const skf = productMenuBrands.find((b) => b.id === "skf");
  return (
    skf?.links.map((l) => ({
      id: l.href.replace("/product/c/", ""),
      label: l.label,
      description: l.label,
      href: l.href,
    })) ?? []
  );
}
