import Link from "next/link";

export function Footer({ data }: { data: any }) {
  if (!data) return null;

  return (
    <footer className="py-16 bg-background border-t border-on-surface/10">
      <div className="max-w-[1280px] mx-auto px-container-padding flex flex-col md:grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
        <div>
          <div className="font-headline-md text-2xl font-bold mb-6 text-on-surface">
            {data.brandName || "EDITOR_STUDIO"}
          </div>
          <p className="text-on-surface/60 leading-relaxed font-medium text-sm">
            {data.brandTagline || "Crafting cinematic narratives for the world's most influential voices. We don't just edit video; we build authority."}
          </p>
        </div>
        <div>
          <h4 className="font-label-sm uppercase mb-6 text-on-surface font-extrabold text-xs tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-on-surface/80 hover:text-primary transition-colors font-bold text-sm" href="#work">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-on-surface/80 hover:text-primary transition-colors font-bold text-sm" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-on-surface/80 hover:text-primary transition-colors font-bold text-sm" href="#pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-label-sm uppercase mb-6 text-on-surface font-extrabold text-xs tracking-widest">
            Social
          </h4>
          <div className="flex gap-4">
            {data.socialLinks?.map((social: any, index: number) => (
              <Link
                key={index}
                className="w-10 h-10 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all text-on-surface font-bold text-xs"
                href={social.url || "#"}
                title={social.name}
              >
                {social.initials || social.name.substring(0, 2).toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-container-padding border-t border-on-surface/10 pt-8 text-center">
        <p className="text-on-surface/40 text-[10px] font-bold uppercase tracking-widest leading-loose">
          {data.copyright || `© ${new Date().getFullYear()} EDITOR_STUDIO. ALL RIGHTS RESERVED.`}
        </p>
      </div>
    </footer>
  );
}
