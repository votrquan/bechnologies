import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FileText,
  Zap,
} from "lucide-react";
import {
  getHongfaProductBySlug,
  getRelatedHongfaProducts,
  hongfaProductDetails,
} from "@/lib/hongfa-products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hongfaProductDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getHongfaProductBySlug(slug);
  if (!product) return { title: "Sản phẩm" };
  return {
    title: `${product.model} | ${product.series}`,
    description: product.shortDescription || product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getHongfaProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedHongfaProducts(product).slice(0, 6);

  return (
    <div className="min-h-[60vh] bg-white">
      <div className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:brightness-110 mb-6"
          >
            <ArrowLeft size={16} />
            Tất cả sản phẩm
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-brand-cyan text-brand-navy text-xs font-bold">
              Hongfa
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-semibold border border-brand-cyan/30">
              {product.series}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
              {product.category === "din-rail"
                ? "DIN-Rail Protection"
                : product.category === "power-distribution"
                  ? "Power Distribution"
                  : product.category === "new-energy"
                    ? "New Energy"
                    : "Control Gear"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            {product.model}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {product.type}
            {product.range ? ` · ${product.range}` : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-14">
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-deep overflow-hidden border border-gray-100 shadow-lg">
            {product.image && (
              <Image
                src={product.image}
                alt={product.model}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-10"
              />
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Zap className="text-brand-cyan-readable" size={20} />
              Đặc tính sản phẩm
            </h2>
            <ul className="space-y-3 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan-readable shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy-hover transition-colors"
              >
                Liên hệ tư vấn / báo giá
              </Link>
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-navy/20 text-brand-navy text-sm font-semibold hover:bg-brand-cyan-soft/60 transition-colors"
              >
                Nguồn Hongfa
                <ExternalLink size={14} />
              </a>
            </div>

            {product.docs.length > 0 && (
              <div className="mt-8 p-5 rounded-2xl bg-brand-surface border border-gray-100">
                <p className="text-sm font-bold text-brand-navy mb-3">
                  Tài liệu
                </p>
                <ul className="space-y-2">
                  {product.docs.map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-brand-navy-mid hover:text-brand-navy"
                      >
                        <FileText size={14} />
                        {doc.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            Thông số kỹ thuật
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <tbody>
                {product.specs.map((row, i) => (
                  <tr
                    key={`${row.label}-${i}`}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <th className="px-4 py-3 text-left font-semibold text-brand-navy w-[40%] align-top border-r border-gray-100">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-700 leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">
              Model cùng series {product.series}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:border-brand-navy/20 transition-all"
                >
                  <div className="relative h-36 bg-gradient-to-br from-brand-navy to-brand-navy-deep">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.model}
                        fill
                        sizes="33vw"
                        className="object-contain p-6 group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-brand-navy">{item.model}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.range || item.type}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
