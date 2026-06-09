import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function TransformationSection() {
  const { data, updateSectionField } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);
  const transData = data.transformation || {};

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">compare</span>
          Transformation
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
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Heading
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.heading || ""}
            onChange={(e) => updateSectionField("transformation", "heading", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Subheading
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.subheading || ""}
            onChange={(e) => updateSectionField("transformation", "subheading", e.target.value)}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Raw Image URL
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.rawImageUrl || ""}
            onChange={(e) => updateSectionField("transformation", "rawImageUrl", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Edited Image URL
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.editedUrl || ""}
            onChange={(e) => updateSectionField("transformation", "editedUrl", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Bottom Text (Bold)
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.bottomTextBold || ""}
            onChange={(e) => updateSectionField("transformation", "bottomTextBold", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
            Bottom Text (Light)
          </label>
          <input
            className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
            type="text"
            value={transData.bottomTextLight || ""}
            onChange={(e) => updateSectionField("transformation", "bottomTextLight", e.target.value)}
          />
        </div>
      </div>
      )}
    </div>
  );
}
