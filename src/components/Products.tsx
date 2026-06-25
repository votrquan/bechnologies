"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Bot, HardDrive, Monitor, Puzzle, Package, Sun } from "lucide-react";
import { siteImages } from "@/lib/site-images";

const products = [
  {
    icon: Bot,
    title: "AGV – AMR – Robot công nghiệp",
    description:
      "Robot vận chuyển tự động, robot công nghiệp đa trục phục vụ sản xuất và logistics nội bộ",
    features: ["AGV/AMR tiêu chuẩn", "Robot cộng tác (Cobot)", "Xe nâng tự hành"],
    image: siteImages.products.amr,
  },
  {
    icon: HardDrive,
    title: "Thiết bị công nghiệp",
    description:
      "Cung cấp đầy đủ các thiết bị tự động hóa, điều khiển và giám sát cho nhà máy",
    features: ["PLC & HMI", "Biến tần & Servo", "Cảm biến công nghiệp"],
    image: siteImages.products.equipment,
  },
  {
    icon: Monitor,
    title: "Phần mềm chuyển đổi số / Hệ thống SCADA",
    description:
      "Phần mềm quản lý sản xuất, giám sát và điều khiển hệ thống công nghiệp",
    features: ["SCADA/HMI", "MES/MRP/WMS", "IoT Platform"],
    image: siteImages.products.scada,
  },
  {
    icon: Puzzle,
    title: "Jig - đồ gá",
    description:
      "Thiết kế và chế tạo jig, fixture, checking gauge theo yêu cầu riêng",
    features: ["Thiết kế CAD/CAM", "Gia công CNC", "Kiểm tra CMM"],
    image: siteImages.products.jig,
  },
  {
    icon: Package,
    title: "Linh kiện - phụ kiện công nghiệp",
    description:
      "Cung cấp linh kiện, phụ tùng thay thế chính hãng cho mọi loại thiết bị",
    features: ["Linh kiện PLC", "Phụ kiện Robot", "Vật tư tiêu hao"],
    image: siteImages.products.parts,
  },
  {
    icon: Sun,
    title: "Năng lượng xanh",
    description:
      "Giải pháp năng lượng mặt trời, hệ thống quản lý năng lượng thông minh",
    features: ["Solar Rooftop", "Hệ thống EMS", "Inverter tiết kiệm"],
    image: siteImages.products.energy,
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
          <span className="inline-block px-4 py-1.5 bg-brand-navy/10 text-brand-navy text-sm font-semibold rounded-full mb-4">
            Sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
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
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-brand-navy/90 backdrop-blur rounded-xl flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-brand-cyan" />
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-navy-hover transition-colors duration-300">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-brand-navy text-white text-xs font-medium rounded-full group-hover:bg-brand-navy-hover transition-colors duration-300"
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
