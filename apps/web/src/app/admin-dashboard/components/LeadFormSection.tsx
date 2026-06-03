import React from "react";
import { useDashboardContext } from "../DashboardContext";

export default function LeadFormSection() {
  const { data, updateSectionField, setData } = useDashboardContext();
  const leadForm = data.leadForm || {};
  const leftSection = leadForm.leftSection || {};
  const rightForm = leadForm.rightForm || {};
  const icons = leftSection.icons || [];

  const updateNestedField = (parent: string, child: string, field: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      leadForm: {
        ...prev.leadForm,
        [parent]: {
          ...prev.leadForm?.[parent],
          [field]: value
        }
      }
    }));
  };

  const updateIconArray = (index: number, field: string, value: any) => {
    setData((prev: any) => {
      const newIcons = [...(prev.leadForm?.leftSection?.icons || [])];
      if (newIcons[index]) {
        newIcons[index] = { ...newIcons[index], [field]: value };
      }
      return {
        ...prev,
        leadForm: {
          ...prev.leadForm,
          leftSection: {
            ...prev.leadForm?.leftSection,
            icons: newIcons
          }
        }
      };
    });
  };

  const addIcon = () => {
    setData((prev: any) => {
      const newIcons = [{ iconUrl: "star", iconText: "New Icon", iconSubText: "" }, ...(prev.leadForm?.leftSection?.icons || [])];
      return {
        ...prev,
        leadForm: {
          ...prev.leadForm,
          leftSection: {
            ...prev.leadForm?.leftSection,
            icons: newIcons
          }
        }
      };
    });
  };

  const removeIcon = (index: number) => {
    setData((prev: any) => {
      const newIcons = (prev.leadForm?.leftSection?.icons || []).filter((_: any, i: number) => i !== index);
      return {
        ...prev,
        leadForm: {
          ...prev.leadForm,
          leftSection: {
            ...prev.leadForm?.leftSection,
            icons: newIcons
          }
        }
      };
    });
  };

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">contact_mail</span>
          Lead Form
        </h3>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface">
          expand_less
        </span>
      </div>
      <div className="p-6 space-y-8">
        
        {/* Left Section */}
        <div className="space-y-4">
          <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider text-primary border-b border-[#2A2A2A] pb-2">Left Section</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">Heading</label>
              <input className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none" type="text" value={leftSection.heading || ""} onChange={(e) => updateNestedField("leftSection", "", "heading", e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">Subheading</label>
              <textarea className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none resize-none" rows={2} value={leftSection.subheading || ""} onChange={(e) => updateNestedField("leftSection", "", "subheading", e.target.value)} />
            </div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-[#2A2A2A]/30">
            <div className="flex justify-between items-center">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">Icons</label>
              <button className="flex items-center gap-2 px-3 py-1 border border-primary/30 text-primary font-button text-[10px] uppercase hover:bg-primary/10 transition-all active:scale-95" onClick={addIcon}>
                <span className="material-symbols-outlined text-[14px]">add</span> Add Icon
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {icons.map((item: any, index: number) => (
                <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error absolute top-2 right-2 z-10" onClick={() => removeIcon(index)}>delete</button>
                  <div className="flex flex-col gap-1 pr-6">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Material Icon String (e.g. mail)</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.iconUrl || ""} onChange={(e) => updateIconArray(index, "iconUrl", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Text</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.iconText || ""} onChange={(e) => updateIconArray(index, "iconText", e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Sub Text</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.iconSubText || ""} onChange={(e) => updateIconArray(index, "iconSubText", e.target.value)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Setup */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider text-primary border-b border-[#2A2A2A] pb-2">Right Form Configuration</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">Monthly Budget Options (One per line)</label>
              <textarea 
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none resize-none text-[12px]" 
                rows={4} 
                value={(rightForm.monthlyBudgetOptions || []).join('\n')} 
                onChange={(e) => updateNestedField("rightForm", "", "monthlyBudgetOptions", e.target.value.split('\n'))} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">Primary Platform Options (One per line)</label>
              <textarea 
                className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none resize-none text-[12px]" 
                rows={4} 
                value={(rightForm.primaryPlatformOptions || []).join('\n')} 
                onChange={(e) => updateNestedField("rightForm", "", "primaryPlatformOptions", e.target.value.split('\n'))} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">CTA Text</label>
              <input className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none" type="text" value={rightForm.ctaText || ""} onChange={(e) => updateNestedField("rightForm", "", "ctaText", e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">CTA Link</label>
              <input className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none" type="text" value={rightForm.ctaLink || ""} onChange={(e) => updateNestedField("rightForm", "", "ctaLink", e.target.value)} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
