"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { productMenuColumns } from "@/lib/product-menu";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Open /product in new tab when not already on product routes */
  openCatalogInNewTab?: boolean;
};

export default function ProductsMegaMenu({
  open,
  onOpenChange,
  openCatalogInNewTab = false,
}: Props) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          open
            ? "text-brand-navy bg-brand-cyan-soft/80"
            : "text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/80"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => onOpenChange(!open)}
      >
        Sản phẩm
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Bridge hover gap */}
      <div className="absolute left-0 right-0 h-3 top-full" aria-hidden />

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.35rem)] z-50 w-[min(92vw,56rem)] transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-brand-navy shadow-2xl shadow-black/30 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {productMenuColumns.map((col) => (
              <div key={col.title} className="p-5 lg:p-6 min-h-[14rem]">
                <Link
                  href={col.href}
                  {...(col.href === "/product" && openCatalogInNewTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block text-sm font-bold text-brand-cyan uppercase tracking-wide mb-4 hover:brightness-110"
                  onClick={() => onOpenChange(false)}
                >
                  {col.title}
                </Link>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        {...(link.href.startsWith("/product") &&
                        openCatalogInNewTab
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                        onClick={() => onOpenChange(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-white/10 bg-brand-navy-deep/60 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              Danh mục Bechnologies &amp; Hongfa Low Voltage
            </p>
            <div className="flex gap-4 text-xs font-semibold">
              <Link
                href="/#products"
                className="text-gray-300 hover:text-brand-cyan"
                onClick={() => onOpenChange(false)}
              >
                Sản phẩm Bechnologies
              </Link>
              <Link
                href="/product"
                {...(openCatalogInNewTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-brand-cyan hover:brightness-110"
                onClick={() => onOpenChange(false)}
              >
                Catalog Hongfa →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
