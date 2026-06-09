"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Showcase({ data }: { data: any }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (hasInteracted) return;

    const obj = { val: 50 };
    tweenRef.current = gsap.to(obj, {
      keyframes: [
        { val: 75, duration: 1.5, ease: "sine.inOut" },
        { val: 25, duration: 3, ease: "sine.inOut" },
        { val: 50, duration: 1.5, ease: "sine.inOut" }
      ],
      repeat: -1,
      delay: 1,
      onUpdate: () => {
        if (!hasInteracted) {
          setSliderPosition(obj.val);
        }
      }
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [hasInteracted]);

  const handleInteractionStart = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (tweenRef.current) tweenRef.current.kill();
    }
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  if (!data) return null;

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="work">
      <div className="max-w-[860px] mx-auto px-container-padding text-center mb-10">
        <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-4 text-on-surface">
          {data.heading}
        </h2>
        <p className="text-on-surface/70 font-medium">
          {data.subheading}
        </p>
      </div>
      <div className="w-full max-w-[860px] mx-auto md:px-container-padding">
        <div
          ref={containerRef}
          className="before-after-container aspect-video md:rounded-2xl border-y md:border border-outline-variant bg-surface overflow-hidden shadow-2xl relative"
          onMouseDown={(e) => {
            handleInteractionStart();
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            handleInteractionStart();
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Before (Raw) */}
          <div className="absolute inset-0 grayscale contrast-75 brightness-75">
            <img
              alt="Raw Footage"
              className="w-full h-full object-cover pointer-events-none"
              src={data.rawImageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuBZkNJZr3WsozOQCQlNp3nCwKUNb2Zoj-OFHOFCx82OMMDbAqoR9pRCEJj1jZYpUJ7OjPMC0HtXRnmTfih5DYr1aABMPlsWuMVBCCZqWlPi0ZLq9wxzVeM7xGap8nE3ln7hH-JXSC1COBmy2YcztPR68eQRLyVt5GhGXo2w1d0knXWETXTBoiZO8eKaTTKuTnPwEKoweb9XnFr-ykQT2C2nN352DhiYhv5TzmwQxCk23XaLZm28bb4SM55XHqkvm6ZRyA-LdjexVT0"}
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
              Raw
            </div>
          </div>
          {/* After (Edited) */}
          <div
            className="absolute top-0 right-0 h-full overflow-hidden"
            style={{ width: `${100 - sliderPosition}%` }}
          >
            <div
              className="absolute top-0 right-0 h-full w-[100vw] md:w-[860px] pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : undefined
              }}
            >
              <img
                alt="Edited Footage"
                className="w-full h-full object-cover"
                src={data.editedUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDDIgZooRrfLk3HYSAPenJVzQXG8MF65SeF7GEpfZdy8M0C-r6fTUU8eDi8n8bPjQpx7gj1BVqSiEZli7pLOkMgkDQpwzLJZeJKenNa1glVXhuC5C5kbIpmlRKFS_Bhp-6jTaBns8oAJCE_0qFgPT0m9M7gRlYaUkhTJxDuvqEmZj_6LJsNlE0Uk95jHOUlDuEmuoZDxAcpc3DPWkOsePnajgwayp3brFMN1ouNldbBK3h3NII1ua0quOKZu2Mt6kBeRYllQyurCfI"}
              />
              <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-on-primary">
                Edited
              </div>
              <div className="absolute bottom-6 right-6 text-right">
                <div className="bg-primary text-on-primary text-sm mb-1 px-3 py-1 font-bold rounded inline-block">
                  {data.bottomTextBold}
                </div>
                <br />
                <div className="bg-black text-on-surface text-[10px] px-3 py-1 font-bold rounded inline-block">
                  {data.bottomTextLight}
                </div>
              </div>
            </div>
          </div>
          {/* Slider Handle */}
          <div
            className="slider-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="slider-button">
              <span className="material-symbols-outlined text-on-primary text-sm font-bold">
                unfold_more_double
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
