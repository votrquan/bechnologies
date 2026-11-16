import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCatalog from "@/components/products/ProductCatalog";
import { suppliers } from "@/lib/suppliers";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Danh mục sản phẩm Bechnologies theo nhà cung cấp Hongfa và SKF — rơ le, thiết bị điện áp thấp, vòng bi, phớt và bôi trơn.",
};

export default function ProductPage() {
  return (
    <div className="min-h-[60vh]">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/hongfa/catalog-p13.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-cyan text-sm font-semibold rounded-full mb-5">
            Sản phẩm
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-5">
            Danh mục theo nhà cung cấp
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
            Bechnologies phân phối danh mục Hongfa đầy đủ và sản phẩm SKF —
            chọn nhà cung cấp để xem danh mục sản phẩm phù hợp.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#suppliers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-cyan text-brand-navy text-sm font-bold hover:brightness-95 transition-all"
            >
              Chọn nhà cung cấp
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

      <section id="suppliers" className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">
              Nhà cung cấp
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Chọn thương hiệu để lọc danh mục bên dưới.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {suppliers.map((supplier) => (
              <Link
                key={supplier.id}
                href={`${supplier.href}#catalog`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-navy/10 hover:border-brand-navy/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={supplier.image}
                    alt={supplier.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-black/10" />

                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
                    {supplier.logoIsSvg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={supplier.logo}
                        alt={supplier.shortName}
                        width={supplier.logoWidth}
                        height={supplier.logoHeight}
                        className="h-6 w-auto object-contain"
                      />
                    ) : (
                      <Image
                        src={supplier.logo}
                        alt={supplier.shortName}
                        width={supplier.logoWidth}
                        height={supplier.logoHeight}
                        className="h-6 w-auto object-contain"
                      />
                    )}
                  </div>

                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-brand-navy text-white text-[11px] font-bold tracking-wide uppercase">
                    {supplier.category}
                  </span>

                  {supplier.productCount > 0 && (
                    <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/95 text-brand-navy text-[11px] font-bold">
                      {supplier.productCount} sản phẩm
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-navy-hover transition-colors">
                    {supplier.shortName}
                  </h3>
                  <p className="text-sm font-semibold text-brand-navy-mid mb-2">
                    {supplier.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {supplier.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {supplier.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-brand-cyan-soft text-brand-navy text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                    Danh sách sản phẩm
                    <ArrowRight
                      size={16}
                      className="text-brand-cyan group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Danh mục sản phẩm
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Lọc theo nhà cung cấp và nhóm sản phẩm, hoặc tìm theo mã model /
              series.
            </p>
          </div>

          <Suspense
            fallback={
              <p className="text-sm text-gray-500">Đang tải danh mục…</p>
            }
          >
            <ProductCatalog />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
