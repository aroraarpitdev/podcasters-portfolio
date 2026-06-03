import React from "react";
import { useDashboardContext } from "../DashboardContext";

export default function ServicesSection() {
  const { data, updateSectionField, updateArrayItem, addArrayItem, removeArrayItem } = useDashboardContext();
  const servicesData = data.services || {};
  const serviceCards = servicesData.serviceCards || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">miscellaneous_services</span>
          Services
        </h3>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface">
          expand_less
        </span>
      </div>
      <div className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Heading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={servicesData.heading || ""}
              onChange={(e) => updateSectionField("services", "heading", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Subheading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={servicesData.subheading || ""}
              onChange={(e) => updateSectionField("services", "subheading", e.target.value)}
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Service Cards
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                const newItem = { cardHeading: "New Service", cardSubHeading: "", pointers: [] };
                addArrayItem("services", "serviceCards", newItem);
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Service
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCards.map((item: any, index: number) => (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error absolute top-4 right-4 z-10" onClick={() => removeArrayItem("services", "serviceCards", index)}>delete</button>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Heading</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.cardHeading || ""} onChange={(e) => updateArrayItem("services", "serviceCards", index, "cardHeading", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Subheading</label>
                  <textarea className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none" rows={3} value={item.cardSubHeading || ""} onChange={(e) => updateArrayItem("services", "serviceCards", index, "cardSubHeading", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Pointers (One per line)</label>
                  <textarea 
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none text-[12px]" 
                    rows={4} 
                    value={(item.pointers || []).join('\n')} 
                    onChange={(e) => updateArrayItem("services", "serviceCards", index, "pointers", e.target.value.split('\n'))} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
