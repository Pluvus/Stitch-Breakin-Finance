import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Programs() {
  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: "5rem 4rem 2rem", maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <span style={{ display: "inline-block", padding: "0.375rem 1rem", background: "rgba(19,105,106,0.1)", color: "#13696a", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600 }}>
            Premium Coaching Ecosystem
          </span>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#002045", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Master the <span style={{ color: "#13696a" }}>Art</span> of the Offer.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#43474e", lineHeight: 1.75, maxWidth: "36rem" }}>
            Accelerate your career trajectory into MBB and Bulge Bracket firms with guidance from industry veterans who've already opened the door.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "1rem" }}>
            <a
              href="#pricing"
              style={{
                background: "#D69E2E",
                color: "#ffffff",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(214,158,46,0.3)",
                display: "inline-block",
              }}
            >
              View Pricing
            </a>
            <a
              href="#workshops"
              style={{
                border: "2px solid #002045",
                color: "#002045",
                padding: "1rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s",
              }}
            >
              Explore Curriculum
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="glass-card"
            style={{
              borderRadius: "0.75rem",
              padding: "1rem",
              transform: "rotate(3deg)",
              position: "relative",
              zIndex: 1,
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <img
              style={{ borderRadius: "0.5rem", width: "100%", height: "400px", objectFit: "cover" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACPYNK7GKKNoTOIvEThK6LJ8jbcghtj9tpBN8XFxoEycndMp2X57Z_Qdnl6nTg4AKZY91R_iLCYjEUNw4HAKGS0_EhT77vZNG6m5ZvY38zAo4cuM0XVZITm_pbbYqRNKNdpAudcPfNfwhwn0AlyAPjmTpEb4vKwotMthJVLr4yJjy_yxyxaGOEnI0OCB4iXtOQJvTuy-2cKELhmE_0IkbBeOTD1KOHY8V9S0Y1NiThbeiPdw0fk1LI4A"
              alt="Professional in corporate office"
            />
          </div>
        </div>
      </section>

      {/* Core Workshops */}
      <section id="workshops" style={{ padding: "6rem 0", background: "#f1f4f6" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002045" }}>Core Workshops</h2>
            <p style={{ fontSize: "1rem", color: "#43474e", maxWidth: "36rem", margin: "1rem auto 0" }}>
              Intensive, outcome-oriented modules designed to refine your professional edge for high-stakes recruiting.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "hub", title: "Strategic Networking", desc: "Master the cold-reach protocol and build sustainable relationships with MDs and Partners." },
              { icon: "edit_note", title: "Resume Optimization", desc: "Tailor your profile for ATS and elite screening committees with precision-engineered wording." },
              { icon: "psychology", title: "Behavioral Mastery", desc: "Nail the 'Why us?' and 'Tell me about a time' questions using the STAR-BreakIn framework." },
              { icon: "monitoring", title: "Technical Fundamentals", desc: "From LBO modeling to Case Study structuring. Deep-dives into technical assessment rigor." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-card"
                style={{ padding: "2rem", borderRadius: "0.75rem", transition: "all 0.3s", cursor: "pointer" }}
              >
                <div style={{ width: "3rem", height: "3rem", background: "rgba(19,105,106,0.1)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span className="material-symbols-outlined" style={{ color: "#13696a", fontSize: "22px" }}>{icon}</span>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045", marginBottom: "1rem" }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#43474e", lineHeight: 1.6, marginBottom: "1.5rem" }}>{desc}</p>
                <span style={{ color: "#13696a", fontWeight: 600, fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Learn more <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High School Section */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ background: "#002045", borderRadius: "1.5rem", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem", color: "#ffffff" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#a5eff0", textTransform: "uppercase", letterSpacing: "0.05em" }}>Early Access Track</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700 }}>Introductory Courses for High Schoolers</h2>
              <p style={{ fontSize: "1rem", color: "#adc7f7", lineHeight: 1.75 }}>
                It's never too early to start building an elite profile. We guide ambitious high school students through the basics of finance, consulting, and prestige college admissions.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["College List Strategy", "Introduction to Markets", "Leadership Resume Building"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
                    <span className="material-symbols-outlined" style={{ color: "#a5eff0", fontSize: "20px" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <button
                  style={{
                    background: "#13696a",
                    color: "#ffffff",
                    padding: "0.75rem 2rem",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    fontSize: "1rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Start Your Journey
                </button>
              </div>
            </div>
            <div
              style={{
                minHeight: "320px",
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5SgECPv66LGw1VcO5-VUudoUJ53rfmpHmlxVWweoLZx5QdBChKfHSwXW-kqgIbdWjOAHN_jhVh4EW1vvYthYvDVgEFTIqsb5pibQ6MfL_rgiMYce7IyLTvs23GjeZJK4PA65mCzhu6dSdicqjarScqbnwW4ybEFiOmErjAg8t5lJRei_SM3ga4DBwKVaO82VYeEJqHija6H0wZ30NATRocgjo02yTugI3z21eyg0cOveoICLrvTC0bw')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(20%)",
                transition: "filter 0.7s",
              }}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "6rem 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002045", marginBottom: "1rem" }}>Investment in Your Future</h2>
            <p style={{ fontSize: "1rem", color: "#43474e" }}>Unrivaled access at a fraction of traditional costs.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "stretch", maxWidth: "900px", margin: "0 auto" }}>
            {/* Competitor */}
            <div style={{ padding: "3rem", borderRadius: "1.5rem", border: "1px solid #c4c6cf", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#74777f", marginBottom: "0.5rem" }}>Traditional Consultancies</h3>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: "3rem", fontWeight: 700, color: "#74777f", marginBottom: "2rem" }}>$3,000+</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 3rem", display: "flex", flexDirection: "column", gap: "1rem", opacity: 0.6 }}>
                  {["Hourly-only sessions", "Hidden additional fees", "Generic curriculum", "Limited mentor access"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>close</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#74777f", fontStyle: "italic" }}>The "Old Guard" model.</p>
            </div>
            {/* BreakIn */}
            <div
              style={{
                padding: "3rem",
                borderRadius: "1.5rem",
                background: "#002045",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 16px 48px rgba(0,32,69,0.3)",
                transform: "scale(1.04)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "2rem",
                  background: "#D69E2E",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.25rem 1rem",
                  borderRadius: "9999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Recommended
              </div>
              <div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>BreakIn Fellowship</h3>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: "3rem", fontWeight: 700, color: "#a5eff0", marginBottom: "2rem" }}>$499</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {["Lifetime Community Access", "10+ Hours of On-Demand Content", "Weekly Live Office Hours", "Personalized Resume Review", "Guaranteed Firm Networking"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "#a5eff0", fontSize: "18px" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                style={{
                  width: "100%",
                  background: "#13696a",
                  color: "#ffffff",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(19,105,106,0.3)",
                  transition: "all 0.2s",
                }}
              >
                Enroll in Fellowship
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "#a5eff0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 4rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002020", marginBottom: "1.5rem" }}>
            Your Trajectory Starts Here.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#004f50", marginBottom: "2.5rem", maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
            Join 200+ candidates who secured offers at McKinsey, Goldman Sachs, and Bain this cycle.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link
              href="/join"
              style={{
                background: "#002045",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,32,69,0.2)",
                transition: "all 0.2s",
              }}
            >
              Book Coaching Call
            </Link>
            <button
              style={{
                background: "#ffffff",
                color: "#002045",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                border: "1px solid rgba(0,32,69,0.1)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Download Free Prep Kit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
