"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Car,
  Factory,
  Coffee,
  ShoppingBag,
  Pill,
  Truck,
  Cpu,
  Sun,
} from "lucide-react";

const industries = [
  { icon: Car, title: "Ô tô", color: "from-blue-500 to-blue-600" },
  {
    icon: Factory,
    title: "Sản xuất công nghiệp",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: Coffee,
    title: "Thực phẩm – Đồ uống",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: ShoppingBag,
    title: "Sản phẩm tiêu dùng",
    color: "from-pink-500 to-pink-600",
  },
  { icon: Pill, title: "Dược phẩm", color: "from-purple-500 to-purple-600" },
  {
    icon: Truck,
    title: "Logistic – Kho vận",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Điện - Điện tử",
    color: "from-indigo-500 to-indigo-600",
  },
  { icon: Sun, title: "Năng lượng", color: "from-amber-500 to-amber-600" },
];

export default function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 lg:py-32 section-gradient" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Ứng dụng
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Ngành ứng dụng
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Giải pháp của chúng tôi được ứng dụng rộng rãi trong nhiều ngành
            công nghiệp khác nhau
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6 lg:p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-[#14505c]">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["SAMSUNG", "FORD", "THACO", "FOXCONN", "SCHAEFFLER"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-xl lg:text-2xl font-bold text-gray-400"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
