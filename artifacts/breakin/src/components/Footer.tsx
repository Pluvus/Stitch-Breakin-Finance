import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand" aria-label="BreakIn home">
            <img className="brand-mark" src="/favicon.svg?v=2" alt="" width="32" height="32" />
            <span>Break<span className="brand-slash">/</span>In</span>
          </Link>
          <p className="footer-intro">
            Practical preparation and first hand guidance for careers in finance
            and consulting.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Explore</h2>
          <div className="footer-links">
            <Link href="/programs">Programs</Link>
            <Link href="/testimonials">Success stories</Link>
            <Link href="/our-story">Our story</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Get involved</h2>
          <div className="footer-links">
            <Link href="/join">Apply for coaching</Link>
            <Link href="/become-an-insider">Become an Insider</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BreakIn Career Consultancy</span>
        <span>Built for people with ambition, wherever they began.</span>
      </div>
    </footer>
  );
}
