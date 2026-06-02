"use client";

export function FloatingFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button className="md:hidden bg-primary text-on-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-2xl font-bold">auto_awesome</span>
      </button>
      <button className="hidden md:flex bg-primary text-on-primary font-label-sm text-xs px-6 py-4 rounded-full shadow-2xl items-center gap-2 hover:scale-105 active:scale-95 transition-all font-extrabold">
        <span className="material-symbols-outlined text-sm font-bold">auto_awesome</span>
        Free Sample Edit
      </button>
    </div>
  );
}
