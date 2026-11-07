import { hongfaProductDetails } from "@/lib/hongfa-products";

export type ProductCategoryId =
  | "control-gear"
  | "din-rail"
  | "power-distribution"
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
};

export const productCategories: {
  id: ProductCategoryId | "all";
  label: string;
  description: string;
}[] = [
  {
    id: "all",
    label: "Tất cả",
    description: "Toàn bộ danh mục thiết bị đóng cắt & bảo vệ Hongfa",
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
    id: "new-energy",
    label: "New Energy",
    description: "Giải pháp PV, lưu trữ và đóng cắt DC cao áp",
  },
];

const img = {
  contactor: "/images/hongfa/p16-img1.png",
  thermal: "/images/hongfa/p16-img4.png",
  mccb: "/images/hongfa/p15-img11.png",
  acb: "/images/hongfa/p14-img1.png",
  mcb: "/images/hongfa/catalog-p17.jpg",
  catalogControl: "/images/hongfa/catalog-p16.jpg",
  catalogDin: "/images/hongfa/catalog-p17.jpg",
  catalogPower: "/images/hongfa/catalog-p14.jpg",
  catalogMccb: "/images/hongfa/catalog-p15.jpg",
  overview: "/images/hongfa/catalog-p13.jpg",
};

const fallbackImage: Record<string, string> = {
  "control-gear": img.contactor,
  "din-rail": img.mcb,
  "power-distribution": img.mccb,
  "new-energy": img.overview,
};

/** Chi tiết đã fetch từ trang Hongfa `/product/low-voltage-item/...` */
const detailedFromHongfa: ProductItem[] = hongfaProductDetails.map((p) => {
  const category = (p.category || "control-gear") as ProductCategoryId;
  return {
    id: p.slug,
    name: p.model,
    type: p.type,
    range: p.range,
    description: p.shortDescription || p.description,
    category,
    source: "web" as const,
    image: p.image || fallbackImage[category] || img.contactor,
    detailSlug: p.slug,
    highlights: [p.series, "Có trang chi tiết"],
  };
});

/** Tổng hợp từ hongfa.com + PDF 2026 + trang chi tiết đã fetch */
export const hongfaProducts: ProductItem[] = [
  ...detailedFromHongfa,

  // ── Control Gear (series overview còn lại) ──
  {
    id: "uec1-c",
    name: "UEC1-C (series)",
    type: "AC Contactor",
    range: "09…170A",
    description:
      "Contactor AC công nghiệp dòng UEC1-C — xem thêm model chi tiết UEC1-25C / UEC1-95C.",
    category: "control-gear",
    source: "web",
    image: img.contactor,
    detailSlug: "uec1-25c",
    highlights: ["AC Contactor", "Series"],
  },
  {
    id: "uec3-c",
    name: "UEC3-C (series)",
    type: "AC Contactor",
    range: "06…38A",
    description:
      "Series UEC3-C đầy đủ 06C→38C — mở trang chi tiết model bất kỳ trong danh sách trên.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
    detailSlug: "uec3-06c",
    highlights: ["AC-3", "Series"],
  },
  {
    id: "uec1-f",
    name: "UEC1-F",
    type: "AC Contactor",
    description: "Dòng contactor AC UEC1-F cho ứng dụng điều khiển công nghiệp.",
    category: "control-gear",
    source: "web",
    image: img.contactor,
  },
  {
    id: "uec3-n",
    name: "UEC3-N",
    type: "AC Contactor",
    range: "06…38A",
    description: "Contactor AC series N, dải dòng 6–38A.",
    category: "control-gear",
    source: "web",
    image: img.contactor,
  },
  {
    id: "uec1-d",
    name: "UEC1-D",
    type: "AC Contactor",
    range: "09…95A",
    description: "Contactor AC UEC1-D cho tải 9–95A.",
    category: "control-gear",
    source: "web",
    image: img.contactor,
  },
  {
    id: "hfuc3-c",
    name: "HFUC3-C",
    type: "AC Contactor",
    range: "06…38A",
    description:
      "Contactor IEC HFUC3-C (từ catalog PDF 2026), hỗ trợ cuộn AC/DC theo phiên bản.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
    detailSlug: "hfuc3-18c",
    highlights: ["IEC", "UL"],
  },
  {
    id: "hfuc3-n",
    name: "HFUC3-N",
    type: "AC Contactor",
    range: "06…95A",
    description: "Contactor IEC HFUC3-N, nhiều cấu hình 3P/4P theo catalog Hongfa.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
  },
  {
    id: "hfuc5-c",
    name: "HFUC5-C",
    type: "AC Contactor",
    range: "09…800A",
    description:
      "Contactor công suất lớn HFUC5-C, phủ dải rộng từ 9A đến 800A.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
    detailSlug: "hfuc5-09c",
    highlights: ["Công suất lớn", "IEC & UL"],
  },
  {
    id: "hfuc5-d",
    name: "HFUC5-D",
    type: "AC Contactor",
    description: "Contactor HFUC5-D với tùy chọn cuộn DC theo catalog.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
  },
  {
    id: "uec1-k",
    name: "UEC1-K",
    type: "Compensation Contactor",
    range: "09~95A",
    description:
      "Contactor đóng tụ bù UEC1-K, chuyên dụng cho hệ thống bù công suất phản kháng.",
    category: "control-gear",
    source: "web",
    image: img.contactor,
    highlights: ["Bù công suất"],
  },
  {
    id: "hfuc5-k",
    name: "HFUC5-K",
    type: "Compensation Contactor",
    range: "10~65kvar / 09~95A",
    description:
      "Contactor đóng tụ HFUC5-K (PDF 2026), dải 10–65kvar cho tủ bù.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
  },
  {
    id: "uer3",
    name: "UER3 / HFUR3",
    type: "Thermal Overload Relay",
    range: "0.1~38A",
    description:
      "Relay nhiệt bảo vệ quá tải động cơ, kết hợp contactor series UEC/HFUC.",
    category: "control-gear",
    source: "both",
    image: img.thermal,
    highlights: ["Quá tải động cơ"],
  },
  {
    id: "uer1",
    name: "UER1 / HFUR3-95",
    type: "Thermal Overload Relay",
    range: "0.1~336A / 40~95A",
    description: "Relay nhiệt dải rộng cho bảo vệ động cơ công suất lớn hơn.",
    category: "control-gear",
    source: "both",
    image: img.thermal,
  },
  {
    id: "xmc0",
    name: "XMC0",
    type: "DP Contactor",
    range: "1P/2P/3P/4P",
    description:
      "DP Contactor XMC0 — dòng sản xuất độc quyền Hongfa, đạt IEC & UL.",
    category: "control-gear",
    source: "both",
    image: img.contactor,
    highlights: ["DP Contactor", "IEC & UL"],
  },
  {
    id: "uecan",
    name: "UECAN",
    type: "Contactor Accessory",
    description: "Phụ kiện / khối tiếp điểm phụ cho hệ contactor UEC.",
    category: "control-gear",
    source: "web",
    image: img.catalogControl,
  },
  {
    id: "hfucan",
    name: "HFUCAN",
    type: "Contactor Relay",
    description: "Contactor relay HFUCAN dùng trong mạch điều khiển.",
    category: "control-gear",
    source: "both",
    image: img.catalogControl,
  },
  {
    id: "hfucad",
    name: "HFUCAD",
    type: "Contactor Relay",
    range: "10A",
    description: "Contactor relay HFUCAD 10A theo chuẩn IEC.",
    category: "control-gear",
    source: "both",
    image: img.catalogControl,
  },

  // ── DIN-Rail Protection (web + PDF) ──
  {
    id: "uez3",
    name: "UEZ3 (series)",
    type: "Smart MCB",
    range: "6…100A",
    description:
      "Smart MCB UEZ3: giám sát, điều khiển từ xa, tự đóng lại và bảo vệ đa lớp.",
    category: "din-rail",
    source: "both",
    image: img.mcb,
    detailSlug: "uez3-40",
    highlights: ["Smart", "RS485", "Remote"],
  },
  {
    id: "hfuz5",
    name: "HFUZ5 (series)",
    type: "Smart MCB 5G",
    range: "16…125A",
    description:
      "Smart breaker HFUZ5 (63A/125A) cho nhà thông minh, 5G và quản lý từ xa.",
    category: "din-rail",
    source: "both",
    image: img.mcb,
    detailSlug: "hfuz5-63hd",
    highlights: ["5G", "Smart home"],
  },
  {
    id: "ueb3",
    name: "UEB3 (series)",
    type: "MCB",
    range: "1…125A",
    description: "MCB UEB3 bảo vệ quá tải và ngắn mạch trên thanh DIN.",
    category: "din-rail",
    source: "web",
    image: img.mcb,
    detailSlug: "ueb3-40",
  },
  {
    id: "ueb6",
    name: "UEB6 (series)",
    type: "MCB",
    range: "1~125A",
    description:
      "MCB UEB6 — hạn dòng cấp 3, tiêu thụ thấp, phù hợp phân phối dân dụng và thương mại.",
    category: "din-rail",
    source: "both",
    image: img.mcb,
    detailSlug: "ueb6-40",
    highlights: ["Class 3", "1–125A"],
  },
  {
    id: "ueb1",
    name: "UEB1",
    type: "MCB",
    range: "5…70A",
    description: "MCB UEB1 theo dòng sản phẩm DIN-Rail Hongfa.",
    category: "din-rail",
    source: "web",
    image: img.mcb,
  },
  {
    id: "hfub3",
    name: "HFUB3 / HFUB5",
    type: "MCB",
    range: "40A / 63A",
    description:
      "MCB HFUB3/HFUB5 và phụ kiện DIN-rail theo catalog PDF 2026.",
    category: "din-rail",
    source: "pdf",
    image: img.catalogDin,
  },
  {
    id: "hfubr3",
    name: "HFUBR3 / HFUBL3",
    type: "RCCB / RCBO",
    range: "40–100A",
    description:
      "RCCB VI HFUBR3 và RCBO VI HFUBL3 bảo vệ dòng rò cho hệ thống phân phối.",
    category: "din-rail",
    source: "pdf",
    image: img.catalogDin,
    highlights: ["Chống rò", "VI"],
  },
  {
    id: "ueg3",
    name: "UEG3",
    type: "Switch Disconnector",
    range: "32~125A",
    description: "Dao cách ly UEG3 lắp thanh DIN, dải 32–125A.",
    category: "din-rail",
    source: "web",
    image: img.catalogDin,
  },
  {
    id: "ueg6",
    name: "UEG6 (series)",
    type: "Switch Disconnector",
    range: "32~125A",
    description: "Dao cách ly UEG6 cho mạch 230/400V đến 125A.",
    category: "din-rail",
    source: "both",
    image: img.catalogDin,
    detailSlug: "ueg6-125",
  },
  {
    id: "uez3l",
    name: "UEZ3L",
    type: "Residual Current Smart MCB",
    range: "6…63A",
    description: "Smart MCB tích hợp giám sát/bảo vệ dòng rò UEZ3L.",
    category: "din-rail",
    source: "web",
    image: img.mcb,
    highlights: ["Leakage", "Smart"],
  },
  {
    id: "uez3d",
    name: "UEZ3D",
    type: "DC Smart MCB",
    range: "6…100A",
    description: "Smart MCB DC UEZ3D cho ứng dụng một chiều và năng lượng mới.",
    category: "din-rail",
    source: "web",
    image: img.mcb,
    highlights: ["DC", "Smart"],
  },

  // ── Power Distribution (web + PDF) ──
  {
    id: "uew6",
    name: "UEW6 (series)",
    type: "Air Circuit Breaker (ACB)",
    range: "200…4000A",
    description:
      "ACB UEW6 điện áp đến 690–1500V AC, khung 1600/2000/4000A cho tủ phân phối chính.",
    category: "power-distribution",
    source: "both",
    image: img.acb,
    detailSlug: "uew6-1600",
    highlights: ["ACB", "≤4000A"],
  },
  {
    id: "uew6dhg",
    name: "UEW6DHG",
    type: "DC Switch Disconnector (ACD)",
    range: "800…2500A",
    description: "Dao cách ly DC UEW6DHG cho hệ thống DC công suất lớn.",
    category: "power-distribution",
    source: "web",
    image: img.acb,
  },
  {
    id: "hfuw3dg",
    name: "HFUW3DG",
    type: "DC ACD / ACB",
    range: "800…4000A · DC1500/2000V",
    description:
      "Thiết bị đóng cắt DC HFUW3DG (PDF), đạt IEC/UL, ứng dụng PV & ESS.",
    category: "power-distribution",
    source: "both",
    image: img.acb,
    highlights: ["DC-PV2", "1500V"],
  },
  {
    id: "uem5",
    name: "UEM5 (series)",
    type: "MCCB 3–4P",
    range: "16…800A",
    description:
      "MCCB UEM5 AC400V, cấu trúc modular, khả năng cắt cao cho phân phối công nghiệp.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
    detailSlug: "uem5-250",
    highlights: ["AC400V", "Modular"],
  },
  {
    id: "uem5l",
    name: "UEM5L",
    type: "MCCB + RCD",
    range: "16…800A",
    description: "MCCB UEM5L tích hợp bảo vệ dòng dư (RCD).",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
  },
  {
    id: "uem5z1",
    name: "UEM5Z1",
    type: "Electronic / Smart MCCB",
    range: "16…800A",
    description:
      "MCCB điện tử UEM5Z1 — bảo vệ thông minh, giám sát trạng thái trong giải pháp công nghiệp.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
    highlights: ["Electronic", "Smart"],
  },
  {
    id: "uem5z3",
    name: "UEM5Z3",
    type: "Intelligent MCCB",
    range: "100…250A",
    description: "MCCB thông minh UEM5Z3 khung 100–250A.",
    category: "power-distribution",
    source: "web",
    image: img.mccb,
  },
  {
    id: "hfum3z",
    name: "HFUM3Z",
    type: "Electronic MCCB",
    range: "40…630A",
    description: "MCCB điện tử HFUM3Z theo catalog PDF (250/400/630).",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
  },
  {
    id: "hfum3",
    name: "HFUM3 / HFUM5",
    type: "MCCB",
    range: "AC800V · 100…250A+",
    description: "MCCB HFUM3/HFUM5 cho phân phối AC cao áp thấp.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
  },
  {
    id: "uem6h",
    name: "UEM6H",
    type: "2P DC MCCB",
    range: "250~400A · DC1500V",
    description: "MCCB DC 2 cực UEM6H cho ứng dụng PV/ESS cao áp DC.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
    highlights: ["DC1500V"],
  },
  {
    id: "uem1e",
    name: "UEM1E",
    type: "2P DC MCCB",
    range: "200…320A",
    description: "MCCB DC UEM1E chuẩn UL cho thị trường Bắc Mỹ.",
    category: "power-distribution",
    source: "web",
    image: img.mccb,
    highlights: ["UL"],
  },
  {
    id: "uem6hg",
    name: "UEM6HG",
    type: "2P DC Disconnector",
    range: "250~500A",
    description: "Dao cách ly DC 2P UEM6HG.",
    category: "power-distribution",
    source: "web",
    image: img.catalogMccb,
  },
  {
    id: "uem1eg",
    name: "UEM1EG",
    type: "2P DC Disconnector",
    range: "200…320A",
    description: "Dao cách ly DC UEM1EG (UL).",
    category: "power-distribution",
    source: "web",
    image: img.catalogMccb,
  },
  {
    id: "uem5dc",
    name: "UEM5DC",
    type: "3–4P DC MCCB",
    range: "100…630A · DC1000V",
    description: "MCCB DC nhiều cực UEM5DC.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
  },
  {
    id: "uem5dh",
    name: "UEM5DH",
    type: "3–4P DC MCCB",
    range: "100…250A · DC1000–1500V",
    description: "MCCB DC UEM5DH cho dải điện áp DC cao.",
    category: "power-distribution",
    source: "both",
    image: img.mccb,
  },
  {
    id: "hfug3v",
    name: "HFUG3V",
    type: "DC Switch-Disconnector",
    range: "320A / 630A · DC1500V",
    description:
      "Dao cách ly DC HFUG3V cấu trúc mới, hiệu năng cao cho ESS/PV.",
    category: "power-distribution",
    source: "both",
    image: img.catalogMccb,
    highlights: ["DC1500V", "IEC & UL"],
  },

  // ── New Energy / solutions from PDF ──
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

export function getProductsByCategory(category: ProductCategoryId | "all") {
  if (category === "all") return hongfaProducts;
  return hongfaProducts.filter((p) => p.category === category);
}
