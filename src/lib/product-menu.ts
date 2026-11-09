export type ProductMenuLink = {
  label: string;
  href: string;
  /** Open in new tab (Hongfa.com or local catalog when preferred) */
  external?: boolean;
};

export type ProductMenuCategory = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children: ProductMenuLink[];
};

/**
 * Danh mục Sản phẩm theo cấu trúc Hongfa (flyout 2 cấp).
 * Thứ tự ưu tiên: Điện áp thấp → LV&MV → Rơ Le → Bộ ngắt chân không → …
 * Thiết bị điện áp thấp → catalog nội bộ /product; còn lại → hongfa.com.
 */
export const productMenuCategories: ProductMenuCategory[] = [
  {
    id: "low-voltage",
    label: "Thiết Bị Điện Áp Thấp",
    href: "/product",
    children: [
      {
        label: "Linh Kiện Phân Phối Điện",
        href: "/product?cat=power-distribution",
      },
      {
        label: "Thiết Bị Bảo Vệ Thanh Ray DIN",
        href: "/product?cat=din-rail",
      },
      {
        label: "Thiết Bị Điều Khiển",
        href: "/product?cat=control-gear",
      },
    ],
  },
  {
    id: "lv-mv",
    label: "LV&MV Devices",
    href: "https://www.hongfa.com/product/category/mv-lv-switchgear-apparatus",
    external: true,
    children: [
      {
        label: "Thiết Bị Đóng Cắt Trung Thế",
        href: "https://www.hongfa.com/product/list/mv-switchgear",
        external: true,
      },
      {
        label: "Thiết Bị Đóng Cắt Hạ Thế",
        href: "https://www.hongfa.com/product/list/lv-switchgear",
        external: true,
      },
    ],
  },
  {
    id: "relays",
    label: "Rơ Le",
    href: "https://www.hongfa.com/product/category/relays",
    external: true,
    children: [
      {
        label: "Rơ Le Công Suất",
        href: "https://www.hongfa.com/Products/relays/power-relay",
        external: true,
      },
      {
        label: "Rơ Le Ô Tô",
        href: "https://www.hongfa.com/Products/relays/automotive-relay",
        external: true,
      },
      {
        label: "High Voltage DC Relay",
        href: "https://www.hongfa.com/Products/relays/dc-relay",
        external: true,
      },
      {
        label: "Rơ-Le Chốt",
        href: "https://www.hongfa.com/Products/relays/latching-relay",
        external: true,
      },
      {
        label: "Rơ Le Tín Hiệu",
        href: "https://www.hongfa.com/product-v2/relays/signal-relay",
        external: true,
      },
      {
        label: "Rơ Le Tần Số Cao",
        href: "https://www.hongfa.com/product/list/high-frequency-relay",
        external: true,
      },
      {
        label: "Rơ-Le Lưỡi Gà",
        href: "https://www.hongfa.com/product/list/reed-relay",
        external: true,
      },
      {
        label: "Rơ Le Công Nghiệp",
        href: "https://www.hongfa.com/Products/relays/industrial-relay",
        external: true,
      },
      {
        label: "Rơ-Le Bán Dẫn",
        href: "https://www.hongfa.com/product/list/solid-state-relay",
        external: true,
      },
      {
        label: "Ổ Cắm Rơ Le",
        href: "https://www.hongfa.com/product/list/relay-socket",
        external: true,
      },
      {
        label: "Relay Module",
        href: "https://www.hongfa.com/product/list/relay-module",
        external: true,
      },
    ],
  },
  {
    id: "vacuum-interrupters",
    label: "Bộ Ngắt Chân Không",
    href: "https://www.hongfa.com/product/category/vacuum-interrupter",
    external: true,
    children: [
      {
        label: "VI Cho Máy Cắt",
        href: "https://www.hongfa.com/product/list/vacuum-interrupters-for-circuit-breaker",
        external: true,
      },
      {
        label: "VI Cho Công Tắc Tải",
        href: "https://www.hongfa.com/product/list/vacuum-interrupter-for-load-switch",
        external: true,
      },
      {
        label: "VI Cho Công Tắc Tơ",
        href: "https://www.hongfa.com/product/list/vacuum-interrupter-for-contactor",
        external: true,
      },
    ],
  },
  {
    id: "electronic-module",
    label: "Mô-Đun Điện Tử Ứng Dụng",
    href: "https://www.hongfa.com/product/category/electronic_module",
    external: true,
    children: [
      {
        label: "Mô-Đun Rơ-Le An Toàn",
        href: "https://www.hongfa.com/product/list/safe-relay-module",
        external: true,
      },
      {
        label: "Mô-Đun Rơ-Le Khởi Động Động Cơ",
        href: "https://www.hongfa.com/product/list/motor-start-relay-module",
        external: true,
      },
      {
        label: "Switching Power Supply Module",
        href: "https://www.hongfa.com/product/list/switching-power-supply-module",
        external: true,
      },
      {
        label: "Interface Module",
        href: "https://www.hongfa.com/product/list/Interface-module",
        external: true,
      },
      {
        label: "Mô-Đun Rơ-Le Điện Từ",
        href: "https://www.hongfa.com/product/list/electromagnetic-relay-module",
        external: true,
      },
      {
        label: "Mô-Đun Rơ-Le Thời Gian",
        href: "https://www.hongfa.com/product/list/time-relay-module",
        external: true,
      },
      {
        label: "Mô-Đun Rơ-Le Giám Sát",
        href: "https://www.hongfa.com/product/list/monitor-relay-module",
        external: true,
      },
    ],
  },
  {
    id: "connectors",
    label: "Đầu Nối",
    href: "https://www.hongfa.com/product/category/connectors",
    external: true,
    children: [
      {
        label: "RF Connector",
        href: "https://www.hongfa.com/product/list/rf-connector",
        external: true,
      },
      {
        label: "Rectangular Power Connector",
        href: "https://www.hongfa.com/product/list/power-connector",
        external: true,
      },
      {
        label: "Circular Power Connector",
        href: "https://www.hongfa.com/product/list/circular-power-connector",
        external: true,
      },
      {
        label: "Printed Circuit Board Connector",
        href: "https://www.hongfa.com/product/list/printed-circuit-board-connector",
        external: true,
      },
      {
        label: "Industrial Connector",
        href: "https://www.hongfa.com/product/list/industrial-connector",
        external: true,
      },
    ],
  },
  {
    id: "film-capacitors",
    label: "Tụ Điện Màng",
    href: "https://www.hongfa.com/product/category/film-capacitors",
    external: true,
    children: [
      {
        label: "EMI (Interference Suppression) Capacitor",
        href: "https://www.hongfa.com/product/list/emi-capacitor",
        external: true,
      },
      {
        label: "Motor Run Capacitor",
        href: "https://www.hongfa.com/product/list/motor-run-capacitor",
        external: true,
      },
      {
        label: "Tụ Điện Tử Công Suất",
        href: "https://www.hongfa.com/product/list/power-electronic-capacitor",
        external: true,
      },
    ],
  },
  {
    id: "current-sensor",
    label: "Cảm Biến Dòng Điện",
    href: "https://www.hongfa.com/product/category/current-sensor",
    external: true,
    children: [
      {
        label: "Biến Dòng",
        href: "https://www.hongfa.com/product/list/current-transformer",
        external: true,
      },
      {
        label: "Cuộn Dây Rogowski",
        href: "https://www.hongfa.com/product/list/rogowski-coils",
        external: true,
      },
      {
        label: "Cảm Biến Hall",
        href: "https://www.hongfa.com/product/list/hall-sensor",
        external: true,
      },
      {
        label: "Cổng Từ Thông",
        href: "https://www.hongfa.com/product/list/fluxgate",
        external: true,
      },
    ],
  },
  {
    id: "fuse",
    label: "Cầu Chì",
    href: "https://www.hongfa.com/product/category/fuse",
    external: true,
    children: [
      {
        label: "Cầu Chì Điện",
        href: "https://www.hongfa.com/product/list/electrical-fuse",
        external: true,
      },
    ],
  },
];

/** @deprecated dùng productMenuCategories */
export const productMenuColumns = productMenuCategories.map((cat) => ({
  title: cat.label,
  href: cat.href,
  links: cat.children,
}));
