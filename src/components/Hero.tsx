"use client";

import { motion } from "framer-motion";
import { Cpu, Factory, Zap, BarChart3, ArrowRight } from "lucide-react";

const stats = [
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "200+", label: "Dự án đã triển khai" },
  { number: "150+", label: "Khách hàng" },
  { number: "99%", label: "Tỷ lệ hài lòng" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#32e0c4]/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#0d7377]/20 rounded-full blur-3xl"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#32e0c4]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#32e0c4]/5 rounded-full" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(50,224,196,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(50,224,196,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#32e0c4]/10 border border-[#32e0c4]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#32e0c4] rounded-full animate-pulse" />
              <span className="text-[#32e0c4] text-sm font-medium">
                Better Technologies For A Better Future
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Giải pháp{" "}
              <span className="text-[#32e0c4]">Công nghệ</span>
              <br />
              Toàn diện cho{" "}
              <span className="text-[#32e0c4]">Doanh nghiệp</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Cung cấp thiết bị, phần mềm và phát triển giải pháp trong lĩnh
              vực cơ khí, tự động hóa công nghiệp, số hóa doanh nghiệp và năng
              lượng xanh.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#32e0c4] to-[#0d7377] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#32e0c4]/30 transition-all duration-300 hover:-translate-y-1"
              >
                Khám phá giải pháp
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#32e0c4]/50 text-[#32e0c4] font-semibold rounded-full hover:bg-[#32e0c4]/10 transition-all duration-300"
              >
                Tìm hiểu thêm
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#32e0c4]">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Factory,
                title: "Cơ khí",
                desc: "Thiết kế, chế tạo máy móc thiết bị",
              },
              {
                icon: Cpu,
                title: "Tự động hoá",
                desc: "PLC, SCADA, IoT công nghiệp",
              },
              {
                icon: BarChart3,
                title: "Số hoá",
                desc: "MES, MRP, WMS, ERP",
              },
              {
                icon: Zap,
                title: "Năng lượng xanh",
                desc: "Solar, EMS, tiết kiệm năng lượng",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#32e0c4]/40 hover:bg-white/10 transition-all duration-300 group ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 bg-[#32e0c4]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#32e0c4]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#32e0c4]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
