import catalogData from "@/data/hongfa/catalog.json";
import { hongfaProductDetails } from "@/lib/hongfa-products";

export type ProductCategoryId =
  | "relays"
  | "electronic-module"
  | "control-gear"
  | "din-rail"
  | "power-distribution"
  | "mv-lv-devices"
  | "connectors"
  | "film-capacitors"
  | "current-sensor"
  | "fuse"
  | "vacuum-interrupter"
  | "automation"
  | "new-energy";

export type ProductItem = {
  id: string;
  name: string;
  type: string;
  range?: string;
  description: string;
  category: ProductCategoryId;
  source: "web" | "pdf" | "both";
  image: string;
  href?: string;
  /** Internal detail page slug under /product/[slug] */
  detailSlug?: string;
  highlights?: string[];
  listSlug?: string;
  listLabel?: string;
  group?: string;
};

export const productCategories: {
  id: ProductCategoryId | "all";
  label: string;
  description: string;
}[] = [
  {
    id: "all",
    label: "Tất cả",
    description: "Toàn bộ danh mục sản phẩm Hongfa",
  },
  {
    id: "relays",
    label: "Rơ le",
    description: "Power, automotive, HVDC, latching, signal và công nghiệp",
  },
  {
    id: "electronic-module",
    label: "Mô-đun điện tử",
    description: "Mô-đun rơ-le an toàn, thời gian, interface và nguồn",
  },
  {
    id: "control-gear",
    label: "Control Gear",
    description: "Contactor, relay nhiệt và thiết bị điều khiển động cơ",
  },
  {
    id: "din-rail",
    label: "DIN-Rail Protection",
    description: "MCB, Smart MCB, RCCB/RCBO và dao cách ly trên thanh DIN",
  },
  {
    id: "power-distribution",
    label: "Power Distribution",
    description: "ACB, MCCB AC/DC và thiết bị phân phối công suất lớn",
  },
  {
    id: "mv-lv-devices",
    label: "LV & MV Devices",
    description: "Thiết bị đóng cắt hạ thế và trung thế",
  },
  {
    id: "connectors",
    label: "Đầu nối",
    description: "RF, power, PCB và industrial connector",
  },
  {
    id: "film-capacitors",
    label: "Tụ điện màng",
    description: "EMI, motor run và tụ điện tử công suất",
  },
  {
    id: "current-sensor",
    label: "Cảm biến dòng",
    description: "Biến dòng, Hall, Rogowski và fluxgate",
  },
  {
    id: "fuse",
    label: "Cầu chì",
    description: "Cầu chì điện Hongfa",
  },
  {
    id: "vacuum-interrupter",
    label: "Bộ ngắt chân không",
    description: "VI cho máy cắt, công tắc tải và contactor",
  },
  {
    id: "automation",
    label: "Tự động hóa",
    description: "Robot công nghiệp và dây chuyền tự động",
  },
  {
    id: "new-energy",
    label: "New Energy",
    description: "Giải pháp PV, lưu trữ và đóng cắt DC cao áp",
  },
];

const img = {
  contactor: "/images/hongfa/p16-img1.png",
  thermal: "/images/hongfa/p16-img4.png",
  mccb: "/images/hongfa/p15-img11.png",
  overview: "/images/hongfa/catalog-p13.jpg",
};

const fallbackImage: Record<ProductCategoryId, string> = {
  relays: img.overview,
  "electronic-module": img.overview,
  "control-gear": img.contactor,
  "din-rail": "/images/hongfa/catalog-p17.jpg",
  "power-distribution": img.mccb,
  "mv-lv-devices": img.overview,
  connectors: img.overview,
  "film-capacitors": img.overview,
  "current-sensor": img.overview,
  fuse: img.overview,
  "vacuum-interrupter": img.overview,
  automation: img.overview,
  "new-energy": img.overview,
};

type CatalogProduct = {
  id: string;
  code: string;
  name: string;
  type: string;
  category: string;
  group: string;
  listSlug: string;
  listLabel: string;
  description: string;
  range?: string | null;
  image?: string | null;
  sourceUrl?: string;
  highlights?: string[];
};

const detailBySlug = new Map(
  hongfaProductDetails.map((p) => [p.slug.toLowerCase(), p])
);
const detailBySeries = new Map<string, string>();
for (const p of hongfaProductDetails) {
  const key = p.seriesSlug?.toLowerCase();
  if (key && !detailBySeries.has(key)) detailBySeries.set(key, p.slug);
}

function mapCategory(
  group: string,
  category: string
): ProductCategoryId {
  if (group === "low-voltage") {
    if (
      category === "control-gear" ||
      category === "din-rail" ||
      category === "power-distribution"
    ) {
      return category;
    }
    return "control-gear";
  }
  if (group === "mv-lv-devices") return "mv-lv-devices";
  if (group === "relays") return "relays";
  if (group === "electronic-module") return "electronic-module";
  if (group === "connectors") return "connectors";
  if (group === "film-capacitors") return "film-capacitors";
  if (group === "current-sensor") return "current-sensor";
  if (group === "fuse") return "fuse";
  if (group === "vacuum-interrupter") return "vacuum-interrupter";
  if (group === "automation") return "automation";
  if (group === "others") return "automation";
  return "relays";
}

function resolveDetailSlug(id: string, code: string): string | undefined {
  const lower = id.toLowerCase();
  if (detailBySlug.has(lower)) return detailBySlug.get(lower)!.slug;
  if (detailBySeries.has(lower)) return detailBySeries.get(lower);
  const codeLower = code.toLowerCase().replace(/\s+/g, "");
  const byModel = hongfaProductDetails.find(
    (p) =>
      p.model.toLowerCase() === codeLower ||
      p.series.toLowerCase() === codeLower ||
      p.seriesSlug === lower
  );
  return byModel?.slug;
}

const catalogProducts = (catalogData.products as CatalogProduct[]).map(
  (p) => {
    const category = mapCategory(p.group, p.category);
    const detailSlug = resolveDetailSlug(p.id, p.code);
    const detail = detailSlug ? detailBySlug.get(detailSlug) : undefined;
    return {
      id: p.id,
      name: (p.name || p.code).trim(),
      type: p.type || p.listLabel,
      range: p.range || detail?.range || undefined,
      description:
        detail?.shortDescription ||
        detail?.description ||
        p.description ||
        `${p.code} — ${p.listLabel}`,
      category,
      source: "web" as const,
      image:
        detail?.image ||
        p.image ||
        fallbackImage[category] ||
        img.overview,
      detailSlug,
      highlights: p.highlights?.slice(0, 3),
      listSlug: p.listSlug,
      listLabel: p.listLabel,
      group: p.group,
    } satisfies ProductItem;
  }
);

/** Chi tiết model LV đã fetch (bổ sung nếu chưa có trong catalog series) */
const detailedExtras: ProductItem[] = hongfaProductDetails
  .filter((p) => !catalogProducts.some((c) => c.id === p.slug || c.detailSlug === p.slug))
  .map((p) => {
    const category = mapCategory(
      "low-voltage",
      p.category || "control-gear"
    );
    return {
      id: p.slug,
      name: p.model,
      type: p.type,
      range: p.range,
      description: p.shortDescription || p.description,
      category,
      source: "web" as const,
      image: p.image || fallbackImage[category],
      detailSlug: p.slug,
      highlights: [p.series, "Có trang chi tiết"],
      listSlug: p.category,
      group: "low-voltage",
    } satisfies ProductItem;
  });

/** Mục PDF / giải pháp chưa nằm trên trang hongfa.com/vi/product */
const pdfExtras: ProductItem[] = [
  {
    id: "hfum3d",
    name: "HFUM3D",
    type: "DC MCCB (PV / ESS)",
    range: "250 / 400 / 630A · DC1500–2000V",
    description:
      "MCCB DC hai chiều HFUM3D — không suy giảm khi chạy hai chiều, dùng cho PV tập trung và ESS.",
    category: "new-energy",
    source: "pdf",
    image: img.mccb,
    highlights: ["Bi-directional", "PV2"],
  },
  {
    id: "ueq5",
    name: "UEQ5",
    type: "ATSE",
    description:
      "Bộ chuyển nguồn tự động ATSE UEQ5 trong giải pháp phân phối công nghiệp Hongfa.",
    category: "new-energy",
    source: "pdf",
    image: img.overview,
    highlights: ["ATSE"],
  },
  {
    id: "ued1",
    name: "UED1",
    type: "Motor Breaker",
    description:
      "Motor breaker UED1 bảo vệ động cơ, kết hợp contactor UEC1 trong giải pháp gió/công nghiệp.",
    category: "new-energy",
    source: "pdf",
    image: img.contactor,
  },
  {
    id: "hfev",
    name: "HFEV Series",
    type: "MV Vacuum Circuit Breaker",
    range: "7.2kV~40.5kV",
    description:
      "Máy cắt chân không trung thế HFEV cho tủ trung thế và trạm biến áp.",
    category: "new-energy",
    source: "pdf",
    image: img.overview,
    highlights: ["MV", "VCB"],
  },
];

/** Tổng hợp từ hongfa.com/vi/product + trang chi tiết LV + PDF */
export const hongfaProducts: ProductItem[] = [
  ...catalogProducts,
  ...detailedExtras,
  ...pdfExtras,
];

export function getProductsByCategory(category: ProductCategoryId | "all") {
  if (category === "all") return hongfaProducts;
  return hongfaProducts.filter((p) => p.category === category);
}
