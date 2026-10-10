import React, { useState } from "react";
import { DoodleArrow, DoodleSparkle } from "./Doodles";

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advantages = [
    {
      num: "01",
      orange: false,
      title: "Identification & Achievement",
      desc: "We pinpoint each student's strengths and learning gaps from day one, charting an individualised blueprint for consistent academic achievement.",
      img: "/img/why-us/why-us-1.jpg",
    },
    {
      num: "02",
      orange: true,
      title: "Personalised Learning System",
      desc: "Lesson roadmaps are tailored to each student's pace, board requirements, and conceptual needs rather than forced into a rigid one-size-fits-all curriculum.",
      img: "/img/why-us/why-us-2.jpg",
    },
    {
      num: "03",
      orange: false,
      title: "Small Batch — 12:1 Ratio",
      desc: "With an intentional cap of 12 students per batch, every learner receives active questioning, continuous attention, and immediate doubt resolution.",
      img: "/img/why-us/why-us-3.jpg",
    },
    {
      num: "04",
      orange: true,
      title: "Result-Oriented Teaching",
      desc: "Concept mastery is validated with periodic chapter checkpoints, revision cycles, previous year exam papers, and simulated mock examinations.",
      img: "/img/why-us/why-us-4.jpg",
    },
    {
      num: "05",
      orange: false,
      title: "Communication Skill Focus",
      desc: "Students are encouraged to explain answers in their own words, instilling authentic analytical reasoning and the ability to articulate thought clearly.",
      img: "/img/why-us/why-us-5.jpg",
    },
    {
      num: "06",
      orange: true,
      title: "Honest Progress Reports",
      desc: "Transparent weekly and monthly feedback sessions keep parents clearly informed of their child's improvements, focus areas, and milestones.",
      img: "/img/why-us/why-us-6.jpg",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % advantages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + advantages.length) % advantages.length);
  };

  const handleSelectCard = (index) => {
    setActiveIndex(index);
  };

  // Compute 3D fanned transform matching the reference image media_1790431232312.png
  const getCardStyle = (index) => {
    const total = advantages.length;
    let diff = index - activeIndex;

    // Cyclic distance so cards fan out smoothly
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

    const stepX = isMobile ? 36 : isTablet ? 42 : 46;
    const stepY = isMobile ? 8 : 12;
    const stepRotate = isMobile ? 4 : 5.5;

    const translateX = diff * stepX;
    const translateY = Math.pow(absDiff, 1.35) * stepY;
    const rotate = diff * stepRotate;
    const scale = Math.max(0.86, 1 - absDiff * 0.08);
    const zIndex = 15 - absDiff;

    // Only reveal active card (diff=0) and immediate flanking peek cards (diff=-1, +1)
    // Any distant cards are completely hidden so they never overlap the student image or bleed out of stage
    const opacity = absDiff > 1 ? 0 : absDiff === 1 ? 0.72 : 1;
    const pointerEvents = absDiff > 1 ? "none" : "auto";
    const visibility = absDiff > 1 ? "hidden" : "visible";

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      opacity,
      visibility,
      pointerEvents,
      transition: "all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)",
    };
  };

  return (
    <section className="section why-carousel-section" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="why-header-grid reveal">
          <div>
            <span className="eyebrow">Core Educational Strengths</span>
            <h2 className="section-title">
              Why <span className="highlight-underline">Choose</span> Our Services?{" "}
              <DoodleSparkle />
            </h2>
            <DoodleArrow />
          </div>
        </div>

        {/* 2-Column Showcase: Student Visual with Doodles + 3D Fanned Card Deck */}
        <div className="why-layout-grid">
          {/* Left: Authentic Student Study Visual with Fade Transition */}
          <div className="why-visual-frame reveal">
            {advantages.map((item, idx) => (
              <img
                key={item.num}
                src={item.img}
                alt={`${item.title} - Bhadri's Academy classroom`}
                className={`why-student-img ${idx === activeIndex ? "active" : ""}`}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          {/* Right: 3D Fanned Card Deck Presentation (Original White Cards Theme) */}
          <div className="why-fan-deck-container reveal">
            <div className="why-fan-stage">
              {advantages.map((item, idx) => {
                const isActive = idx === activeIndex;
              return (
                <div
                  key={item.num}
                  className={`why-fan-card why-original-card ${isActive ? "active-front" : "flank-card"}`}
                  style={getCardStyle(idx)}
                  onClick={() => handleSelectCard(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.title} card`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelectCard(idx);
                    }
                  }}
                >
                  <div className={`why-num-badge ${item.orange ? "orange-badge" : ""}`}>
                    {item.num}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Controls Bar: Prev, Pagination Dots, Next */}
          <div className="why-deck-controls-bar">
            {/* Previous Button */}
            <button
              type="button"
              className="deck-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Pagination Indicators with Active Pill */}
            <div className="deck-pagination-dots" role="tablist" aria-label="Services pagination">
              {advantages.map((item, idx) => (
                <button
                  key={item.num}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                  className={`deck-dot ${idx === activeIndex ? "active-pill" : ""}`}
                  onClick={() => handleSelectCard(idx)}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="deck-nav-btn next-btn"
              onClick={handleNext}
              aria-label="Next service"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
