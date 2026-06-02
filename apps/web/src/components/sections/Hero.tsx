"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance
    gsap.from(".reveal-stagger > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    gsap.from(".floating-element", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // Floating Animation
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="pt-32 pb-section-gap px-container-padding max-w-[1280px] mx-auto flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-12 items-center"
    >
      <div className="reveal-stagger text-center md:text-left">
        <span className="text-primary font-label-sm text-label-sm uppercase mb-4 block font-bold tracking-widest">
          Podcast Video Editing
        </span>
        <h1 className="font-display-lg text-[44px] md:text-display-lg mb-6 text-on-surface leading-tight">
          Turn Your 2-Hour Podcast Into a Month of{" "}
          <span className="text-primary italic">Viral Content</span>
        </h1>
        <p className="text-on-surface/80 text-body-md md:text-body-lg mb-8 max-w-xl mx-auto md:mx-0 font-medium">
          Professional full-episode editing, high-impact shorts, and cinematic storytelling tailored for high-profile creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-stretch sm:items-center">
          <button className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-5 rounded-lg uppercase hover:opacity-90 transition-opacity font-bold">
            Get a Free Sample Edit
          </button>
          <button className="border-2 border-on-surface text-on-surface font-label-sm text-label-sm px-8 py-5 rounded-lg uppercase hover:bg-on-surface/10 transition-colors font-bold">
            View Packages
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface">
              JD
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface">
              MS
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface">
              TK
            </div>
          </div>
          <p className="text-on-surface/60 text-sm font-bold uppercase tracking-tight">
            Trusted by 50+ Top-Tier Podcasters
          </p>
        </div>
      </div>
      <div className="relative group w-full max-w-md mx-auto">
        <div className="floating-glow absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
        <div className="relative bg-surface-container-high rounded-[2rem] p-3 aspect-[4/5] border border-outline-variant floating-element">
          <img
            alt="Production Setup"
            className="w-full h-full object-cover rounded-[1.5rem]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArgSEQevtPCpvCGKHESmJVHJwOuDZmm7eP50brcfLo2NHwhM_zUzq7kOs9u2POu4QD2gOVSdsl0E-nJfRRWR3fxD_K6p0P2MnL_8FoySZwOO1I3YuCjhhxdGjurpwSOKPLa1MlRRv8YgvgNcecvzwoLKIha6v0INK4j6p3qmbJall3DSIbyKdeVNtMBEs4ojjgJ0HRCdopcgRK8Bic8hphK6ueQ7llQ_sRlfoSDxFAq0ZaFc9tPI12baEcjbmCXEOTXvVkTwk7b38"
          />
          <div className="absolute bottom-8 left-[-10px] bg-background/95 backdrop-blur-md p-4 rounded-xl border border-primary/50 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              <div>
                <div className="text-[9px] uppercase font-bold text-on-surface/60">
                  Retention Rate
                </div>
                <div className="text-xl font-bold font-headline-md text-primary">
                  +84%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
