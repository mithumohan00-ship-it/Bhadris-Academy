import React, { useState, useEffect } from "react";
import { DoodleArrow, DoodleSparkle, DoodleRays } from "./Doodles";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content">
            <span className="eyebrow">
              <DoodleSparkle size={16} />
              Personalised Academic Support
            </span>

            <div className="hero-title-wrap">
              <h1 className="hero-title">
                Keep Learning <br />
                on <span className="highlight-underline">Track</span>
              </h1>
              {/* Curved Teal Doodle Arrow */}
              
            </div>

            <p className="hero-subtitle">
              When students and parents have dependable access to qualified conceptual mentors,
              learning gaps are diagnosed early and student learning stays on track. Pre-Nursery
              to Grade 10.
            </p>

            <div className="hero-actions">
              <a href="#admissions" className="btn btn-primary">
                Get Started
              </a>
              <button
                type="button"
                className="btn btn-secondary hero-video-trigger"
                onClick={() => setIsVideoOpen(true)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hero-play-icon"
                >
                  <polygon points="5 3 19 12 5 21" />
                </svg>
                Explore Why Us
              </button>
            </div>

            {/* Hero Floating Badges */}
            <div className="hero-badges-row">
              <div className="hero-badge-card">
                <div className="hero-badge-icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="hero-badge-title">Best Certified Mentors</div>
                  <div className="hero-badge-desc">50+ Expert Faculty</div>
                </div>
              </div>

              <div className="hero-badge-card dark-theme">
                <div
                  className="hero-badge-icon-box"
                  style={{ backgroundColor: "rgba(62, 168, 151, 0.2)", color: "#3EA897" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <div className="hero-badge-title">Transforming Conceptual Clarity</div>
                  <div className="hero-badge-desc">State, CBSE, ICSE, IB & IGCSE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="hero-visual">
            <div className="hero-visual-frame">
              <DoodleRays className="hero-sunburst" />
              <img
                src="/img/student-primary-doodles.jpg"
                alt="Student writing in notebook with inspiring learning doodles at Bhadri's Academy"
                className="hero-student-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal: Explore Why Us Video Tour */}
      {isVideoOpen && (
        <div
          className="hero-video-modal-backdrop"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Why Us Video Tour"
        >
          <div
            className="hero-video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="hero-video-close-btn"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="hero-video-player-frame">
              <video
                src="/videos/explore-why-us.mp4"
                controls
                autoPlay
                playsInline
                className="hero-tour-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
