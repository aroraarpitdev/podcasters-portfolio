import React from "react";
import LoadingOverlay from "./components/LoadingOverlay";

export default function LoadingDashboard() {
  return <LoadingOverlay text="Fetching Dashboard Data" transparent={false} />;
}
