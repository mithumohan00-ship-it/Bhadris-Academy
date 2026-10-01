import React, { useState, useEffect, useRef } from "react";
import { DoodleSparkle } from "./Doodles";

export default function StudentLove() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeVideo, setActiveVideo] = useState(null);
  const touchStartXRef = useRef(0);

  const videoReviews = [
    {
      id: "reel-1",
      reelId: "DdgaKpXD0Wj",
      videoSrc: "/videos/reel-1.mp4",
      poster: "/videos/covers/reel-1-cover.jpg",
      category: "Parent Review",
      title: "Confidence in ICSE Board Prep",
      speakerRole: "PARENT OF STUDENT",
      speakerTitle: "Father of Class 10 ICSE Student",
      rating: 5,
      subject: "Math & Physics Mastery",
      quote:
        "Bhadri's Academy completely changed how my son approaches board prep. The personal mentorship gave him the confidence to excel in his ICSE exams.",
    },
    {
      id: "reel-2",
      reelId: "DdZErCjCRD9",
      videoSrc: "/videos/reel-2.mp4",
      poster: "/videos/covers/reel-2-cover.jpg",
      category: "Student Review",
      title: "Conceptual Clarity & Doubt Solving",
      speakerRole: "STUDENT REVIEW",
      speakerTitle: "Class 9 CBSE Student",
      rating: 5,
      subject: "Science & Mathematics",
      quote:
        "Mentors personally track where I am stumbling and clarify concepts patiently with practical everyday examples.",
    },
    {
      id: "reel-3",
      reelId: "DbdZ1btj8aw",
      videoSrc: "/videos/reel-3.mp4",
      poster: "/videos/covers/reel-3-cover.jpg",
      category: "Parent Review",
      title: "Small Batch 12:1 Personal Focus",
      speakerRole: "PARENT OF STUDENT",
      speakerTitle: "Mother of Class 8 Student",
      rating: 5,
      subject: "Personalised Mentorship",
      quote:
        "The 12:1 small batch size is real — every student gets active questioning and immediate attention in every class.",
    },
    {
      id: "reel-4",
      reelId: "DavD0-XDxaw",
      videoSrc: "/videos/reel-4.mp4",
      poster: "/videos/covers/reel-4-cover.jpg",
      category: "Student Review",
      title: "Overcoming Exam Stress & Doubts",
      speakerRole: "STUDENT REVIEW",
      speakerTitle: "High School Student",
      rating: 5,
      subject: "Exam Strategy & Confidence",
      quote:
        "Regular revision cycles and chapter checkpoints helped eliminate last-minute exam fear completely.",
    },
    {
      id: "reel-5",
      reelId: "DaiO-ixCLba",
      videoSrc: "/videos/reel-5.mp4",
      poster: "/videos/covers/reel-5-cover.jpg",
      category: "Parent Review",
      title: "From Rote to Conceptual Learning",
      speakerRole: "PARENT OF STUDENT",
      speakerTitle: "Parent of Cambridge IGCSE Student",
      rating: 5,
      subject: "Analytical Thinking",
      quote:
        "Rather than mechanical rote drills, the mentors nurture genuine analytical curiosity in science and math.",
    },
    {
      id: "reel-6",
      reelId: "DZPVndCjf-l",
      videoSrc: "/videos/reel-6.mp4",
      poster: "/videos/covers/reel-6-cover.jpg",
      category: "Student Review",
      title: "Consistent Improvement in Scores",
      speakerRole: "STUDENT REVIEW",
      speakerTitle: "Class 10 State Board Student",
      rating: 5,
      subject: "Mathematics Mastery",
      quote:
        "My scores improved dramatically within 3 months of joining. The teachers make complex math problems feel intuitive.",
    },
    {
      id: "reel-7",
      reelId: "DYuOm1zj0Iq",
      videoSrc: "/videos/reel-7.mp4",
      poster: "/videos/covers/reel-7-cover.jpg",
      category: "Parent Review",
      title: "Honest Weekly Progress Updates",
      speakerRole: "PARENT OF STUDENT",
      speakerTitle: "Mother of Middle School Student",
      rating: 5,
      subject: "Transparent Reporting",
      quote:
        "Transparent weekly feedback keeps us closely informed of improvements, milestones, and focus areas.",
    },
    {
      id: "reel-8",
      reelId: "DYluW78CFb_",
      videoSrc: "/videos/reel-8.mp4",
      poster: "/videos/covers/reel-8-cover.jpg",
      category: "Student Review",
      title: "Mock Exams & Exam Readiness",
      speakerRole: "STUDENT REVIEW",
      speakerTitle: "Class 10 CBSE Student",
      rating: 5,
      subject: "Mock Test Drills",
      quote:
        "Practicing 10-year PYQ questions under simulated exam conditions gave me total speed and accuracy.",
    },
    {
      id: "reel-9",
      reelId: "DXb7fE9Dqvb",
      videoSrc: "/videos/reel-9.mp4",
      poster: "/videos/covers/reel-9-cover.jpg",
      category: "Student Review",
      title: "Approachable & Dedicated Faculty",
      speakerRole: "STUDENT REVIEW",
      speakerTitle: "Foundation Batch Student",
      rating: 5,
      subject: "Teacher Mentorship",
      quote:
        "The teachers are so supportive! You can ask the same doubt multiple times until it completely clicks.",
    },
    {
      id: "reel-10",
      reelId: "DUAeIjYgWU_",
      videoSrc: "/videos/reel-10.mp4",
      poster: "/videos/covers/reel-10-cover.jpg",
      category: "Parent Review",
      title: "Academic Discipline & Curiosity",
      speakerRole: "PARENT OF STUDENT",
      speakerTitle: "Parent of Class 7 Student",
      rating: 5,
      subject: "Consistent Study Habits",
      quote:
        "She actually looks forward to her classes every afternoon. It has built true academic discipline.",
    },
  ];

  // Update cards per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, videoReviews.length - cardsPerView);

  const pauseAllVideos = () => {
    document.querySelectorAll("video").forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });
  };

  const handleNext = () => {
    pauseAllVideos();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    pauseAllVideos();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDotClick = (dotIdx) => {
    pauseAllVideos();
    setCurrentIndex(dotIdx);
  };

  const handleVideoPlay = (e) => {
    const currentVideo = e.target;
    document.querySelectorAll("video").forEach((video) => {
      if (video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="section student-love-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="student-love-header reveal">
          <span className="eyebrow eyebrow-gold">
            <DoodleSparkle size={16} />
            Student & Parent Experiences
          </span>
          <h2 className="section-title text-white">
            Students Love <span className="highlight-gold">Bhadri&apos;s Academy</span>{" "}
            <DoodleSparkle />
          </h2>
          <p className="section-subtitle text-light-muted">
            Watch authentic video reviews from our parents and students across Bengaluru —
            sharing their transformation from conceptual doubts to subject mastery and top board scores.
          </p>
        </div>

        {/* Carousel Header Controls */}
        <div className="reels-carousel-top-bar">
          <div className="reels-nav-buttons">
            <button
              type="button"
              className="reel-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous video reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="reel-nav-btn next"
              onClick={handleNext}
              aria-label="Next video reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 10 Portrait Video Reels Carousel */}
        <div
          className="reels-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="reels-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {videoReviews.map((item) => (
              <div
                key={item.id}
                className="reels-carousel-slide"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="reel-card-container">

                  {/* Native HTML5 Video Player (Plays right here in place without any redirect) */}
                  <div className="reel-video-wrapper">
                    <video
                      src={item.videoSrc}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="reel-html5-video"
                      onPlay={handleVideoPlay}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Bottom Info Bar with Cinema View Action */}
                  <div className="reel-card-footer">
                    <div>
                      <h4 className="reel-footer-title">{item.title}</h4>
                      <p className="reel-footer-sub">{item.speakerTitle}</p>
                    </div>
                    <button
                      type="button"
                      className="reel-expand-btn"
                      onClick={() => setActiveVideo(item)}
                      title="Watch in Cinema Mode"
                      aria-label={`Watch ${item.title} in cinema mode`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="reels-pagination-dots" role="tablist" aria-label="Reels pagination">
          {[...Array(maxIndex + 1)].map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              role="tab"
              aria-selected={dotIdx === currentIndex}
              aria-label={`Jump to video slide ${dotIdx + 1}`}
              className={`reel-dot ${dotIdx === currentIndex ? "active-pill" : ""}`}
              onClick={() => handleDotClick(dotIdx)}
            />
          ))}
        </div>


      </div>

      {/* Cinema Mode Video Modal (Plays directly in the portal) */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video review: ${activeVideo.speakerTitle}`}
        >
          <div className="video-modal-content instagram-cinema-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close-btn"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video testimonial"
            >
              &times;
            </button>

            <div className="cinema-modal-header">
              <span className="modal-role-pill">{activeVideo.category}</span>
              <h3 className="modal-title">{activeVideo.title}</h3>
              <p className="modal-sub-meta">
                {activeVideo.speakerTitle}
              </p>
            </div>

            {/* Direct Video Player in Modal */}
            <div className="cinema-video-frame">
              <video
                src={activeVideo.videoSrc}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="cinema-html5-video"
                onPlay={handleVideoPlay}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="cinema-modal-cta">
              <a
                href="#admissions"
                className="btn btn-primary"
                onClick={() => setActiveVideo(null)}
              >
                Book Free Demo Class
              </a>
              <button
                type="button"
                className="btn btn-secondary-light"
                onClick={() => setActiveVideo(null)}
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

