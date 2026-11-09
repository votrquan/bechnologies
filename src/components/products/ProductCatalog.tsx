"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, ExternalLink, Search, Zap } from "lucide-react";
import {
  hongfaProducts,
  productCategories,
  type ProductCategoryId,
} from "@/lib/products";

const PAGE_SIZE = 9;

const validCats = new Set(
  productCategories.map((c) => c.id).filter((id) => id !== "all")
);

function parseCat(raw: string | null): ProductCategoryId | "all" {
  if (raw && validCats.has(raw as ProductCategoryId)) {
    return raw as ProductCategoryId;
  }
  return "all";
}

function parsePage(raw: string | null): number {
  const n = Number(raw);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [category, setCategory] = useState<ProductCategoryId | "all">(() =>
    parseCat(searchParams.get("cat"))
  );
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [page, setPage] = useState(() => parsePage(searchParams.get("page")));

  useEffect(() => {
    setCategory(parseCat(searchParams.get("cat")));
    setQuery(searchParams.get("q") ?? "");
    setPage(parsePage(searchParams.get("page")));
  }, [searchParams]);

  const updateParams = (next: {
    cat?: ProductCategoryId | "all";
    q?: string;
    page?: number;
  }) => {
    const params = new URLSearchParams(searchParams.toString());
    const cat = next.cat ?? category;
    const q = next.q !== undefined ? next.q : query;
    const nextPage = next.page ?? page;

    if (!cat || cat === "all") params.delete("cat");
    else params.set("cat", cat);

    const trimmed = q.trim();
    if (!trimmed) params.delete("q");
    else params.set("q", trimmed);

    if (!nextPage || nextPage <= 1) params.delete("page");
    else params.set("page", String(nextPage));

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hongfaProducts.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.range?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const goToPage = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    updateParams({ page: next });
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const window = 2;
    const start = Math.max(1, currentPage - window);
    const end = Math.min(totalPages, currentPage + window);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [currentPage, totalPages]);

  const rangeFrom =
    filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeTo = Math.min(currentPage * PAGE_SIZE, filtered.length);

  return (
    <div id="catalog">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setCategory(cat.id);
                setPage(1);
                updateParams({ cat: cat.id, page: 1 });
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                category === cat.id
                  ? "bg-brand-navy text-white shadow-md shadow-brand-navy/25"
                  : "bg-white text-brand-navy border border-gray-200 hover:border-brand-navy/30 hover:bg-brand-cyan-soft/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <label className="relative w-full lg:w-80">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={query}
            onChange={(e) => {
              const value = e.target.value;
              setQuery(value);
              setPage(1);
              updateParams({ q: value, page: 1 });
            }}
            placeholder="Tìm model, dải dòng…"
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-navy/30"
          />
        </label>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Hiển thị{" "}
        <span className="font-semibold text-brand-navy">
          {rangeFrom}–{rangeTo}
        </span>{" "}
        / {filtered.length} sản phẩm
        {category !== "all" && (
          <>
            {" "}
            ·{" "}
            {
              productCategories.find((c) => c.id === category)?.description
            }
          </>
        )}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {pageItems.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-brand-navy/20 hover:shadow-xl hover:shadow-brand-navy/10 transition-all duration-300"
          >
            <div className="relative h-44 bg-gradient-to-br from-brand-navy to-brand-navy-deep overflow-hidden">
              <Image
                src={product.image}
                alt={`${product.name} — ${product.type}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-wide">
                  Hongfa
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/15 text-white text-[10px] font-semibold backdrop-blur">
                  {product.source === "both"
                    ? "Web + PDF"
                    : product.source === "web"
                      ? "Web"
                      : "PDF 2026"}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 lg:p-6">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-bold text-brand-navy leading-snug">
                  {product.name}
                </h3>
                <Zap
                  size={18}
                  className="shrink-0 text-brand-cyan-readable mt-1"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy-mid mb-1">
                {product.type}
              </p>
              {product.range && (
                <p className="text-sm font-medium text-brand-cyan-readable mb-3">
                  Dải dòng: {product.range}
                </p>
              )}
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              {product.highlights && product.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-full bg-brand-surface text-brand-navy text-[11px] font-medium border border-gray-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {product.detailSlug ? (
                <Link
                  href={`/product/${product.detailSlug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-mid transition-colors"
                >
                  Xem thông số chi tiết
                </Link>
              ) : product.href ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-mid transition-colors"
                >
                  Xem trên Hongfa
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-mid transition-colors"
                >
                  Liên hệ tư vấn
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-2xl border border-dashed border-gray-200 bg-white">
          <p className="text-brand-navy font-semibold mb-2">
            Không tìm thấy sản phẩm phù hợp
          </p>
          <p className="text-sm text-gray-500">
            Thử đổi từ khóa hoặc chọn danh mục khác.
          </p>
        </div>
      )}

      {filtered.length > PAGE_SIZE && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Phân trang sản phẩm"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 text-sm font-semibold text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-cyan-soft/50 transition-colors"
          >
            <ChevronLeft size={16} />
            Trước
          </button>

          {pageNumbers[0] > 1 && (
            <>
              <button
                type="button"
                onClick={() => goToPage(1)}
                className="w-10 h-10 rounded-full text-sm font-semibold text-brand-navy border border-gray-200 hover:bg-brand-cyan-soft/50"
              >
                1
              </button>
              {pageNumbers[0] > 2 && (
                <span className="px-1 text-gray-400">…</span>
              )}
            </>
          )}

          {pageNumbers.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goToPage(n)}
              aria-current={n === currentPage ? "page" : undefined}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                n === currentPage
                  ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                  : "text-brand-navy border border-gray-200 hover:bg-brand-cyan-soft/50"
              }`}
            >
              {n}
            </button>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className="px-1 text-gray-400">…</span>
              )}
              <button
                type="button"
                onClick={() => goToPage(totalPages)}
                className="w-10 h-10 rounded-full text-sm font-semibold text-brand-navy border border-gray-200 hover:bg-brand-cyan-soft/50"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 text-sm font-semibold text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-cyan-soft/50 transition-colors"
          >
            Sau
            <ChevronRight size={16} />
          </button>
        </nav>
      )}
    </div>
  );
}
