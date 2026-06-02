export function Services({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="py-section-gap bg-surface-container" id="services">
      <div className="max-w-[1280px] mx-auto px-container-padding">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-4 text-on-surface">
            {data.heading}
          </h2>
          <p className="text-on-surface/70 font-medium">
            {data.subheading}
          </p>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
          {data.serviceCards?.map((service: any, index: number) => (
            <div 
              key={index} 
              className={`bg-background p-8 rounded-2xl ${service.isPopular ? 'border-2 border-primary relative shadow-2xl shadow-primary/10' : 'border border-on-surface/10 hover:border-primary transition-colors'}`}
            >
              {service.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary font-bold">
                  {service.icon || "movie"}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold mb-4 text-on-surface">
                {service.cardHeading}
              </h3>
              <p className="text-on-surface/70 font-medium mb-6">
                {service.cardSubHeading}
              </p>
              <ul className="space-y-3 mt-auto">
                {service.pointers?.map((feature: any, fIndex: number) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm font-bold text-on-surface/90">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
