import type { Metadata } from "next";
import Link from "next/link";
import ProductCatalog from "@/components/products/ProductCatalog";
import { productCategories } from "@/lib/products";
import { ArrowRight, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sản phẩm Hongfa | Bechnologies",
  description:
    "Danh mục thiết bị đóng cắt và bảo vệ Hongfa: Control Gear, DIN-Rail Protection, Power Distribution.",
};

export default function ProductPage() {
  const categories = productCategories.filter((c) => c.id !== "all");

  return (
    <div className="min-h-[60vh]">
      <section className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-cyan text-sm font-semibold rounded-full mb-5">
            Sản phẩm · Hongfa
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-5">
            Thiết bị đóng cắt &amp; bảo vệ hạ thế
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
            Bechnologies phân phối và tư vấn giải pháp Hongfa Low Voltage —
            contactor, MCB/Smart MCB, MCCB, ACB và thiết bị DC cho PV/ESS. Nhiều
            model đã có trang thông số chi tiết.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.hongfa.com/product/low-voltage-range/control-gear"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-cyan text-brand-navy text-sm font-bold hover:brightness-95 transition-all"
            >
              <Globe2 size={16} />
              Hongfa Control Gear
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-colors"
            >
              Liên hệ tư vấn
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-brand-surface border border-gray-100"
            >
              <h2 className="font-bold text-brand-navy mb-2">{cat.label}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Danh mục sản phẩm
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Lọc theo nhóm sản phẩm hoặc tìm theo mã series. Nguồn dữ liệu:
              hongfa.com (Control Gear, DIN-Rail, Power Distribution).
            </p>
          </div>

          <ProductCatalog />
        </div>
      </section>
    </div>
  );
}
