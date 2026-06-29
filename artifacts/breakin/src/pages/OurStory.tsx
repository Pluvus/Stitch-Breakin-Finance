import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function OurStory() {
  return (
    <div style={{ background: "#f7fafc", color: "#181c1e", fontFamily: "Inter, sans-serif" }}>
      <Nav />

      {/* Catalyst Section */}
      <section style={{ padding: "6rem 0", background: "#f1f4f6" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem" }}>
            <div style={{ gridColumn: "1 / -1", marginBottom: "4rem", textAlign: "center" }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002045", marginBottom: "1rem" }}>The Catalyst for Change</h2>
              <div style={{ height: "4px", width: "6rem", background: "#13696a", margin: "0 auto", borderRadius: "9999px" }} />
            </div>

            {/* Founder quote */}
            <div
              className="glass-card"
              style={{
                gridColumn: "1 / 9",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "#13696a", marginBottom: "1.5rem", display: "block" }}>format_quote</span>
              <p style={{ fontSize: "1.125rem", fontStyle: "italic", color: "#002045", lineHeight: 1.8, marginBottom: "2rem" }}>
                "I spent years in the bullpen at Citi NY, looking around and realizing how many brilliant candidates were filtered out simply because they didn't have the 'insider' playbook. I saw the gatekeeping firsthand. BreakIn was born out of the necessity to level the playing field."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "9999px", background: "#002045", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 700, fontSize: "0.875rem" }}>
                  NC
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "#002045" }}>Nathan Chen</p>
                  <p style={{ fontSize: "0.875rem", color: "#43474e" }}>Founder, BreakIn</p>
                </div>
              </div>
            </div>

            {/* Vision card */}
            <div
              style={{
                gridColumn: "9 / -1",
                background: "#002045",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                color: "#ffffff",
                boxShadow: "0 16px 40px rgba(0,32,69,0.2)",
              }}
            >
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#a5eff0" }}>The Vision</h3>
              <p style={{ fontSize: "1rem", opacity: 0.9, lineHeight: 1.75 }}>
                To create a world where intellectual horsepower and work ethic are the only prerequisites for entering the world's most competitive industries.
              </p>
            </div>

            {/* Problem card */}
            <div
              className="glass-card"
              style={{
                gridColumn: "1 / 5",
                padding: "2rem",
                borderRadius: "1.5rem",
                borderLeft: "4px solid #13696a",
              }}
            >
              <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#002045", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h4>
              <p style={{ fontSize: "1rem", color: "#43474e", lineHeight: 1.7 }}>
                A system that favors legacy over merit, making high-finance and strategy consulting feel like a closed club.
              </p>
            </div>

            {/* Solution card */}
            <div
              className="glass-card"
              style={{
                gridColumn: "5 / -1",
                padding: "2rem",
                borderRadius: "1.5rem",
                borderLeft: "4px solid #002045",
              }}
            >
              <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#002045", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Solution</h4>
              <p style={{ fontSize: "1rem", color: "#43474e", lineHeight: 1.7 }}>
                Real-world simulation, mentorship from current analysts at Goldman, J.P. Morgan, and McKinsey, and a proprietary technical curriculum that mirrors actual recruitment cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tearing Down Barriers */}
      <section style={{ padding: "8rem 0" }}>
        <div style={{ padding: "0 4rem", maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "3rem" }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#002045" }}>Tearing Down Barriers</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { icon: "travel_explore", title: "Transparency", desc: "We demystify the hiring processes of Bulge Bracket banks and MBB firms, providing the exact rubrics used by interviewers." },
                  { icon: "groups", title: "Accessibility", desc: "Bridging the network gap for non-target school students through our Insider referral network." },
                  { icon: "trending_up", title: "Excellence", desc: "Training candidates to not just get the job, but to be the highest-performing analysts on the floor from day one." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(162,237,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ color: "#13696a", fontSize: "22px" }}>{icon}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 600, color: "#002045", marginBottom: "0.5rem" }}>{title}</h3>
                      <p style={{ fontSize: "1rem", color: "#43474e", lineHeight: 1.7 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, minWidth: "300px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "3rem" }}>
                <div style={{ height: "16rem", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
                  <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkmitEMuCVohzIG6uy0-HdO7MxslmqWCaItqfKrVwvvFVA1Bq0In2kkellp5NM4w_AjnNH-SHpN5q06kjOJ1KssfkVqcA4ck4RbDfaOibzDH4n1NK_lkwmbMaPsmKJcD6L5cqjgFm4YVehLhg3X1Jaoi9NXGFcnY20PKE21tfKonQOCpPgAwB-Z_WxhyZW-fcWKTvEf9vb_4YiRcKzr-ySnjE3kS09ONbcrpAi-SULPN7WIkyJJ3fwyw"
                    alt="Corporate conference room"
                  />
                </div>
                <div style={{ height: "12rem", background: "#002045", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
                  <div>
                    <p style={{ fontFamily: '"Playfair Display", serif', fontSize: "2.5rem", fontWeight: 700, color: "#a5eff0" }}>500+</p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, opacity: 0.8, textTransform: "uppercase", color: "#ffffff" }}>Success Stories</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ height: "12rem", background: "#13696a", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
                  <div>
                    <p style={{ fontFamily: '"Playfair Display", serif', fontSize: "2.5rem", fontWeight: 700, color: "#ffffff" }}>94%</p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, opacity: 0.8, textTransform: "uppercase", color: "#ffffff" }}>Placement Rate</p>
                  </div>
                </div>
                <div style={{ height: "16rem", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
                  <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgy0ft7-GEA6pkZTe_DosY1A9c7W6rPCXjQjHRowo7T1Sxo7IZPsn6RqZZxSc9sdQuokCej_u_z8ecxrIGv76N4mr-ZeQbB_Sixgav3A_p2dXy_Z9AxcZll7VRYPbPRcuLrQu3c5p0QrZ2k_ym5sLaF5wVVjK5ZZZ1NAlL0YtnC7SqjKzwmMBVztDR8sjMuvt6OKFnX1fsEwmhbhVO_uMMv4gwMFPyxNb5T-bsMaHTsMyzvIbXmHUJRw"
                    alt="Student working on financial models"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 4rem 8rem" }}>
        <div
          style={{
            background: "#1a365d",
            borderRadius: "2rem",
            padding: "5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>
            Your Trajectory Starts Here
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#adc7f7", marginBottom: "2.5rem", maxWidth: "36rem", margin: "0 auto 2.5rem", position: "relative", zIndex: 1 }}>
            Don't let institutional barriers define your potential. Join the next generation of global financial leaders.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", position: "relative", zIndex: 1 }}>
            <Link
              href="/programs"
              style={{
                background: "#a5eff0",
                color: "#002045",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Explore Programs
            </Link>
            <button
              style={{
                border: "1px solid #a5eff0",
                color: "#a5eff0",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
