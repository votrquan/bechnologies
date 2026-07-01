"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Clock,
  Database,
  TrendingUp,
  Radio,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Cpu,
  Network,
  Factory,
  Layers,
} from "lucide-react";

const tocItems = [
  "Giới thiệu hệ thống SCADA",
  "Cấu trúc và giao diện hệ thống",
  "Lợi ích mang lại",
];

const pyramidLevels = [
  { level: 5, name: "ERP", subtitle: "Enterprise Level", side: "left" },
  { level: 4, name: "MES", subtitle: "Management Level", side: "right" },
  {
    level: 3,
    name: "SCADA",
    subtitle: "Supervision Level",
    side: "left",
    highlight: true,
  },
  { level: 2, name: "PLC / PAC", subtitle: "Control Level", side: "right" },
  {
    level: 1,
    name: "Sensors, Actuators…",
    subtitle: "Field Level",
    side: "left",
  },
];

const scadaFunctions = [
  "Giám sát toàn bộ dây chuyền sản xuất theo thời gian thực",
  "Điều khiển thiết bị từ trung tâm vận hành",
  "Thu thập và lưu trữ dữ liệu vận hành",
  "Cảnh báo sự cố và hiển thị Alarm",
  "Thống kê sản lượng, tiêu thụ điện, trạng thái thiết bị",
  "Hỗ trợ truy xuất dữ liệu và báo cáo sản xuất",
  "Kết nối PLC, HMI, biến tần, cảm biến và thiết bị công nghiệp khác",
];

const architectureFlow = [
  {
    icon: Factory,
    title: "Thiết bị trường",
    desc: "Cảm biến, van, bơm, quạt — thu thập tín hiệu & thực thi điều khiển",
    color: "bg-green-600",
  },
  {
    icon: Cpu,
    title: "Thiết bị điều khiển",
    desc: "PLC (Siemens S7-1500, …) — xử lý logic, điều khiển thiết bị",
    color: "bg-brand-navy",
  },
  {
    icon: Network,
    title: "Mạng công nghiệp",
    desc: "Truyền dữ liệu giữa PLC và phòng điều khiển SCADA",
    color: "bg-brand-navy-mid",
  },
  {
    icon: Monitor,
    title: "Phòng SCADA",
    desc: "Trung tâm giám sát với màn hình tường & bàn điều khiển",
    color: "bg-brand-navy",
  },
];

const systemInterfaces = [
  {
    title: "Hệ thống Chiller",
    desc: "Giám sát hệ thống làm lạnh — sơ đồ P&ID, dữ liệu thời gian thực & biểu đồ xu hướng",
  },
  {
    title: "Hệ thống sấy",
    desc: "Theo dõi quy trình sấy — trạng thái thiết bị, nhiệt độ & biểu đồ vận hành",
  },
  {
    title: "Hệ thống XLNT",
    desc: "Giám sát xử lý nước thải — bể, bơm, đường ống & thông số vận hành",
  },
];

const benefits = [
  {
    icon: Monitor,
    title: "Giám sát dây chuyền theo thời gian thực",
    desc: "Theo dõi toàn bộ máy móc và dây chuyền trực tiếp trên màn hình",
  },
  {
    icon: Clock,
    title: "Giảm thời gian dừng máy",
    desc: "Phát hiện và cảnh báo lỗi nhanh để xử lý kịp thời",
  },
  {
    icon: Database,
    title: "Thu thập và lưu trữ dữ liệu tự động",
    desc: "Tự động ghi lại thông số vận hành và sản xuất",
  },
  {
    icon: TrendingUp,
    title: "Nâng cao hiệu suất và chất lượng sản xuất",
    desc: "Giúp hệ thống hoạt động ổn định và giảm sai sót",
  },
  {
    icon: Radio,
    title: "Hỗ trợ quản lý và điều khiển từ xa",
    desc: "Có thể theo dõi và điều khiển hệ thống từ xa",
  },
];

const comparisonTable = [
  {
    criteria: "Giám sát sản xuất",
    without: "Theo dõi thủ công tại từng máy",
    with: "Theo dõi toàn bộ dây chuyền theo thời gian thực trên máy tính/HMI",
  },
  {
    criteria: "Thu thập dữ liệu",
    without: "Ghi chép bằng tay hoặc không lưu",
    with: "Tự động lưu nhiệt độ, áp suất, sản lượng, lỗi máy…",
  },
  {
    criteria: "Cảnh báo sự cố",
    without: "Phát hiện chậm, phụ thuộc người vận hành",
    with: "Báo động ngay khi có lỗi, gửi cảnh báo nhanh",
  },
  {
    criteria: "Điều khiển hệ thống",
    without: "Phải thao tác trực tiếp từng thiết bị",
    with: "Điều khiển tập trung từ phòng điều khiển",
  },
  {
    criteria: "Hiệu suất sản xuất",
    without: "Dễ xảy ra gián đoạn và thất thoát",
    with: "Tăng năng suất, giảm thời gian dừng máy",
  },
  {
    criteria: "Truy xuất dữ liệu",
    without: "Khó kiểm tra lại dữ liệu cũ",
    with: "Có lịch sử vận hành, biểu đồ, báo cáo",
  },
  {
    criteria: "Bảo trì thiết bị",
    without: "Thường sửa chữa khi đã hỏng",
    with: "Hỗ trợ bảo trì dự đoán, phát hiện bất thường sớm",
  },
  {
    criteria: "Nhân công vận hành",
    without: "Cần nhiều người theo dõi",
    with: "Giảm số lượng nhân công giám sát",
  },
  {
    criteria: "Quản lý từ xa",
    without: "Không hỗ trợ hoặc rất hạn chế",
    with: "Có thể giám sát qua mạng nội bộ hoặc internet",
  },
  {
    criteria: "Chi phí đầu tư",
    without: "Chi phí đầu tư thấp",
    with: "Chi phí đầu tư ban đầu cao hơn",
    warning: true,
  },
  {
    criteria: "Khả năng mở rộng",
    without: "Khó nâng cấp đồng bộ",
    with: "Dễ mở rộng và tích hợp hệ thống mới",
  },
  {
    criteria: "Mức độ hiện đại hóa",
    without: "Mức tự động hóa thấp",
    with: "Phù hợp nhà máy thông minh, Industry 4.0",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-brand-cyan-readable uppercase tracking-wider mb-2">
      {children}
    </p>
  );
}

export default function ScadaSolution({ embedded = false }: { embedded?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      {...(!embedded ? { id: "scada" } : {})}
      className="py-20 lg:py-32 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="relative rounded-3xl overflow-hidden bg-brand-navy mb-20"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(102,255,224,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(102,255,224,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            <div className="relative px-6 py-16 lg:py-20 text-center">
              <p className="text-red-400 text-2xl sm:text-3xl font-bold mb-3 tracking-wide">
                GIẢI PHÁP
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug max-w-3xl mx-auto">
                ỨNG DỤNG SCADA TRONG TỰ ĐỘNG HÓA SẢN XUẤT
              </h2>
            </div>
          </motion.div>
        )}

        {/* ── Mục lục ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mb-20 p-6 lg:p-8 border-2 border-gray-200 rounded-2xl bg-gray-50"
        >
          <h3 className="text-lg font-bold text-brand-navy mb-6 text-center">
            Nội dung
          </h3>
          <ol className="space-y-3 max-w-xl mx-auto">
            {tocItems.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 text-brand-navy font-semibold text-sm sm:text-base"
              >
                <span className="text-brand-cyan-readable shrink-0">
                  {["I", "II", "III"][i]}.
                </span>
                {item}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ═══ I. GIỚI THIỆU HỆ THỐNG SCADA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <SectionLabel>I. Giới thiệu hệ thống SCADA</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
            SCADA là gì?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
            <strong className="text-brand-navy">SCADA</strong> (Supervisory
            Control And Data Acquisition) là hệ thống giám sát, điều khiển và
            thu thập dữ liệu trong công nghiệp. Hệ thống cho phép doanh nghiệp
            theo dõi trạng thái thiết bị, vận hành máy móc và quản lý dữ liệu
            sản xuất theo thời gian thực.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Automation Pyramid */}
            <div>
              <h4 className="font-bold text-brand-navy mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-cyan-readable" />
                Automation Pyramid
              </h4>
              <div className="space-y-2">
                {pyramidLevels.map((lvl) => (
                  <div
                    key={lvl.level}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                      lvl.highlight
                        ? "bg-red-50 border-2 border-red-400 ring-2 ring-red-200"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        lvl.highlight
                          ? "bg-red-500 text-white"
                          : "bg-brand-navy text-white"
                      }`}
                    >
                      L{lvl.level}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-bold text-sm ${lvl.highlight ? "text-red-600" : "text-brand-navy"}`}
                      >
                        {lvl.name}
                      </p>
                      <p className="text-xs text-gray-500">{lvl.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Functions */}
            <div>
              <h4 className="font-bold text-brand-navy mb-6">
                Chức năng chính của hệ thống SCADA
              </h4>
              <ul className="space-y-3">
                {scadaFunctions.map((fn) => (
                  <li
                    key={fn}
                    className="flex gap-3 text-sm text-gray-700 bg-brand-surface p-3 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan-readable shrink-0" />
                    {fn}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ═══ II. CẤU TRÚC VÀ GIAO DIỆN ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-20"
        >
          <SectionLabel>II. Cấu trúc và giao diện hệ thống</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10">
            Luồng dữ liệu hệ thống SCADA
          </h3>

          {/* Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {architectureFlow.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="p-5 bg-white border border-gray-100 rounded-2xl hover:border-brand-navy/25 hover:shadow-lg transition-all h-full">
                  <div
                    className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-sm mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < architectureFlow.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cyan-readable z-10" />
                )}
              </div>
            ))}
          </div>

          {/* System interfaces */}
          <p className="text-sm font-bold text-brand-navy mb-4">
            Giao diện hệ thống
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {systemInterfaces.map((sys) => (
              <div
                key={sys.title}
                className="p-5 bg-brand-navy rounded-2xl text-white hover:bg-brand-navy-hover transition-colors"
              >
                <h4 className="font-bold text-brand-cyan text-sm mb-2">
                  {sys.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {sys.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══ III. LỢI ÍCH MANG LẠI ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <SectionLabel>III. Lợi ích mang lại</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10">
            Lợi ích khi triển khai SCADA
          </h3>

          {/* 5 benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 text-center bg-brand-surface rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto bg-brand-navy rounded-2xl flex items-center justify-center mb-4">
                  <b.icon className="w-7 h-7 text-brand-cyan" />
                </div>
                <h4 className="font-bold text-brand-navy text-xs mb-2">
                  {b.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold w-10">
                    STT
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Tiêu chí
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Không sử dụng SCADA
                  </th>
                  <th className="px-4 py-3 text-left font-semibold bg-green-700">
                    Có sử dụng SCADA
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr
                    key={row.criteria}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-500 font-medium">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 font-semibold text-brand-navy">
                      {row.criteria}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <span className="flex gap-2 items-start">
                        <XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                        {row.without}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-3 ${row.warning ? "bg-orange-50 text-orange-800" : "bg-green-50 text-green-900"}`}
                    >
                      <span className="flex gap-2 items-start">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${row.warning ? "text-orange-500" : "text-green-600"}`}
                        />
                        {row.with}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-hover transition-colors duration-300"
          >
            <Monitor className="w-5 h-5 text-brand-cyan" />
            Tư vấn giải pháp SCADA
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
