"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, MessageCircle, Phone, X } from "lucide-react";
import { contactInfo } from "@/lib/contact";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#0068FF" />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fill="white"
        fontSize="22"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        Z
      </text>
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#0084FF" />
      <path
        fill="white"
        d="M24 10c-7.7 0-14 5.6-14 12.5 0 3.9 1.9 7.4 4.9 9.7v5.3l5.3-2.9c1.4.4 2.9.6 4.4.6 7.7 0 14-5.6 14-12.5S31.7 10 24 10zm1.4 16.8-3.6-3.8-7 3.8 7.7-8.2 3.7 3.8 6.9-3.8-7.7 8.2z"
      />
    </svg>
  );
}

const menuItems = [
  {
    id: "phone",
    label: "Gọi ngay cho chúng tôi",
    href: `tel:${contactInfo.phone}`,
    external: false,
    icon: (
      <span className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
        <Phone className="w-5 h-5 text-white" />
      </span>
    ),
  },
  {
    id: "zalo",
    label: "Chat với chúng tôi qua Zalo",
    href: contactInfo.zaloUrl,
    external: true,
    icon: <ZaloIcon className="w-10 h-10 shrink-0" />,
  },
  {
    id: "consult",
    label: "Đăng ký tư vấn miễn phí",
    href: "/#contact",
    external: false,
    icon: (
      <span className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center shrink-0">
        <FileText className="w-5 h-5 text-brand-navy" />
      </span>
    ),
  },
  {
    id: "facebook",
    label: "Chat với chúng tôi qua Facebook",
    href: contactInfo.facebookMessengerUrl,
    external: true,
    icon: <MessengerIcon className="w-10 h-10 shrink-0" />,
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[min(100vw-2.5rem,20rem)] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-brand-navy">Liên hệ</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Đóng menu liên hệ"
              >
                <X size={16} />
              </button>
            </div>

            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {item.icon}
                    <span className="text-sm text-gray-700 leading-snug">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-brand-navy text-white shadow-xl shadow-brand-navy/30 flex items-center justify-center hover:bg-brand-navy-mid transition-colors"
        aria-label={open ? "Đóng liên hệ nhanh" : "Mở liên hệ nhanh"}
        aria-expanded={open}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
