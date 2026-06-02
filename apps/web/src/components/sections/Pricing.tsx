export function Pricing({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding" id="pricing">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-4 text-on-surface">
          {data.heading}
        </h2>
        <p className="text-on-surface/70 font-bold">
          {data.subheading}
        </p>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:items-center">
        {data.pricingCards?.map((tier: any, index: number) => (
          <div 
            key={index} 
            className={tier.mainSeparator 
              ? "bg-surface-container-high p-8 md:p-10 rounded-2xl border-2 border-primary relative z-10 shadow-2xl md:scale-110" 
              : "bg-surface-container-low p-8 rounded-2xl border border-on-surface/10"
            }
          >
            {tier.mainSeparator && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase">
                {tier.separatorText || "Best Value"}
              </div>
            )}
            <div className={`text-md font-bold mb-2 uppercase tracking-widest ${tier.mainSeparator ? 'text-on-surface' : 'text-on-surface/60'}`}>
              {tier.cardTitle}
            </div>
            <div className="text-4xl md:text-5xl font-headline-md font-bold mb-6 text-on-surface">
              {tier.priceText}<span className="text-sm font-bold opacity-60">{tier.priceSupportingText}</span>
            </div>
            <ul className={`space-y-4 mb-10 text-sm ${tier.mainSeparator ? 'text-on-surface font-bold' : 'text-on-surface/80 font-medium'}`}>
              {tier.availableOptions?.map((feature: string, fIndex: number) => (
                <li key={`a-${fIndex}`} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm font-bold text-primary">
                    check
                  </span>{" "}
                  {feature}
                </li>
              ))}
              {tier.unavailableOptions?.map((feature: string, fIndex: number) => (
                <li key={`u-${fIndex}`} className="flex items-center gap-2 opacity-30">
                  <span className="material-symbols-outlined text-sm font-bold">
                    close
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-lg uppercase font-label-sm text-[11px] font-extrabold ${tier.mainSeparator ? 'bg-primary text-on-primary shadow-lg' : 'border border-on-surface/20 text-on-surface'}`}>
              {tier.ctaTitle}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
