"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials({ data }: { data: any }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const counters = gsap.utils.toArray(".counter") as HTMLElement[];
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      const suffix = counter.getAttribute("data-suffix") || "";

      gsap.to(counter, {
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out",
        onUpdate: function () {
          counter.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
        },
      });
    });
  }, { scope: container });

  if (!data) return null;

  return (
    <section ref={container} className="py-section-gap overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-container-padding text-center mb-16">
        <h2 className="font-headline-lg text-[36px] md:text-[48px] text-on-surface mb-4">
          {data.heading}
        </h2>
        <p className="text-on-surface/60 font-body-md text-[16px]">
          {data.subheading}
        </p>
      </div>

      {/* Part A: Metric Stats Bar */}
      <div className="w-full bg-[#111111] border-y border-on-surface/10 py-12 mb-20">
        <div className="max-w-[1280px] mx-auto px-container-padding grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.metricsStatsBar?.map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="font-headline-lg text-[56px] text-primary counter" data-suffix={stat.dataSuffix} data-target={stat.dataTarget}>
                0
              </div>
              <div className="font-label-sm text-[13px] uppercase tracking-widest text-on-surface/70">
                {stat.dataTitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part B: Infinite Marquee Scroll */}
      <div className="marquee-container space-y-8 side-fade-mask">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          {[1, 2].map((group) => (
            <div key={`row1-${group}`} className="flex gap-6 animate-marquee-left px-3">
              {data.videoCards?.map((video: any, index: number) => (
                <div key={`v-${index}`} className="w-[300px] shrink-0 bg-[#111111] p-6 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img
                      alt={video.videoAuthor}
                      className="w-full h-full object-cover opacity-60"
                      src={video.videoThumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuCHT4PpzvX-4n6E2iWsVBKgdpln8s3PoRyZkKsvu_LKFhg-vqq729K2OnWZJtZcEwCQ8OiW10Tbg97F8TxTkgU36ICrRRtStySpXIUX7IzQamfIDKOkKM8Aj2lBlvyZztZIqf32VqgH1YC1ttbRVybbyZGo98wUtds8xecsOu4i96sHLbEo2utQdbxhzq1d5wKUHQI34kzqm36RAZkK1vKOZF2EQPV17FS7pfdg7KeBaHIFGJs4Q3e-C5ICo_vnm-Scw2ktZfAmP1A"}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary">
                          play_arrow
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface">{video.videoAuthor}</h5>
                    <p className="text-xs text-on-surface/50">{video.authorBrand}</p>
                  </div>
                  <p className="text-sm italic text-on-surface/80 line-clamp-3">
                    {video.testimonial}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>
                </div>
              ))}

              {data.textCards?.map((text: any, index: number) => (
                <div key={`t-${index}`} className="w-[320px] shrink-0 bg-[#111111] p-8 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                  <span className="material-symbols-outlined text-primary text-4xl opacity-30">
                    format_quote
                  </span>
                  <p className="text-on-surface font-medium leading-relaxed line-clamp-4">
                    {text.cardHeading}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-bold text-xs uppercase">
                      {text.author.substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-on-surface">{text.author}</div>
                      <div className="flex text-primary scale-75 origin-left">
                        {Array.from({ length: parseInt(text.rating) || 5 }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined fill-1">star</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      {text.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
