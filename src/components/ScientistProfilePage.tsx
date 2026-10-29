import React from "react";
import ScientistProfile from "./ScientistProfile";

interface ScientistProfilePageProps {
  onNavigate: (path: string) => void;
  onBookConsultation: (contextTitle: string) => void;
}

export default function ScientistProfilePage({
  onNavigate,
  onBookConsultation,
}: ScientistProfilePageProps) {
  return (
    <ScientistProfile
      mode="full-page"
      onNavigate={onNavigate}
      onBookConsultation={onBookConsultation}
    />
  );
}
