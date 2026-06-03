"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Gauge,
  MonitorCheck,
  Database,
  Factory,
  Boxes,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    id: "energy",
    icon: Gauge,
    title: "Phần mềm Quản lý Năng lượng",
    description:
      "Hệ thống quản lý, giám sát và tối ưu năng lượng cho nhà máy sản xuất",
    features: [
      "Quản lý dữ liệu nhiều loại năng lượng sử dụng: điện, gas, xăng, dầu,...",
      "Thu thập dữ liệu từ đồng hồ năng lượng tự động",
      "Cảnh báo chất lượng năng lượng: sóng hài, quá áp,...",
      "Truy xuất lịch sử dữ liệu: điện áp, dòng điện, chỉ số tiêu thụ,...",
      "Tổng hợp dữ liệu và xuất báo cáo",
      "Tính toán chi phí tiêu thụ năng lượng từng ngày, từng khu vực",
    ],
    color: "bg-amber-500",
  },
  {
    id: "scada",
    icon: MonitorCheck,
    title: "Hệ thống SCADA Giám sát / Điều khiển Sản xuất",
    description:
      "Giám sát thời gian thực và điều khiển tự động các thiết bị sản xuất",
    features: [
      "Giám sát dữ liệu thời gian thực của thiết bị",
      "Cảnh báo các thông số ảnh hưởng đến sản xuất",
      "Giám sát vị trí hiện tại của xe sản xuất",
      "Truy xuất lịch sử thông số: nhiệt độ, độ ẩm, độ pH,...",
      "Tự động xác định dòng xe để điều khiển thiết bị",
      "Là công cụ đưa ra giải pháp vận hành thiết bị tối ưu",
    ],
    color: "bg-blue-500",
  },
  {
    id: "equipment",
    icon: Database,
    title: "Phần mềm Quản lý Thiết bị",
    description: "Hệ thống quản lý toàn diện vòng đời thiết bị nhà máy",
    features: [
      "Quản lý thông tin thiết bị: thông số kỹ thuật, lịch sử bảo trì",
      "Định danh thiết bị qua mã QR: Quét mã QR để xem đầy đủ thông tin",
      "Truy xuất lịch sử & cảnh báo thông số thiết bị",
      "Tổng hợp dữ liệu và xuất báo cáo",
      "Tạo các Dashboard trực quan hóa dữ liệu đánh giá hiệu quả",
    ],
    color: "bg-green-500",
  },
  {
    id: "mrp",
    icon: ClipboardList,
    title: "MRP Module",
    description:
      "Hệ thống hoạch định nguồn lực sản xuất, quản lý nguyên vật liệu",
    features: [
      "Master Data: Category setup, Trade Partner/Customer setup",
      "CBD: Define consumption for each product/SKU",
      "CO: Create booking/customer order for company products",
      "PO: Calculate total consumptions, plan material purchase",
      "IB/OB Monitoring: Monitor inbound/outbound material",
    ],
    color: "bg-indigo-500",
  },
  {
    id: "mes",
    icon: Factory,
    title: "MES - Manufacturing Execution System",
    description:
      "Hệ thống điều hành sản xuất thông minh, theo dõi toàn bộ quy trình",
    features: [
      "CO Creation & Monitoring",
      "Line Planning & Execution",
      "Inbound Material Management (Fabric, Webbing)",
      "Printing & Cutting management",
      "Product Packing & Country Tags",
      "Outbound Product management",
    ],
    color: "bg-rose-500",
  },
  {
    id: "wms",
    icon: Boxes,
    title: "WMS Module",
    description:
      "Hệ thống quản lý kho hàng, tối ưu logistics nội bộ",
    features: [
      "Inbound: Receiving List, Receiving Zone, Putaway",
      "Outbound: Delivery List, Delivery Confirm, History",
      "Inventory: Monitoring & History",
      "Master Data: Location Setup, Inspection Management",
    ],
    color: "bg-cyan-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d4f5ef] text-[#0d7377] text-sm font-semibold rounded-full mb-4">
            Dự án
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14505c] mb-6">
            Dự án tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Factory Solution – MRP / WMS / MES và các hệ thống giám sát thông
            minh đã được triển khai thực tế
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeProject === project.id
                  ? "bg-[#0d7377] text-white shadow-lg shadow-[#0d7377]/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <project.icon className="w-4 h-4 inline-block mr-2" />
              {project.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 ${active.color} rounded-xl flex items-center justify-center`}
              >
                <active.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#14505c]">
                  {active.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {active.description}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {active.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0d7377] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0d2137] to-[#14505c] rounded-2xl overflow-hidden p-8 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(50,224,196,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(50,224,196,0.3) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
              <div className="relative text-center">
                <active.icon className="w-24 h-24 text-[#32e0c4]/40 mx-auto mb-6" />
                <h4 className="text-white text-xl font-bold mb-2">
                  {active.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                  {active.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#32e0c4]/10 border border-[#32e0c4]/30 rounded-full text-[#32e0c4] text-sm">
                  <span className="w-2 h-2 bg-[#32e0c4] rounded-full animate-pulse" />
                  Đang vận hành
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-r from-[#0d2137] to-[#14505c] rounded-3xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Factory Solutions - Hệ thống tích hợp
            </h3>
            <p className="text-gray-300 text-sm">
              MRP / WMS / MES kết nối đồng bộ, quản lý toàn bộ chuỗi sản xuất
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "MRP", status: "Fully Use", percent: "100%" },
              { name: "WMS", status: "Basic Use", percent: "50%" },
              { name: "MES", status: "In Development", percent: "30%" },
              { name: "ERP", status: "Planning", percent: "10%" },
            ].map((sys) => (
              <div
                key={sys.name}
                className="p-4 bg-white/5 rounded-xl border border-white/10 text-center"
              >
                <h4 className="text-[#32e0c4] text-lg font-bold mb-1">
                  {sys.name}
                </h4>
                <div className="w-full h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#32e0c4] to-[#0d7377] rounded-full"
                    style={{ width: sys.percent }}
                  />
                </div>
                <p className="text-gray-400 text-xs">{sys.status}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
