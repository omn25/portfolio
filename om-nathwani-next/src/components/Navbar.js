"use client";

import { useEffect, useState } from "react";

const navigation = [
  { id: "me", label: "me rn." },
  { id: "life", label: "life rn." },
  { id: "career", label: "career rn." },
];

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    window.history.pushState(null, "", `#${sectionId}`);
    section.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });

    if (sectionId === "home") {
      window.dispatchEvent(new CustomEvent("homeClick"));
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="nav-home"
      >
        Om Nathwani
      </button>

      <div className="nav-desktop">
        {navigation.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation"
        className={`nav-mobile${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <button
            type="button"
            key={item.id}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
