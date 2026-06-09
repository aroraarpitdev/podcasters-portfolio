import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function HeroSection() {
  const { data, updateSectionField, updateArrayItem, addArrayItem, removeArrayItem, showToast } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const heroData = data.hero || {};
  const clients = heroData.circleClientsInitials || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">photo_camera_back</span>
          Hero
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
        <div className="p-6 space-y-10">
        {/* Group 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Label 1
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={heroData.label1 || ""}
              onChange={(e) => updateSectionField("hero", "label1", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-1">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Heading Body
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={heroData.mainHeadingBody || ""}
              onChange={(e) => updateSectionField("hero", "mainHeadingBody", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Highlighted Text
            </label>
            <div className="flex items-center gap-3">
              <input
                className="flex-1 bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
                type="text"
                value={heroData.mainHeadingHighlightedText || ""}
                onChange={(e) => updateSectionField("hero", "mainHeadingHighlightedText", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Group 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Supporting Text
            </label>
            <textarea
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all resize-none"
              rows={2}
              value={heroData.heroLabel2 || ""}
              onChange={(e) => updateSectionField("hero", "heroLabel2", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                  CTA 1 Title
                </label>
                <input
                  className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none"
                  type="text"
                  value={heroData.cta1Title || ""}
                  onChange={(e) => updateSectionField("hero", "cta1Title", e.target.value)}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                  CTA 1 URL
                </label>
                <input
                  className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none"
                  type="text"
                  value={heroData.cta1URL || ""}
                  onChange={(e) => updateSectionField("hero", "cta1URL", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                  CTA 2 Title
                </label>
                <input
                  className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none"
                  type="text"
                  value={heroData.cta2Title || ""}
                  onChange={(e) => updateSectionField("hero", "cta2Title", e.target.value)}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                  CTA 2 URL
                </label>
                <input
                  className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none"
                  type="text"
                  value={heroData.cta2URL || ""}
                  onChange={(e) => updateSectionField("hero", "cta2URL", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Group 3 & 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
                Analytics Label
              </label>
              <input
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
                type="text"
                value={heroData.analyticsText || ""}
                onChange={(e) => updateSectionField("hero", "analyticsText", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
                Analytics Number
              </label>
              <input
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
                type="text"
                value={heroData.analyticsNumber || ""}
                onChange={(e) => updateSectionField("hero", "analyticsNumber", e.target.value)}
              />
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
                Hero Image URL
              </label>
              <input
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
                type="text"
                value={heroData.imageUrl || ""}
                onChange={(e) => updateSectionField("hero", "imageUrl", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
                Clients Supporting Text
              </label>
              <textarea
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all resize-none"
                rows={4}
                value={heroData.clientsTextSupporting || ""}
                onChange={(e) => updateSectionField("hero", "clientsTextSupporting", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Group 5: Circle Clients */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Circle Clients
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                if (clients.length >= 3) {
                  showToast("You can only add up to 3 Circle Clients.", "error");
                  return;
                }
                const newId = Date.now();
                const newClient = { id: newId, initials: "NEW", redirect: false, redirectLink: "" };
                addArrayItem("hero", "circleClientsInitials", newClient);
                // Expand the newly added item (index 0)
                setExpandedItems(prev => {
                  const next = { ...prev };
                  // Shift existing keys up by 1 since we prepend
                  const shifted: Record<number, boolean> = { 0: true };
                  Object.keys(next).forEach(key => {
                    shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number];
                  });
                  return shifted;
                });
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Client
            </button>
          </div>

          {/* ClientCards Container */}
          <div className="space-y-3" id="client-list">
            {clients.map((client: any, index: number) => {
              const isItemExpanded = expandedItems[index] ?? (index === 0);
              return (
                <div
                  key={client.id || index}
                  className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex gap-4 relative group hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center cursor-grab active:cursor-grabbing">
                    <span className="material-symbols-outlined text-[#F0EDE680] opacity-20">
                      drag_indicator
                    </span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button onClick={() => setExpandedItems(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[12px]">
                          {client.initials}
                        </div>
                        <span className="text-[10px] text-[#F0EDE680] uppercase font-bold opacity-40">
                          Client Identity
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-primary transition-colors">
                          content_copy
                        </button>
                        <button
                          className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error transition-colors"
                          onClick={() => removeArrayItem("hero", "circleClientsInitials", index)}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                    {isItemExpanded && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                              Initials
                            </label>
                            <input
                              className="w-20 bg-[#0A0A0A] border border-[#2A2A2A] focus:border-primary text-on-background font-input text-input p-2 outline-none"
                              type="text"
                              value={client.initials || ""}
                              onChange={(e) => updateArrayItem("hero", "circleClientsInitials", index, "initials", e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                              ID
                            </label>
                            <div className="flex items-center gap-2 bg-[#1A1A1A] p-2 border border-[#2A2A2A] opacity-60">
                              <span className="material-symbols-outlined text-[14px]">lock</span>
                              <span className="text-[12px]">C-{client.id?.toString().slice(-4) || 'XXXX'}-X</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-end md:items-start">
                            <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                              Redirect
                            </label>
                            <button
                              className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${client.redirect ? "bg-primary" : "bg-[#2A2A2A]"
                                }`}
                              onClick={() => updateArrayItem("hero", "circleClientsInitials", index, "redirect", !client.redirect)}
                            >
                              <div
                                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${client.redirect ? "right-0.5" : "left-0.5"
                                  }`}
                              ></div>
                            </button>
                          </div>
                        </div>
                        <div
                          className={`flex flex-col gap-1 redirect-field ${client.redirect ? "" : "opacity-30 pointer-events-none"
                            }`}
                        >
                          <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">
                            Redirect Link
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#F0EDE680] text-[16px]">
                              {client.redirect ? "link" : "link_off"}
                            </span>
                            <input
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-primary text-on-background font-input text-input p-2 outline-none pr-10"
                              type="url"
                              value={client.redirectLink || ""}
                              onChange={(e) => updateArrayItem("hero", "circleClientsInitials", index, "redirectLink", e.target.value)}
                              disabled={!client.redirect}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
