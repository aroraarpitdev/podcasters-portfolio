"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Process({ data }: { data: any }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray(".process-step");

    steps.forEach((step: any, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out",
      });
    });
  }, { scope: container });

  if (!data) return null;

  return (
    <section
      ref={container}
      className="py-section-gap max-w-[1280px] mx-auto px-container-padding overflow-hidden"
      id="process"
    >
      <h2 className="font-headline-lg text-[36px] md:text-headline-lg text-center mb-16 text-on-surface">
        {data.heading}
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-on-surface/10"></div>
        <div className="md:hidden absolute left-4 top-0 w-[1px] h-full bg-on-surface/10"></div>
        
        {data.steps?.map((step: any, index: number) => (
          <div key={index} className="process-step relative group pl-26 md:pl-0">
            <div className="font-display-lg text-[64px] md:text-[100px] text-on-surface/10 absolute top-0 left-[-10px] md:-top-16 md:-left-4 font-bold select-none group-hover:text-primary transition-colors">
              {step.count}
            </div>
            <div className="relative z-10 bg-background pt-2 md:mt-25">
              <h4 className="font-headline-md text-lg mb-3 text-on-surface">
                {step.heading}
              </h4>
              <p className="text-on-surface/70 text-sm font-medium">
                {step.subheading}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
