import React, { useState } from "react";
import { useDashboardContext } from "../DashboardContext";

export default function StatsSection() {
  const { data, updateTopLevelArrayItem, addTopLevelArrayItem, removeTopLevelArrayItem } = useDashboardContext();
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedStats, setExpandedStats] = useState<Record<number, boolean>>({});
  const stats = data.stats || [];

  return (
    <div className="bg-surface-variant border border-outline-variant rounded-none overflow-hidden transition-all duration-300 shadow-sm mb-16">
      <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-outline-variant">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">bar_chart</span>
          Global Stats
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
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-headline-sm text-[16px] text-on-surface uppercase tracking-wider">
            Stats
          </h4>
          <button
            className="flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary font-button text-[12px] uppercase hover:bg-primary/10 transition-all active:scale-95"
            onClick={() => {
              const newItem = { mainText: "", supportingText: "" };
              addTopLevelArrayItem("stats", newItem);
              setExpandedStats(prev => {
                const next = { ...prev };
                const shifted: Record<number, boolean> = { 0: true };
                Object.keys(next).forEach(key => { shifted[parseInt(key) + 1] = next[parseInt(key) as unknown as number]; });
                return shifted;
              });
            }}
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            Add Stat
          </button>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((item: any, index: number) => {
              const isItemExpanded = expandedStats[index] ?? (index === 0);
              return (
              <div key={index} className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-4 flex flex-col gap-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setExpandedStats(prev => ({...prev, [index]: !isItemExpanded}))} className="text-[#F0EDE680] hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300" style={{ transform: isItemExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    <span className="text-[12px] text-on-surface font-bold uppercase">{item.mainText || "Untitled Stat"}</span>
                  </div>
                  <button className="material-symbols-outlined text-[18px] text-[#F0EDE680] hover:text-error" onClick={() => removeTopLevelArrayItem("stats", index)}>delete</button>
                </div>
                {isItemExpanded && (
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Main Text</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.mainText || ""} onChange={(e) => updateTopLevelArrayItem("stats", index, "mainText", e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[#F0EDE680] opacity-40 uppercase font-bold">Supporting Text</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-on-background p-2 outline-none" type="text" value={item.supportingText || ""} onChange={(e) => updateTopLevelArrayItem("stats", index, "supportingText", e.target.value)} />
                  </div>
                </div>
                )}
              </div>
            )})}
          </div>
        </div>
      )}
    </div>
  );
}
