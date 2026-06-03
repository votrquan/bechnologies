"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Lightbulb,
  PenTool,
  Hammer,
  HeadphonesIcon,
  TrendingUp,
  Wrench,
  ArrowRight,
} from "lucide-react";

const serviceSteps = [
  {
    icon: Search,
    title: "Khảo sát & Phân tích",
    description: "Đánh giá hiện trạng, xác định nhu cầu và mục tiêu cụ thể",
  },
  {
    icon: Lightbulb,
    title: "Tư vấn giải pháp",
    description: "Đề xuất giải pháp tối ưu phù hợp với quy mô và ngân sách",
  },
  {
    icon: PenTool,
    title: "Thiết kế & Lập kế hoạch",
    description: "Thiết kế chi tiết và lập kế hoạch triển khai toàn diện",
  },
  {
    icon: Hammer,
    title: "Chế tạo, Lắp đặt",
    description: "Chế tạo, lắp đặt và tích hợp hệ thống theo tiêu chuẩn",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ bảo hành",
    description: "Bàn giao, đào tạo vận hành và hỗ trợ bảo hành 24/7",
  },
  {
    icon: TrendingUp,
    title: "Cải tiến & Nâng cấp",
    description: "Đánh giá hiệu quả và nâng cấp hệ thống liên tục",
  },
  {
    icon: Wrench,
    title: "Bảo trì & Sửa chữa",
    description: "Dịch vụ bảo trì định kỳ và sửa chữa khẩn cấp",
  },
];

const commitments = [
  {
    title: "Chất lượng vượt trội",
    desc: "Cam kết cung cấp sản phẩm/dịch vụ đạt tiêu chuẩn cao nhất, được kiểm duyệt khắt khe trước khi đến khách hàng",
  },
  {
    title: "Cam kết tiến độ",
    desc: "Đảm bảo hoàn thành dự án đúng thời hạn và đúng lộ trình đã thoả thuận. Sự chậm trễ của khách hàng là thất bại của chúng tôi",
  },
  {
    title: "Minh bạch hiệu quả",
    desc: "Cung cấp giải pháp tối ưu với chi phí cạnh tranh nhất, đảm bảo giá trị nhận lại vượt mong đợi so với chi phí đầu tư",
  },
  {
    title: "Đồng hành Tin cậy",
    desc: "Luôn đồng hành và hỗ trợ khách hàng 24/7. Chúng tôi không chỉ bán sản phẩm, chúng tôi trao gửi niềm tin và sự tận tâm",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#f8fffe]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Dịch vụ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Quy trình dịch vụ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quy trình chuyên nghiệp từ khảo sát đến bảo trì, đảm bảo chất
            lượng và hiệu quả tối đa
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4f5ef] via-[#0d7377] to-[#d4f5ef] -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
            {serviceSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0d7377] text-white text-xs font-bold rounded-full flex items-center justify-center z-10">
                  {i + 1}
                </div>

                <div className="w-full p-5 pt-8 bg-white rounded-2xl border border-gray-100 hover:border-[#0d7377]/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 mx-auto bg-[#d4f5ef] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0d7377] transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-[#0d7377] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-bold text-[#14505c] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < serviceSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-[#0d7377]">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {commitments.map((item, i) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0d7377] to-[#14505c] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">
                  0{i + 1}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#14505c] mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
