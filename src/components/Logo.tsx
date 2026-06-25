import Image from "next/image";

/**
 * Logo variants mapped to brand assets in /public/images/logos/
 *
 * | File            | Use case                          |
 * |-----------------|-----------------------------------|
 * | Bech-Final-05   | Cyan wordmark on white (header)   |
 * | Bech-Final-04   | Horizontal lockup on navy (footer)|
 * | Bech-Final-02   | Stacked lockup on navy            |
 * | Bech-Final-10   | Full vertical brand (hero, etc.)  |
 * | ben-logo-mini   | Header icon & favicon             |
 */
export type LogoVariant =
  | "horizontal"
  | "horizontal-dark"
  | "stacked"
  | "icon"
  | "mini";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}

const sources: Record<LogoVariant, string> = {
  horizontal: "/images/logos/Bech-Final-05.jpg",
  "horizontal-dark": "/images/logos/Bech-Final-04.jpg",
  stacked: "/images/logos/Bech-Final-02.jpg",
  icon: "/images/logos/Bech-Final-10.png",
  mini: "/images/logos/ben-logo-mini.png",
};

const dimensions: Record<
  LogoVariant,
  { width: number; height: number; className: string }
> = {
  horizontal: {
    width: 400,
    height: 96,
    className: "h-12 sm:h-14 lg:h-16 w-auto min-w-[11rem] sm:min-w-[13rem] lg:min-w-[15rem]",
  },
  "horizontal-dark": {
    width: 320,
    height: 80,
    className: "h-12 sm:h-14 w-auto max-w-[280px]",
  },
  stacked: { width: 200, height: 160, className: "h-28 sm:h-32 w-auto" },
  icon: { width: 120, height: 120, className: "h-16 w-16 sm:h-20 sm:w-20" },
  mini: { width: 80, height: 80, className: "h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14" },
};

export default function Logo({
  variant = "horizontal",
  className = "",
  priority = false,
}: LogoProps) {
  const { width, height, className: sizeClass } = dimensions[variant];

  return (
    <Image
      src={sources[variant]}
      alt="Bechnologies - Better Technologies For A Better Future"
      width={width}
      height={height}
      className={`${sizeClass} object-contain object-left ${className}`}
      priority={priority || variant === "horizontal" || variant === "mini"}
    />
  );
}
