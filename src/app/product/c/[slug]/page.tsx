import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

/** Danh mục / series chưa có trang nội bộ → 404 (không chuyển sang Hongfa). */
export default async function UnavailableProductCategoryPage({ params }: Props) {
  await params;
  notFound();
}
