import React, { useEffect, useRef } from "react";

export default function WatermarkLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    let logoTargetScroll = window.scrollY;
    let logoCurrentScroll = window.scrollY;
    let animationFrameId;

    const handleScroll = () => {
      logoTargetScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const rotateLogo = () => {
      logoCurrentScroll += (logoTargetScroll - logoCurrentScroll) * 0.08;
      const rotation = logoCurrentScroll * 0.12;
      if (logoRef.current) {
        logoRef.current.style.transform = `perspective(1000px) translate(-50%, -50%) rotateY(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(rotateLogo);
    };

    animationFrameId = requestAnimationFrame(rotateLogo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-scroll-logo" ref={logoRef} aria-hidden="true">
      <img src="/img/logo.png" alt="" />
    </div>
  );
}
