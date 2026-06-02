export function Services() {
  return (
    <section className="py-section-gap bg-surface-container" id="services">
      <div className="max-w-[1280px] mx-auto px-container-padding">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
            Services
          </h2>
          <p className="text-on-surface/70 font-medium">
            Everything you need to go from recording to ranking.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
          <div className="bg-background p-8 rounded-2xl border border-on-surface/10 hover:border-primary transition-colors">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary font-bold">
                movie
              </span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 text-on-surface">
              Full Episodes
            </h3>
            <p className="text-on-surface/70 mb-6 text-sm font-medium">
              Complete end-to-end editing with multi-cam switching, color grading, and audio mastering.
            </p>
            <ul className="space-y-3 text-xs font-bold">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Intro/Outro Graphics
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Advanced Noise Removal
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                B-Roll Integration
              </li>
            </ul>
          </div>
          <div className="bg-background p-8 rounded-2xl border-2 border-primary relative shadow-2xl shadow-primary/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
              Most Popular
            </div>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary font-bold">
                smartphone
              </span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 text-on-surface">
              Shorts & Reels
            </h3>
            <p className="text-on-surface/70 mb-6 text-sm font-medium">
              Viral-ready vertical clips with dynamic captions and high-retention editing patterns.
            </p>
            <ul className="space-y-3 text-xs font-bold">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                30-60s Viral Hooks
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Animated Subtitles
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Sound FX & Music
              </li>
            </ul>
          </div>
          <div className="bg-background p-8 rounded-2xl border border-on-surface/10 hover:border-primary transition-colors">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary font-bold">
                ads_click
              </span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 text-on-surface">
              Visual Identity
            </h3>
            <p className="text-on-surface/70 mb-6 text-sm font-medium">
              High-CTR thumbnail design and social media asset kits for every episode release.
            </p>
            <ul className="space-y-3 text-xs font-bold">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Custom Thumbnail Art
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                YouTube Title Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm font-bold">
                  check_circle
                </span>
                Platform Optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
