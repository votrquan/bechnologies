import Image from "next/image";

/**
 * Logo variants mapped to brand assets in /public/images/logos/
 *
 * | File              | Use case                              |
 * |-------------------|---------------------------------------|
 * | bech-logo-lockup  | Full mark + wordmark + tagline        |
 * | bech-logo-mark    | Hexagon B mark (hero watermark, etc.) |
 * | ben-logo-mini     | Header icon & favicon                 |
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
  horizontal: "/images/logos/bech-logo-lockup.png",
  "horizontal-dark": "/images/logos/bech-logo-lockup.png",
  stacked: "/images/logos/bech-logo-lockup.png",
  icon: "/images/logos/bech-logo-mark.png",
  mini: "/images/logos/ben-logo-mini.png",
};

const dimensions: Record<
  LogoVariant,
  { width: number; height: number; className: string }
> = {
  horizontal: {
    width: 805,
    height: 353,
    className:
      "h-12 sm:h-14 lg:h-[3.75rem] w-auto min-w-[9rem] sm:min-w-[10.5rem] lg:min-w-[12rem]",
  },
  "horizontal-dark": {
    width: 805,
    height: 353,
    className: "h-14 sm:h-16 w-auto max-w-[240px]",
  },
  stacked: {
    width: 805,
    height: 353,
    className: "h-20 sm:h-24 w-auto",
  },
  icon: {
    width: 217,
    height: 217,
    className: "h-16 w-16 sm:h-20 sm:w-20",
  },
  mini: {
    width: 178,
    height: 253,
    className: "h-11 w-auto sm:h-12 lg:h-14",
  },
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
