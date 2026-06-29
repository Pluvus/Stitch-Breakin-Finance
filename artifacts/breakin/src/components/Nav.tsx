import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(247,250,252,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 20px rgba(26,54,93,0.12)"
          : "0 4px 20px rgba(26,54,93,0.05)",
      }}
    >
      <div
        className="flex justify-between items-center mx-auto"
        style={{ padding: "1rem 4rem", maxWidth: "80rem" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              alt="BreakIn Logo"
              className="h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv1v_WpT0wA4H8VXt-GasdxIzmDr0eXxm1shIjgoB2pQOgfAL-hDkT75-0SJmKr2Km0yRrutf9DWuTj2RLYm2vixy_bS9_tudATF8E9upfLVX4fam5h4mPpASO7Gq2PXbQbk5fZGqcKtC14TirgbTYTNCy3L7jM6q1TsFSzOp2EPZfaSM2BonrEr2rybjLSI4jUQtP-hK9xym73T1ytPkQR0Z7D5pcBrKeTCFrANQkjX4oXZR4dzNClaqHh"
            />
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#002045",
              }}
            >
              BreakIn
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Programs", path: "/programs" },
            { label: "Our Story", path: "/our-story" },
            { label: "Testimonials", path: "/testimonials" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: isActive(path) ? "#002045" : "#43474e",
                borderBottom: isActive(path) ? "2px solid #13696a" : "2px solid transparent",
                paddingBottom: "2px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/become-an-insider"
            className="hidden lg:block"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#002045",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Become an Insider
          </Link>
          <Link
            href="/join"
            style={{
              background: "#D69E2E",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(214,158,46,0.3)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
          >
            Join as a Breaker
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "#002045" }}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #c4c6cf",
            padding: "1rem 1rem",
          }}
        >
          {[
            { label: "Programs", path: "/programs" },
            { label: "Our Story", path: "/our-story" },
            { label: "Testimonials", path: "/testimonials" },
            { label: "Become an Insider", path: "/become-an-insider" },
            { label: "Join as a Breaker", path: "/join" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: isActive(path) ? "#13696a" : "#002045",
                textDecoration: "none",
                borderBottom: "1px solid #ebeef0",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
