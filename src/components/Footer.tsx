"use client";

import { MapPin, Phone, Mail, Globe, Video, Briefcase } from "lucide-react";

const footerLinks = {
  solutions: {
    title: "Giải pháp",
    links: [
      "Cơ khí chế tạo",
      "Tự động hoá công nghiệp",
      "Số hoá nhà máy",
      "AI & Phân tích dữ liệu",
      "Năng lượng xanh",
    ],
  },
  products: {
    title: "Sản phẩm",
    links: [
      "AGV – AMR – Robot",
      "Thiết bị công nghiệp",
      "Phần mềm SCADA",
      "Jig & Đồ gá",
      "Linh kiện công nghiệp",
    ],
  },
  services: {
    title: "Dịch vụ",
    links: [
      "Khảo sát & Tư vấn",
      "Thiết kế & Lắp đặt",
      "Bảo trì & Sửa chữa",
      "Cải tiến & Nâng cấp",
      "Đào tạo vận hành",
    ],
  },
};

const socialLinks = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: Video, label: "Video", href: "#" },
  { icon: Briefcase, label: "Dự án", href: "#projects" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Sẵn sàng chuyển đổi số?
              </h3>
              <p className="text-gray-400">
                Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#32e0c4] to-[#0d7377] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#32e0c4]/30 transition-all duration-300 hover:-translate-y-1 shrink-0"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#32e0c4] to-[#0d7377] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                BECHNOLOGIES
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Công ty TNHH Công Nghệ Bechnologies Việt Nam – Cung cấp thiết bị,
              phần mềm và phát triển giải pháp công nghệ tiên tiến cho doanh
              nghiệp.
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#32e0c4] shrink-0 mt-0.5" />
                <span>
                  Mai Đăng Chơn, TDP Mỹ Đông, P. Tam Kỳ, TP. Đà Nẵng
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#32e0c4] shrink-0" />
                <span>0905 696 717 | 0396 190 507</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#32e0c4] shrink-0" />
                <span>info@bechnologies.vn</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#32e0c4]/20 hover:text-[#32e0c4] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#32e0c4] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bechnologies Vietnam. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600">
            Better Technologies For A Better Future
          </p>
        </div>
      </div>
    </footer>
  );
}
