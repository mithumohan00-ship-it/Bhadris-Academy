import React from "react";

export default function About() {
  const facts = [
    { val: "Bengaluru", lbl: "Origin & Presence" },
    { val: "2 Branches", lbl: "Bagalagunte & Sidedahalli" },
    { val: "5+ Years", lbl: "Serving Families" },
    { val: "Class 1-10", lbl: "Pre-Nursery to 10th" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="eyebrow">Our Mission & Ethos</span>
            <h2 className="section-title">About Bhadri's Academy</h2>
            <p>
              Bhadri's Academy began in Bengaluru with one classroom and an unyielding
              commitment to conceptual learning. Our purpose is straightforward:
            </p>
            <p>
              <strong>Every child improves, every day.</strong> Regardless of a child's initial
              academic comfort level, each day must yield perceptible progress in clarity,
              self-assurance, discipline, and subject expression.
            </p>
            <p>
              <strong>We raise our standard every year.</strong> Year on year, we refine our
              worksheets, strengthen diagnostic feedback, and elevate how we mentor, ensuring our
              students excel across State Board, CBSE, ICSE, IB, and IGCSE syllabi.
            </p>
          </div>

          {/* Facts Bento Box */}
          <div className="about-facts-card reveal-stagger">
            {facts.map((fact) => (
              <div key={fact.lbl} className="about-fact-item glass-hover">
                <span className="about-fact-val">{fact.val}</span>
                <span className="about-fact-lbl">{fact.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
