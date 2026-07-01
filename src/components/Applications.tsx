"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
import { siteImages } from "@/lib/site-images";

const industries = [
  {
    icon: Car,
    title: "Ô tô",
    image: siteImages.applications.automotive,
  },
  {
    icon: Factory,
    title: "Sản xuất công nghiệp",
    image: siteImages.applications.manufacturing,
  },
  {
    icon: Coffee,
    title: "Thực phẩm – Đồ uống",
    image: siteImages.applications.foodBeverage,
  },
  {
    icon: ShoppingBag,
    title: "Sản phẩm tiêu dùng",
    image: siteImages.applications.consumerProducts,
  },
  {
    icon: Pill,
    title: "Dược phẩm",
    image: siteImages.applications.pharmaceuticals,
  },
  {
    icon: Truck,
    title: "Logistic – Kho vận",
    image: siteImages.applications.logistics,
  },
  {
    icon: Cpu,
    title: "Điện - Điện tử",
    image: siteImages.applications.electronics,
  },
  {
    icon: Sun,
    title: "Năng lượng",
    image: siteImages.applications.energy,
  },
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
          <span className="inline-block px-4 py-1.5 bg-brand-cyan-soft text-brand-teal-mid text-sm font-semibold rounded-full mb-4">
            Ứng dụng
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal mb-6">
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
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-28 sm:h-32">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-brand-navy/20" />
              </div>
              <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
                <industry.icon className="w-5 h-5 text-brand-navy" />
              </div>
              <div className="p-4 pt-3 text-center">
                <h3 className="text-sm lg:text-base font-semibold text-brand-teal">
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
