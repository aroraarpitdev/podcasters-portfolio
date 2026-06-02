export function Pricing() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding" id="pricing">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-4 text-on-surface">
          Investment
        </h2>
        <p className="text-on-surface/70 font-bold">
          Simple, fixed pricing for consistent results.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:items-center">
        <div className="bg-surface-container-low p-8 rounded-2xl border border-on-surface/10">
          <div className="text-md font-bold mb-2 text-on-surface/60 uppercase tracking-widest">The Starter</div>
          <div className="text-4xl font-headline-md font-bold mb-6 text-on-surface">
            $999<span className="text-sm font-bold opacity-60">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface/80 font-medium text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              4 Full Episodes /mo
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Basic Audio EQ
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              YouTube Thumbnails
            </li>
            <li className="flex items-center gap-2 opacity-30">
              <span className="material-symbols-outlined text-sm font-bold">
                close
              </span>{" "}
              Vertical Shorts
            </li>
          </ul>
          <button className="w-full py-4 border border-on-surface/20 text-on-surface rounded-lg uppercase font-label-sm text-[11px] font-extrabold">
            Choose Starter
          </button>
        </div>
        <div className="bg-surface-container-high p-8 md:p-10 rounded-2xl border-2 border-primary relative z-10 shadow-2xl md:scale-110">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase">
            Best Value
          </div>
          <div className="text-lg font-extrabold mb-2 text-on-surface uppercase tracking-widest">
            Full Podcaster
          </div>
          <div className="text-5xl font-headline-md font-bold mb-6 text-on-surface">
            $2,499<span className="text-sm font-bold opacity-60">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface font-bold text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              4 Full Episodes /mo
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              12 Viral Shorts /mo
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Premium Color Grading
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Dedicated Editor
            </li>
          </ul>
          <button className="w-full py-5 bg-primary text-on-primary rounded-lg uppercase font-label-sm text-xs font-extrabold shadow-lg">
            Choose Full Podcaster
          </button>
        </div>
        <div className="bg-surface-container-low p-8 rounded-2xl border border-on-surface/10">
          <div className="text-md font-bold mb-2 text-on-surface/60 uppercase tracking-widest">The Agency</div>
          <div className="text-4xl font-headline-md font-bold mb-6 text-on-surface">
            $4,999<span className="text-sm font-bold opacity-60">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface/80 font-medium text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Unlimited Episodes
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Unlimited Shorts
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Brand Identity Suite
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm font-bold">
                check
              </span>{" "}
              Marketing Consultation
            </li>
          </ul>
          <button className="w-full py-4 border border-on-surface/20 text-on-surface rounded-lg uppercase font-label-sm text-[11px] font-extrabold">
            Choose Agency
          </button>
        </div>
      </div>
    </section>
  );
}
