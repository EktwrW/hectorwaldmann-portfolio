import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-8 py-8 text-[14px] text-text-muted sm:flex-row">
        <div className="flex items-center gap-2.5 font-display font-semibold text-text">
          <Image src="/apps369-logo.png" alt="" width={20} height={20} className="h-5 w-auto" aria-hidden="true" />
          Hector Waldman
        </div>
        <p>hectorwaldmann.site &middot; &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
