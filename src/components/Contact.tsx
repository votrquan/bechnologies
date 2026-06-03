"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Liên hệ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hãy để lại thông tin, đội ngũ tư vấn của chúng tôi sẽ liên hệ trong
            thời gian sớm nhất
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-gradient-to-br from-[#0d2137] to-[#14505c] rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6">Thông tin liên hệ</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#32e0c4]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-300">Địa chỉ</p>
                    <p className="text-sm mt-1">
                      Mai Đăng Chơn, TDP Mỹ Đông, P. Tam Kỳ, TP. Đà Nẵng, Việt
                      Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#32e0c4]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-300">
                      Điện thoại
                    </p>
                    <p className="text-sm mt-1">0905 696 717 | 0396 190 507</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#32e0c4]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-300">Email</p>
                    <p className="text-sm mt-1">info@bechnologies.vn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#32e0c4]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-300">
                      Giờ làm việc
                    </p>
                    <p className="text-sm mt-1">
                      Thứ 2 – Thứ 7: 8:00 – 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              className="p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-100"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Công ty
                  </label>
                  <input
                    type="text"
                    placeholder="Tên công ty"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    placeholder="0905 xxx xxx"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Lĩnh vực quan tâm
                </label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all text-gray-500">
                  <option>Chọn lĩnh vực</option>
                  <option>Cơ khí chế tạo</option>
                  <option>Tự động hoá công nghiệp</option>
                  <option>Số hoá doanh nghiệp (MES/MRP/WMS)</option>
                  <option>AI & Phân tích dữ liệu</option>
                  <option>Năng lượng & Tiết kiệm</option>
                  <option>Hệ thống phụ trợ</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nội dung yêu cầu
                </label>
                <textarea
                  rows={4}
                  placeholder="Mô tả nhu cầu của bạn..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20 focus:border-[#0d7377] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#0d7377] to-[#14505c] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0d7377]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
