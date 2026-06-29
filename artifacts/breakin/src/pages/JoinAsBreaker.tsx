import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";

const industries = [
  { icon: "account_balance", label: "Investment Banking (IB)" },
  { icon: "query_stats", label: "Sales & Trading (S&T)" },
  { icon: "lightbulb", label: "Management Consulting" },
  { icon: "payments", label: "Private Equity" },
];

export default function JoinAsBreaker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ minHeight: "100vh", padding: "3rem 4rem 6rem", maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#13696a", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>
            Application Portal
          </span>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#002045",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Step into the competitive landscape with precision.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#43474e", lineHeight: 1.75 }}>
            Your journey to Wall Street or the Big Three starts here. Complete the form below to begin your professional trajectory with our elite mentors.
          </p>
        </header>

        {/* Form */}
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          {submitted ? (
            <div
              className="glass-card"
              style={{
                borderRadius: "0.75rem",
                padding: "4rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(26,54,93,0.05)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "64px", color: "#13696a", marginBottom: "1rem", display: "block" }}>check_circle</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.75rem", fontWeight: 700, color: "#002045", marginBottom: "1rem" }}>Application Submitted!</h2>
              <p style={{ fontSize: "1rem", color: "#43474e" }}>We'll review your application and reach out within 48 hours.</p>
            </div>
          ) : (
            <>
              <div
                className="glass-card"
                style={{ borderRadius: "0.75rem", padding: "3rem", boxShadow: "0 4px 20px rgba(26,54,93,0.05)" }}
              >
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    {[
                      { id: "full_name", label: "Full Name", type: "text", placeholder: "Alexander Hamilton" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "alexander@ivy.edu" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        <label htmlFor={id} style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>{label}</label>
                        <input
                          id={id}
                          type={type}
                          placeholder={placeholder}
                          required
                          style={{
                            background: "#f1f4f6",
                            border: "none",
                            borderRadius: "0.5rem",
                            padding: "1rem",
                            fontSize: "1rem",
                            color: "#181c1e",
                            outline: "none",
                            transition: "all 0.2s",
                            width: "100%",
                          }}
                          onFocus={(e) => { e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 2px #002045"; }}
                          onBlur={(e) => { e.target.style.background = "#f1f4f6"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <label htmlFor="university" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>School / University</label>
                      <input
                        id="university"
                        type="text"
                        placeholder="Target University"
                        required
                        style={{ background: "#f1f4f6", border: "none", borderRadius: "0.5rem", padding: "1rem", fontSize: "1rem", color: "#181c1e", outline: "none", transition: "all 0.2s" }}
                        onFocus={(e) => { e.target.style.background = "#ffffff"; e.target.style.boxShadow = "0 0 0 2px #002045"; }}
                        onBlur={(e) => { e.target.style.background = "#f1f4f6"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <label htmlFor="grad_year" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>Graduation Year</label>
                      <select
                        id="grad_year"
                        required
                        style={{ background: "#f1f4f6", border: "none", borderRadius: "0.5rem", padding: "1rem", fontSize: "1rem", color: "#181c1e", outline: "none", cursor: "pointer", appearance: "none", width: "100%" }}
                      >
                        <option value="" disabled>Select Year</option>
                        {[2024, 2025, 2026, 2027, 2028].map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>Target Industry</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                      {industries.map(({ icon, label }) => {
                        const active = selected.includes(label);
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => toggle(label)}
                            style={{
                              padding: "0.75rem 1.5rem",
                              borderRadius: "9999px",
                              border: active ? "2px solid #13696a" : "2px solid #c4c6cf",
                              color: active ? "#13696a" : "#43474e",
                              background: active ? "rgba(19,105,106,0.05)" : "transparent",
                              fontWeight: 600,
                              fontSize: "0.875rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{icon}</span>
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ paddingTop: "1.5rem" }}>
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        background: "#D69E2E",
                        color: "#ffffff",
                        padding: "1.25rem",
                        borderRadius: "0.5rem",
                        fontWeight: 600,
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(214,158,46,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        transition: "all 0.2s",
                      }}
                    >
                      Submit Application
                      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span>
                    </button>
                    <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#43474e", marginTop: "1rem" }}>
                      By submitting, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>

              <div
                className="glass-card"
                style={{ borderRadius: "0.75rem", padding: "1.5rem", marginTop: "2rem", borderLeft: "4px solid #13696a", display: "flex", alignItems: "flex-start", gap: "1rem" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#13696a", fontSize: "22px", flexShrink: 0 }}>info</span>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: "0.875rem", color: "#002045", marginBottom: "0.25rem" }}>Academic Integrity</h4>
                  <p style={{ fontSize: "0.875rem", color: "#43474e" }}>
                    BreakIn verifies all academic credentials. Please ensure your graduation year and university information are accurate to prevent application delays.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
