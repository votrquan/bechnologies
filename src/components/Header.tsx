"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import ProductsMegaMenu from "@/components/ProductsMegaMenu";
import { productMenuCategories } from "@/lib/product-menu";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/#about" },
  { label: "Giải pháp", href: "/solutions" },
  { label: "Sản phẩm", href: "/#products", mega: true },
  { label: "Dịch vụ", href: "/#services" },
  { label: "Dự án", href: "/#projects" },
  { label: "Liên hệ", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const onProductSection = pathname?.startsWith("/product") ?? false;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setMobileProductsOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div id="site-header" className="sticky top-0 z-50">
      <div className="hidden lg:block bg-brand-navy text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:0905696717"
              className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
            >
              <Phone size={14} />
              0905 696 717
            </a>
            <a
              href="mailto:info@bechnologies.vn"
              className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
            >
              <Mail size={14} />
              info@bechnologies.vn
            </a>
          </div>
          <p className="text-gray-300">
            Better Technologies For A Better Future
          </p>
        </div>
      </div>

      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 py-1 -my-1 group"
              aria-label="Bechnologies — Trang chủ"
            >
              <Logo variant="mini" priority />
              <div className="hidden sm:block leading-none">
                <span className="block text-base lg:text-lg font-bold text-brand-navy tracking-[0.12em] group-hover:text-brand-navy-mid transition-colors">
                  BECHNOLOGIES
                </span>
                <span className="block mt-1 text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-wide whitespace-nowrap">
                  Better Technologies For A Better Future
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.mega ? (
                  <ProductsMegaMenu
                    key={item.label}
                    open={productsOpen}
                    onOpenChange={setProductsOpen}
                    openCatalogInNewTab={!onProductSection}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/80 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-navy-mid hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Liên hệ tư vấn
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) =>
                  item.mega ? (
                    <div key={item.label} className="rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/50 rounded-lg transition-colors font-medium"
                        aria-expanded={mobileProductsOpen}
                      >
                        Sản phẩm
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white border border-gray-100 rounded-xl mx-1 mb-2 max-h-[60vh] overflow-y-auto"
                          >
                            <div className="divide-y divide-gray-100">
                              {productMenuCategories.map((cat) => {
                                const openCat =
                                  Boolean(cat.external) ||
                                  (cat.href.startsWith("/product") &&
                                    !onProductSection);
                                return (
                                  <div key={cat.id} className="py-2">
                                    <Link
                                      href={cat.href}
                                      {...(openCat
                                        ? {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          }
                                        : {})}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-4 py-1.5 text-sm font-semibold text-brand-navy"
                                    >
                                      {cat.label}
                                    </Link>
                                    <ul className="pl-2">
                                      {cat.children.map((link) => {
                                        const openChild =
                                          Boolean(link.external) ||
                                          (link.href.startsWith("/product") &&
                                            !onProductSection);
                                        return (
                                          <li key={`${cat.id}-${link.label}`}>
                                            <Link
                                              href={link.href}
                                              {...(openChild
                                                ? {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                  }
                                                : {})}
                                              onClick={() =>
                                                setMobileMenuOpen(false)
                                              }
                                              className="block px-4 py-1.5 text-sm text-gray-600 hover:text-brand-navy"
                                            >
                                              {link.label}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/50 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-brand-navy text-white text-center font-semibold rounded-full hover:bg-brand-navy-mid"
                >
                  Liên hệ tư vấn
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
