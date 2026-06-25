"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Banknote,
  Cog,
  Wrench,
  LineChart,
  Settings,
  Gauge,
  Leaf,
  Shield,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Zap,
  Fan,
  Wind,
  Cpu,
  Volume2,
  Factory,
  Flower2,
  Bell,
  TrendingDown,
  TrendingUp,
  Clock,
  Monitor,
  SlidersHorizontal,
  GaugeCircle,
  Server,
} from "lucide-react";
import { siteImages } from "@/lib/site-images";

/* ─── Slide 3: Đặt vấn đề ─── */
const problems = [
  {
    icon: Banknote,
    accent: "bg-red-500",
    title: "Chi phí điện tăng 15–30% mỗi năm",
    desc: "Hóa đơn điện chiếm 20–40% tổng chi phí vận hành nhà máy, ảnh hưởng trực tiếp đến lợi nhuận.",
  },
  {
    icon: Cog,
    accent: "bg-yellow-500",
    title: "Thiết bị lỗi thời, tiêu hao điện lãng phí",
    desc: "Máy móc cũ không có hệ thống điều khiển thông minh, hoạt động không hiệu quả 24/7.",
  },
  {
    icon: Wrench,
    accent: "bg-orange-500",
    title: "Vận hành chưa tối ưu, lãng phí năng lượng",
    desc: "Máy móc thiết bị chạy không đúng tải, chế độ chờ tiêu thụ điện vô ích, thiếu lịch vận hành thông minh.",
  },
  {
    icon: LineChart,
    accent: "bg-green-500",
    title: "Khó kiểm soát và tối ưu năng lượng",
    desc: "Thiếu dữ liệu thực tế về mức tiêu thụ, không có căn cứ để cải thiện hiệu suất.",
  },
];

/* ─── Slide 4: Giới thiệu giải pháp ─── */
const solutions = [
  {
    icon: Settings,
    accent: "bg-brand-cyan",
    title: "Nâng cấp dây chuyền tự động hóa",
    desc: "Thay thế / cải tiến thiết bị cũ bằng hệ thống điều khiển biến tần (VFD), PLC hiện đại, giảm tiêu thụ điện 25–40%.",
  },
  {
    icon: BarChart3,
    accent: "bg-orange-500",
    title: "Giám sát năng lượng thời gian thực",
    desc: "Hệ thống SCADA theo dõi mức tiêu thụ từng thiết bị, phát hiện lãng phí ngay lập tức.",
  },
  {
    icon: Wrench,
    accent: "bg-yellow-500",
    title: "Bảo trì dự đoán thông minh",
    desc: "Cảm biến phân tích tình trạng máy, lên lịch bảo trì trước khi xảy ra sự cố, tránh tổn thất sản xuất.",
  },
  {
    icon: Leaf,
    accent: "bg-green-500",
    title: "Tích hợp năng lượng tái tạo",
    desc: "Kết hợp điện mặt trời vào dây chuyền sản xuất để giảm chi phí thêm 20–30%.",
    highlight: true,
  },
];

/* ─── Slide 5: Quy trình ─── */
const processSteps = [
  {
    step: "01",
    title: "Khảo sát hệ thống",
    desc: "Đánh giá thực trạng tiêu thụ năng lượng, xác định điểm lãng phí",
  },
  {
    step: "02",
    title: "Thiết kế giải pháp",
    desc: "Lập phương án kỹ thuật phù hợp, cam kết mức tiết kiệm cụ thể",
  },
  {
    step: "03",
    title: "Thi công & Lắp đặt",
    desc: "Triển khai không gián đoạn sản xuất, đúng tiến độ cam kết",
  },
  {
    step: "04",
    title: "Vận hành & Đào tạo",
    desc: "Bàn giao hệ thống, đào tạo đội ngũ vận hành tại chỗ",
  },
  {
    step: "05",
    title: "Hỗ trợ & Bảo hành",
    desc: "Theo dõi hiệu suất, hỗ trợ 24/7 trong suốt vòng đời dự án",
  },
];

/* ─── Slide 5: Cam kết ─── */
const commitments = [
  {
    icon: Shield,
    title: "Cam kết tiết kiệm bằng hợp đồng",
    desc: "Chúng tôi ký cam kết mức tiết kiệm tối thiểu. Nếu không đạt, hoàn tiền hoặc thi công lại.",
    accent: "text-brand-navy",
  },
  {
    icon: BarChart3,
    title: "Báo cáo hiệu suất minh bạch hàng tháng",
    desc: "Dashboard real-time, báo cáo ROI hàng tháng để khách hàng luôn nắm rõ kết quả đầu tư.",
    accent: "text-purple-600",
  },
  {
    icon: RefreshCw,
    title: "Giải pháp mở rộng linh hoạt",
    desc: "Hệ thống thiết kế để mở rộng theo từng giai đoạn, không cần đầu tư lại từ đầu khi mở rộng.",
    accent: "text-brand-cyan-readable",
  },
  {
    icon: CheckCircle2,
    title: "Thi công không gián đoạn sản xuất",
    desc: "Đội ngũ kỹ thuật giàu kinh nghiệm, triển khai đảm bảo nhà máy hoạt động liên tục.",
    accent: "text-red-500",
    highlight: true,
  },
];

/* ─── Slide 6: Máy nén khí – 3 vấn đề ─── */
const compressorIssues = [
  {
    icon: Wrench,
    accent: "border-green-500",
    badge: "20–35%",
    title: "Công nghệ cũ, hiệu suất kém",
    status: [
      "Hiệu suất thấp hơn 20–35% so với máy thế hệ mới",
      "Không có biến tần VFD điều chỉnh tốc độ",
      "Hệ thống làm mát kém, rò rỉ khí cao",
      "Chi phí bảo dưỡng & khắc phục sự cố cao",
    ],
    fixes: [
      "Thay máy nén khí với biến tần tích hợp",
      "Lắp VFD cho máy hiện hữu",
      "Kiểm tra rò rỉ định kỳ",
      "Cải tạo hệ thống làm mát",
    ],
  },
  {
    icon: Clock,
    accent: "border-orange-500",
    badge: "15–25%",
    title: "Vận hành không tải lớn",
    status: [
      "Tiêu thụ ~25% điện định mức khi chạy không tải",
      "Chưa lập lịch tắt theo ca sản xuất",
      "Hệ thống điều khiển chưa được tối ưu hóa",
      "Không giám sát nhu cầu thực tế",
    ],
    fixes: [
      "Lắp đặt PLC điều khiển tự động hệ thống",
      "Tích hợp cảm biến áp suất, van điều khiển",
      "Kết nối SCADA giám sát thời gian thực",
      "Lập lịch vận hành theo ca",
    ],
  },
  {
    icon: GaugeCircle,
    accent: "border-brand-navy-mid",
    badge: "14–20%",
    title: "Áp suất chưa tối ưu",
    status: [
      "Cài cố định 7–8 bar, thực tế chỉ cần 5–6 bar",
      "Tăng 1 bar = tăng ~7% điện tiêu thụ",
      "Không phân vùng áp suất theo nhu cầu",
      "Tăng rò rỉ & mài mòn thiết bị đầu cuối",
    ],
    fixes: [
      "Lắp bộ điều áp thông minh",
      "Hệ thống quản lý áp suất trung tâm",
      "Cảm biến áp suất tại điểm sử dụng",
      "Phân vùng áp suất theo khu vực",
    ],
  },
];

const compressorRoadmap = [
  {
    phase: "Giai đoạn 1",
    title: "Kiểm toán & đánh giá",
    items: [
      "Đo baseline tiêu thụ điện",
      "Kiểm tra rò rỉ khí nén",
      "Đánh giá hiệu suất máy",
    ],
  },
  {
    phase: "Giai đoạn 2",
    title: "Đầu tư nâng cấp",
    items: [
      "Lắp biến tần máy MNK",
      "Cài đặt lại áp suất tối ưu",
      "Lắp đặt hệ thống điều khiển tự động",
    ],
  },
];

const compressorEquipment = [
  { icon: Server, label: "Tủ điều khiển" },
  { icon: Monitor, label: "Màn hình điều khiển" },
  { icon: SlidersHorizontal, label: "Van điều khiển" },
  { icon: Gauge, label: "Cảm biến áp suất" },
  { icon: Settings, label: "Hệ thống quản lý áp suất" },
];

/* ─── Slide 7: Thông gió – 3 giải pháp ─── */
const ventilationSolutions = [
  {
    icon: Fan,
    accent: "border-green-600",
    accentBg: "bg-green-600",
    step: "1",
    title: "Lắp đặt biến tần",
    subtitle: "Điều khiển tốc độ theo nhu cầu",
    desc: "Biến tần (VFD) điều chỉnh tốc độ motor quạt theo nhu cầu thực tế, thay vì chạy tốc độ cố định 100% liên tục.",
    benefits: [
      { icon: Zap, text: "Tiết kiệm điện năng 20–35% so với tốc độ cố định" },
      { icon: Wrench, text: "Giảm mài mòn, tăng tuổi thọ motor và quạt" },
      { icon: BarChart3, text: "Điều chỉnh linh hoạt theo ca sản xuất và tải nhiệt" },
      { icon: Volume2, text: "Giảm tiếng ồn khi vận hành tốc độ thấp" },
    ],
  },
  {
    icon: Wind,
    accent: "border-orange-600",
    accentBg: "bg-orange-600",
    step: "2",
    title: "Lắp đặt van gió",
    subtitle: "Đóng/mở phòng tự động khi không dùng",
    desc: "Van gió (Motorized Damper) gắn tại từng phòng, tự động đóng khi không hoạt động, tập trung luồng gió vào khu vực đang sản xuất.",
    benefits: [
      { icon: Factory, text: "Tập trung thông gió vào khu vực đang hoạt động" },
      { icon: Banknote, text: "Giảm tổn thất gió vào phòng trống, tiết kiệm 15–25%" },
      { icon: RefreshCw, text: "Tích hợp PLC điều khiển theo lịch sản xuất" },
      { icon: Flower2, text: "Duy trì môi trường tối ưu, đảm bảo chất lượng sản phẩm" },
    ],
  },
  {
    icon: Cpu,
    accent: "border-purple-600",
    accentBg: "bg-purple-600",
    step: "3",
    title: "Lắp đặt PLC",
    subtitle: "Tối ưu hóa hệ thống điều khiển tự động",
    desc: "PLC (Programmable Logic Controller) điều phối toàn bộ hệ thống biến tần và van gió, tối ưu hóa năng lượng tiêu thụ theo thời gian thực.",
    benefits: [
      { icon: Settings, text: "Điều khiển tập trung biến tần và van gió tự động" },
      { icon: TrendingDown, text: "Giảm thiểu năng lượng tiêu thụ theo lịch vận hành" },
      { icon: Bell, text: "Cảnh báo sự cố tức thì, giám sát 24/7 toàn hệ thống" },
      { icon: TrendingUp, text: "Lưu trữ dữ liệu, phân tích hiệu suất và báo cáo tự động" },
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-brand-cyan-readable uppercase tracking-wider mb-2">
      {children}
    </p>
  );
}

function NavyCard({
  accent,
  children,
  className = "",
}: {
  accent: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-brand-navy text-white hover:bg-brand-navy-hover transition-colors duration-300 ${className}`}
    >
      <div className={`h-1.5 ${accent}`} />
      <div className="p-5 lg:p-6">{children}</div>
    </div>
  );
}

export default function EnergySolution({ embedded = false }: { embedded?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      {...(!embedded ? { id: "energy-saving" } : {})}
      className="py-20 lg:py-32 bg-brand-surface"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-navy/10 text-brand-navy text-sm font-semibold rounded-full mb-4">
              Giải pháp Solar & Tiết kiệm năng lượng
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Tiết kiệm năng lượng trong dây chuyền sản xuất
            </h2>
            <p className="text-gray-500 text-sm">First version: May 11, 2026</p>
          </motion.div>
        )}

        {/* ═══ I. ĐẶT VẤN ĐỀ ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mb-20"
        >
          <SectionLabel>Vấn đề doanh nghiệp đang đối mặt</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Chi phí năng lượng ngày càng tăng cao
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {problems.map((item) => (
              <NavyCard key={item.title} accent={item.accent}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </NavyCard>
            ))}
          </div>
        </motion.div>

        {/* ═══ II. GIỚI THIỆU GIẢI PHÁP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <SectionLabel>Giải pháp của chúng tôi</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Hệ thống tự động hóa thông minh — tiết kiệm tối đa
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {solutions.map((item) => (
              <NavyCard
                key={item.title}
                accent={item.accent}
                className={item.highlight ? "ring-2 ring-brand-cyan/40" : ""}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </NavyCard>
            ))}
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src={siteImages.energy.dashboard}
              alt="Dashboard quản lý năng lượng EMS"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* ═══ III. QUY TRÌNH & CAM KẾT ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-brand-navy mb-10 text-center">
            Quy trình và cam kết hiệu quả
          </h3>

          {/* Timeline */}
          <div className="mb-12">
            <p className="text-sm font-bold text-brand-navy mb-6">
              I. Quy trình triển khai
            </p>
            <div className="relative">
              <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-brand-navy/20" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative text-center">
                    <div className="w-12 h-12 mx-auto bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold mb-3 relative z-10">
                      {step.step}
                    </div>
                    <div className="p-4 bg-brand-navy rounded-xl text-white hover:bg-brand-navy-hover transition-colors">
                      <h4 className="font-semibold text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commitments */}
          <div>
            <p className="text-sm font-bold text-brand-navy mb-6">
              II. Cam kết hiệu quả
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {commitments.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300 ${
                    item.highlight
                      ? "border-red-200 bg-red-50/50"
                      : "border-gray-100"
                  }`}
                >
                  <item.icon
                    className={`w-8 h-8 mb-3 ${item.accent}`}
                  />
                  <h4
                    className={`font-bold text-sm mb-2 ${
                      item.highlight ? "text-red-600" : "text-brand-navy"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══ IV. DỰ ÁN MÁY NÉN KHÍ ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <SectionLabel>Dự án thực hiện</SectionLabel>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">
            Dự án cải tiến tiết kiệm năng lượng máy nén khí
          </h3>
          <p className="text-sm text-gray-600 mb-8">
            Phân tích 3 vấn đề chính &amp; lộ trình tiết kiệm 25–40% điện năng
          </p>

          <div className="mb-8 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src={siteImages.energy.compressor}
              alt="Hệ thống máy nén khí công nghiệp"
              width={1200}
              height={600}
              className="w-full h-auto object-cover max-h-80"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            {compressorIssues.map((col) => (
              <div
                key={col.title}
                className={`rounded-2xl border-2 ${col.accent} bg-white overflow-hidden hover:shadow-lg transition-shadow`}
              >
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <col.icon className="w-8 h-8 text-brand-navy" />
                    <span className="px-3 py-1 bg-brand-navy text-brand-cyan text-xs font-bold rounded-full">
                      {col.badge} tiết kiệm
                    </span>
                  </div>
                  <h4 className="font-bold text-brand-navy text-sm">
                    {col.title}
                  </h4>
                </div>
                <div className="p-5 grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                      ▶ Thực trạng
                    </p>
                    <ul className="space-y-1.5">
                      {col.status.map((s) => (
                        <li
                          key={s}
                          className="text-xs text-gray-600 flex gap-1.5"
                        >
                          <span className="text-red-400 shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy uppercase mb-2">
                      ▶ Giải pháp
                    </p>
                    <ul className="space-y-1.5">
                      {col.fixes.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-gray-600 flex gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan-readable shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap + Equipment */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <p className="text-sm font-bold text-brand-navy mb-4">
                Lộ trình thực hiện
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {compressorRoadmap.map((phase) => (
                  <div
                    key={phase.phase}
                    className="p-5 bg-white rounded-2xl border border-gray-100"
                  >
                    <p className="text-xs font-bold text-brand-cyan-readable mb-1">
                      {phase.phase}
                    </p>
                    <h4 className="font-bold text-brand-navy text-sm mb-3">
                      {phase.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-gray-600 flex gap-2"
                        >
                          <span className="text-brand-cyan">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-sm font-bold text-brand-navy mt-6 mb-4">
                Thiết bị triển khai
              </p>
              <div className="flex flex-wrap gap-3">
                {compressorEquipment.map((eq) => (
                  <div
                    key={eq.label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-brand-navy text-white rounded-xl text-xs font-medium hover:bg-brand-navy-hover transition-colors"
                  >
                    <eq.icon className="w-4 h-4 text-brand-cyan" />
                    {eq.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-brand-navy rounded-2xl text-white flex flex-col justify-center text-center hover:bg-brand-navy-hover transition-colors">
              <Leaf className="w-10 h-10 text-brand-cyan mx-auto mb-3" />
              <p className="text-brand-cyan text-sm font-semibold uppercase tracking-wide mb-2">
                Tiết kiệm tiềm năng
              </p>
              <p className="text-5xl font-bold text-brand-cyan mb-1">
                25 – 40%
              </p>
              <p className="text-gray-300 text-sm">điện năng tiêu thụ</p>
            </div>
          </div>
        </motion.div>

        {/* ═══ DỰ ÁN THÔNG GIÓ ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">
            Dự án tiết kiệm năng lượng hệ thống thông gió
          </h3>
          <p className="text-sm text-gray-600 mb-8">
            Tối ưu hóa năng lượng sử dụng hệ thống thông gió
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {ventilationSolutions.map((sol) => (
              <div
                key={sol.title}
                className={`rounded-2xl border-t-4 ${sol.accent} bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${sol.accentBg} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {sol.step}
                    </div>
                    <sol.icon className="w-8 h-8 text-brand-navy" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-base mb-1">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-brand-cyan-readable font-medium mb-3">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {sol.desc}
                  </p>

                  <p className="text-xs font-bold text-brand-navy uppercase mb-3">
                    Hiệu quả mang lại
                  </p>
                  <ul className="space-y-2.5">
                    {sol.benefits.map((b) => (
                      <li
                        key={b.text}
                        className="flex gap-2.5 text-xs text-gray-600"
                      >
                        <b.icon className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                        {b.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Footer bar */}
          <div className="mt-6 p-4 bg-brand-navy rounded-xl text-center">
            <p className="text-white text-sm font-medium">
              Tiết kiệm lên đến{" "}
              <span className="text-brand-cyan font-bold">25–40%</span> năng
              lượng &nbsp;|&nbsp; Giảm chi phí vận hành &nbsp;|&nbsp; Tăng độ
              bền thiết bị &nbsp;|&nbsp; Quản lý thông minh
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-hover transition-colors duration-300"
          >
            <Zap className="w-5 h-5 text-brand-cyan" />
            Tư vấn giải pháp Solar &amp; Tiết kiệm năng lượng
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
