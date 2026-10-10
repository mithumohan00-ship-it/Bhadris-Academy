import React, { useState, useEffect, useRef } from "react";

export default function BentoStats() {
  const [counts, setCounts] = useState({
    branches: 0,
    years: 0,
    sixone: 0,
    boards: 0,
    ratio: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCampusIndex, setActiveCampusIndex] = useState(0);
  const containerRef = useRef(null);

  const campuses = [
    {
      id: "branch-1",
      number: "Branch 1",
      name: "Bagalagunte Campus",
      shortName: "Bagalagunte",
      mapSrc: "https://maps.google.com/maps?q=13.058481,77.5033869&hl=en&z=16&output=embed",
      titleMap: "Bhadri's Academy Bagalagunte Campus Map",
      landmark: "78, Behind Muneshwara Temple",
      address: "10th Cross, Road 58, Near Police Station, Bagalagunte, Bengaluru, Karnataka 560073",
      directionsUrl: "https://www.google.com/maps/dir/13.05854,77.503488/Bhadri's+academy,+police+station,+78,+Behind+Muneshwara+temple,10th+cross,+road+58,+Bagalagunte,+Bengaluru,+Karnataka+560073/@13.0586465,77.5032027,90m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bae23450330f41d:0xf347a78e23121dd1!2m2!1d77.5033869!2d13.058481!3e0",
    },
    {
      id: "branch-2",
      number: "Branch 2",
      name: "Sidedahalli Campus",
      shortName: "Sidedahalli",
      mapSrc: "https://maps.google.com/maps?q=13.062447,77.497673&hl=en&z=16&output=embed",
      titleMap: "Bhadri's Academy Sidedahalli Campus Map",
      landmark: "Near Sidedahalli Main Road",
      address: "(13°03'44.8\"N 77°29'51.6\"E), Sidedahalli, Bengaluru, Karnataka 560073",
      directionsUrl: "https://www.google.com/maps/place/13%C2%B003'44.8%22N+77%C2%B029'51.6%22E/@13.0614407,77.48499,4435m/data=!3m1!1e3!4m4!3m3!8m2!3d13.062447!4d77.497673!18m1!1e1",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const animateVal = (key, target, duration = 1200) => {
            const steps = Math.min(target, 30);
            const stepTime = Math.max(Math.floor(duration / steps), 35);
            const increment = Math.ceil(target / steps);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts((prev) => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, [key]: current }));
              }
            }, stepTime);
          };

          animateVal("branches", 2);
          animateVal("years", 5);
          animateVal("sixone", 6);
          animateVal("boards", 5);
          animateVal("ratio", 12);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  return (
    <section className="section bento-section" id="bengaluru">
      <div className="container">
        <div className="bento-header-wrap reveal">
          <span className="eyebrow">Local Reach & Excellence</span>
          <h2 className="section-title">Academic Footprint in Bengaluru</h2>
        </div>

        <div className="bento-container" ref={containerRef}>
          {/* Left: Student Visual with Bento Tiles */}
          <div className="bento-visual-wrap reveal">
            <img
              src="/img/student-highschool-success.jpg"
              alt="High school student giving thumbs up in classroom with learning doodles at Bhadri's Academy"
              className="bento-student-img"
            />
          </div>

          {/* Right: Mosaic Grid with Live Animated Counters */}
          <div className="bento-tiles-grid reveal-stagger">
            {/* Tile 1 (Orange) */}
            <div className="bento-tile bento-tile-orange glass-hover">
              <div className="bento-val">{hasAnimated ? counts.branches : 2}</div>
              <div className="bento-lbl">Branches in Bengaluru</div>
              <div className="bento-desc">Bagalagunte & Sidedahalli locations</div>
            </div>

            {/* Tile 2 (Teal) */}
            <div className="bento-tile bento-tile-teal glass-hover">
              <div className="bento-val">{hasAnimated ? `${counts.years}+` : "5+"}</div>
              <div className="bento-lbl">Years Serving Families</div>
              <div className="bento-desc">Structured progress & conceptual clarity</div>
            </div>

            {/* Tile 3 (Teal) */}
            <div className="bento-tile bento-tile-teal glass-hover">
              <div className="bento-val">{hasAnimated ? `${counts.sixone}:1` : "6:1"}</div>
              <div className="bento-lbl">The 6:1 Programme</div>
              <div className="bento-desc">Close mentorship for intensive support</div>
            </div>

            {/* Tile 4 (Orange) */}
            <div className="bento-tile bento-tile-orange glass-hover">
              <div className="bento-val">{hasAnimated ? counts.boards : 5}</div>
              <div className="bento-lbl">Boards Supported</div>
              <div className="bento-desc">State, CBSE, ICSE, IB & IGCSE</div>
            </div>

            {/* Tile 5 (Orange) */}
            <div className="bento-tile bento-tile-orange glass-hover">
              <div className="bento-val">{hasAnimated ? `${counts.ratio}:1` : "12:1"}</div>
              <div className="bento-lbl">Standard Batch Ratio</div>
              <div className="bento-desc">Maximum individual student attention</div>
            </div>

            {/* Tile 6 (Teal Chalkboard Doodles) */}
            <div className="bento-tile bento-tile-chalk glass-hover">
              <div className="bento-val" style={{ fontSize: "2.2rem" }}>
                100%
              </div>
              <div className="bento-lbl">Concept First</div>
              <div className="bento-desc">No rote memorisation, only lasting understanding</div>
            </div>
          </div>
        </div>

        {/* Campuses & Branch Locations Showcase */}
        <div className="campuses-showcase reveal">
          <div className="campuses-showcase-header">
            <span className="eyebrow">Visit Our Branches</span>
            <h3 className="campuses-showcase-title">Two Convenient Campuses in Bengaluru</h3>
          </div>

          {/* Desktop Layout: 2 Separate Side-by-Side Cards (Screens > 860px) */}
          <div className="campuses-grid campuses-desktop-grid">
            {/* Campus 1: Bagalagunte */}
            <div className="campus-card glass-hover">
              <div className="campus-card-header">
                <h4 className="campus-name">Bagalagunte Campus</h4>
              </div>

              <div className="campus-map-frame">
                <iframe
                  title="Bhadri's Academy Bagalagunte Campus Map"
                  src="https://maps.google.com/maps?q=13.058481,77.5033869&hl=en&z=16&output=embed"
                  className="campus-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="campus-details">
                <div className="campus-info-row">
                  <svg className="campus-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="campus-address">
                    <strong>78, Behind Muneshwara Temple</strong>, 10th Cross, Road 58, Near Police Station, Bagalagunte, Bengaluru, Karnataka 560073
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/dir/13.05854,77.503488/Bhadri's+academy,+police+station,+78,+Behind+Muneshwara+temple,10th+cross,+road+58,+Bagalagunte,+Bengaluru,+Karnataka+560073/@13.0586465,77.5032027,90m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bae23450330f41d:0xf347a78e23121dd1!2m2!1d77.5033869!2d13.058481!3e0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary campus-dir-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Campus 2: Sidedahalli */}
            <div className="campus-card glass-hover">
              <div className="campus-card-header">
                <h4 className="campus-name">Sidedahalli Campus</h4>
              </div>

              <div className="campus-map-frame">
                <iframe
                  title="Bhadri's Academy Sidedahalli Campus Map"
                  src="https://maps.google.com/maps?q=13.062447,77.497673&hl=en&z=16&output=embed"
                  className="campus-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="campus-details">
                <div className="campus-info-row">
                  <svg className="campus-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="campus-address">
                    <strong>Near Sidedahalli Main Road</strong>, (13°03&apos;44.8&quot;N 77°29&apos;51.6&quot;E), Sidedahalli, Bengaluru, Karnataka 560073
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/place/13%C2%B003'44.8%22N+77%C2%B029'51.6%22E/@13.0614407,77.48499,4435m/data=!3m1!1e3!4m4!3m3!8m2!3d13.062447!4d77.497673!18m1!1e1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary campus-dir-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Unified Layout: Single Card with Top Map + Stacked Branch Boxes (Screens <= 860px) */}
          <div className="campuses-mobile-unified">
            <div className="campus-mobile-unified-card">
              {/* Single Top Map */}
              <div className="campus-mobile-map-frame">
                <iframe
                  title={campuses[activeCampusIndex].titleMap}
                  src={campuses[activeCampusIndex].mapSrc}
                  className="campus-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="campus-mobile-map-overlay-badge">
                  <span className="campus-live-dot" />
                  Showing: {campuses[activeCampusIndex].name}
                </div>
              </div>

              {/* Stacked Branch Boxes Under Map */}
              <div className="campus-mobile-branches-stack">
                {campuses.map((campus, idx) => {
                  const isSelected = activeCampusIndex === idx;
                  return (
                    <div
                      key={campus.id}
                      className={`campus-mobile-branch-box ${isSelected ? "selected-branch" : ""}`}
                      onClick={() => setActiveCampusIndex(idx)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="campus-mobile-branch-head">
                        <span className={`branch-bullet-indicator ${isSelected ? "active" : ""}`} />
                        <div className="campus-mobile-branch-name-col">
                          <span className="branch-number-label">{campus.number}</span>
                          <h4 className="branch-display-name">{campus.name}</h4>
                        </div>
                      </div>

                      <div className="campus-mobile-branch-body">
                        <p className="campus-mobile-branch-addr">
                          <strong>{campus.landmark}</strong>, {campus.address}
                        </p>
                        <a
                          href={campus.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary campus-mobile-dir-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="3 11 22 2 13 21 11 13 3 11" />
                          </svg>
                          Get Directions on Google Maps
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
