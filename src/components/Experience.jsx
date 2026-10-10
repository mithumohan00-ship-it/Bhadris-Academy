import React from "react";
import { DoodleArrow, DoodleSpiral, DoodleGlobe, DoodleTarget } from "./Doodles";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="experience-header-grid reveal">
          <div>
            <span className="eyebrow">A Structured Methodology</span>
            <h2 className="section-title">An Easier Way to Master Concepts and Excel</h2>
            <DoodleArrow />
          </div>
        </div>

        <div className="pillars-grid reveal-stagger">
          {/* Card 1 */}
          <div className="pillar-card glass-hover">
            <h3>
              Student development that <span className="highlight-orange">builds clarity</span>
            </h3>
            <p>
              We nurture personal growth and academic discipline, helping each child articulate
              concepts in their own words rather than rote testing.
            </p>
            <div className="pillar-bottom-icon">
              <DoodleSpiral size={48} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="pillar-card glass-hover">
            <div className="pillar-top-icon">
              <DoodleGlobe size={48} />
            </div>
            <h3>
              A better way to <span className="highlight-orange">connect & learn</span>
            </h3>
            <p>
              Our small batches create a focused, positive atmosphere where active questioning is
              encouraged, doubts are resolved immediately, and students stay engaged.
            </p>
          </div>

          {/* Card 3 */}
          <div className="pillar-card glass-hover">
            <h3>
              Student learning stays <span className="highlight-orange">on track</span> to meet
              targets
            </h3>
            <p>
              Our qualified and caring faculty find where understanding breaks, adjusting
              worksheets, techniques and mock tests until foundations hold firm.
            </p>
            <div className="pillar-bottom-icon">
              <DoodleTarget size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
