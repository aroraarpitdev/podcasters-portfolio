export function Stats() {
  return (
    <section className="py-section-gap bg-primary">
      <div className="max-w-[1280px] mx-auto px-container-padding grid grid-cols-1 md:grid-cols-3 gap-16 text-on-primary">
        <div className="text-center">
          <div className="font-display-lg text-[64px] mb-2 font-bold">50M+</div>
          <div className="font-label-sm text-sm uppercase tracking-widest font-extrabold">
            Total Views Generated
          </div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-[64px] mb-2 font-bold">48h</div>
          <div className="font-label-sm text-sm uppercase tracking-widest font-extrabold">
            Average Turnaround
          </div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-[64px] mb-2 font-bold">12x</div>
          <div className="font-label-sm text-sm uppercase tracking-widest font-extrabold">
            Retention Lift
          </div>
        </div>
      </div>
    </section>
  );
}
