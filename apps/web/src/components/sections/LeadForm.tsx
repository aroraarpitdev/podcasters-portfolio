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
      <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="max-w-[1280px] mx-auto px-container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8 text-on-surface">
              Ready to Scale Your Podcast?
            </h2>
            <p className="text-on-surface text-lg mb-12 font-bold">
              Fill out the form below and we'll get back to you within 24 hours with a custom proposal and your free sample edit.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-on-primary font-bold">
                    mail
                  </span>
                </div>
                <div>
                  <div className="font-extrabold text-on-surface">Email Us</div>
                  <div className="text-on-surface font-medium">
                    hello@editorstudio.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-on-primary font-bold">
                    calendar_month
                  </span>
                </div>
                <div>
                  <div className="font-extrabold text-on-surface">
                    Office Hours
                  </div>
                  <div className="text-on-surface font-medium">
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
              className="bg-surface-container p-10 rounded-2xl border-2 border-on-surface/10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface placeholder:text-on-surface/40"
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                    Podcast URL
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface placeholder:text-on-surface/40"
                    placeholder="youtube.com/@yourpod"
                    required
                    type="url"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                    Monthly Budget
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface">
                    <option className="bg-surface-container">$1k - $2k</option>
                    <option className="bg-surface-container">$2k - $5k</option>
                    <option className="bg-surface-container">$5k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                    Primary Platform
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface">
                    <option className="bg-surface-container">YouTube</option>
                    <option className="bg-surface-container">TikTok / Instagram</option>
                    <option className="bg-surface-container">Multi-Platform</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                  Email
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface placeholder:text-on-surface/40"
                  placeholder="Please enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-widest text-on-surface">
                  Comments (Optional)
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-on-surface/30 focus:border-primary focus:ring-0 py-3 transition-colors text-on-surface placeholder:text-on-surface/40"
                  placeholder="Please leave your comment"
                  type="text"
                />
              </div>
              <button
                className="w-full bg-primary text-on-primary font-label-sm text-sm uppercase py-5 rounded-lg font-extrabold tracking-widest hover:opacity-90 transition-all mt-6 shadow-xl"
                type="submit"
              >
                Send My Details
              </button>
            </form>
          ) : (
            <div
              id="success-msg"
              className="bg-surface-container p-10 rounded-2xl border-4 border-primary text-center"
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
