import React from "react";
import { useDashboardContext } from "../DashboardContext";

export default function TestimonialsSection() {
  const { data, updateSectionField, updateArrayItem, addArrayItem, removeArrayItem } = useDashboardContext();
  const testimonialsData = data.testimonials || {};
  const metricsStatsBar = testimonialsData.metricsStatsBar || [];
  const videoCards = testimonialsData.videoCards || [];
  const textCards = testimonialsData.textCards || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">forum</span>
          Testimonials
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
              value={testimonialsData.heading || ""}
              onChange={(e) => updateSectionField("testimonials", "heading", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Subheading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={testimonialsData.subheading || ""}
              onChange={(e) => updateSectionField("testimonials", "subheading", e.target.value)}
            />
          </div>
        </div>

        {/* Metrics Stats Bar */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Metrics Bar
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                const newItem = { dataTarget: "0", dataSuffix: "+", dataTitle: "Metric" };
                addArrayItem("testimonials", "metricsStatsBar", newItem);
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Metric
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {metricsStatsBar.map((item: any, index: number) => (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error absolute top-2 right-2 z-10" onClick={() => removeArrayItem("testimonials", "metricsStatsBar", index)}>delete</button>
                <div className="flex flex-col gap-1 mt-4">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Target Value (Number)</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.dataTarget || ""} onChange={(e) => updateArrayItem("testimonials", "metricsStatsBar", index, "dataTarget", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Suffix</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.dataSuffix || ""} onChange={(e) => updateArrayItem("testimonials", "metricsStatsBar", index, "dataSuffix", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Title</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.dataTitle || ""} onChange={(e) => updateArrayItem("testimonials", "metricsStatsBar", index, "dataTitle", e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Cards */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Video Testimonials
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                const newItem = { videoUrl: "", videoThumbnail: "", videoAuthor: "", authorBrand: "", testimonial: "", category: "", cardDirection: "LTR" };
                addArrayItem("testimonials", "videoCards", newItem);
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Video
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videoCards.map((item: any, index: number) => (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error absolute top-4 right-4 z-10" onClick={() => removeArrayItem("testimonials", "videoCards", index)}>delete</button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Author</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoAuthor || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "videoAuthor", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Brand</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.authorBrand || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "authorBrand", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Category</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.category || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "category", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Card Direction (LTR/RTL)</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.cardDirection || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "cardDirection", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Quote / Testimonial</label>
                    <textarea className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none" rows={2} value={item.testimonial || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "testimonial", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Video URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoUrl || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "videoUrl", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Thumbnail URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoThumbnail || ""} onChange={(e) => updateArrayItem("testimonials", "videoCards", index, "videoThumbnail", e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Cards */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Text Testimonials
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                const newItem = { cardHeading: "", author: "", rating: "5", category: "" };
                addArrayItem("testimonials", "textCards", newItem);
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Text Testimonial
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {textCards.map((item: any, index: number) => (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error absolute top-2 right-2 z-10" onClick={() => removeArrayItem("testimonials", "textCards", index)}>delete</button>
                <div className="flex flex-col gap-1 mt-4">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Quote (Heading)</label>
                  <textarea className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none resize-none" rows={3} value={item.cardHeading || ""} onChange={(e) => updateArrayItem("testimonials", "textCards", index, "cardHeading", e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Author</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.author || ""} onChange={(e) => updateArrayItem("testimonials", "textCards", index, "author", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Rating</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.rating || ""} onChange={(e) => updateArrayItem("testimonials", "textCards", index, "rating", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Category</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.category || ""} onChange={(e) => updateArrayItem("testimonials", "textCards", index, "category", e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
