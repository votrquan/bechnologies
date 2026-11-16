import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-surface px-4">
      <div className="max-w-lg w-full text-center rounded-3xl bg-white border border-gray-100 shadow-lg shadow-brand-navy/5 p-10 sm:p-12">
        <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center">
          <SearchX className="w-8 h-8 text-brand-cyan" />
        </div>
        <p className="text-sm font-semibold text-brand-cyan-readable uppercase tracking-wider mb-2">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
          Sản phẩm chưa có trên hệ thống
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Danh mục hoặc model này chưa được cập nhật trên website Bechnologies.
          Vui lòng xem catalog hiện có hoặc liên hệ để được tư vấn.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/product"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy-hover transition-colors"
          >
            <ArrowLeft size={16} />
            Về danh mục sản phẩm
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-brand-navy/20 text-brand-navy text-sm font-semibold hover:bg-brand-cyan-soft/60 transition-colors"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
