import React from "react";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity xl:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <aside 
        className={`fixed left-0 top-0 h-full w-[240px] bg-surface-container border-r border-outline-variant flex flex-col py-[32px] px-gutter z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CMS</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Dashboard</p>
          </div>
          <button onClick={onClose} className="xl:hidden text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
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
    </>
  );
}
