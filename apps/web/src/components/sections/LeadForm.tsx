"use client";

import { useState } from "react";

export function LeadForm({ data }: { data: any }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!data) return null;

  return (
    <section className="bg-surface-container-lowest py-section-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="max-w-[1280px] mx-auto px-container-padding relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-6 text-on-surface">
              {data.leftSection?.heading}
            </h2>
            <p className="text-on-surface/80 text-md mb-10 font-medium">
              {data.leftSection?.subheading}
            </p>
            <div className="space-y-8">
              {data.leftSection?.icons?.map((icon: any, idx: number) => (
                <div key={idx} className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-on-primary font-bold text-xl">
                      {icon.iconUrl}
                    </span>
                  </div>
                  <div>
                    <div className="font-extrabold text-on-surface text-sm uppercase tracking-wider">{icon.iconText}</div>
                    <div className="text-on-surface/60 text-sm">
                      {icon.iconSubText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isSubmitted ? (
            <form
              id="lead-form"
              onSubmit={handleSubmit}
              className="w-full bg-surface-container p-6 md:p-10 rounded-2xl border border-on-surface/10 space-y-6"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface placeholder:text-on-surface/20 min-h-[44px]"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Email
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface placeholder:text-on-surface/20 min-h-[44px]"
                      placeholder="email@example.com"
                      required
                      type="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Monthly Budget
                    </label>
                    <select className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface min-h-[44px]">
                      {data.rightForm?.monthlyBudgetOptions?.map((opt: string, i: number) => (
                        <option key={i} className="bg-surface-container">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Primary Platform
                    </label>
                    <select className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface min-h-[44px]">
                      {data.rightForm?.primaryPlatformOptions?.map((opt: string, i: number) => (
                        <option key={i} className="bg-surface-container">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                    Comments (Optional)
                  </label>
                  <textarea
                    className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface placeholder:text-on-surface/20 min-h-[44px]"
                    placeholder="Write something"
                  />
                </div>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-label-sm text-[12px] uppercase py-5 rounded-lg font-extrabold tracking-widest mt-6"
                type="submit"
              >
                {data.rightForm?.ctaText || "Send My Details"}
              </button>
            </form>
          ) : (
            <div
              id="success-msg"
              className="w-full bg-surface-container p-10 rounded-2xl border-2 border-primary text-center"
            >
              <span className="material-symbols-outlined text-primary text-6xl mb-4 font-bold">
                check_circle
              </span>
              <h3 className="font-headline-md text-2xl mb-2 text-on-surface">
                Message Sent!
              </h3>
              <p className="text-on-surface font-bold">
                We'll be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
