import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function HeaderSection() {
  const { data, updateSectionField } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);

  const headerData = data.header || {};

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">view_agenda</span>
          Header
        </h3>
        <span
          className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-transform duration-300"
          style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          expand_less
        </span>
      </div>

      {isExpanded && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Brand Name
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={headerData.brandName || ""}
              onChange={(e) => updateSectionField("header", "brandName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              CTA Title
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={headerData.ctaTitle || ""}
              onChange={(e) => updateSectionField("header", "ctaTitle", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              CTA Link
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant text-[18px]">
                open_in_new
              </span>
              <input
                className="w-full bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all pr-10"
                type="url"
                value={headerData.ctaLink || ""}
                onChange={(e) => updateSectionField("header", "ctaLink", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
