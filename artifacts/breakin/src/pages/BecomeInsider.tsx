import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function BecomeInsider() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid #c4c6cf",
    background: "#f1f4f6",
    fontSize: "1rem",
    color: "#181c1e",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box" as const,
    transition: "all 0.2s",
  };

  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ maxWidth: "80rem", margin: "0 auto", padding: "4rem 4rem 6rem", display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
        {/* Header */}
        <section style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#002045",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Give Back. Level the Playing Field.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#43474e", maxWidth: "42rem", lineHeight: 1.75 }}>
            Shape the next generation of financial leaders and elite consultants. Share your journey to help talented candidates break into the world's most prestigious firms.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div
                className="glass-card"
                style={{ borderRadius: "0.75rem", padding: "4rem", textAlign: "center", boxShadow: "0 4px 20px rgba(26,54,93,0.08)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "64px", color: "#13696a", marginBottom: "1rem", display: "block" }}>check_circle</span>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.75rem", fontWeight: 700, color: "#002045", marginBottom: "1rem" }}>Application Received!</h2>
                <p style={{ fontSize: "1rem", color: "#43474e" }}>Thank you for your interest in becoming an Insider. We'll be in touch within 5 business days.</p>
              </div>
            ) : (
              <div
                className="glass-card"
                style={{ borderRadius: "0.75rem", padding: "2rem", boxShadow: "0 4px 20px rgba(26,54,93,0.08)" }}
              >
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>First Name</label>
                      <input type="text" placeholder="Jane" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>Last Name</label>
                      <input type="text" placeholder="Doe" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" placeholder="jane.doe@firm.com" style={inputStyle} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>Current Firm / School</label>
                      <input type="text" placeholder="Goldman Sachs / Harvard Business School" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>Experience Level</label>
                      <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                        <option value="" disabled>Select your level</option>
                        <option value="analyst">Analyst</option>
                        <option value="associate">Associate</option>
                        <option value="vp">VP / Manager</option>
                        <option value="md">MD / Partner</option>
                        <option value="student">MBA / Graduate Student</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>LinkedIn Profile URL</label>
                    <div style={{ position: "relative" }}>
                      <span
                        className="material-symbols-outlined"
                        style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#74777f", fontSize: "20px" }}
                      >
                        link
                      </span>
                      <input type="url" placeholder="https://linkedin.com/in/username" style={{ ...inputStyle, paddingLeft: "3rem" }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "0.5rem" }}>Motivation</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us why you want to mentor the next generation of Breakers..."
                      style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                    />
                  </div>

                  <div style={{ paddingTop: "1rem" }}>
                    <button
                      type="submit"
                      style={{
                        padding: "1rem 3rem",
                        background: "#D69E2E",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "1rem",
                        border: "none",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(214,158,46,0.3)",
                        transition: "all 0.2s",
                      }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Testimonial */}
            <div className="glass-card" style={{ borderRadius: "0.75rem", padding: "2rem", borderLeft: "4px solid #13696a" }}>
              <div style={{ display: "flex", gap: "0.25rem", color: "#D69E2E", marginBottom: "1rem" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontSize: "18px" }}>star</span>
                ))}
              </div>
              <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#002045", fontWeight: 500, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                "Mentoring with BreakIn has been the most rewarding part of my career. Seeing a candidate from a non-target background land a bulge-bracket offer is a feeling you can't describe."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "9999px",
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDN_lYC7uK2gucOTFnSvW5prZkutXuo4DsFSY9aI1mEnwly5P26S_sta2eyrjPF_AVc-TfqoTEmH1L15o2OZq9Krme0Xk37BtnXgNnFjtod4YJ_BPRWEAKti_-orQqVZNC-stEXvkhUQ1XIYtsuo4034Gtpt49oxDc9LPTSxg7G3jTGcRPPodr5pOxnP32HjHDxLtK--ca5pE3uNDVqcmdat0zkgWdSenvwMHrs_r1GN6o8eUKngMY_g')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "#002045" }}>Marcus Sterling</p>
                  <p style={{ fontSize: "0.875rem", color: "#43474e" }}>VP, Investment Banking</p>
                </div>
              </div>
            </div>

            {/* Why Insiders Matter */}
            <div style={{ background: "#002045", padding: "2rem", borderRadius: "0.75rem", color: "#ffffff", boxShadow: "0 16px 40px rgba(0,32,69,0.2)" }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>Why Insiders Matter</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Democratize access to elite professional networks.",
                  "Provide realistic interview prep for candidates.",
                  "Build your own legacy as a mentor and leader.",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    <span className="material-symbols-outlined" style={{ color: "#a5eff0", fontSize: "20px", flexShrink: 0 }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", height: "16rem", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,32,69,0.2)", zIndex: 1 }} />
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeae0sKbjoZ47d8Dy4DlJO99X1NRKga0ETQQ5d-p2HYBOHpsJcLT8BkdugeeAeFu5l3qoAEw3SHGGLHq6wIrle6gDVw-QDL2uDHfz-TAoYkdCWqFv-UGLutpidYZ2ArMyt437oa7dFphcg6a67pSa9ShgAfVLOQ5S1lceVSuYeieI1FpPGkD6CCfv2ERm7GvhIEcjG1ga3TSqsx0eY0da8yIYcqYu_fpIKTt1_3qLBkIU1tYHyJPAsNA"
                alt="Corporate headquarters"
              />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem", zIndex: 2 }}>
                <span style={{ padding: "0.25rem 0.75rem", background: "rgba(255,255,255,0.9)", borderRadius: "9999px", fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#002045" }}>
                  Our Headquarters
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
