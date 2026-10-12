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

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const navLinks = [
    { label: "Methodology", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Campuses", href: "#campuses" },
    { label: "Reviews", href: "#reviews" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-outer-container">
          {/* Standalone Logo Emblem on the left, outside the navbar */}
          <a
            href="#"
            className="standalone-logo-outside"
            aria-label="Bhadri's Academy Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
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
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              BHADRI&apos;S <span>ACADEMY</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-links-wrap">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Nav Action CTA */}
            <div className="nav-actions">
              <a
                href="#admissions"
                className="btn btn-primary"
                id="navCta"
                onClick={(e) => handleNavClick(e, "#admissions")}
              >
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

          {/* Right balancing spacer so the navbar pill is mathematically centered */}
          <div className="header-nav-spacer" aria-hidden="true" />
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header with Title & Explicit Close Button */}
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            BHADRI&apos;S <span>ACADEMY</span>
          </div>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
          <a
            href="#admissions"
            className="btn btn-primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={(e) => handleNavClick(e, "#admissions")}
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </>
  );
}
