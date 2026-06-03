"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cog,
  Bot,
  Building,
  BrainCircuit,
  BatteryCharging,
  Shield,
} from "lucide-react";

const solutions = [
  {
    icon: Cog,
    number: "01",
    title: "Giải pháp cơ khí chế tạo & máy móc thiết bị",
    items: [
      "Thiết kế, chế tạo máy tự động/bán tự động theo yêu cầu",
      "Thiết kế & gia công jig, fixture, checking gauge",
      "Nâng cấp, cải tiến máy móc hiện hữu",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Bot,
    number: "02",
    title: "Giải pháp tự động hoá công nghiệp",
    items: [
      "Tự động hoá sản xuất (assembly line, conveyor,...)",
      "Thiết kế mới, tích hợp hệ thống PLC, HMI, SCADA",
      "Hệ thống AGV/AMR vận chuyển nội bộ",
      "Ứng dụng Robot công nghiệp",
      "Hệ thống vision inspection kiểm tra chất lượng",
    ],
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: Building,
    number: "03",
    title: "Giải pháp Số hoá nhà máy/doanh nghiệp",
    items: [
      "Kết nối dữ liệu và IoT công nghiệp",
      "Thiết kế, triển khai hệ thống Quản lý sản xuất MES",
      "Triển khai hệ thống ERP cho doanh nghiệp",
      "Phân tích dữ liệu và báo cáo thông minh BI",
      "Số hoá quy trình vận hành & bảo trì (CMMS)",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "Giải pháp AI & phân tích dữ liệu",
    items: [
      "AI Vision: kiểm tra lỗi sản phẩm, nhận diện hình ảnh",
      "Phân tích dữ liệu và báo cáo",
      "Ứng dụng AI: Dự đoán bảo trì, tối ưu kế hoạch sản xuất",
      "Phân tích hành vi vận hành, tiết ưu nhân sự",
    ],
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: BatteryCharging,
    number: "05",
    title: "Giải pháp năng lượng & tiết kiệm",
    items: [
      "Hệ thống điện mặt trời (solar rooftop, hybrid)",
      "Giải pháp giám sát tiêu thụ năng lượng (EMS)",
      "Tối ưu hóa hệ thống điện, khí nén, HVAC",
      "Tiết kiệm biến tần (inverter) tiết kiệm điện",
      "Giải pháp năng lượng xanh & giảm phát thải CO₂",
    ],
    color: "from-green-500 to-green-700",
  },
  {
    icon: Shield,
    number: "06",
    title: "Giải pháp hệ thống phụ trợ",
    items: [
      "Hệ thống khí nén (compressed air system)",
      "Hệ thống born – hoá chất – xử lý nước",
      "Hệ thống bảng, bảng tải, logistics nội bộ",
      "Hệ thống an toàn máy (machine safety)",
    ],
    color: "from-red-500 to-red-700",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="solutions" className="py-20 lg:py-32 section-gradient" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Giải pháp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Giải pháp toàn diện
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp 6 nhóm giải pháp chính phục vụ mọi nhu cầu
            chuyển đổi số và tự động hóa của doanh nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-[#d4f5ef] transition-colors">
                {solution.number}
              </div>

              <div
                className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
              >
                <solution.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-[#14505c] mb-4 pr-10 leading-snug">
                {solution.title}
              </h3>

              <ul className="space-y-2.5">
                {solution.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-[#32e0c4] rounded-full mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
