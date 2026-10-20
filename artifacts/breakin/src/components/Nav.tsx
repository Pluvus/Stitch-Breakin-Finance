import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Programs", href: "/programs" },
  { label: "Success stories", href: "/testimonials" },
  { label: "Our story", href: "/our-story" },
];

export default function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="BreakIn home">
          <img className="brand-mark" src="/favicon.svg?v=2" alt="" width="32" height="32" />
          <span>Break<span className="brand-slash">/</span>In</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${location === href ? " active" : ""}`}
              aria-current={location === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/become-an-insider" className="nav-link insider-link">
            Become an Insider
          </Link>
          <Link href="/join" className="btn btn-primary">
            Apply for coaching{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={location === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <Link href="/become-an-insider">Become an Insider</Link>
          <Link href="/join" className="btn btn-primary">
            Apply for coaching <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
