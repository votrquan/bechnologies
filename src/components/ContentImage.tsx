import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: "video" | "square" | "auto";
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  auto: "",
};

export default function ContentImage({
  src,
  alt,
  className = "",
  priority = false,
  aspect = "auto",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm ${aspectClass[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        className={`w-full h-full object-cover ${aspect === "auto" ? "h-auto object-contain bg-white" : ""}`}
      />
    </div>
  );
}
