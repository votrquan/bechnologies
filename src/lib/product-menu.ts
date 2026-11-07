import { hongfaSeriesList } from "@/lib/hongfa-products";

export type ProductMenuLink = {
  label: string;
  href: string;
};

export type ProductMenuColumn = {
  title: string;
  href: string;
  links: ProductMenuLink[];
};

function seriesLinks(category: string): ProductMenuLink[] {
  return hongfaSeriesList
    .filter((s) => s.category === category)
    .map((s) => ({
      label: s.name,
      href: `/product/${s.models[0] || ""}`,
    }))
    .filter((l) => l.href !== "/product/");
}

/** Mega menu Sản phẩm — cột theo nhóm (kiểu brand columns) */
export const productMenuColumns: ProductMenuColumn[] = [
  {
    title: "Hongfa Control Gear",
    href: "/product",
    links: seriesLinks("control-gear"),
  },
  {
    title: "Hongfa DIN-Rail",
    href: "/product",
    links: seriesLinks("din-rail"),
  },
  {
    title: "Hongfa Power Distribution",
    href: "/product",
    links: seriesLinks("power-distribution"),
  },
  {
    title: "Bechnologies",
    href: "/#products",
    links: [
      { label: "AGV – AMR – Robot", href: "/#products" },
      { label: "Thiết bị công nghiệp", href: "/#products" },
      { label: "SCADA / Phần mềm", href: "/solutions/scada" },
      { label: "Jig & Đồ gá", href: "/#products" },
      { label: "Linh kiện công nghiệp", href: "/#products" },
      { label: "Năng lượng xanh", href: "/solutions/solar" },
      { label: "Tất cả giải pháp", href: "/solutions" },
    ],
  },
];
