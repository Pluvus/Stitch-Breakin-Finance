import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageLayout, CallToAction } from "@/components/PageLayout";
import ProgramExplorer from "@/components/ProgramExplorer";
import CourseCatalog from "@/components/CourseCatalog";
import ProgramPricing from "@/components/ProgramPricing";

export default function Programs() {
  return (
    <PageLayout>
      <header className="container page-intro programs-intro">
        <div className="intro-grid">
          <div>
            <span className="eyebrow">Programs / 01</span>
            <h1>
              Preparation that moves with <em>your ambition.</em>
            </h1>
          </div>
          <div>
            <p className="lead">
              Focused courses, professional mentorship, and practical support
              for the moments that matter in finance and consulting recruiting.
            </p>
            <div className="actions">
              <a href="#courses" className="btn btn-secondary">
                Explore courses
              </a>
              <Link href="/join" className="btn btn-primary">
                Apply for coaching <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container programs-image-wrap">
        <figure className="programs-image">
          <img
            src="/stock-students.jpg"
            alt="Students gathered around a laptop in a classroom"
          />
          <figcaption>
            <span>Preparation is better together.</span>
          </figcaption>
        </figure>
      </div>
      <section className="section curriculum-section" id="curriculum">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Core workshops / 01—04</span>
              <h2>Learn the whole process.</h2>
            </div>
            <p className="lead">
              A connected curriculum from first contact to final interview.
              Select a workshop to see its focus.
            </p>
          </div>
          <ProgramExplorer />
        </div>
      </section>
      <CourseCatalog />
      <section className="early-track">
        <div className="container early-track-grid">
          <div>
            <span className="eyebrow">Early access track</span>
            <h2>A head start for high school students.</h2>
          </div>
          <div>
            <p className="lead">
              An introduction to finance, consulting, and college planning for
              students who want to explore early.
            </p>
            <ul className="editorial-list">
              <li>
                <span className="list-number">01</span>College list strategy
              </li>
              <li>
                <span className="list-number">02</span>Introduction to markets
              </li>
              <li>
                <span className="list-number">03</span>Leadership resume
                building
              </li>
            </ul>
            <Link href="/join?course=college-to-career" className="text-link">
              Ask about this track <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <ProgramPricing />
      <CallToAction
        title="Choose your next move with confidence."
        body="Share your goals and interests so BreakIn can guide you toward a relevant starting point."
      />
    </PageLayout>
  );
}
