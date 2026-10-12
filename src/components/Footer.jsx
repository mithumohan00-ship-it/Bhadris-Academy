import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Footer Marquee Ribbon: "Right method + Right results" */}
      <div className="footer-marquee-ribbon" aria-label="Academy philosophy ticker">
        <marquee
          className="footer-marquee top-marquee"
          behavior="scroll"
          direction="left"
          scrollamount="6"
          onMouseEnter={(e) => e.currentTarget.stop()}
          onMouseLeave={(e) => e.currentTarget.start()}
        >
          <span className="marquee-content-row">
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-text">Right method + Right results</span>
            <span className="marquee-sep">✦</span>
          </span>
        </marquee>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo-wrap" aria-label="Bhadri's Academy Home">
              <div className="footer-logo-badge">
                <img src="/img/logo.png" alt="Bhadri's Academy Logo" />
              </div>
              <div className="footer-brand-title">
                BHADRI&apos;S <span>ACADEMY</span>
              </div>
            </a>
            <p>
              Building strong conceptual foundations, academic discipline, and consistent confidence
              across Bengaluru.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/bhadris_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:bhadrisacademy21@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Programmes */}
          <div className="footer-column">
            <h4>Programmes</h4>
            <ul className="footer-links">
              <li>
                <a href="#experience">Early Years (Pre-Nursery – 1)</a>
              </li>
              <li>
                <a href="#experience">Primary School (Class 1 – 5)</a>
              </li>
              <li>
                <a href="#experience">Middle School (Class 6 – 8)</a>
              </li>
              <li>
                <a href="#experience">Board Preparation (Class 9 – 10)</a>
              </li>
              <li>
                <a href="#experience">The 6:1 Intensive Batch</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#experience">Methodology</a>
              </li>
              <li>
                <a href="#about">About Academy</a>
              </li>
              <li>
                <a href="#why-us">Why Choose Us</a>
              </li>
              <li>
                <a href="#bengaluru">Bengaluru Footprint</a>
              </li>
              <li>
                <a href="#reviews">Student Stories</a>
              </li>
              <li>
                <a href="#admissions">Book a Demo</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>Bhadri's Academy, Bengaluru, India</li>
              <li>
                <a
                  href="https://wa.me/919632645625"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>✆</span> +91 96326 45625
                </a>
              </li>
              <li>
                <a
                  href="mailto:bhadrisacademy21@gmail.com"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>✉</span> bhadrisacademy21@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Bhadri's Academy. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
