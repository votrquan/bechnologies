"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredSolutions } from "@/lib/solutions";

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
          <span className="inline-block px-4 py-1.5 bg-brand-cyan-soft text-brand-teal-mid text-sm font-semibold rounded-full mb-4">
            Giải pháp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal mb-6">
            Giải pháp của Bechnologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá các giải pháp công nghệ được triển khai thực tế — từ tiết
            kiệm năng lượng, điện mặt trời, SCADA đến Camera AI phân tích công
            thái học.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSolutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={solution.href}
                className="group block h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                >
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {solution.tag && (
                  <span className="text-xs font-semibold text-brand-navy-mid uppercase tracking-wide">
                    {solution.tag}
                  </span>
                )}

                <h3 className="text-lg font-bold text-brand-teal mt-2 mb-3 leading-snug group-hover:text-brand-navy transition-colors">
                  {solution.shortTitle}
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {solution.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-navy-mid transition-colors">
                  Xem chi tiết
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-mid transition-colors"
          >
            Xem tất cả giải pháp
            <ArrowRight size={18} className="text-brand-cyan" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
