import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-8 py-8 text-[14px] text-text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5 font-display font-semibold text-text">
          <BrandLogo className="h-5 w-auto" decorative />
          Hector Waldman
        </div>
        <p>hectorwaldmann.site &middot; &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
