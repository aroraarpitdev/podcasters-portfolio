"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
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

  return (
    <section ref={container} className="py-section-gap overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-container-padding text-center mb-16">
        <h2 className="font-headline-lg text-[36px] md:text-[48px] text-on-surface mb-4">
          Results That Speak
        </h2>
        <p className="text-on-surface/60 font-body-md text-[16px]">
          From the podcasters we've worked with.
        </p>
      </div>

      {/* Part A: Metric Stats Bar */}
      <div className="w-full bg-[#111111] border-y border-on-surface/10 py-12 mb-20">
        <div className="max-w-[1280px] mx-auto px-container-padding grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-headline-lg text-[56px] text-primary counter" data-suffix="M+" data-target="2.5">
              0
            </div>
            <div className="font-label-sm text-[13px] uppercase tracking-widest text-on-surface/70">
              Total Views
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-lg text-[56px] text-primary counter" data-suffix="+" data-target="500">
              0
            </div>
            <div className="font-label-sm text-[13px] uppercase tracking-widest text-on-surface/70">
              Episodes Edited
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-lg text-[56px] text-primary counter" data-suffix="h" data-target="48">
              0
            </div>
            <div className="font-label-sm text-[13px] uppercase tracking-widest text-on-surface/70">
              Turnaround
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-lg text-[56px] text-primary counter" data-suffix="+" data-target="10">
              0
            </div>
            <div className="font-label-sm text-[13px] uppercase tracking-widest text-on-surface/70">
              Countries Served
            </div>
          </div>
        </div>
      </div>

      {/* Part B: Infinite Marquee Scroll */}
      <div className="marquee-container space-y-8 side-fade-mask">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          {/* We duplicate the inner flex box to create the seamless loop */}
          {[1, 2].map((group) => (
            <div key={`row1-${group}`} className="flex gap-6 animate-marquee-left px-3">
              {/* Video Card */}
              <div className="w-[300px] shrink-0 bg-[#111111] p-6 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container">
                  <img
                    alt="Video"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHT4PpzvX-4n6E2iWsVBKgdpln8s3PoRyZkKsvu_LKFhg-vqq729K2OnWZJtZcEwCQ8OiW10Tbg97F8TxTkgU36ICrRRtStySpXIUX7IzQamfIDKOkKM8Aj2lBlvyZztZIqf32VqgH1YC1ttbRVybbyZGo98wUtds8xecsOu4i96sHLbEo2utQdbxhzq1d5wKUHQI34kzqm36RAZkK1vKOZF2EQPV17FS7pfdg7KeBaHIFGJs4Q3e-C5ICo_vnm-Scw2ktZfAmP1A"
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
                  <h5 className="font-bold text-on-surface">Alex Hormozi Style</h5>
                  <p className="text-xs text-on-surface/50">Modern Wealth Podcast</p>
                </div>
                <p className="text-sm italic text-on-surface/80 line-clamp-3">
                  "The retention on my shorts went up by 40% in one week."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    +40% Retention
                  </span>
                </div>
              </div>

              {/* Text Card */}
              <div className="w-[320px] shrink-0 bg-[#111111] p-8 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <span className="material-symbols-outlined text-primary text-4xl opacity-30">
                  format_quote
                </span>
                <p className="text-on-surface font-medium leading-relaxed line-clamp-4">
                  "Working with Editor Studio saved me 20 hours a week. The cinematic quality is unmatched."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6Z_Ye0-qwret8c24c5U7EH5RviZjJHZOgbWrV7KaA8EKRds7efURIp4CCgJ8Krtj4OEDFEMO47G6D5rFaNirWNHLiO3RkNErxhDulP6dFE2cv078u7YODnJXilWc0HpVxPppnvFgQDhXLunefL5emxl0E8DEEh0g2GeSTMTNDHtYazxcgLlyAdmwFPka8HtHZ7hsF8Z4eq-QbHiKZjKu5xTnguU0R9k7LL5_Kj-ucD2x5yyvYKIr-szdt3uYA7GcCDw9WT5Wjis"
                  />
                  <div>
                    <div className="font-bold text-sm text-on-surface">Sarah Jenkins</div>
                    <div className="flex text-primary scale-75 origin-left">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined fill-1">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Time Saved
                  </span>
                </div>
              </div>

              {/* Video Card 2 */}
              <div className="w-[300px] shrink-0 bg-[#111111] p-6 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container">
                  <img
                    alt="Video"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFTE5YPEgHemBO_J1HWYqlH2OScK0Gu9r6MvfUeTQwyP7gj1QO730FBImi3Nc1ZJBOeB_AS0M7DQoWpBG03GKaDq_bEXpDbPPfeV2B8MxKeZ0KzRN9C7DdxbPl8FJrNO3dtGVHUKoamiBABLKxuOHp7rMdgEcZcCCgMChAYIPiKpMi1zTsNAD7tCT9gs2hSQfOUNE1uhTLZejYPPXgytD5DIzq8LCzs8GnjkdDeHdiYL7w4gbJ7N2rjyxwD5armptDVHMMMJOR1NU"
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
                  <h5 className="font-bold text-on-surface">Cinematic Interview</h5>
                  <p className="text-xs text-on-surface/50">Tech Trends Monthly</p>
                </div>
                <p className="text-sm italic text-on-surface/80 line-clamp-3">
                  "Finally a team that understands storytelling, not just trimming clips."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Viral Quality
                  </span>
                </div>
              </div>

              {/* Text Card 2 */}
              <div className="w-[320px] shrink-0 bg-[#111111] p-8 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <span className="material-symbols-outlined text-primary text-4xl opacity-30">
                  format_quote
                </span>
                <p className="text-on-surface font-medium leading-relaxed line-clamp-4">
                  "The communication is seamless. They captured my brand voice perfectly from episode one."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3F0l325DTmTu-mdUnXRY4ksiE4ZWRVQyBNFEP6Lk_breEMsVl-7oBr_k0WodaxO2VND_PSBcG9ZBK7RCqueKlGvI9yM04cmjglv8K8JY0TqZZemza8uK4jNXSaGdt8rhaKpNpE4Q9tnAUbYnCbLxF9XLR1w4_k2FSz1o2j2j-wUjxb6pP3F_5bGLJgYOO4Jcl0K2Ek14TzrGbuw03kmtU94XvFW_-R76G7UufFeZdKoUJ_FMSt2XCr1SMkyawCvTbITbya6lEdKA"
                  />
                  <div>
                    <div className="font-bold text-sm text-on-surface">Mark Robinson</div>
                    <div className="flex text-primary scale-75 origin-left">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined fill-1">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Brand Voice
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Right scroll) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          {[1, 2].map((group) => (
            <div key={`row2-${group}`} className="flex gap-6 animate-marquee-right px-3">
              {/* Text Card 3 */}
              <div className="w-[320px] shrink-0 bg-[#111111] p-8 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <span className="material-symbols-outlined text-primary text-4xl opacity-30">
                  format_quote
                </span>
                <p className="text-on-surface font-medium leading-relaxed line-clamp-4">
                  "I've worked with 5 different editors. This is the first time I didn't need to ask for revisions."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5tdkLx8Q9RnKBj9c7Cj25SmgXQZF9NVD4R6SEnju3Wtugp22MdAfAPnhv96Z53MgHeHLpJCc1VtRemXuwt69sUEaNhwUIA6YCd8TH9Dffesq6_3jLRVp4eSMq44x0rffS74T_jhqpEqWfSUmORrG_QoGO0OHDKXUsaGxT8zMzgBCIWUzgCTyCKtTxeiDmFShEDaQH3JTt6UzwsIe4dIKKYX1OKR2FgiUQDZ518p3Os4kMtwhBpiw5VlyKmaXD6FnSifteGCeQopU"
                  />
                  <div>
                    <div className="font-bold text-sm text-on-surface">Kevin O'Brian</div>
                    <div className="flex text-primary scale-75 origin-left">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined fill-1">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Quality Focused
                  </span>
                </div>
              </div>

              {/* Video Card 3 */}
              <div className="w-[300px] shrink-0 bg-[#111111] p-6 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container">
                  <img
                    alt="Video"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_miubWsfkEirkNa_VETP_H7qMxW4FVDMk_m6Hvi_XyT8KRgNQ_Cj0Ar-SuucFvuWxyp87Feadlpte3_z_Zdccp9Wuhjngjp9DSGCU7O48weXjDdpOO5WPzFlSsX5gK6By-rUQrswveOA4376TzHqun7wtbh2n2JCHgLNrU8Ggy3VYF61V0T9pM4MQXAS1U0WZ3KTyR_R8CMkjRsqvu7VSXcgumAPrh8Ld3BPrOsvmyzKiQ78aO3NqqH4yTXXGPGopSz2VhfG1NdM"
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
                  <h5 className="font-bold text-on-surface">Sound Design FX</h5>
                  <p className="text-xs text-on-surface/50">Audio First Experience</p>
                </div>
                <p className="text-sm italic text-on-surface/80 line-clamp-3">
                  "The sound design alone doubled our listener engagement."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    2x Engagement
                  </span>
                </div>
              </div>

              {/* Text Card 4 */}
              <div className="w-[320px] shrink-0 bg-[#111111] p-8 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <span className="material-symbols-outlined text-primary text-4xl opacity-30">
                  format_quote
                </span>
                <p className="text-on-surface font-medium leading-relaxed line-clamp-4">
                  "Absolute game changers. My YouTube channel growth exploded after switching to their edits."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIPztm9rp0EpIauPC7Aa29N0f0xxYQ4uYQX9-aB2NZeyP7sdBaNmaxaJ9_RlIXOiCJs-SaOAVOhRvOcU5JvDwhfnwSBQdoZ9m8wBg7V6fQnVU0orqMzW7YLuFR6Qya4oP8DQ9QmUfq2v0G9wis7XsducM4IMJG_H9GTepqmRmeUuKL5hB8AYM6ZSc0ym4TNATFm0NbkWpJDOvrF_0P4t8Va4AtHwt7YTQo2K3tlqcWPzkJHXLALmvI7pk-Uhv4jsgTIFY4FWZZ3EM"
                  />
                  <div>
                    <div className="font-bold text-sm text-on-surface">Elena Vance</div>
                    <div className="flex text-primary scale-75 origin-left">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined fill-1">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Channel Growth
                  </span>
                </div>
              </div>

              {/* Video Card 4 */}
              <div className="w-[300px] shrink-0 bg-[#111111] p-6 rounded-xl border border-on-surface/10 flex flex-col gap-4 whitespace-normal">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container">
                  <img
                    alt="Video"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9VQknAo5ZsTo2mwmAoB1iakYoZmRHzjSZfjIXyxxICDG2cM52Ng4J_9CygfniMlN08KxgZYt94pw9QWe_9TI6090S25jMggrVsnOsDUlK43tktK5k88XISgLsfo8PfzT6EqORWFVrqpYmuCtCK-hTG8-Z7dxd4PDimow__yfm8MfGi7WA1LW6441-7u67_ZVD1rq_wLwoDH9tZ1VxaNzoycQS17EALUdi0CyD4Evb_9YuGUqbpOm5PJyOC4LsmVJkJeQfPqwovwI"
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
                  <h5 className="font-bold text-on-surface">Color Grade Reel</h5>
                  <p className="text-xs text-on-surface/50">Visual Brand Identity</p>
                </div>
                <p className="text-sm italic text-on-surface/80 line-clamp-3">
                  "They made my home office setup look like a $1M studio."
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Premium Visuals
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
