"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the turnaround time?",
    answer: "Our typical turnaround time for full episodes is 48-72 hours. Shorts are usually delivered within 24 hours of episode approval."
  },
  {
    question: "Do I own the copyrights?",
    answer: "Yes, 100%. Once final payment is made, all creative rights to the edited assets are fully yours."
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely. Every package includes at least two rounds of major revisions. We use specialized software for frame-by-frame commenting."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-section-gap max-w-[800px] mx-auto px-container-padding">
      <h2 className="font-headline-lg text-headline-lg text-center mb-16 text-on-surface">
        Questions?
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item border-b-2 border-on-surface/10 pb-4">
              <button
                onClick={() => toggle(index)}
                className={cn("w-full flex justify-between items-center py-4 text-left group", isOpen && "active")}
              >
                <span className="font-headline-md text-xl text-on-surface font-bold">
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
                <p className="text-on-surface py-4 font-medium">
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
