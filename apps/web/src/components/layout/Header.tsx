import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-on-surface/20 h-16 flex items-center">
      <div className="max-w-[1280px] mx-auto w-full px-container-padding flex justify-between items-center">
        <div className="font-headline-md text-[18px] font-bold tracking-tight text-on-surface">
          EDITOR_STUDIO
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
            href="#work"
          >
            Work
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
            href="#process"
          >
            Process
          </Link>
          <Link
            className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
        <button className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full uppercase transition-transform active:scale-95 font-bold">
          Book a Call
        </button>
      </div>
    </header>
  );
}
