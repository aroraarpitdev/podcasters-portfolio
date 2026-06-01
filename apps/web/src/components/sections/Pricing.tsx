export function Pricing() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding" id="pricing">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
          Investment
        </h2>
        <p className="text-on-surface font-bold">
          Simple, fixed pricing for consistent results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter items-center">
        <div className="bg-surface-container-low p-10 rounded-2xl border-2 border-on-surface/20">
          <div className="text-lg font-bold mb-2 text-on-surface">The Starter</div>
          <div className="text-4xl font-headline-md font-bold mb-6 text-on-surface">
            $999<span className="text-sm font-bold">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface font-medium">
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
            <li className="flex items-center gap-2 opacity-50">
              <span className="material-symbols-outlined text-sm font-bold">
                close
              </span>{" "}
              Vertical Shorts
            </li>
          </ul>
          <button className="w-full py-4 border-2 border-on-surface text-on-surface rounded-lg uppercase font-label-sm text-xs hover:bg-on-surface/10 transition-colors font-extrabold">
            Choose Starter
          </button>
        </div>
        <div className="bg-surface-container-high p-12 rounded-2xl border-[3px] border-primary scale-110 relative z-10 shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase">
            Best Value
          </div>
          <div className="text-xl font-extrabold mb-2 text-on-surface">
            Full Podcaster
          </div>
          <div className="text-5xl font-headline-md font-bold mb-6 text-on-surface">
            $2,499<span className="text-sm font-bold">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface font-bold">
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
          <button className="w-full py-4 bg-primary text-on-primary rounded-lg uppercase font-label-sm text-xs hover:opacity-90 transition-opacity font-extrabold">
            Choose Full Podcaster
          </button>
        </div>
        <div className="bg-surface-container-low p-10 rounded-2xl border-2 border-on-surface/20">
          <div className="text-lg font-bold mb-2 text-on-surface">The Agency</div>
          <div className="text-4xl font-headline-md font-bold mb-6 text-on-surface">
            $4,999<span className="text-sm font-bold">/mo</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface font-medium">
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
          <button className="w-full py-4 border-2 border-on-surface text-on-surface rounded-lg uppercase font-label-sm text-xs hover:bg-on-surface/10 transition-colors font-extrabold">
            Choose Agency
          </button>
        </div>
      </div>
    </section>
  );
}
