export type ProductMenuLink = {
  label: string;
  href: string;
};

/** Cột thương hiệu trong mega menu Sản phẩm (kiểu brand columns) */
export type ProductMenuBrand = {
  id: string;
  label: string;
  href: string;
  links: ProductMenuLink[];
};

/** Đường dẫn local cho danh mục chưa có trang chi tiết → 404 */
function soon(slug: string) {
  return `/product/c/${slug}`;
}

/**
 * Mega menu Sản phẩm — 2 nhà phân phối: SKF & HongFa.
 * HongFa: toàn bộ danh mục từ hongfa.com/vi/product → /product?brand=hongfa&cat=…
 */
export const productMenuBrands: ProductMenuBrand[] = [
  {
    id: "skf",
    label: "SKF",
    href: "/product?brand=skf",
    links: [
      { label: "Bearings", href: soon("skf-bearings") },
      { label: "Mounted bearings & housings", href: soon("skf-mounted-bearings") },
      { label: "Seals", href: soon("skf-seals") },
      { label: "Lubrication systems", href: soon("skf-lubrication") },
      { label: "Lubricants", href: soon("skf-lubricants") },
      { label: "Maintenance products", href: soon("skf-maintenance") },
      { label: "Power transmission", href: soon("skf-power-transmission") },
      { label: "Condition monitoring", href: soon("skf-condition-monitoring") },
      { label: "Test & measuring", href: soon("skf-test-measuring") },
    ],
  },
  {
    id: "hongfa",
    label: "HONGFA",
    href: "/product?brand=hongfa",
    links: [
      { label: "Rơ Le", href: "/product?brand=hongfa&cat=relays" },
      {
        label: "Mô-Đun Điện Tử Ứng Dụng",
        href: "/product?brand=hongfa&cat=electronic-module",
      },
      {
        label: "Thiết Bị Điều Khiển",
        href: "/product?brand=hongfa&cat=control-gear",
      },
      {
        label: "Thiết Bị Bảo Vệ Thanh Ray DIN",
        href: "/product?brand=hongfa&cat=din-rail",
      },
      {
        label: "Linh Kiện Phân Phối Điện",
        href: "/product?brand=hongfa&cat=power-distribution",
      },
      {
        label: "LV&MV Devices",
        href: "/product?brand=hongfa&cat=mv-lv-devices",
      },
      { label: "Đầu Nối", href: "/product?brand=hongfa&cat=connectors" },
      {
        label: "Tụ Điện Màng",
        href: "/product?brand=hongfa&cat=film-capacitors",
      },
      {
        label: "Cảm Biến Dòng Điện",
        href: "/product?brand=hongfa&cat=current-sensor",
      },
      { label: "Cầu Chì", href: "/product?brand=hongfa&cat=fuse" },
      {
        label: "Bộ Ngắt Chân Không",
        href: "/product?brand=hongfa&cat=vacuum-interrupter",
      },
      {
        label: "Thiết Bị Tự Động Hóa",
        href: "/product?brand=hongfa&cat=automation",
      },
    ],
  },
];

/** @deprecated tương thích Header mobile cũ */
export const productMenuCategories = productMenuBrands.map((brand) => ({
  id: brand.id,
  label: brand.label,
  href: brand.href,
  children: brand.links,
}));

/** @deprecated */
export const productMenuColumns = productMenuBrands.map((brand) => ({
  title: brand.label,
  href: brand.href,
  links: brand.links,
}));
