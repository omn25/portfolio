"use client";

import { useState } from "react";
import BulletinHero from "./BulletinHero";
import MeSection from "./MeSection";
import LifeSection from "./LifeSection";
import CareerSection from "./CareerSection";
import FooterNote from "./FooterNote";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function PortfolioPage() {
  const [activeLifeId, setActiveLifeId] = useState("lazsoc");
  const [activeCareerId, setActiveCareerId] = useState("lazsoc");

  const handleBulletinNavigation = ({ destination, targetItem }) => {
    if (destination === "life" && targetItem) {
      setActiveLifeId(targetItem);
    }

    if (destination === "career" && targetItem) {
      setActiveCareerId(targetItem);
    }

    const section = document.getElementById(destination);
    if (!section) return;

    window.history.pushState(null, "", `#${destination}`);
    section.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="site-shell">
      <BulletinHero onNavigate={handleBulletinNavigation} />
      <MeSection />
      <LifeSection activeId={activeLifeId} onActiveChange={setActiveLifeId} />
      <CareerSection
        activeId={activeCareerId}
        onActiveChange={setActiveCareerId}
      />
      <FooterNote />
    </div>
  );
}
