"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe,
  Leaf,
  MapPin,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";

const tocItems = [
  { id: "part-1", label: "Phần I. Giới thiệu hệ thống ĐMT & sự cần thiết đầu tư" },
  { id: "investment", label: "Sự cần thiết đầu tư" },
  { id: "system", label: "Hệ thống điện mặt trời hòa lưới bám tải" },
  { id: "part-2", label: "Phần II. Thiết kế cơ sở hệ thống NLMT" },
  { id: "consumption", label: "Hiện trạng & nhu cầu tiêu thụ điện" },
  { id: "capacity", label: "Lựa chọn công suất lắp đặt" },
  { id: "output", label: "Sản lượng điện NLMT theo trạm" },
  { id: "site-plan", label: "Mặt bằng & vị trí lắp đặt" },
  { id: "inverter", label: "Nhà Inverter & sơ đồ đấu nối" },
  { id: "summary", label: "Thông tin dự án & thiết bị chính" },
];

const investmentReasons = [
  {
    icon: MapPin,
    title: "Lợi thế địa lý",
    color: "bg-sky-100 text-sky-800",
    desc: "Xã Núi Thành, Đà Nẵng có điều kiện thuận lợi cho phát triển điện mặt trời — cường độ bức xạ trung bình ~1.642,2 kWh/m²/năm, 3,5–4 giờ nắng/ngày.",
  },
  {
    icon: TrendingUp,
    title: "Hiệu quả kinh tế",
    color: "bg-teal-100 text-teal-800",
    desc: "Giá điện tăng mạnh giai đoạn 2022–2025 làm chi phí vận hành cao; đầu tư NLMT giúp giảm chi phí, hạn chế rủi ro biến động giá điện với thời gian dự án 25 năm.",
  },
  {
    icon: Globe,
    title: "Chính sách nhà nước",
    color: "bg-green-100 text-green-800",
    desc: "Định hướng quy hoạch Chính phủ mở rộng năng lượng tái tạo, giúp đầu tư hệ thống điện mặt trời dễ dàng và ít rủi ro hơn.",
  },
  {
    icon: Leaf,
    title: "Môi trường & cạnh tranh",
    color: "bg-emerald-100 text-emerald-800",
    desc: "Sử dụng điện mặt trời thay thế điện lưới giúp giảm phát thải nhà kính, nâng cao chỉ số xanh và tăng sức cạnh tranh.",
  },
];

const systemFeatures = [
  "Ưu tiên sử dụng tối đa sản lượng điện mặt trời cho phụ tải; thiếu hụt sẽ nhận thêm điện từ lưới.",
  "COM100E theo dõi, giám sát sản lượng NLMT và ngăn điện dư thừa phát ngược ra lưới (Zero Export).",
  "Giám sát và thu thập dữ liệu thời gian thực qua website hoặc ứng dụng iSolarCloud trên smartphone.",
];

const consumptionNotes = [
  "Tiêu thụ điện theo tháng ổn định (746k–848k kWh), trừ tháng 2 do Tết Nguyên đán; dữ liệu theo giờ là cơ sở tính toán công suất NLMT.",
  "Nhà máy mua điện theo biểu giá hạ áp từng trạm — hệ thống NLMT được thiết kế tối ưu theo từng trạm để tự tiêu thụ tối đa.",
  "Hiệu quả tài chính (ROI) được tính dựa trên biểu giá điện hạ áp hiện hành.",
];

const capacityOptions = [
  {
    name: "Phương án 1",
    subtitle: "Công suất trung bình cả năm",
    capacity: "749 kWp DC / 600 kW AC",
    surplus: "19%",
    investment: "9,766 tỷ VNĐ",
    payback: "6 năm 8 tháng",
    lcoe: "805 VNĐ/kWh",
    highlight: false,
  },
  {
    name: "Phương án 2",
    subtitle: "Công suất vào mùa nắng (được chọn)",
    capacity: "456 kWp DC / 375 kW AC",
    surplus: "3%",
    investment: "5,945 tỷ VNĐ",
    payback: "5 năm 4 tháng",
    lcoe: "667 VNĐ/kWh",
    highlight: true,
  },
];

const stationOutput = [
  {
    station: "TBA T1",
    panels: 702,
    kwp: 456.3,
    kw: 375,
    loadAvg: "3.110 kWh/ngày",
    solarAvg: "1.745 kWh/ngày",
    coverage: "56%",
    image: "/images/solar/slide-output-t1.png",
  },
  {
    station: "TBA T2",
    panels: 666,
    kwp: 432.9,
    kw: 350,
    loadAvg: "2.627 kWh/ngày",
    solarAvg: "1.651 kWh/ngày",
    coverage: "63%",
    image: "/images/solar/slide-output-t2.png",
  },
];

const sitePlan = [
  { station: "TBA T1", area: "Xưởng lắp ráp", panels: 702, kwp: 456.3, kw: 375 },
  { station: "TBA T2", area: "Xưởng lắp ráp", panels: 666, kwp: 432.9, kw: 350 },
  { station: "TBA T3", area: "Xưởng lắp ráp", panels: 1152, kwp: 748.8, kw: 600 },
  { station: "TBA T5", area: "Xưởng lắp ráp", panels: 90, kwp: 58.5, kw: 50 },
  { station: "TBA T6", area: "Xưởng lắp ráp", panels: 288, kwp: 187.2, kw: 150 },
  { station: "TBA T4", area: "Xưởng hàn", panels: 1680, kwp: 1092, kw: 900 },
];

const designNotes = [
  "Chọn mái gần điểm đấu nối lưới để rút ngắn đường truyền, tối ưu chi phí cáp và giảm tổn thất.",
  "Không lắp trên mái khu vực sơn/ED để đảm bảo an toàn PCCC; tránh vùng có nhiều ống thông gió gây che bóng.",
  "Công suất PV thiết kế bám sát nhu cầu phụ tải; góc nghiêng tấm pin theo độ dốc mái tôn.",
  "Bố trí 4.578 tấm PV Longi 650Wp; đấu nối tại từng trạm biến áp với chế độ Zero Export.",
];

const projectSummary = [
  { label: "Diện tích lắp đặt", value: "21.500 m²" },
  { label: "Tấm PV NLMT Longi", value: "4.578 tấm" },
  { label: "Công suất lắp đặt DC", value: "2.975,7 kWp" },
  { label: "Công suất lắp đặt AC", value: "2.425 kW" },
  { label: "Inverter Sungrow", value: "13×150kW, 3×125kW, 2×50kW" },
  { label: "Sản lượng điện năm đầu", value: "4.194,5 MWh" },
  { label: "Chi phí đầu tư dự kiến", value: "38.801.175.902 VNĐ" },
  { label: "Thời gian thu hồi vốn", value: "5 năm 1 tháng" },
  { label: "LCOE", value: "642 VNĐ/kWh" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-brand-cyan-readable uppercase tracking-wider mb-2">
      {children}
    </p>
  );
}

function SlideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white">
      <Image src={src} alt={alt} width={1200} height={700} className="w-full h-auto" />
    </div>
  );
}

export default function SolarSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-16 lg:py-24 bg-brand-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mục lục */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 p-6 lg:p-8 border-2 border-gray-200 rounded-2xl bg-white"
          aria-label="Mục lục báo cáo"
        >
          <h2 className="text-lg font-bold text-brand-navy mb-6 text-center">
            Nội dung báo cáo
          </h2>
          <ol className="space-y-3 max-w-3xl mx-auto">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-brand-navy hover:text-brand-navy-mid font-medium transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" />
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Key stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Diện tích lắp đặt", value: "21.500 m²", icon: Building2 },
            { label: "Công suất DC", value: "2.975,7 kWp", icon: Sun },
            { label: "Sản lượng/năm", value: "4.194,5 MWh", icon: Zap },
            { label: "Thu hồi vốn", value: "5 năm 1 tháng", icon: BarChart3 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 bg-brand-navy text-white rounded-2xl text-center"
            >
              <stat.icon className="w-6 h-6 text-brand-cyan mx-auto mb-2" />
              <p className="text-xl lg:text-2xl font-bold text-brand-cyan">
                {stat.value}
              </p>
              <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Phần I */}
        <section id="part-1" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
            Phần I. Giới thiệu hệ thống ĐMT & sự cần thiết đầu tư
          </h2>
        </section>

        <section id="investment" className="mb-20 scroll-mt-24">
          <SectionLabel>Sự cần thiết đầu tư</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-8">
            Vì sao doanh nghiệp nên đầu tư điện mặt trời?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {investmentReasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i }}
                className="p-5 bg-white rounded-2xl border border-gray-100"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <SlideImage
            src="/images/solar/slide-investment.png"
            alt="Sự cần thiết đầu tư điện mặt trời"
          />
        </section>

        <section id="system" className="mb-20 scroll-mt-24">
          <SectionLabel>Hệ thống điện mặt trời</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-4">
            Sơ đồ hệ thống điện năng lượng mặt trời hòa lưới bám tải
          </h3>
          <ul className="space-y-3 mb-8">
            {systemFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
          <SlideImage
            src="/images/solar/slide-system.png"
            alt="Sơ đồ hệ thống điện mặt trời hòa lưới bám tải"
          />
        </section>

        {/* Phần II */}
        <section id="part-2" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
            Phần II. Thiết kế cơ sở hệ thống NLMT
          </h2>
        </section>

        <section id="consumption" className="mb-20 scroll-mt-24">
          <SectionLabel>Phân tích tiêu thụ</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-6">
            Hiện trạng & nhu cầu tiêu thụ điện của nhà máy
          </h3>
          <ul className="space-y-3 mb-8">
            {consumptionNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
          <SlideImage
            src="/images/solar/slide-consumption.png"
            alt="Bảng điện năng tiêu thụ theo tháng và theo giờ"
          />
        </section>

        <section id="capacity" className="mb-20 scroll-mt-24">
          <SectionLabel>Lựa chọn công suất</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-6">
            Lựa chọn công suất lắp đặt điện mặt trời (TBA T1)
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {capacityOptions.map((opt) => (
              <div
                key={opt.name}
                className={`p-6 rounded-2xl border-2 ${
                  opt.highlight
                    ? "border-brand-cyan bg-brand-cyan-soft/30"
                    : "border-gray-200 bg-white"
                }`}
              >
                {opt.highlight && (
                  <span className="inline-block px-3 py-1 bg-brand-navy text-brand-cyan text-xs font-bold rounded-full mb-3">
                    Được khuyến nghị
                  </span>
                )}
                <h4 className="font-bold text-brand-navy text-lg">{opt.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{opt.subtitle}</p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Công suất:</dt>
                    <dd className="font-semibold text-brand-navy">{opt.capacity}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Điện dư TB:</dt>
                    <dd className="font-semibold text-red-600">{opt.surplus}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Đầu tư:</dt>
                    <dd className="font-semibold">{opt.investment}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Hoàn vốn:</dt>
                    <dd className="font-semibold">{opt.payback}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">LCOE:</dt>
                    <dd className="font-semibold">{opt.lcoe}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-8 p-4 bg-white rounded-xl border border-gray-100">
            <strong className="text-brand-navy">Kết luận:</strong> Phương án 2 tối ưu
            hơn về vốn đầu tư, thời gian hoàn vốn, đáp ứng nhu cầu thực tế và tránh
            lãng phí điện dư do ràng buộc Zero Export — áp dụng cho tất cả trạm T2–T6.
          </p>

          <SlideImage
            src="/images/solar/slide-capacity-t1.png"
            alt="So sánh phương án công suất lắp đặt TBA T1"
          />
        </section>

        <section id="output" className="mb-20 scroll-mt-24">
          <SectionLabel>Sản lượng dự kiến</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-8">
            Sản lượng điện NLMT theo trạm biến áp
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {stationOutput.map((station) => (
              <div
                key={station.station}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-5 bg-brand-navy text-white">
                  <h4 className="font-bold text-lg">{station.station}</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    {station.panels} tấm · {station.kwp} kWp · {station.kw} kW AC
                  </p>
                </div>
                <div className="p-5 grid grid-cols-3 gap-3 text-center text-sm mb-4">
                  <div>
                    <p className="text-gray-500">Phụ tải TB</p>
                    <p className="font-bold text-brand-navy">{station.loadAvg}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">NLMT TB</p>
                    <p className="font-bold text-brand-navy">{station.solarAvg}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Đáp ứng</p>
                    <p className="font-bold text-brand-cyan-readable">
                      {station.coverage}
                    </p>
                  </div>
                </div>
                <SlideImage src={station.image} alt={`Sản lượng ${station.station}`} />
              </div>
            ))}
          </div>
        </section>

        <section id="site-plan" className="mb-20 scroll-mt-24">
          <SectionLabel>Mặt bằng lắp đặt</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-6">
            Mặt bằng tổng thể vị trí lắp đặt hệ thống điện NLMT
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm mb-6">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-4 py-3 text-left">Trạm</th>
                  <th className="px-4 py-3 text-left">Khu vực</th>
                  <th className="px-4 py-3 text-right">Số tấm PV</th>
                  <th className="px-4 py-3 text-right">kWp</th>
                  <th className="px-4 py-3 text-right">kW AC</th>
                </tr>
              </thead>
              <tbody>
                {sitePlan.map((row, i) => (
                  <tr
                    key={row.station}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-brand-navy">
                      {row.station}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.area}</td>
                    <td className="px-4 py-3 text-right">{row.panels}</td>
                    <td className="px-4 py-3 text-right">{row.kwp}</td>
                    <td className="px-4 py-3 text-right">{row.kw}</td>
                  </tr>
                ))}
                <tr className="bg-brand-cyan-soft font-bold text-brand-navy">
                  <td className="px-4 py-3" colSpan={2}>
                    TỔNG (21.500 m²)
                  </td>
                  <td className="px-4 py-3 text-right">4.578</td>
                  <td className="px-4 py-3 text-right">2.975,7</td>
                  <td className="px-4 py-3 text-right">2.425</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-2 mb-8">
            {designNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                {note}
              </li>
            ))}
          </ul>

          <div className="space-y-8">
            <SlideImage
              src="/images/solar/slide-site-plan.png"
              alt="Mặt bằng tổng thể lắp đặt NLMT"
            />
            <SlideImage
              src="/images/solar/slide-3d-layout.png"
              alt="3D layout lắp đặt pin NLMT"
            />
          </div>
        </section>

        <section id="inverter" className="mb-20 scroll-mt-24">
          <SectionLabel>Nhà Inverter & đấu nối</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-8">
            Thiết kế nhà Inverter & sơ đồ đấu nối điện NLMT
          </h3>

          <div className="space-y-8">
            <SlideImage
              src="/images/solar/slide-inverter-section.png"
              alt="Mặt cắt điển hình nhà Inverter khu vực"
            />
            <SlideImage
              src="/images/solar/slide-inverter-3d.png"
              alt="3D nhà Inverter xưởng lắp ráp và xưởng hàn"
            />
            <SlideImage
              src="/images/solar/slide-wiring-1.png"
              alt="Sơ đồ đấu nối NLMT TBA T1–T3"
            />
            <SlideImage
              src="/images/solar/slide-wiring-2.png"
              alt="Sơ đồ đấu nối NLMT TBA T4–T6"
            />
          </div>
        </section>

        <section id="summary" className="mb-16 scroll-mt-24">
          <SectionLabel>Tổng hợp dự án</SectionLabel>
          <h3 className="text-2xl font-bold text-brand-navy mb-8">
            Thông tin dự án và thiết bị chính
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projectSummary.map((item) => (
              <div
                key={item.label}
                className="p-5 bg-white rounded-xl border border-gray-100"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="font-bold text-brand-navy">{item.value}</p>
              </div>
            ))}
          </div>

          <SlideImage
            src="/images/solar/slide-project-summary.png"
            alt="Bảng thông tin dự án và thiết bị chính"
          />
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-hover transition-colors duration-300"
          >
            Tư vấn dự án điện mặt trời
            <ArrowRight className="w-5 h-5 text-brand-cyan" />
          </Link>
        </div>
      </div>
    </div>
  );
}
