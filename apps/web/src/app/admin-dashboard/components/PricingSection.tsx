import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function PricingSection() {
  const { data, updateSectionField, updateArrayItem, addArrayItem, removeArrayItem } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const pricingData = data.pricing || {};
  const pricingCards = pricingData.pricingCards || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">sell</span>
          Pricing
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
      <div className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Heading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={pricingData.heading || ""}
              onChange={(e) => updateSectionField("pricing", "heading", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Subheading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={pricingData.subheading || ""}
              onChange={(e) => updateSectionField("pricing", "subheading", e.target.value)}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Pricing Cards
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                const newItem = {
                  mainSeparator: false,
                  separatorText: "",
                  cardTitle: "New Tier",
                  priceText: "$0",
                  priceSupportingText: "/mo",
                  availableOptions: [],
                  unavailableOptions: [],
                  ctaTitle: "Choose",
                  ctaLink: "#"
                };
                addArrayItem("pricing", "pricingCards", newItem);
                setExpandedCards(prev => {
                  const next = { ...prev };
                  const shifted: Record<number, boolean> = { 0: true };
                  Object.keys(next).forEach(key => { shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number]; });
                  return shifted;
                });
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Tier
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricingCards.map((item: any, index: number) => {
              const isItemExpanded = expandedCards[index] ?? (index === 0);
              return (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExpandedCards(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    <span className="text-[12px] text-on-surface font-bold uppercase">{item.cardTitle || "Untitled Tier"}</span>
                    {item.mainSeparator && (
                      <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded uppercase font-bold">Featured</span>
                    )}
                  </div>
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error" onClick={() => removeArrayItem("pricing", "pricingCards", index)}>delete</button>
                </div>
                {isItemExpanded && (
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Featured?</label>
                    <button
                      className={`w-8 h-4 rounded-full relative transition-colors duration-200 ${item.mainSeparator ? "bg-primary" : "bg-[#2A2A2A]"}`}
                      onClick={() => updateArrayItem("pricing", "pricingCards", index, "mainSeparator", !item.mainSeparator)}
                    >
                      <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${item.mainSeparator ? "right-0.5" : "left-0.5"}`}></div>
                    </button>
                  </div>
                  {item.mainSeparator && (
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Featured Text</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.separatorText || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "separatorText", e.target.value)} />
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Card Title</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.cardTitle || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "cardTitle", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Price</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.priceText || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "priceText", e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Suffix</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.priceSupportingText || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "priceSupportingText", e.target.value)} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Available Options (One per line)</label>
                    <textarea 
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none text-[12px]" 
                      rows={4} 
                      value={(item.availableOptions || []).join('\n')} 
                      onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "availableOptions", e.target.value.split('\n'))} 
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Unavailable Options (One per line)</label>
                    <textarea 
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none text-[12px]" 
                      rows={2} 
                      value={(item.unavailableOptions || []).join('\n')} 
                      onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "unavailableOptions", e.target.value.split('\n'))} 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">CTA Title</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.ctaTitle || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "ctaTitle", e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">CTA Link</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.ctaLink || ""} onChange={(e) => updateArrayItem("pricing", "pricingCards", index, "ctaLink", e.target.value)} />
                    </div>
                  </div>
                </div>
                )}
              </div>
            )})}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
