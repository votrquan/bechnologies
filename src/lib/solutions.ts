import {
  BatteryCharging,
  Monitor,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { siteImages } from "@/lib/site-images";

export type SolutionPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  tag?: string;
  image: string;
  features: string[];
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
    image: siteImages.energy.dashboard,
    features: ["Giám sát điện", "Khí nén", "HVAC"],
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
    image: siteImages.scada.controlRoom,
    features: ["Giám sát realtime", "Điều khiển", "Báo cáo"],
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
    image: siteImages.products.scada,
    features: ["REBA", "An toàn lao động", "Dashboard"],
  },
];

export function getSolutionBySlug(slug: string) {
  return featuredSolutions.find((s) => s.slug === slug);
}
