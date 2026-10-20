import type { ReactNode } from "react";
import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link, useLocation } from "wouter";

const pageTitles: Record<string, string> = {
  "/": "Career mentorship",
  "/programs": "Programs",
  "/testimonials": "Success stories",
  "/our-story": "Our story",
  "/join": "Apply for coaching",
  "/become-an-insider": "Become an Insider",
};

export function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    document.title = `${pageTitles[location] ?? "Page not found"} | BreakIn`;
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function CallToAction({
  title,
  body,
  href = "/join",
  label = "Apply for coaching",
}: {
  title: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="container section-end">
      <section className="cta-band">
        <div>
          <span className="eyebrow">Your next move</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="actions">
          <Link href={href} className="btn btn-light">
            {label}{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
