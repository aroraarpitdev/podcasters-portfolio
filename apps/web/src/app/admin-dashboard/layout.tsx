import { getPageData } from "@/lib/api";
import { DashboardProvider } from "./DashboardContext";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialData = await getPageData();

  return (
    <DashboardProvider initialData={initialData}>
      {children}
    </DashboardProvider>
  );
}
