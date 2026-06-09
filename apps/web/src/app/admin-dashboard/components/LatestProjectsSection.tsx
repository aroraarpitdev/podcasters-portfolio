import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function LatestProjectsSection() {
  const { data, updateSectionField, updateArrayItem, addArrayItem, removeArrayItem, showToast } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedFullEpisodes, setExpandedFullEpisodes] = useState<Record<number, boolean>>({});
  const [expandedAudioBooks, setExpandedAudioBooks] = useState<Record<number, boolean>>({});
  const [expandedShorts, setExpandedShorts] = useState<Record<number, boolean>>({});

  const projectsData = data.latestProjects || {};
  const fullEpisodes = projectsData.fullEpisodes || [];
  const audioBook = projectsData.audioBook || [];
  const shorts = projectsData.shorts || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">video_library</span>
          Latest Projects
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
              value={projectsData.heading || ""}
              onChange={(e) => updateSectionField("latestProjects", "heading", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-[#F0EDE680] uppercase opacity-60">
              Subheading
            </label>
            <input
              className="bg-[#111111] border border-[#9f8e7a] focus:border-primary text-on-background font-input text-input p-[14px] outline-none transition-all"
              type="text"
              value={projectsData.subheading || ""}
              onChange={(e) => updateSectionField("latestProjects", "subheading", e.target.value)}
            />
          </div>
        </div>

        {/* Full Episodes */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Full Episodes
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                if (fullEpisodes.length >= 3) {
                  showToast("You can only add up to 3 Full Episodes.", "error");
                  return;
                }
                const newItem = { videoUrl: "", thumbnailURL: "", videoHeading: "New Video", videoSubHeading: "", viewCounts: "" };
                addArrayItem("latestProjects", "fullEpisodes", newItem);
                setExpandedFullEpisodes(prev => {
                  const next = { ...prev };
                  const shifted: Record<number, boolean> = { 0: true };
                  Object.keys(next).forEach(key => { shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number]; });
                  return shifted;
                });
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Episode
            </button>
          </div>
          <div className="space-y-3">
            {fullEpisodes.map((item: any, index: number) => {
              const isItemExpanded = expandedFullEpisodes[index] ?? (index === 0);
              return (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExpandedFullEpisodes(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    <span className="text-[12px] text-on-surface font-bold uppercase">{item.videoHeading || "Untitled Episode"}</span>
                  </div>
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error" onClick={() => removeArrayItem("latestProjects", "fullEpisodes", index)}>delete</button>
                </div>
                {isItemExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Heading</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoHeading || ""} onChange={(e) => updateArrayItem("latestProjects", "fullEpisodes", index, "videoHeading", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Subheading</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoSubHeading || ""} onChange={(e) => updateArrayItem("latestProjects", "fullEpisodes", index, "videoSubHeading", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Video URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.videoUrl || ""} onChange={(e) => updateArrayItem("latestProjects", "fullEpisodes", index, "videoUrl", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Thumbnail URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.thumbnailURL || ""} onChange={(e) => updateArrayItem("latestProjects", "fullEpisodes", index, "thumbnailURL", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">View Counts</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.viewCounts || ""} onChange={(e) => updateArrayItem("latestProjects", "fullEpisodes", index, "viewCounts", e.target.value)} />
                  </div>
                </div>
                )}
              </div>
            )})}
          </div>
        </div>

        {/* Audio Book */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Audio Books
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                if (audioBook.length >= 3) {
                  showToast("You can only add up to 3 Audio Books.", "error");
                  return;
                }
                const newItem = { ctaText: "", ctaLink: "", thumbnailURL: "", audioHeading: "New Audio", audioSubHeading: "", viewCounts: "" };
                addArrayItem("latestProjects", "audioBook", newItem);
                setExpandedAudioBooks(prev => {
                  const next = { ...prev };
                  const shifted: Record<number, boolean> = { 0: true };
                  Object.keys(next).forEach(key => { shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number]; });
                  return shifted;
                });
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Audio Book
            </button>
          </div>
          <div className="space-y-3">
            {audioBook.map((item: any, index: number) => {
              const isItemExpanded = expandedAudioBooks[index] ?? (index === 0);
              return (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExpandedAudioBooks(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    <span className="text-[12px] text-on-surface font-bold uppercase">{item.audioHeading || "Untitled Audio Book"}</span>
                  </div>
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error" onClick={() => removeArrayItem("latestProjects", "audioBook", index)}>delete</button>
                </div>
                {isItemExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Heading</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.audioHeading || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "audioHeading", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Subheading</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.audioSubHeading || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "audioSubHeading", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">CTA Text</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.ctaText || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "ctaText", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">CTA Link</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.ctaLink || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "ctaLink", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Thumbnail URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.thumbnailURL || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "thumbnailURL", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">View Counts</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.viewCounts || ""} onChange={(e) => updateArrayItem("latestProjects", "audioBook", index, "viewCounts", e.target.value)} />
                  </div>
                </div>
                )}
              </div>
            )})}
          </div>
        </div>

        {/* Shorts */}
        <div className="space-y-4 pt-6 border-t border-[#2A2A2A]/30">
          <div className="flex justify-between items-center">
            <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
              Shorts
            </h4>
            <button
              className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
              onClick={() => {
                if (shorts.length >= 8) {
                  showToast("You can only add up to 8 Shorts.", "error");
                  return;
                }
                const newItem = { shortsUrl: "", thumbnailURL: "" };
                addArrayItem("latestProjects", "shorts", newItem);
                setExpandedShorts(prev => {
                  const next = { ...prev };
                  const shifted: Record<number, boolean> = { 0: true };
                  Object.keys(next).forEach(key => { shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number]; });
                  return shifted;
                });
              }}
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Short
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {shorts.map((item: any, index: number) => {
              const isItemExpanded = expandedShorts[index] ?? (index === 0);
              return (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExpandedShorts(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    <span className="text-[12px] text-on-surface font-bold uppercase">Short #{index + 1}</span>
                  </div>
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error" onClick={() => removeArrayItem("latestProjects", "shorts", index)}>delete</button>
                </div>
                {isItemExpanded && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Video URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none text-[12px]" type="text" value={item.shortsUrl || ""} onChange={(e) => updateArrayItem("latestProjects", "shorts", index, "shortsUrl", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Thumbnail URL</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none text-[12px]" type="text" value={item.thumbnailURL || ""} onChange={(e) => updateArrayItem("latestProjects", "shorts", index, "thumbnailURL", e.target.value)} />
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
