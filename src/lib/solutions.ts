import {
  BatteryCharging,
  Monitor,
  BrainCircuit,
  Sun,
  type LucideIcon,
} from "lucide-react";

export type SolutionPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  tag?: string;
};

export const featuredSolutions: SolutionPage[] = [
  {
    slug: "energy",
    title: "Giải pháp tiết kiệm năng lượng trong sản xuất",
    shortTitle: "Tiết kiệm năng lượng",
    description:
      "Tối ưu hóa tiêu thụ điện, nâng cấp dây chuyền tự động hóa, giám sát năng lượng thời gian thực và cải tiến hệ thống khí nén, HVAC.",
    icon: BatteryCharging,
    color: "from-green-500 to-green-700",
    href: "/solutions/energy",
    tag: "Năng lượng",
  },
  {
    slug: "solar",
    title: "Phương án thiết kế dự án điện năng lượng mặt trời",
    shortTitle: "Điện mặt trời NLMT",
    description:
      "Báo cáo thiết kế hệ thống điện mặt trời hòa lưới bám tải — từ khảo sát tiêu thụ, lựa chọn công suất đến mặt bằng lắp đặt và sơ đồ đấu nối.",
    icon: Sun,
    color: "from-amber-500 to-orange-600",
    href: "/solutions/solar",
    tag: "Năng lượng tái tạo",
  },
  {
    slug: "scada",
    title: "Giải pháp SCADA giám sát & điều khiển",
    shortTitle: "Hệ thống SCADA",
    description:
      "Giám sát toàn bộ dây chuyền sản xuất theo thời gian thực, điều khiển thiết bị từ trung tâm và thu thập dữ liệu vận hành.",
    icon: Monitor,
    color: "from-brand-navy to-brand-navy-mid",
    href: "/solutions/scada",
    tag: "Tự động hóa",
  },
  {
    slug: "ai-camera",
    title: "Camera AI phân tích công thái học & năng suất lao động",
    shortTitle: "Camera AI công thái học",
    description:
      "Phát hiện tư thế nguy hiểm theo thời gian thực, tự động chấm điểm REBA và trực quan hóa dữ liệu trên dashboard.",
    icon: BrainCircuit,
    color: "from-orange-500 to-red-600",
    href: "/solutions/ai-camera",
    tag: "AI & Phân tích",
  },
];

export function getSolutionBySlug(slug: string) {
  return featuredSolutions.find((s) => s.slug === slug);
}
