import Image from "next/image";

// Renders the Apps 369 logo with theme-aware text:
// light theme -> original (dark text), dark theme -> light-gray text variant.
// Swap is handled in globals.css via [data-theme] + .logo-lm / .logo-dm.
export default function BrandLogo({
  className = "",
  priority = false,
  decorative = false,
}: {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const alt = decorative ? "" : "Apps 369";
  const hidden = decorative || undefined;
  return (
    <>
      <Image
        src="/apps369-logo.png"
        alt={alt}
        width={2144}
        height={1065}
        priority={priority}
        aria-hidden={hidden}
        className={`logo-lm ${className}`}
      />
      <Image
        src="/apps369-logo-dark.png"
        alt={alt}
        width={2144}
        height={1065}
        priority={priority}
        aria-hidden={hidden}
        className={`logo-dm ${className}`}
      />
    </>
  );
}
