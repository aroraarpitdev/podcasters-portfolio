import React from "react";

interface LoadingOverlayProps {
  text?: string;
  transparent?: boolean;
}

export default function LoadingOverlay({ text = "Loading", transparent = true }: LoadingOverlayProps) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center ${transparent ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'} text-on-surface font-['DM_Sans',_sans-serif]`}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase animate-pulse">
          {text}
        </p>
      </div>
    </div>
  );
}
