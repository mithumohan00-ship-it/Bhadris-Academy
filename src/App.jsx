import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import BentoStats from "./components/BentoStats";
import StudentLove from "./components/StudentLove";
import AdmissionsForm from "./components/AdmissionsForm";
import Footer from "./components/Footer";
import WatermarkLogo from "./components/WatermarkLogo";
import IntroOverlay from "./components/IntroOverlay";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [logoSettled, setLogoSettled] = useState(false);

  // Initialize Scroll-Triggered Reveal Engine
  useEffect(() => {
    // Accessibility check: Skip animation if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-stagger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [introDone]);

  return (
    <div className="app-root">
      {/* Premium Initialization Logo Animation */}
      {!introDone && (
        <IntroOverlay
          onLogoSettled={() => setLogoSettled(true)}
          onComplete={() => setIntroDone(true)}
        />
      )}

      {/* 3D Rotating Background Logo Watermark */}
      <WatermarkLogo />

      <Navbar logoVisible={logoSettled || introDone} />
      <main>
        <Hero />
        <Experience />
        <About />
        <WhyUs />
        <BentoStats />
        <StudentLove />
        <AdmissionsForm />
      </main>
      <Footer />
    </div>
  );
}
