export function Services() {
  return (
    <section className="py-section-gap bg-surface-container" id="services">
      <div className="max-w-[1280px] mx-auto px-container-padding">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
            Services
          </h2>
          <p className="text-on-surface font-medium">
            Everything you need to go from recording to ranking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          <div className="bg-background p-10 rounded-2xl border-2 border-on-surface/10 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-on-primary font-bold">
                movie
              </span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 text-on-surface">
              Full Episodes
            </h3>
            <p className="text-on-surface mb-6 font-medium">
              Complete end-to-end editing with multi-cam switching, color grading, and audio mastering.
            </p>
            <ul className="space-y-3 text-sm font-bold">
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
          <div className="bg-background p-10 rounded-2xl border-[3px] border-primary relative shadow-2xl shadow-primary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Most Popular
            </div>
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-on-primary font-bold">
                smartphone
              </span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 text-on-surface">
              Shorts & Reels
            </h3>
            <p className="text-on-surface mb-6 font-medium">
              Viral-ready vertical clips with dynamic captions and high-retention editing patterns.
            </p>
            <ul className="space-y-3 text-sm font-bold">
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
          <div className="bg-background p-10 rounded-2xl border-2 border-on-surface/10 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-on-primary font-bold">
                ads_click
              </span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 text-on-surface">
              Visual Identity
            </h3>
            <p className="text-on-surface mb-6 font-medium">
              High-CTR thumbnail design and social media asset kits for every episode release.
            </p>
            <ul className="space-y-3 text-sm font-bold">
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
