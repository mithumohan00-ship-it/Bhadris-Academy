import React, { useState } from "react";

export default function AdmissionsForm() {
  const [formData, setFormData] = useState({
    name: "",
    parent: "",
    phone: "",
    grade: "",
    board: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const gradeLabels = {
    "pre-nursery": "Pre-Nursery / Nursery",
    primary: "Primary (Class 1 - 5)",
    middle: "Middle School (Class 6 - 8)",
    highschool: "High School (Class 9 - 10)",
  };

  const boardLabels = {
    cbse: "CBSE",
    icse: "ICSE",
    state: "Karnataka State Board",
    ib: "IB (International Baccalaureate)",
    igcse: "IGCSE (Cambridge)",
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentName = formData.name.trim();
    const parentName = formData.parent.trim();
    const phone = formData.phone.trim();
    const grade = gradeLabels[formData.grade] || formData.grade || "Not specified";
    const board = boardLabels[formData.board] || formData.board || "Not specified";
    const notes = formData.notes.trim();

    // Construct structured WhatsApp message
    let text = `*New Free Demo Class Request — Bhadri's Academy*\n\n`;
    text += `👤 *Student Name:* ${studentName}\n`;
    text += `👨‍👩‍👧 *Parent Name:* ${parentName}\n`;
    text += `📞 *Contact Phone:* ${phone}\n`;
    text += `📚 *Grade Level:* ${grade}\n`;
    text += `🏫 *Academic Board:* ${board}\n`;
    if (notes) {
      text += `📝 *Current Goals & Doubts:* ${notes}\n`;
    }
    text += `\nHello Bhadri's Academy! I would like to book a free demo session. Please let us know the available batch timings.`;

    const whatsappNumber = "919632645625";
    const targetUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setWhatsappLink(targetUrl);
    setIsSubmitted(true);

    // Redirect to WhatsApp with pre-filled details
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="section" id="admissions">
      <div className="container">
        <div className="admissions-wrapper">
          <div className="admissions-grid">
            {/* Left: Registration Pitch & Contacts */}
            <div className="reveal">
              <span className="eyebrow">Experience The Difference</span>
              <h2 className="section-title" style={{ fontSize: "2.5rem" }}>
                Book a Free Demo Class
              </h2>
              <p className="section-subtitle">
                Experience our conceptual teaching methodology firsthand — no obligations. Bring
                your child for an interactive diagnostic session and discover the difference
                personalized mentoring makes.
              </p>

              <div className="contact-info-list">
                <a
                  href="https://wa.me/919632645625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="contact-icon-circle">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+91 96326 45625 (WhatsApp & Call)</span>
                </a>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <svg
                      width="20"
                      height="20"
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
                  </div>
                  <span>hello@bhadrisacademy.in</span>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    </svg>
                  </div>
                  <span>Bengaluru Campuses: Bagalagunte & Sidedahalli</span>
                </div>
              </div>
            </div>

            {/* Right: Registration Form Card */}
            <div className="form-card reveal">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Student Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        required
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parent" className="form-label">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        id="parent"
                        className="form-control"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.parent}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        required
                        placeholder="+91 96326 *****"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="grade" className="form-label">
                        Grade Level
                      </label>
                      <select
                        id="grade"
                        className="form-control"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Grade
                        </option>
                        <option value="pre-nursery">Pre-Nursery / Nursery</option>
                        <option value="primary">Primary (Class 1 - 5)</option>
                        <option value="middle">Middle School (Class 6 - 8)</option>
                        <option value="highschool">High School (Class 9 - 10)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="board" className="form-label">
                      Academic Board
                    </label>
                    <select
                      id="board"
                      className="form-control"
                      required
                      value={formData.board}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Board
                      </option>
                      <option value="cbse">CBSE</option>
                      <option value="icse">ICSE</option>
                      <option value="state">Karnataka State Board</option>
                      <option value="ib">IB (International Baccalaureate)</option>
                      <option value="igcse">IGCSE (Cambridge)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes" className="form-label">
                      Current Goals & Doubts
                    </label>
                    <textarea
                      id="notes"
                      className="form-control"
                      rows={3}
                      placeholder="Tell us about your child's learning style or key subject goals..."
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      marginTop: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.502-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.244-.587-.492-.507-.678-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.08 2.912 1.23 3.113.15.201 2.125 3.245 5.148 4.552.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.175-1.431-.075-.126-.276-.201-.577-.351z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.434 5.176L2 22l4.98-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.067c-1.626 0-3.14-.492-4.409-1.336l-.316-.21-2.964.83.843-2.89-.229-.33A8.026 8.026 0 0 1 3.933 12c0-4.448 3.619-8.067 8.067-8.067 4.448 0 8.067 3.619 8.067 8.067 0 4.448-3.619 8.067-8.067 8.067z" />
                    </svg>
                    <span>GET STARTED</span>
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: "var(--white)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                    textAlign: "center",
                    boxShadow: "0 8px 24px rgba(20, 38, 75, 0.06)",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎉</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.85rem",
                      color: "var(--navy-deep)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Demo Request Prepared!
                  </h3>
                  <p
                    style={{
                      color: "var(--ink-soft)",
                      fontSize: "0.98rem",
                      lineHeight: "1.6",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Your details for <strong>{formData.name}</strong> have been formatted. We are
                    opening WhatsApp to send your request directly to{" "}
                    <strong>+91 96326 45625</strong>.
                  </p>

                  <div
                    style={{
                      backgroundColor: "rgba(20, 38, 75, 0.04)",
                      padding: "1rem 1.25rem",
                      borderRadius: "var(--radius-sm)",
                      textAlign: "left",
                      fontSize: "0.88rem",
                      lineHeight: "1.6",
                      color: "var(--ink)",
                      marginBottom: "1.75rem",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div>
                      <strong>Student:</strong> {formData.name}
                    </div>
                    <div>
                      <strong>Parent:</strong> {formData.parent}
                    </div>
                    <div>
                      <strong>Phone:</strong> {formData.phone}
                    </div>
                    <div>
                      <strong>Grade & Board:</strong>{" "}
                      {gradeLabels[formData.grade] || formData.grade} •{" "}
                      {boardLabels[formData.board] || formData.board}
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: "100%", marginBottom: "1rem" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.502-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.244-.587-.492-.507-.678-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.08 2.912 1.23 3.113.15.201 2.125 3.245 5.148 4.552.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.175-1.431-.075-.126-.276-.201-.577-.351z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.434 5.176L2 22l4.98-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.067c-1.626 0-3.14-.492-4.409-1.336l-.316-.21-2.964.83.843-2.89-.229-.33A8.026 8.026 0 0 1 3.933 12c0-4.448 3.619-8.067 8.067-8.067 4.448 0 8.067 3.619 8.067 8.067 0 4.448-3.619 8.067-8.067 8.067z" />
                    </svg>
                    <span>Open WhatsApp Now (+91 96326 45625)</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        parent: "",
                        phone: "",
                        grade: "",
                        board: "",
                        notes: "",
                      });
                    }}
                    className="btn btn-secondary"
                    style={{ width: "100%" }}
                  >
                    Register Another Student
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
