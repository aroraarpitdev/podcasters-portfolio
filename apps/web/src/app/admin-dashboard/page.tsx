"use client";

import React, { useState } from "react";
import { useDashboardContext } from "./DashboardContext";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import TransformationSection from "./components/TransformationSection";
import LatestProjectsSection from "./components/LatestProjectsSection";
import ServicesSection from "./components/ServicesSection";
import WorkflowSection from "./components/WorkflowSection";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import LeadFormSection from "./components/LeadFormSection";
import FooterSection from "./components/FooterSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function AdminDashboardPage() {
  const { data } = useDashboardContext();
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  if (!data) return <div className="text-white p-8">Loading...</div>;

  const headerData = data.header || {};
  const heroData = data.hero || {};
  const clients = heroData.circleClientsInitials || [];

  const handlePublish = async () => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      // Basic validation
      if (!headerData.brandName || !heroData.mainHeadingBody) {
        throw new Error("Missing required fields: brandName or mainHeadingBody");
      }

      const payload = {
        content: data,
      };

      const response = await fetch("http://127.0.0.1:4000/page-content/home", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      setSaveStatus("Success");
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (err: any) {
      console.error(err);
      setSaveStatus(err.message || "Error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] text-[#F0EDE6] font-body-md font-['DM_Sans',_sans-serif]">
      {/* Navigation Drawer (SideNav) */}
      <aside className="fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-[32px] px-gutter z-50">
        <div className="mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CMS</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Dashboard</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 py-2 px-3 text-primary font-bold border-r-2 border-primary bg-surface-container-low transition-all duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Pages</span>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(245,166,35,0.6)]"></div>
          </a>
          <a
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">image</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Media</span>
          </a>
          <a
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">folder_special</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Collections</span>
          </a>
        </nav>
        <div className="mt-auto space-y-2 pt-6 border-t border-outline-variant">
          <a
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Settings</span>
          </a>
          <a
            className="flex items-center gap-3 py-2 px-3 text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="font-body-md text-body-md uppercase tracking-wider">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[240px] h-screen flex flex-col w-full">
        {/* Top App Bar */}
        <header className="h-16 flex justify-between items-center px-gutter bg-surface-container border-b border-outline-variant z-40 sticky top-0 shrink-0">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">menu_open</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Editor</h2>
            {saveStatus && (
              <span className={`text-[12px] ml-4 italic ${saveStatus === 'Success' ? 'text-green-500' : 'text-error'}`}>
                {saveStatus}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 bg-surface-variant border border-outline-variant text-on-surface font-button text-button hover:bg-surface-container-highest transition-colors active:scale-95">
              Preview
            </button>
            <button
              onClick={handlePublish}
              disabled={isSaving}
              className="px-6 py-2.5 bg-primary text-background font-button text-button font-bold hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </header>

        {/* Scrollable Canvas */}
        <section className="flex-1 overflow-y-auto custom-scrollbar p-[32px] space-y-8 pb-32">
          <HeaderSection />
          <HeroSection />
          <TransformationSection />
          <LatestProjectsSection />
          <ServicesSection />
          <WorkflowSection />
          <StatsSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <LeadFormSection />
          <FooterSection />

          {/* Bottom Publish Button */}
          <div className="flex justify-end pt-4 pb-12 border-t border-outline-variant">
            <button
              onClick={handlePublish}
              disabled={isSaving}
              className="px-8 py-3 bg-primary text-background font-button text-button font-bold hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50"
            >
              {isSaving ? "Publishing..." : "Publish Changes"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
