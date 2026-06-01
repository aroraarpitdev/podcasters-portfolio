import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 bg-background border-t-2 border-on-surface/10">
      <div className="max-w-[1280px] mx-auto px-container-padding grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div>
          <div className="font-headline-md text-2xl font-bold mb-6 text-on-surface">
            EDITOR_STUDIO
          </div>
          <p className="text-on-surface leading-relaxed font-medium">
            Crafting cinematic narratives for the world's most influential voices. We don't just edit video; we build authority.
          </p>
        </div>
        <div>
          <h4 className="font-label-sm uppercase mb-8 text-on-surface font-extrabold">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-on-surface hover:text-primary transition-colors font-bold" href="#">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-on-surface hover:text-primary transition-colors font-bold" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-on-surface hover:text-primary transition-colors font-bold" href="#pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-on-surface hover:text-primary transition-colors font-bold" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-sm uppercase mb-8 text-on-surface font-extrabold">
            Social
          </h4>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 rounded-full border-2 border-on-surface/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all text-on-surface font-bold"
              href="#"
            >
              YT
            </Link>
            <Link
              className="w-10 h-10 rounded-full border-2 border-on-surface/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all text-on-surface font-bold"
              href="#"
            >
              IG
            </Link>
            <Link
              className="w-10 h-10 rounded-full border-2 border-on-surface/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all text-on-surface font-bold"
              href="#"
            >
              LI
            </Link>
            <Link
              className="w-10 h-10 rounded-full border-2 border-on-surface/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all text-on-surface font-bold"
              href="#"
            >
              TW
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-container-padding border-t-2 border-on-surface/10 pt-10 text-center md:text-left">
        <p className="text-on-surface text-sm font-bold">
          © {new Date().getFullYear()} EDITOR_STUDIO. CRAFTING CINEMATIC NARRATIVES. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
