"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredSolutions } from "@/lib/solutions";

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-brand-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-navy/10 text-brand-navy text-sm font-semibold rounded-full mb-4">
            Giải pháp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Giải pháp của Bechnologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Các giải pháp công nghệ triển khai thực tế — tiết kiệm năng lượng,
            SCADA giám sát điều khiển và Camera AI phân tích công thái học.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredSolutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={solution.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.shortTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-brand-navy/90 backdrop-blur rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  {solution.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-brand-navy text-[11px] font-bold uppercase tracking-wide">
                      {solution.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-navy-hover transition-colors duration-300">
                    {solution.shortTitle}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-1">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-brand-navy text-white text-xs font-medium rounded-full group-hover:bg-brand-navy-hover transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-navy-mid transition-colors">
                    Xem chi tiết
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-hover transition-colors"
          >
            Xem tất cả giải pháp
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-navy/20 text-brand-navy font-semibold rounded-full hover:bg-brand-cyan-soft/60 transition-colors"
          >
            Tư vấn giải pháp
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
