"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  LayoutDashboard,
  Mail,
  Monitor,
  RefreshCw,
  Search,
  Shield,
  Smartphone,
  Timer,
  User,
  Video,
} from "lucide-react";

const tocItems = [
  { id: "intro", label: "I. Giới thiệu về giải pháp" },
  { id: "process", label: "II. Quy trình hoạt động" },
  { id: "tech", label: "III. Cấu trúc hệ thống & công nghệ" },
  { id: "demo", label: "IV. Demo phần mềm" },
  { id: "benefits", label: "V. Lợi ích mang lại & cam kết" },
];

const assessmentGroups = [
  {
    title: "Cổ, thân, chân",
    subtitle: "Nhóm A",
    items: [
      "Đánh giá góc cổ, tư thế thân và chân",
      "Tính điểm Group A theo tiêu chuẩn REBA",
    ],
  },
  {
    title: "Tay, cánh tay, cổ tay",
    subtitle: "Nhóm B",
    items: [
      "Đánh giá vị trí cánh tay trên, cánh tay dưới và cổ tay",
      "Tính điểm Group B theo tiêu chuẩn REBA",
    ],
  },
];

const additionalFactors = [
  {
    title: "Tải trọng / lực tác động",
    desc: "Cân nhắc trọng lượng nâng, lực tác động và chuyển động đột ngột.",
  },
  {
    title: "Coupling (Chất lượng cầm nắm)",
    desc: "Đánh giá chất lượng cầm nắm, độ ổn định và kiểm soát vật thể.",
  },
  {
    title: "Hoạt động lặp lại",
    desc: "Xem xét tần suất, thời lượng và lặp lại liên tục của thao tác.",
  },
];

const rebaScores = [
  { range: "1", label: "Rủi ro không đáng kể", color: "bg-green-500" },
  { range: "2–3", label: "Rủi ro thấp, có thể cần thay đổi", color: "bg-yellow-400" },
  { range: "4–7", label: "Rủi ro trung bình, cần điều tra thêm", color: "bg-orange-500" },
  { range: "8–10", label: "Rủi ro cao, cần thay đổi ngay", color: "bg-red-500" },
  { range: "11+", label: "Rủi ro rất cao, thay đổi ngay lập tức", color: "bg-red-900" },
];

const processSteps = [
  { step: "01", title: "Video input", desc: "Thu thập video từ camera tại khu vực sản xuất" },
  { step: "02", title: "Phát hiện con người", desc: "AI nhận diện người lao động trong khung hình" },
  { step: "03", title: "Tính toán tư thế", desc: "Ước lượng pose 2D/3D từ hình ảnh" },
  { step: "04", title: "Mô hình xương 3D", desc: "Xây dựng joint landmark và khung xương 3D" },
  { step: "05", title: "Nhóm A & B", desc: "Phân tích cổ/thân/chân và tay/cánh tay/cổ tay" },
  { step: "06", title: "Bảng C + Activity", desc: "Tổng hợp điểm và cộng điểm hoạt động" },
  { step: "07", title: "REBA Score", desc: "Xuất điểm rủi ro công thái học cuối cùng" },
];

const techStack = [
  {
    category: "Ngôn ngữ lập trình",
    component: "Python",
    spec: "Phiên bản 3.10+",
    note: "",
  },
  {
    category: "Hiểu tư thế & chuyển động con người",
    component: "RTMPose · MotionBERT · MMPose",
    spec: "Ước lượng tư thế 2D/3D và phân tích chuyển động theo thời gian",
    note: "",
  },
  {
    category: "Ghi nhận chuyển động đa phương thức",
    component: "2–4 RGB Camera/khu vực",
    spec: "Độ phân giải 4MP, ống kính góc rộng 2.8mm, hỗ trợ API",
    note: "Option: IMU + Depth Camera cho độ chính xác cao hơn",
  },
  {
    category: "AI công thái học Vision-Language",
    component: "Vision-Language Models (VLMs)",
    spec: "Suy luận công thái học và nhận diện tư thế",
    note: "",
  },
  {
    category: "Bộ máy đánh giá rủi ro công thái học",
    component: "REBA",
    spec: "Tự động chấm điểm đánh giá toàn thân REBA",
    note: "",
  },
  {
    category: "Phân tích rủi ro cơ xương khớp",
    component: "Phân tích tư thế theo thời gian",
    spec: "Phát hiện lặp lại thao tác và mệt mỏi",
    note: "",
  },
  {
    category: "Framework Computer Vision",
    component: "OpenCV",
    spec: "Phiên bản 4.9+",
    note: "",
  },
  {
    category: "Theo dõi bàn tay & chuyển động tinh",
    component: "MediaPipe",
    spec: "Theo dõi landmark bàn tay và chuyển động chi tiết",
    note: "",
  },
  {
    category: "Backend Deep Learning",
    component: "PyTorch",
    spec: "Phiên bản 2.2+ với tăng tốc CUDA",
    note: "",
  },
  {
    category: "Tính toán số học",
    component: "NumPy",
    spec: "Phiên bản 1.26+",
    note: "",
  },
  {
    category: "Dịch vụ mô hình AI",
    component: "FastAPI + Uvicorn",
    spec: "API phục vụ suy luận AI",
    note: "",
  },
  {
    category: "GPU Runtime",
    component: "CUDA + cuDNN",
    spec: "CUDA 12.1 + cuDNN 8.9",
    note: "",
  },
  {
    category: "AI bảo vệ quyền riêng tư",
    component: "Federated / privacy-preserving pose estimation",
    spec: "Giám sát công thái học đảm bảo quyền riêng tư",
    note: "",
  },
  {
    category: "Container & triển khai",
    component: "Docker + NVIDIA Container Toolkit",
    spec: "Triển khai container GPU",
    note: "",
  },
  {
    category: "Hệ điều hành",
    component: "Ubuntu / Windows 11",
    spec: "Ubuntu 22.04 LTS / Windows 11",
    note: "",
  },
  {
    category: "Mô hình triển khai",
    component: "On-Premise Local VPS",
    spec: "AI Service, Backend API, PostgreSQL, Dashboard Web Application",
    note: "Tất cả chạy mạng nội bộ trong nhà máy / doanh nghiệp",
  },
];

const demoHighlights = [
  "Hệ thống không chỉ phát hiện tư thế nguy hiểm theo thời gian thực mà còn trực quan hóa dữ liệu thành dashboard giúp doanh nghiệp xác định điểm gây lãng phí thao tác và cải thiện năng suất.",
  "Có thể cảnh báo qua app/email nếu công nhân đang sai tư thế.",
  "Phát triển phần mềm theo nhu cầu khách hàng.",
];

const benefits = [
  {
    icon: Shield,
    color: "bg-brand-navy",
    title: "Giảm rủi ro công thái học",
    desc: "Phát hiện tư thế sai theo thời gian thực, đánh giá rủi ro REBA, giảm nguy cơ chấn thương và mệt mỏi.",
  },
  {
    icon: BarChart3,
    color: "bg-green-600",
    title: "Nâng cao năng suất",
    desc: "Phân tích thao tác thừa, tối ưu chuyển động và routing, giảm cycle time, tăng productivity.",
  },
  {
    icon: Timer,
    color: "bg-teal-600",
    title: "Giảm cycle time",
    desc: "Loại bỏ thao tác không tạo giá trị, rút ngắn thời gian thao tác và tăng hiệu quả dây chuyền.",
  },
  {
    icon: Search,
    color: "bg-purple-600",
    title: "Tự động hóa đánh giá",
    desc: "Tự động phân tích tư thế bằng AI, giảm thời gian đánh giá thủ công.",
  },
  {
    icon: Monitor,
    color: "bg-orange-500",
    title: "Dữ liệu trực quan",
    desc: "Dashboard realtime, báo cáo trực quan, theo dõi KPI và xu hướng rủi ro theo thời gian.",
  },
  {
    icon: RefreshCw,
    color: "bg-emerald-600",
    title: "Hỗ trợ cải tiến liên tục",
    desc: "Cung cấp dữ liệu cho Kaizen/Lean, đo lường trước và sau cải tiến, tối ưu liên tục.",
  },
];

const commitments = [
  "Hệ thống chạy độc lập nội bộ.",
  "Không thu thập dữ liệu khách hàng.",
  "Không gửi dữ liệu ra ngoài hệ thống.",
  "Không kết nối API ngoài.",
  "Không dùng dữ liệu để train AI hoặc mục đích thương mại khác.",
  "Không truy cập từ xa.",
  "Khách hàng toàn quyền kiểm soát.",
  "Bàn giao source code.",
];

const demoFeatures = [
  {
    icon: LayoutDashboard,
    number: "01",
    title: "Executive Dashboard",
    desc: "Tổng quan số liệu: tổng task phân tích, tỷ lệ rủi ro cao, biểu đồ xu hướng REBA và top 5 công việc rủi ro nhất.",
  },
  {
    icon: User,
    number: "02",
    title: "Operator Analysis",
    desc: "Phân tích chi tiết từng công nhân với biểu đồ REBA theo thời gian và mức rủi ro từng bộ phận cơ thể.",
  },
  {
    icon: Video,
    number: "03",
    title: "Video Playback & AI Overlay",
    desc: "Xem lại video với lớp phủ skeleton AI, hiển thị điểm REBA và mức rủi ro trực tiếp trên khung hình.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Ergonomic Analytics",
    desc: "Thống kê phân bố điểm REBA, xu hướng trung bình và so sánh Before/After khi cải tiến quy trình.",
  },
  {
    icon: Bell,
    number: "05",
    title: "Alerts & Incidents",
    desc: "Danh sách cảnh báo gần đây kèm ảnh sự cố, thông tin camera, thời gian và bộ phận cơ thể rủi ro.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-brand-cyan-readable uppercase tracking-wider mb-2">
      {children}
    </p>
  );
}

export default function AiCameraSolution() {
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
          aria-label="Mục lục giải pháp"
        >
          <h2 className="text-lg font-bold text-brand-navy mb-6 text-center">
            Nội dung
          </h2>
          <ol className="space-y-3 max-w-2xl mx-auto">
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

        {/* I. Giới thiệu */}
        <section id="intro" className="mb-20 scroll-mt-24">
          <SectionLabel>Giới thiệu về giải pháp</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Đánh giá công thái học theo tiêu chuẩn REBA
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {assessmentGroups.map((group) => (
              <div
                key={group.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <span className="text-xs font-bold text-brand-navy-mid uppercase">
                  {group.subtitle}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mt-1 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {additionalFactors.map((factor) => (
              <div
                key={factor.title}
                className="p-5 bg-brand-navy text-white rounded-2xl"
              >
                <h3 className="font-bold mb-2 text-brand-cyan">{factor.title}</h3>
                <p className="text-sm text-gray-300">{factor.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="px-5 py-4 bg-brand-navy text-white font-semibold">
              Kết quả đánh giá REBA
            </div>
            <div className="divide-y divide-gray-100">
              {rebaScores.map((score) => (
                <div
                  key={score.range}
                  className="flex items-center gap-4 px-5 py-3"
                >
                  <span
                    className={`w-12 h-8 rounded-lg ${score.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {score.range}
                  </span>
                  <span className="text-sm text-gray-700">{score.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/images/ai-camera/slide-intro.png"
              alt="Bảng đánh giá REBA Employee Assessment Worksheet"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* II. Quy trình */}
        <section id="process" className="mb-20 scroll-mt-24">
          <SectionLabel>Quy trình hoạt động</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Từ video đến điểm REBA tự động
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i }}
                className="relative p-5 bg-white rounded-2xl border border-gray-100"
              >
                <span className="text-2xl font-bold text-brand-cyan/40">
                  {step.step}
                </span>
                <h3 className="font-bold text-brand-navy mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/images/ai-camera/slide-process.png"
              alt="Sơ đồ quy trình hoạt động Camera AI REBA"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* III. Công nghệ */}
        <section id="tech" className="mb-20 scroll-mt-24">
          <SectionLabel>Cấu trúc hệ thống & công nghệ</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Nền tảng công nghệ AI công thái học
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold">Danh mục</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Thành phần / Framework
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Thông số / Công nghệ
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-brand-navy align-top">
                      {row.category}
                    </td>
                    <td className="px-4 py-3 text-gray-700 align-top">
                      {row.component}
                    </td>
                    <td className="px-4 py-3 text-gray-600 align-top">
                      {row.spec}
                    </td>
                    <td className="px-4 py-3 text-gray-500 align-top">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/images/ai-camera/slide-tech.png"
              alt="Bảng cấu trúc hệ thống và công nghệ sử dụng"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* IV. Demo phần mềm */}
        <section id="demo" className="mb-20 scroll-mt-24">
          <SectionLabel>Demo phần mềm</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
            Dashboard giám sát công thái học
          </h2>

          <ul className="space-y-3 mb-8 max-w-3xl">
            {demoHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {demoFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-5 bg-brand-navy text-white rounded-2xl hover:bg-brand-navy-hover transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-cyan font-bold">{feature.number}</span>
                  <feature.icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/images/ai-camera/slide-demo.png"
              alt="Demo giao diện phần mềm Camera AI công thái học"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* V. Lợi ích & cam kết */}
        <section id="benefits" className="mb-16 scroll-mt-24">
          <SectionLabel>Lợi ích & cam kết</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Lợi ích mang lại & cam kết của Bechnologies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2 uppercase text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 lg:p-8 bg-brand-navy rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-white mb-6">
              Bechnologies cam kết
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/images/ai-camera/slide-benefits.png"
              alt="Lợi ích mang lại và cam kết của Bechnologies"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Camera className="w-4 h-4" />
              Camera AI · REBA · Dashboard
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Smartphone className="w-4 h-4" />
              Cảnh báo app
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Mail className="w-4 h-4" />
              Cảnh báo email
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Activity className="w-4 h-4" />
              Phân tích năng suất
            </span>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-hover transition-colors duration-300"
          >
            Tư vấn giải pháp Camera AI
            <ArrowRight className="w-5 h-5 text-brand-cyan" />
          </Link>
        </div>
      </div>
    </div>
  );
}
