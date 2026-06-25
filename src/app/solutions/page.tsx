import type { Metadata } from "next";
import Link from "next/link";
import { featuredSolutions } from "@/lib/solutions";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Giải pháp | Bechnologies",
  description:
    "Khám phá các giải pháp tiết kiệm năng lượng, SCADA và Camera AI công thái học từ Bechnologies.",
};

export default function SolutionsHubPage() {
  return (
    <div className="py-16 lg:py-24 section-gradient min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan-soft text-brand-teal-mid text-sm font-semibold rounded-full mb-4">
            Giải pháp
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal mb-6">
            Giải pháp của Bechnologies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chọn giải pháp phù hợp để tìm hiểu chi tiết về công nghệ, quy trình
            triển khai và lợi ích mang lại cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSolutions.map((solution) => (
            <Link
              key={solution.slug}
              href={solution.href}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500"
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

              <h2 className="text-xl font-bold text-brand-teal mt-2 mb-3 leading-snug group-hover:text-brand-navy transition-colors">
                {solution.shortTitle}
              </h2>

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
          ))}
        </div>
      </div>
    </div>
  );
}
