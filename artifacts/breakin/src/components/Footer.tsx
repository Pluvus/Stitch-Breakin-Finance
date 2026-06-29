import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "#002045", color: "#ffffff", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div
        className="grid gap-6 mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          padding: "3rem 4rem",
          maxWidth: "80rem",
        }}
      >
        <div style={{ gridColumn: "span 1" }}>
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="BreakIn Logo"
              className="h-8 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              src="https://lh3.googleusercontent.com/aida/AP1WRLv1v_WpT0wA4H8VXt-GasdxIzmDr0eXxm1shIjgoB2pQOgfAL-hDkT75-0SJmKr2Km0yRrutf9DWuTj2RLYm2vixy_bS9_tudATF8E9upfLVX4fam5h4mPpASO7Gq2PXbQbk5fZGqcKtC14TirgbTYTNCy3L7jM6q1TsFSzOp2EPZfaSM2BonrEr2rybjLSI4jUQtP-hK9xym73T1ytPkQR0Z7D5pcBrKeTCFrANQkjX4oXZR4dzNClaqHh"
            />
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              BreakIn
            </span>
          </div>
          <p style={{ fontSize: "0.875rem", opacity: 0.7, lineHeight: 1.6, maxWidth: "200px" }}>
            The bridge between academic excellence and Wall Street prestige. Built for the next generation of financial leaders.
          </p>
        </div>

        <div>
          <h5 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem", color: "#a5eff0" }}>
            Programs
          </h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["IB Accelerator", "Consulting Core", "Private Equity Prep", "Resume Overhaul"].map((item) => (
              <li key={item}>
                <Link href="/programs" style={{ fontSize: "0.875rem", opacity: 0.8, color: "#e0e3e5", textDecoration: "none" }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem", color: "#a5eff0" }}>
            Company
          </h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Our Story", href: "/our-story" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact Us", href: "#" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} style={{ fontSize: "0.875rem", opacity: 0.8, color: "#e0e3e5", textDecoration: "none" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.5rem", color: "#a5eff0" }}>
            Legal
          </h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a href="#" style={{ fontSize: "0.875rem", opacity: 0.8, color: "#e0e3e5", textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "2rem 4rem",
          maxWidth: "80rem",
        }}
      >
        <p style={{ fontSize: "0.875rem", opacity: 0.5 }}>
          © 2024 BreakIn Career Consultancy. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["language", "mail"].map((icon) => (
            <a
              key={icon}
              href="#"
              style={{ opacity: 0.6, color: "#ffffff", transition: "opacity 0.2s" }}
            >
              <span className="material-symbols-outlined">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
