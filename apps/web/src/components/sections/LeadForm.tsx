"use client";

import { useState } from "react";
import { sendLeadAction } from "@/app/actions/lead";

export function LeadForm({ data }: { data: any }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendLeadAction(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
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
                      name="fullName"
                      disabled={isSubmitting}
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
                      name="email"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Monthly Budget
                    </label>
                    <select
                      name="budget"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface min-h-[44px]"
                    >
                      {data.rightForm?.monthlyBudgetOptions?.map((opt: string, i: number) => (
                        <option key={i} className="bg-surface-container" value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                      Primary Platform
                    </label>
                    <select
                      name="platform"
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface min-h-[44px]"
                    >
                      {data.rightForm?.primaryPlatformOptions?.map((opt: string, i: number) => (
                        <option key={i} className="bg-surface-container" value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface/60">
                    Comments (Optional)
                  </label>
                  <textarea
                    name="comments"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-on-surface/20 focus:border-primary focus:ring-0 py-4 transition-colors text-on-surface placeholder:text-on-surface/20 min-h-[44px]"
                    placeholder="Write something"
                  />
                </div>
                {/* Honeypot field — hidden from real users, bots tend to fill it */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>
              <button
                className={`w-full bg-primary text-on-primary font-label-sm text-[12px] uppercase py-5 rounded-lg font-extrabold tracking-widest mt-6 transition-opacity flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-on-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  data.rightForm?.ctaText || "Send My Details"
                )}
              </button>
            </form>
          ) : (
            <div
              id="success-msg"
              className="w-full bg-surface-container p-10 rounded-2xl border-2 border-primary text-center flex flex-col items-center justify-center space-y-2"
            >
              <span className="material-symbols-outlined text-primary text-6xl mb-2 font-bold">
                check_circle
              </span>
              <h3 className="font-headline-md text-2xl text-on-surface">
                Message Sent!
              </h3>
              <p className="text-on-surface font-bold mb-8">
                We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-primary/10 text-primary border border-primary/20 font-label-sm text-[12px] uppercase py-4 px-8 rounded-lg font-extrabold tracking-widest hover:bg-primary/20 transition-colors mt-4"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
