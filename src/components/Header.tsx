"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/#about" },
  { label: "Giải pháp", href: "/solutions" },
  { label: "Sản phẩm", href: "/#products" },
  { label: "Dịch vụ", href: "/#services" },
  { label: "Dự án", href: "/#projects" },
  { label: "Liên hệ", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            >
              <Logo variant="mini" priority />
              <div className="hidden sm:block leading-none">
                <span className="block text-base lg:text-lg font-bold text-brand-navy tracking-[0.12em] group-hover:text-brand-navy-mid transition-colors">
                  BECHNOLOGIES
                </span>
                <span className="block mt-1 text-[10px] lg:text-[11px] text-gray-500 uppercase tracking-wider">
                  Better Technologies
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/80 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
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
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-brand-navy-mid hover:bg-brand-cyan-soft/50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
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
