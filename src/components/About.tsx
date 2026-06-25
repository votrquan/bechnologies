"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Rocket, Wrench, Cpu, Building2, Leaf } from "lucide-react";

const businessAreas = [
  {
    icon: Wrench,
    title: "Cơ khí",
    items: [
      "Thiết kế kỹ thuật",
      "Gia công chế tạo",
      "Lắp ráp hoàn thiện",
      "Kiểm tra chất lượng",
    ],
  },
  {
    icon: Cpu,
    title: "Tự động hoá",
    items: [
      "Giải pháp hệ thống",
      "Tích hợp công nghệ",
      "Điều khiển thông minh",
      "Vận hành hiệu quả",
    ],
  },
  {
    icon: Building2,
    title: "Số hoá doanh nghiệp",
    items: [
      "Tư vấn chuyển đổi số",
      "Giám sát & Tối ưu",
      "Quản trị tập trung",
      "Ra phân tích & quyết định",
    ],
  },
  {
    icon: Leaf,
    title: "Năng lượng xanh",
    items: [
      "Hiệu quả năng lượng",
      "Giải pháp năng lượng tái tạo",
      "Giảm phát thải môi trường",
      "Phát triển bền vững",
    ],
  },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan-soft text-brand-teal-mid text-sm font-semibold rounded-full mb-4">
            Giới thiệu công ty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal mb-6">
            Về chúng tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Là nhà cung cấp thiết bị, phần mềm và phát triển giải pháp trong
            lĩnh vực cơ khí, tự động hóa công nghiệp, số hóa doanh nghiệp.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-brand-cyan-soft to-white border border-brand-cyan-soft hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-teal-mid to-brand-teal rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-teal">Tầm nhìn</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Trở thành doanh nghiệp tiên phong trong việc kiến tạo và ứng
                dụng các công nghệ tiên tiến nhằm thúc đẩy tự động hoá, chuyển
                đổi số và phát triển năng lượng xanh, góp phần xây dựng một
                tương lai thông minh, bền vững và hiệu quả hơn cho doanh nghiệp
                và xã hội.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-brand-cyan-soft to-white border border-brand-cyan-soft hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-teal-mid to-brand-teal rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-teal">Sứ mệnh</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bechnologies cam kết mang đến các giải pháp công nghệ tối ưu
                giúp doanh nghiệp nâng cao hiệu quả vận hành, thúc đẩy chuyển
                đổi số và sử dụng năng lượng một cách bền vững.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-8">
          <h3 className="text-2xl font-bold text-brand-teal text-center mb-12">
            Lĩnh vực hoạt động
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-teal-mid/30 hover:shadow-xl hover:shadow-brand-teal-mid/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-cyan-soft rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-teal-mid transition-colors duration-300">
                <area.icon className="w-7 h-7 text-brand-teal-mid group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-brand-teal mb-4">
                {area.title}
              </h4>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                    {item}
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
