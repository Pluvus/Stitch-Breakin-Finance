import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif", overflowX: "hidden" }}>
      <Nav />

      {/* Hero Section */}
      <header style={{ position: "relative", minHeight: "85vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,32,69,0.9), rgba(0,32,69,0.2))",
              zIndex: 1,
            }}
          />
          <img
            alt="BreakIn Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://lh3.googleusercontent.com/aida/AP1WRLtR4MGhtqqvWyecOPM8eE6Fgvec-KDJjw02ooePqZ_rP6pv87WefHLV2ETpJIZheABr2MCditUInz2MV9X-C3V-5RLvxAVBQMR7sDQAfn_eM5DWZK17RlSCHU-UYg1t_G3feyXbZ6UPj55cyKB_6aS3ZkaspbTEyUTni_Gc6MjkWlYvV7TkrftmaDoI1p7oAYbYb88lZBxpmCExkEwBXl7ZwggU5j8g6dl-BvSEEkZB0qL5j2twRnMSe9CE"
          />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "0 4rem", maxWidth: "80rem", margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: "42rem", color: "#ffffff" }}>
            <h1
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Break Into High Finance. <br />
              <span style={{ color: "#D69E2E" }}>For Everyone.</span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, opacity: 0.9, marginBottom: "2.5rem", maxWidth: "36rem" }}>
              Democratizing access to Bulge Bracket Investment Banks and MBB Consulting firms through peer-led mentorship and institutional-grade preparation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link
                href="/join"
                style={{
                  background: "#D69E2E",
                  color: "#ffffff",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  transition: "all 0.2s",
                }}
              >
                Start Your Journey
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span>
              </Link>
              <Link
                href="/programs"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(4px)",
                  color: "#ffffff",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s",
                }}
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section style={{ padding: "5rem 0", background: "#ffffff" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "1rem",
                background: "#1a365d",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(0,32,69,0.2)",
                transition: "transform 0.2s",
              }}
            >
              <span style={{ fontSize: "4rem", fontFamily: '"Playfair Display", serif', fontWeight: 700, color: "#89d3d4", lineHeight: 1, marginBottom: "0.5rem" }}>20+</span>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600 }}>Industry Insiders</h3>
              <p style={{ fontSize: "1rem", opacity: 0.8, marginTop: "1rem", maxWidth: "24rem" }}>Active professionals from GS, JPM, and McKinsey dedicated to your success.</p>
            </div>
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "1rem",
                border: "2px solid #c4c6cf",
                background: "#f7fafc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,32,69,0.05)",
                transition: "transform 0.2s",
              }}
            >
              <span style={{ fontSize: "4rem", fontFamily: '"Playfair Display", serif', fontWeight: 700, color: "#002045", lineHeight: 1, marginBottom: "0.5rem" }}>50+</span>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045" }}>Successful Breakers</h3>
              <p style={{ fontSize: "1rem", color: "#43474e", marginTop: "1rem", maxWidth: "24rem" }}>Placed into premier investment banking and management consulting roles this year alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability First Section */}
      <section style={{ padding: "6rem 0", background: "#f1f4f6", position: "relative", overflow: "hidden" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "#13696a", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>The BreakIn Advantage</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002045", marginTop: "1rem" }}>Affordability First</h2>
            <div style={{ width: "5rem", height: "4px", background: "#D69E2E", margin: "1.5rem auto 0", borderRadius: "9999px" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "payments", title: "Peer-to-Peer Pricing", desc: "Eliminating institutional overhead to provide elite coaching at a fraction of traditional consultancy costs.", color: "#13696a" },
              { icon: "groups", title: "Mission-Driven Mentors", desc: "Our insiders are motivated by impact, not just profit, ensuring you receive genuine, personalized guidance.", color: "#002045" },
              { icon: "trending_up", title: "Zero-to-One Focus", desc: "Intensive technical and behavioral training designed to take you from a curious student to an offer holder.", color: "#D69E2E" },
            ].map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="glass-card"
                style={{ padding: "2rem", borderRadius: "0.75rem", boxShadow: "0 4px 20px rgba(26,54,93,0.05)", transition: "all 0.3s" }}
              >
                <div style={{ width: "3.5rem", height: "3.5rem", background: `${color}1a`, borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span className="material-symbols-outlined" style={{ color, fontSize: "28px" }}>{icon}</span>
                </div>
                <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045", marginBottom: "1rem" }}>{title}</h4>
                <p style={{ fontSize: "1rem", color: "#43474e", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firms Section */}
      <section style={{ padding: "4rem 0", background: "#ffffff", borderTop: "1px solid #c4c6cf", borderBottom: "1px solid #c4c6cf" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "0.875rem", fontWeight: 600, color: "#43474e", marginBottom: "2.5rem", letterSpacing: "0.1em", opacity: 0.6, textTransform: "uppercase" }}>
            Our candidates have secured offers at
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "3rem", opacity: 0.4, filter: "grayscale(1)", transition: "all 0.3s" }}>
            {["Goldman Sachs", "McKinsey", "J.P. Morgan", "BCG", "BlackRock"].map((firm) => (
              <span key={firm} style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 700, color: "#002045", letterSpacing: "-0.02em" }}>
                {firm.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "6rem 4rem" }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            background: "#002045",
            borderRadius: "1.5rem",
            padding: "5rem",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
            Ready to accelerate your career trajectory?
          </h2>
          <p style={{ fontSize: "1.125rem", opacity: 0.8, maxWidth: "36rem", margin: "0 auto 2.5rem", position: "relative", zIndex: 1 }}>
            Join the elite cohort of students breaking into finance this recruiting cycle.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", position: "relative", zIndex: 1 }}>
            <Link
              href="/join"
              style={{
                background: "#D69E2E",
                color: "#ffffff",
                padding: "1.25rem 2.5rem",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                transition: "transform 0.2s",
              }}
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/programs"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "1.25rem 2.5rem",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Explore Curriculum
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
