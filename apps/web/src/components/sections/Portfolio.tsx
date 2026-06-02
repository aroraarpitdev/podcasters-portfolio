"use client";

import { useState } from "react";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("FULL EPISODES");
  const tabs = ["FULL EPISODES", "AUDIO-FIRST", "SHORTS"];

  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
            Latest Projects
          </h2>
          <p className="text-on-surface font-medium">
            Helping creators dominate every platform.
          </p>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 border-2 border-on-surface/20 overflow-x-auto custom-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-label-sm font-label-sm font-bold transition-all ${
                activeTab === tab
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-on-surface/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="transition-all duration-500" id="grid-container">
        
        {/* FULL EPISODES VIEW */}
        {activeTab === "FULL EPISODES" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
                <img
                  alt="The Business Lab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6pqFVNRccG5No-3OFGLqEDVkHHIpJInvegkrpURpZb1t7iozj14xO8U1fwb1i_X3k87HlTTOtZEFhR5RpEXyUawjahC5pjp0509G5BPB7UZIX9xnBOabyEH2shuygx6JHR87zSPsYCGErUI0YDkapEuQu52_rZNefLX9Qk-Ant3W4IHD17JGNR5efPbYh5ym3IvaQdJ9RKvcLMFaZMXFDZpRpXjA6c5Mk8oYRuky7Zk7HIoZ7KCR-5U31U5iR-VUr3vKhxhGSNjY"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-on-primary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                    The Business Lab
                  </h3>
                  <p className="text-on-surface text-sm font-medium">
                    Full Episode Production
                  </p>
                </div>
                <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
                  1.2M VIEWS
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
                <img
                  alt="Founders Series"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVzfX7htPWE4os00k88q6uSnheWM_Nc2frGqh8XQI-RqbMR9Wy_5QV7rlMRRznMYz94dTGBk-_CzDXajGX2Oqnvq06viIk_1dVd8ieVv2OXXqZ-OdpJCEEilLL2x7gHqom5YKroPhmv-FK_YJkUHv3ZztYh3f6r_JvXaMGbV_9N3WftSqqhYrCLOY5aCBjNcT_lLgaFOsFjdmVfdTdS3ukY5-KDcIH9BWlV_JUdQh8JfBovyHCHRo_WBfmU6wjp6leM9EsGV8CZqY"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-on-primary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                    Founders Series
                  </h3>
                  <p className="text-on-surface text-sm font-medium">
                    Vertical Shorts Strategy
                  </p>
                </div>
                <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
                  850K VIEWS
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
                <img
                  alt="Creative Minds"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN_tN4D2w2lBdYzwjtadNmVylFrOR9_b5mckuintnzD45FyB3mmR3AlSNkA20diz_CaG2x5xbuDfT9caIDh5k7i3v-2QzRukvkiI-EFFyYYS8L0WJA8N6u1zt5TOuUvgVGf6RRoLamCyhh0IRVMYhVliOfWJQK5X1OMW6DiPKNoAXf5W-5cP4-71-FjFRmWpbjDSuqFxGVjIwmGWlqXPv8O-W2T50vJkOBhlQfGowWoiMnT2bcj3_uCOA_0Sp12DBNJ1kYTAv0z7U"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-on-primary text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                    Creative Minds
                  </h3>
                  <p className="text-on-surface text-sm font-medium">
                    Hybrid Production
                  </p>
                </div>
                <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
                  2.4M VIEWS
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AUDIO-FIRST VIEW */}
        {activeTab === "AUDIO-FIRST" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="group bg-surface-container-high rounded-2xl p-4 border border-on-surface/10 hover:border-primary transition-all">
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  alt="Accounting Voices"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/audio_mic.png"
                />
              </div>
              <div className="px-2">
                <h3 className="font-headline-md text-2xl mb-2 text-on-surface text-center">
                  Accounting Voices
                </h3>
                <p className="text-on-surface/60 text-sm mb-6 text-center line-clamp-2">
                  Insights and conversations from leading accounting professionals shaping the future of finance.
                </p>
                <button className="w-full py-3 bg-[#22C55E] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-sm">headphones</span>
                  Listen to Podcast
                </button>
              </div>
            </div>
            <div className="group bg-surface-container-high rounded-2xl p-4 border border-on-surface/10 hover:border-primary transition-all">
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  alt="The Human Protocol"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/audio_waveform.png"
                />
              </div>
              <div className="px-2">
                <h3 className="font-headline-md text-2xl mb-2 text-on-surface text-center">
                  The Human Protocol
                </h3>
                <p className="text-on-surface/60 text-sm mb-6 text-center line-clamp-2">
                  Exploring what it means to be human through science, philosophy, and personal stories.
                </p>
                <button className="w-full py-3 bg-[#22C55E] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-sm">headphones</span>
                  Listen to Podcast
                </button>
              </div>
            </div>
            <div className="group bg-surface-container-high rounded-2xl p-4 border border-on-surface/10 hover:border-primary transition-all">
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  alt="The Lo-Down Podcast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/audio_mic.png"
                />
              </div>
              <div className="px-2">
                <h3 className="font-headline-md text-2xl mb-2 text-on-surface text-center">
                  The Lo-Down Podcast
                </h3>
                <p className="text-on-surface/60 text-sm mb-6 text-center line-clamp-2">
                  Real talk, honest conversations, and unfiltered insights on topics that matter most today.
                </p>
                <button className="w-full py-3 bg-[#22C55E] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-sm">headphones</span>
                  Listen to Podcast
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SHORTS VIEW */}
        {activeTab === "SHORTS" && (
          <div className="marquee-container side-fade-mask overflow-hidden view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex whitespace-nowrap">
              {[1, 2].map((group) => (
                <div key={`shorts-row-${group}`} className="flex gap-4 animate-marquee-left px-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => {
                    const shortsImages = ["/images/short_portrait.png", "/images/short_split.png"];
                    return (
                      <div
                        key={num}
                        className="w-[200px] md:w-[250px] shrink-0 aspect-[9/16] rounded-xl overflow-hidden bg-surface-container border border-on-surface/10 group cursor-pointer"
                      >
                        <img
                          alt={`Short ${num}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src={shortsImages[num % 2]}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
