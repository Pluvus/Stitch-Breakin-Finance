import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const testimonials = [
  {
    name: "Sarah J.",
    badge: "MBB Breaker",
    badgeColor: "#13696a",
    quote: "The structured approach at BreakIn turned my 'maybe' profile into a 'must-hire' for McKinsey. The mentor network is truly unparalleled in the industry.",
    placement: "Placed at McKinsey & Co.",
    icon: "verified",
    iconColor: "#13696a",
    span: 1,
  },
  {
    name: "Michael T.",
    badge: "Senior Insider",
    badgeColor: "#002045",
    quote: "As a mentor, I see candidates transform from raw talent to polished professionals in weeks. The curriculum mirrors the actual intensity of bulge bracket training.",
    placement: "Ex-Goldman Sachs Director",
    icon: "account_balance",
    iconColor: "#002045",
    span: 1,
  },
  {
    name: "David L.",
    badge: "Banking Breaker",
    badgeColor: "#13696a",
    quote: "Coming from a non-target school, I didn't think I stood a chance. BreakIn gave me the technical skills and the mindset to compete with Ivy League peers.",
    placement: "Placed at J.P. Morgan",
    icon: "verified",
    iconColor: "#13696a",
    span: 1,
  },
  {
    name: "Marcus W.",
    badge: "Consulting Breaker",
    badgeColor: "#13696a",
    quote: "BreakIn doesn't just teach you how to get the job; it teaches you how to excel once you're there. The post-placement support is a game-changer.",
    placement: "Placed at BCG",
    icon: "verified",
    iconColor: "#13696a",
    span: 1,
  },
];

export default function Testimonials() {
  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "6rem 4rem 2rem", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.25rem 1rem",
            borderRadius: "9999px",
            background: "rgba(19,105,106,0.1)",
            color: "#13696a",
            marginBottom: "1.5rem",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>star</span>
          <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>94% Placement Success</span>
        </div>
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#002045",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            lineHeight: 1.15,
          }}
        >
          Trajectories <span style={{ color: "#13696a", fontStyle: "italic" }}>Guaranteed.</span>
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#43474e", opacity: 0.8, maxWidth: "42rem", margin: "0 auto" }}>
          Join the elite cohort of Breakers who have successfully transitioned into MBB consulting, bulge bracket banking, and high-growth venture capital.
        </p>
      </section>

      {/* Stats Bar */}
      <div style={{ maxWidth: "80rem", margin: "2rem auto 3rem", padding: "0 4rem" }}>
        <div
          style={{
            background: "#002045",
            padding: "2rem 5rem",
            borderRadius: "0.75rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            boxShadow: "0 16px 40px rgba(0,32,69,0.2)",
          }}
        >
          {[
            { value: "94%", label: "Placement Rate" },
            { value: "$165k+", label: "Avg. Starting Package" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: "3rem", fontWeight: 700, color: "#f8bc4b" }}>{value}</div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 4rem 6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map(({ name, badge, badgeColor, quote, placement, icon, iconColor }) => (
            <div
              key={name}
              className="glass-card"
              style={{ padding: "2rem", borderRadius: "0.75rem", transition: "all 0.3s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045" }}>{name}</h3>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      background: `${badgeColor}1a`,
                      color: badgeColor,
                    }}
                  >
                    {badge}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "1rem", color: "#43474e", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.5rem" }}>"{quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderTop: "1px solid #c4c6cf", paddingTop: "1rem" }}>
                <span className="material-symbols-outlined" style={{ color: iconColor, fontSize: "20px" }}>{icon}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>{placement}</span>
              </div>
            </div>
          ))}

          {/* Featured card - Elena */}
          <div
            className="glass-card"
            style={{ padding: "2rem", borderRadius: "0.75rem", gridColumn: "span 2", transition: "all 0.3s" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045" }}>Elena R.</h3>
                  <span style={{ display: "inline-block", padding: "0.125rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 600, background: "rgba(19,105,106,0.1)", color: "#13696a" }}>
                    Private Equity Breaker
                  </span>
                </div>
                <p style={{ fontSize: "1.125rem", color: "#43474e", fontStyle: "italic", lineHeight: 1.7 }}>
                  "The technical mock interviews were harder than the real thing. When I sat across from the MD, I felt like I'd done it a thousand times already."
                </p>
              </div>
              <div style={{ background: "#ebeef0", borderRadius: "0.5rem", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
                {[
                  { label: "Technical Fluency", pct: "95%" },
                  { label: "Case Strategy", pct: "98%" },
                  { label: "Behavioral Mastery", pct: "92%" },
                ].map(({ label, pct }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#43474e" }}>{label}</span>
                    <div style={{ width: "8rem", height: "0.5rem", background: "#c4c6cf", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#13696a", width: pct }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #c4c6cf" }}>
                  <span style={{ fontSize: "0.875rem", color: "#43474e", display: "block", marginBottom: "0.25rem" }}>Growth Index</span>
                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045" }}>+82% Competency Lift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 4rem 6rem" }}>
        <div
          style={{
            background: "#1a365d",
            borderRadius: "1rem",
            padding: "5rem",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            Ready to Write Your Success Story?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#adc7f7", marginBottom: "3rem", maxWidth: "36rem", margin: "0 auto 3rem" }}>
            Your future in finance or consulting starts with a single step. Join the network that guarantees your upward trajectory.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
            <Link
              href="/join"
              style={{
                background: "#13696a",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Apply for Coaching
            </Link>
            <button
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
