"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    id: "hongfa",
    brand: "HONGFA",
    logo: "/images/hongfa/hongfa-logo.png",
    logoWidth: 140,
    logoHeight: 33,
    logoIsSvg: false,
    image: "/images/hongfa/catalog-p16.jpg",
    category: "LOW VOLTAGE",
    title: "Thiết bị đóng cắt & bảo vệ",
    description:
      "Giải pháp Hongfa Low Voltage — contactor, MCB/Smart MCB, MCCB, ACB và thiết bị bảo vệ cho tủ điện công nghiệp, dân dụng và năng lượng mới.",
    tags: ["Contactor", "MCB", "MCCB", "ACB", "Relay"],
    href: "/product?brand=hongfa#catalog",
    newTab: true,
  },
  {
    id: "skf",
    brand: "SKF",
    logo: "/images/skf/skf-logo.svg",
    logoWidth: 86,
    logoHeight: 32,
    logoIsSvg: true,
    image: "/images/skf/skf-hero.jpg",
    category: "ROTATING EQUIPMENT",
    title: "Vòng bi, phớt & bôi trơn",
    description:
      "Sản phẩm SKF — vòng bi, phớt chặn dầu, hệ thống bôi trơn và thiết bị liên quan giúp cải thiện độ tin cậy và hiệu năng. Bất cứ nơi nào có chuyển động quay đều có thể xuất hiện giải pháp SKF.",
    tags: ["Vòng bi", "Phớt", "Bôi trơn", "Bảo trì", "Giám sát"],
    href: "/product?brand=skf#catalog",
    newTab: true,
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="partners" className="py-20 lg:py-28 bg-brand-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-navy/10 text-brand-navy text-sm font-semibold rounded-full mb-4">
            Đối tác
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
            Đối tác &amp; Nhà cung cấp
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Bechnologies đồng hành cùng các thương hiệu công nghiệp hàng đầu —
            Hongfa và SKF — tư vấn, cung ứng và hỗ trợ kỹ thuật tại Việt Nam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
          {partners.map((partner, i) => (
            <motion.article
              key={partner.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-navy/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-black/10" />

                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
                  {partner.logoIsSvg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partner.logo}
                      alt={partner.brand}
                      width={partner.logoWidth}
                      height={partner.logoHeight}
                      className="h-6 w-auto object-contain"
                    />
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={partner.brand}
                      width={partner.logoWidth}
                      height={partner.logoHeight}
                      className="h-6 w-auto object-contain"
                    />
                  )}
                </div>

                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-brand-navy text-white text-[11px] font-bold tracking-wide uppercase">
                  {partner.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-snug">
                  {partner.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {partner.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-brand-cyan-soft text-brand-navy text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={partner.href}
                  {...(partner.newTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy-hover transition-colors"
                >
                  Danh sách sản phẩm
                  <ArrowRight size={16} className="text-brand-cyan" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
