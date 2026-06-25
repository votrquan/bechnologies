"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tag?: string;
  children: React.ReactNode;
};

export default function SolutionPageShell({
  title,
  description,
  tag,
  children,
}: Props) {
  return (
    <>
      {/* Fixed — luôn hiển thị khi scroll (sticky bị giới hạn trong parent hero) */}
      <div className="fixed inset-x-0 z-[49] border-b border-white/10 bg-brand-navy/98 backdrop-blur-md shadow-lg shadow-black/25 top-[var(--site-header-h)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-cyan text-brand-navy text-sm font-bold shadow-md shadow-brand-cyan/25 hover:brightness-95 hover:shadow-lg hover:shadow-brand-cyan/35 transition-all duration-200"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
              Tất cả giải pháp
            </Link>
            {tag && (
              <span className="inline-flex items-center px-3.5 py-2 rounded-full bg-white/10 text-brand-cyan text-xs font-semibold border border-brand-cyan/40">
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-brand-navy text-white">
        {/* Spacer cho thanh fixed — tránh che tiêu đề */}
        <div className="h-14 sm:h-[3.25rem] lg:h-[3.5rem]" aria-hidden />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 pt-4 lg:pt-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="bg-white">{children}</div>
    </>
  );
}
