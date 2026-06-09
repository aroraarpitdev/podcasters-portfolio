export function Stats({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="py-section-gap bg-primary">
      <div className="max-w-[1280px] mx-auto px-container-padding flex flex-col md:flex-row gap-12 text-on-primary">
        {data.map((item: any, index: number) => (
          <div key={index} className="flex-1 text-center">
            <div className="font-display-lg text-[56px] md:text-[64px] mb-2 font-bold leading-none">{item.mainText}</div>
            <div className="font-label-sm text-[11px] uppercase tracking-widest font-extrabold opacity-80">
              {item.supportingText}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
