"use client";

import { useEffect, useState } from "react";
import { getYouTubeEmbedUrl } from "@/lib/utils";

export function Portfolio({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState("FULL EPISODES");
  const [playingFullEpisode, setPlayingFullEpisode] = useState<number | null>(null);
  const [playingShort, setPlayingShort] = useState<number | null>(null);
  const tabs = data?.tabs || ["FULL EPISODES", "AUDIO BOOK", "SHORTS"];

  if (!data) return null;

  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding">
      <div className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:items-end mb-12 gap-8">
        <div>
          <h2 className="font-headline-lg text-[36px] md:text-headline-lg mb-2 text-on-surface">
            {data.heading}
          </h2>
          <p className="text-on-surface/60 font-medium">
            {data.subheading}
          </p>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 border border-on-surface/10 overflow-x-auto max-w-full">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-label-sm font-bold transition-all ${activeTab === tab
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
        {activeTab === tabs[0] && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            {data.fullEpisodes?.map((episode: any, index: number) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border border-on-surface/10 mb-4 group-hover:scale-105 transition-transform duration-700">
                  {playingFullEpisode === index ? (
                    <iframe
                      src={getYouTubeEmbedUrl(episode.videoUrl) || undefined}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute top-0 left-0 border-0"
                    />
                  ) : (
                    <div className="w-full h-full cursor-pointer relative" onClick={() => setPlayingFullEpisode(index)}>
                      <img
                        alt={episode.videoHeading}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={episode.thumbnailURL || undefined}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-xl">
                          <span
                            className="material-symbols-outlined text-on-primary text-3xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-md text-lg mb-1 text-on-surface">
                      {episode.videoHeading}
                    </h3>
                    <p className="text-on-surface/60 text-xs font-medium">
                      {episode.videoSubHeading}
                    </p>
                  </div>
                  <div className="text-on-primary font-bold text-[10px] bg-primary px-2 py-1 rounded">
                    {episode.viewCounts}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AUDIO BOOK VIEW */}
        {activeTab === tabs[1] && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            {data.audioBook?.map((book: any, index: number) => (
              <div key={index} className="group bg-surface-container-high rounded-2xl p-4 border border-on-surface/10 hover:border-primary transition-all">
                <div className="aspect-video overflow-hidden rounded-xl mb-6">
                  <img
                    alt={book.audioHeading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={book.thumbnailURL || undefined}
                  />
                </div>
                <div className="px-2">
                  <h3 className="font-headline-md text-2xl mb-2 text-on-surface text-center">
                    {book.audioHeading}
                  </h3>
                  <p className="text-on-surface/60 text-sm mb-6 text-center line-clamp-2">
                    {book.audioSubHeading}
                  </p>
                  <a
                    href={book.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#22C55E] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">headphones</span>
                    {book.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SHORTS VIEW */}
        {activeTab === tabs[2] && (
          <div className="marquee-container side-fade-mask overflow-hidden view-content animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex whitespace-nowrap">
              {[1, 2].map((group) => (
                <div key={`shorts-row-${group}`} className="flex gap-4 animate-marquee-left px-2">
                  {data.shorts?.map((short: any, index: number) => (
                    <div
                      key={index}
                      className="w-[200px] md:w-[250px] shrink-0 aspect-[9/16] rounded-xl overflow-hidden bg-surface-container border border-on-surface/10 group"
                    >
                      <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-700">
                        {playingShort === index ? (
                          <iframe
                            src={getYouTubeEmbedUrl(short.shortsUrl) || undefined}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full absolute top-0 left-0 border-0"
                          />
                        ) : (
                          <div className="w-full h-full cursor-pointer relative" onClick={() => setPlayingShort(index)}>
                            <img
                              alt={`Short ${index}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              src={short.thumbnailURL || undefined}
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl">
                                <span
                                  className="material-symbols-outlined text-on-primary text-3xl"
                                  style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                  play_arrow
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
