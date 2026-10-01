import React, { useState, useEffect } from "react";

export default function IntroOverlay({ onLogoSettled, onComplete }) {
  const [stage, setStage] = useState("measuring");
  const [targetRect, setTargetRect] = useState(null);
  const [motion, setMotion] = useState({ dx: 0, dy: 0, centerScale: 1 });
  const [overlayFading, setOverlayFading] = useState(false);

  // 1. Measure exact navbar logo coordinates
  useEffect(() => {
    // Accessibility check: Skip if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      onLogoSettled?.();
      onComplete?.();
      return;
    }

    // Lock page scroll & interactions during intro
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    let rafId;
    let fallbackTimer;

    const measure = () => {
      const targetEl = document.querySelector(".header .logo-badge");
      if (!targetEl) {
        rafId = requestAnimationFrame(measure);
        return;
      }

      const rect = targetEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        rafId = requestAnimationFrame(measure);
        return;
      }

      const targetCenterX = rect.left + rect.width / 2;
      const targetCenterY = rect.top + rect.height / 2;
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const dx = viewportCenterX - targetCenterX;
      const dy = viewportCenterY - targetCenterY;

      // Base center logo size (~260px on desktop, ~180px on mobile)
      const centerHeight = Math.max(
        160,
        Math.min(window.innerHeight * 0.35, Math.min(window.innerWidth * 0.45, 270))
      );
      const centerScale = centerHeight / rect.height;

      setMotion({ dx, dy, centerScale });
      setTargetRect(rect);
    };

    rafId = requestAnimationFrame(measure);

    // Fail-safe: if measurement fails after 500ms, unlock and complete
    fallbackTimer = setTimeout(() => {
      if (!targetRect) {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        onLogoSettled?.();
        onComplete?.();
      }
    }, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fallbackTimer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // 2. Pure Slide Animation Sequence
  useEffect(() => {
    if (!targetRect) return;

    // Step 1: Smooth appear at center (0.0s – 0.4s)
    const tAppear = setTimeout(() => {
      setStage("appear");
    }, 40);

    // Step 2: Smooth, continuous slide directly into navbar position (0.65s – 1.38s)
    const tSlide = setTimeout(() => {
      setStage("sliding");
    }, 650);

    // Step 3: Logo lands at navbar -> handoff to navbar logo & fade overlay (1.38s)
    const tSettled = setTimeout(() => {
      setStage("settled");
      onLogoSettled?.();
      setOverlayFading(true);
    }, 1380);

    // Step 4: Unlock page and remove overlay (1.75s)
    const tComplete = setTimeout(() => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      onComplete?.();
    }, 1750);

    return () => {
      clearTimeout(tAppear);
      clearTimeout(tSlide);
      clearTimeout(tSettled);
      clearTimeout(tComplete);
    };
  }, [targetRect, onLogoSettled, onComplete]);

  // Click anywhere to skip
  const handleSkip = () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    onLogoSettled?.();
    onComplete?.();
  };

  if (!targetRect) {
    return (
      <div
        className="intro-overlay"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--off)",
          zIndex: 99999,
          pointerEvents: "auto",
        }}
        aria-hidden="true"
      />
    );
  }

  const { dx, dy, centerScale } = motion;

  // Determine transform, opacity, and transition based on exact stage
  let transform = `translate3d(${dx}px, ${dy}px, 0) scale(${centerScale * 0.92})`;
  let opacity = 0;
  let transition = "none";

  if (stage === "appear") {
    // Fades in cleanly and stabilizes at the center of the viewport
    transform = `translate3d(${dx}px, ${dy}px, 0) scale(${centerScale})`;
    opacity = 1;
    transition = "opacity 0.38s ease-out, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)";
  } else if (stage === "sliding" || stage === "settled") {
    // Pure, fluid slide straight to the exact navbar position
    transform = "translate3d(0, 0, 0) scale(1.0)";
    opacity = 1;
    transition = "transform 0.72s cubic-bezier(0.16, 1, 0.3, 1)";
  }

  return (
    <div
      className="intro-overlay"
      onClick={handleSkip}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--off)",
        zIndex: 99999,
        pointerEvents: overlayFading ? "none" : "auto",
        opacity: overlayFading ? 0 : 1,
        transition: "opacity 0.35s ease-out",
        willChange: "opacity",
        cursor: "default",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "fixed",
          left: `${targetRect.left}px`,
          top: `${targetRect.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          transformOrigin: "center center",
          transform,
          opacity,
          transition,
          willChange: "transform, opacity",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/img/logo.png"
          alt="Bhadri's Academy Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}
