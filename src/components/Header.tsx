"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
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
    <>
      <div className="hidden lg:block bg-[#0d2137] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:0905696717"
              className="flex items-center gap-2 hover:text-[#32e0c4] transition-colors"
            >
              <Phone size={14} />
              0905 696 717
            </a>
            <a
              href="mailto:info@bechnologies.vn"
              className="flex items-center gap-2 hover:text-[#32e0c4] transition-colors"
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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0d7377] to-[#14505c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#14505c] tracking-tight">
                  BECHNOLOGIES
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0d7377] hover:bg-[#d4f5ef]/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#0d7377] to-[#14505c] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#0d7377]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Liên hệ tư vấn
              </a>
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
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0d7377] hover:bg-[#d4f5ef]/30 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-[#0d7377] to-[#14505c] text-white text-center font-semibold rounded-full"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
