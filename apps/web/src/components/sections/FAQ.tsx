"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function FAQ({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!data) return null;

  return (
    <section className="py-section-gap max-w-[800px] mx-auto px-container-padding">
      <h2 className="font-headline-lg text-[36px] md:text-headline-lg text-center mb-12 text-on-surface">
        {data.heading}
      </h2>
      <div className="space-y-4">
        {data.faqContent?.map((faq: any, index: number) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item border-b border-on-surface/10 pb-4">
              <button
                onClick={() => toggle(index)}
                className={cn("w-full flex justify-between items-center py-4 text-left group", isOpen && "active")}
              >
                <span className="font-headline-md text-lg text-on-surface font-bold">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "material-symbols-outlined text-primary transition-transform font-bold",
                    isOpen && "rotate-45"
                  )}
                >
                  add
                </span>
              </button>
              <div
                className={cn(
                  "faq-content overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <p className="text-on-surface/70 py-4 text-sm font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
