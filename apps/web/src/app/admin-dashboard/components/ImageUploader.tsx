import { useState, useRef } from "react";
import { useDashboardContext } from "../DashboardContext";

interface ImageUploaderProps {
  currentUrl?: string;
  onUpload: (url: string) => void;
  className?: string;
  label?: string;
}

export function ImageUploader({ currentUrl, onUpload, className = "", label = "Upload Image" }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useDashboardContext();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Please select a valid image file", "error");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      onUpload(data.url);
      showToast("Image uploaded successfully!", "success");
    } catch (error) {
      console.error(error);
      showToast("Failed to upload image", "error");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset input
      }
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {currentUrl && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-on-surface/10 bg-surface-container">
          <img src={currentUrl} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}
      
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high border border-on-surface/10 hover:border-primary text-on-surface rounded-lg transition-all disabled:opacity-50"
      >
        <span className="material-symbols-outlined text-[18px]">
          {isUploading ? "hourglass_empty" : "upload"}
        </span>
        <span className="font-bold text-xs uppercase tracking-wider">
          {isUploading ? "Uploading..." : label}
        </span>
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
