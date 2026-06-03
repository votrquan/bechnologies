"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, HardDrive, Monitor, Puzzle, Package, Sun } from "lucide-react";

const products = [
  {
    icon: Bot,
    title: "AGV – AMR – Robot công nghiệp",
    description:
      "Robot vận chuyển tự động, robot công nghiệp đa trục phục vụ sản xuất và logistics nội bộ",
    features: ["AGV/AMR tiêu chuẩn", "Robot cộng tác (Cobot)", "Xe nâng tự hành"],
  },
  {
    icon: HardDrive,
    title: "Thiết bị công nghiệp",
    description:
      "Cung cấp đầy đủ các thiết bị tự động hóa, điều khiển và giám sát cho nhà máy",
    features: ["PLC & HMI", "Biến tần & Servo", "Cảm biến công nghiệp"],
  },
  {
    icon: Monitor,
    title: "Phần mềm chuyển đổi số / Hệ thống SCADA",
    description:
      "Phần mềm quản lý sản xuất, giám sát và điều khiển hệ thống công nghiệp",
    features: ["SCADA/HMI", "MES/MRP/WMS", "IoT Platform"],
  },
  {
    icon: Puzzle,
    title: "Jig - đồ gá",
    description:
      "Thiết kế và chế tạo jig, fixture, checking gauge theo yêu cầu riêng",
    features: ["Thiết kế CAD/CAM", "Gia công CNC", "Kiểm tra CMM"],
  },
  {
    icon: Package,
    title: "Linh kiện - phụ kiện công nghiệp",
    description:
      "Cung cấp linh kiện, phụ tùng thay thế chính hãng cho mọi loại thiết bị",
    features: ["Linh kiện PLC", "Phụ kiện Robot", "Vật tư tiêu hao"],
  },
  {
    icon: Sun,
    title: "Năng lượng xanh",
    description:
      "Giải pháp năng lượng mặt trời, hệ thống quản lý năng lượng thông minh",
    features: ["Solar Rooftop", "Hệ thống EMS", "Inverter tiết kiệm"],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="products" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Sản phẩm & Thiết bị
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Danh mục sản phẩm đa dạng, đáp ứng mọi nhu cầu tự động hóa và
            chuyển đổi số
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:shadow-[#0d7377]/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-1 bg-gradient-to-r from-[#0d7377] to-[#32e0c4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 lg:p-8">
                <div className="w-16 h-16 bg-[#d4f5ef] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0d7377] transition-colors duration-300">
                  <product.icon className="w-8 h-8 text-[#0d7377] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-bold text-[#14505c] mb-3">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-[#f0fdfa] text-[#0d7377] text-xs font-medium rounded-full border border-[#d4f5ef]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
