"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { productMenuCategories } from "@/lib/product-menu";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Open /product in new tab when not already on product routes */
  openCatalogInNewTab?: boolean;
};

function linkProps(
  href: string,
  external: boolean | undefined,
  openCatalogInNewTab: boolean
) {
  const isProductLocal = href.startsWith("/product");
  const openNew =
    Boolean(external) || (isProductLocal && openCatalogInNewTab);
  return openNew
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

export default function ProductsMegaMenu({
  open,
  onOpenChange,
  openCatalogInNewTab = false,
}: Props) {
  const [activeId, setActiveId] = useState(productMenuCategories[0]?.id ?? "");
  const active =
    productMenuCategories.find((c) => c.id === activeId) ??
    productMenuCategories[0];

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

      <div className="absolute left-0 right-0 h-3 top-full" aria-hidden />

      <div
        className={`absolute left-0 top-[calc(100%+0.35rem)] z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="flex items-stretch rounded-xl border border-gray-200 bg-white shadow-2xl shadow-black/15 overflow-hidden min-w-[18rem]">
          {/* Level 1 */}
          <ul className="w-[17.5rem] py-1 max-h-[min(70vh,32rem)] overflow-y-auto">
            {productMenuCategories.map((cat) => {
              const isActive = cat.id === active?.id;
              return (
                <li key={cat.id}>
                  <div
                    className={`relative flex items-center border-b border-gray-100 last:border-b-0 ${
                      isActive ? "bg-brand-cyan-soft/40" : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setActiveId(cat.id)}
                  >
                    {isActive && (
                      <span
                        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan"
                        aria-hidden
                      />
                    )}
                    <Link
                      href={cat.href}
                      {...linkProps(
                        cat.href,
                        cat.external,
                        openCatalogInNewTab
                      )}
                      className={`flex-1 px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-brand-navy"
                          : "text-brand-navy-mid/90"
                      }`}
                      onClick={() => onOpenChange(false)}
                    >
                      {cat.label}
                    </Link>
                    {cat.children.length > 0 && (
                      <span className="pr-3 text-brand-cyan shrink-0">
                        <ChevronRight size={14} />
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Level 2 flyout */}
          {active && active.children.length > 0 && (
            <ul className="w-[17rem] border-l border-gray-100 py-1 bg-white max-h-[min(70vh,32rem)] overflow-y-auto">
              {active.children.map((child) => (
                <li key={`${active.id}-${child.label}`}>
                  <Link
                    href={child.href}
                    {...linkProps(
                      child.href,
                      child.external,
                      openCatalogInNewTab
                    )}
                    className="block px-4 py-2.5 text-sm text-gray-700 border-b border-gray-100 last:border-b-0 hover:bg-brand-cyan-soft/50 hover:text-brand-navy transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
