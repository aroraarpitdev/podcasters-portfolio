"use client";

import { useState } from "react";

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-surface-container-lowest py-section-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="max-w-[1280px] mx-auto px-container-padding relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-6 text-on-surface">
              Ready to Scale Your Podcast?
            </h2>
            <p className="text-on-surface/80 text-md mb-10 font-medium">
              Fill out the form below and we'll get back to you within 24 hours with a custom proposal and your free sample edit.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-on-primary font-bold text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <div className="font-extrabold text-on-surface text-sm uppercase tracking-wider">Email Us</div>
                  <div className="text-on-surface/60 text-sm">
                    hello@editorstudio.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-on-primary font-bold text-xl">
                    calendar_month
                  </span>
                </div>
                <div>
                  <div className="font-extrabold text-on-surface text-sm uppercase tracking-wider">
                    Office Hours
                  </div>
                  <div className="text-on-surface/60 text-sm">
                    Mon - Fri, 9am - 6pm EST
                  </div>
                </div>
              </div>
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
                      <option className="bg-surface-container">$1k - $2k</option>
                      <option className="bg-surface-container">$2k - $5k</option>
                      <option className="bg-surface-container">$5k+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Primary Platform
                    </label>
                    <select className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface min-h-[44px]">
                      <option className="bg-surface-container">YouTube</option>
                      <option className="bg-surface-container">TikTok / Instagram</option>
                      <option className="bg-surface-container">Multi-Platform</option>
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
                  // type="text"
                  />
                </div>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-label-sm text-[12px] uppercase py-5 rounded-lg font-extrabold tracking-widest mt-6"
                type="submit"
              >
                Send My Details
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
