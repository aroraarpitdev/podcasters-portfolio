export function FloatingFAB() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button className="bg-primary text-on-primary font-label-sm text-xs px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all font-extrabold">
        <span className="material-symbols-outlined text-sm font-bold">
          auto_awesome
        </span>
        Free Sample Edit
      </button>
    </div>
  );
}
