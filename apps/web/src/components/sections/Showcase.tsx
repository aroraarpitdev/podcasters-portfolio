"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Showcase() {
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

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="work">
      <div className="max-w-[1280px] mx-auto px-container-padding text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
          The Transformation
        </h2>
        <p className="text-on-surface font-medium">
          Drag the slider to see how we turn raw footage into cinematic assets.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto px-container-padding">
        <div
          ref={containerRef}
          className="before-after-container aspect-video rounded-2xl border border-outline-variant bg-surface overflow-hidden shadow-2xl relative"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZkNJZr3WsozOQCQlNp3nCwKUNb2Zoj-OFHOFCx82OMMDbAqoR9pRCEJj1jZYpUJ7OjPMC0HtXRnmTfih5DYr1aABMPlsWuMVBCCZqWlPi0ZLq9wxzVeM7xGap8nE3ln7hH-JXSC1COBmy2YcztPR68eQRLyVt5GhGXo2w1d0knXWETXTBoiZO8eKaTTKuTnPwEKoweb9XnFr-ykQT2C2nN352DhiYhv5TzmwQxCk23XaLZm28bb4SM55XHqkvm6ZRyA-LdjexVT0"
            />
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-white">
              Raw
            </div>
          </div>
          {/* After (Edited) */}
          <div
            className="absolute top-0 right-0 h-full overflow-hidden"
            style={{ width: `${100 - sliderPosition}%` }}
          >
            {/* The image inside needs to be the exact size of the container, aligned to the right side, wait, no.
                The HTML implementation uses an absolute container for the image.
                To correctly crop the right side but keep the image fixed relative to the container:
                The child image should have width: container_width (860px ideally, or 100vw).
                Better approach: Make the child absolute right-0 and width of container.
            */}
            <div
              className="absolute top-0 right-0 h-full w-full pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : "860px" // Fallback to 860px
              }}
            >
              <img
                alt="Edited Footage"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIgZooRrfLk3HYSAPenJVzQXG8MF65SeF7GEpfZdy8M0C-r6fTUU8eDi8n8bPjQpx7gj1BVqSiEZli7pLOkMgkDQpwzLJZeJKenNa1glVXhuC5C5kbIpmlRKFS_Bhp-6jTaBns8oAJCE_0qFgPT0m9M7gRlYaUkhTJxDuvqEmZj_6LJsNlE0Uk95jHOUlDuEmuoZDxAcpc3DPWkOsePnajgwayp3brFMN1ouNldbBK3h3NII1ua0quOKZu2Mt6kBeRYllQyurCfI"
              />
              <div className="absolute top-6 right-6 bg-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-on-primary">
                Edited
              </div>
              <div className="absolute bottom-12 right-12 text-right">
                <div className="bg-primary text-on-primary px-3 py-1 font-bold rounded text-lg mb-1">
                  DYNAMIC CAPTIONS
                </div>
                <div className="bg-black text-on-surface px-3 py-1 font-bold rounded text-sm">
                  CINEMATIC COLOR
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
