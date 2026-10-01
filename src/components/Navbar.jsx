import React, { useState, useEffect } from "react";

export default function Navbar({ logoVisible = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  const navLinks = [
    { label: "Methodology", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Campuses", href: "#bengaluru" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#admissions" },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-outer-container">
          {/* Standalone Logo Emblem on the left, outside the navbar */}
          <a href="#" className="standalone-logo-outside" aria-label="Bhadri's Academy Home">
            <div
              className="logo-badge"
              style={{
                opacity: logoVisible ? 1 : 0,
                transition: "opacity 0.25s ease-out",
              }}
            >
              <img src="/img/logo.png" alt="Bhadri's Academy Logo" />
            </div>
          </a>

          {/* Transparent Fluid Navigation Bar Pill */}
          <div className="nav-container fluid-glass-pill">
            {/* Brand Title inside the navbar pill (matching reference INTROCATE position) */}
            <a
              href="#"
              className="nav-brand-title"
              style={{
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? "translateX(0)" : "translateX(-8px)",
                transition:
                  "opacity 0.35s ease-out 0.05s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
              }}
            >
              BHADRI&apos;S <span>ACADEMY</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-links-wrap">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Nav Action CTA */}
            <div className="nav-actions">
              <a href="#admissions" className="btn btn-primary" id="navCta">
                BOOK A CALL
              </a>
            </div>

            {/* Hamburger for Mobile */}
            <button
              className={`hamburger ${isDrawerOpen ? "active" : ""}`}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <span
                style={{
                  transform: isDrawerOpen ? "translateY(7.5px) rotate(45deg)" : "none",
                }}
              />
              <span style={{ opacity: isDrawerOpen ? 0 : 1 }} />
              <span
                style={{
                  transform: isDrawerOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsDrawerOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto" }}>
          <a
            href="#admissions"
            className="btn btn-primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={() => setIsDrawerOpen(false)}
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </>
  );
}
