export function Stats() {
  return (
    <section className="py-section-gap bg-primary">
      <div className="max-w-[1280px] mx-auto px-container-padding flex flex-col md:flex-row gap-12 text-on-primary">
        <div className="flex-1 text-center">
          <div className="font-display-lg text-[56px] md:text-[64px] mb-2 font-bold leading-none">50M+</div>
          <div className="font-label-sm text-[11px] uppercase tracking-widest font-extrabold opacity-80">
            Total Views Generated
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="font-display-lg text-[56px] md:text-[64px] mb-2 font-bold leading-none">48h</div>
          <div className="font-label-sm text-[11px] uppercase tracking-widest font-extrabold opacity-80">
            Average Turnaround
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="font-display-lg text-[56px] md:text-[64px] mb-2 font-bold leading-none">12x</div>
          <div className="font-label-sm text-[11px] uppercase tracking-widest font-extrabold opacity-80">
            Retention Lift
          </div>
        </div>
      </div>
    </section>
  );
}
