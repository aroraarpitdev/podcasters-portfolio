"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header({ data }: { data: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background mobile-menu-overlay flex flex-col items-center justify-center space-y-8 ${
          isMenuOpen ? "active" : ""
        }`}
        id="mobile-menu"
      >
        <Link
          className="font-headline-lg text-4xl text-on-surface hover:text-primary transition-colors"
          href="#work"
          onClick={closeMenu}
        >
          Work
        </Link>
        <Link
          className="font-headline-lg text-4xl text-on-surface hover:text-primary transition-colors"
          href="#services"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          className="font-headline-lg text-4xl text-on-surface hover:text-primary transition-colors"
          href="#process"
          onClick={closeMenu}
        >
          Process
        </Link>
        <Link
          className="font-headline-lg text-4xl text-on-surface hover:text-primary transition-colors"
          href="#pricing"
          onClick={closeMenu}
        >
          Pricing
        </Link>
        <button
          className="mt-8 bg-primary text-on-primary font-label-sm text-label-sm px-10 py-5 rounded-full uppercase font-bold"
          onClick={closeMenu}
        >
          Close
        </button>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header border-b border-on-surface/10 h-20 flex items-center">
        <div className="max-w-[1280px] mx-auto w-full px-container-padding flex justify-between items-center">
          <div className="font-headline-md text-[20px] font-bold tracking-tight text-on-surface">
            {data?.brandName || "EDITOR_STUDIO"}
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
              href="#work"
            >
              Work
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
              href="#process"
            >
              Process
            </Link>
            <Link
              className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary transition-colors"
              href="#pricing"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href={data?.ctaLink || "#"} className="hidden md:block bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full uppercase transition-transform active:scale-95 font-bold">
              {data?.ctaTitle || "Book a Call"}
            </Link>
            <button className="md:hidden text-on-surface p-2" onClick={toggleMenu}>
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
