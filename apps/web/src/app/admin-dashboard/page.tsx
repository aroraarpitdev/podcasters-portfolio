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
import SideNav from "./components/SideNav";
import { savePageData } from "@/lib/api";

export default function AdminDashboardPage() {
  const { data, initialData } = useDashboardContext();
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  // Check if form is dirty
  const isDirty = React.useMemo(() => {
    if (!data || !initialData) return false;
    return JSON.stringify(data) !== JSON.stringify(initialData);
  }, [data, initialData]);

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

      await savePageData(payload);

      setSaveStatus("Success");
      setTimeout(() => setSaveStatus(null), 3000);

      // Update window location to refresh state with new data, or we can just leave it since initialData will be stale until refresh.
      // But for simple UX, we let them know it's saved.
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
      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />

      {/* Main Content Area */}
      <main className={`h-screen flex flex-col w-full transition-all duration-300 ${isSideNavOpen ? 'xl:ml-[240px]' : ''}`}>
        {/* Top App Bar */}
        <header className="h-16 flex justify-between items-center px-gutter bg-surface-container border-b border-outline-variant z-40 sticky top-0 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSideNavOpen(!isSideNavOpen)} className="text-primary hover:bg-surface-container-highest p-2 rounded-full transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">menu_open</span>
            </button>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Editor</h2>
            {saveStatus && (
              <span className={`text-[12px] ml-4 italic ${saveStatus === 'Success' ? 'text-green-500' : 'text-error'}`}>
                {saveStatus}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePublish}
              disabled={isSaving || !isDirty}
              className="px-6 py-2.5 bg-primary text-background font-button text-button font-bold hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? "Publishing..." : "Publish Changes"}
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

        </section>
      </main>
    </div>
  );
}
