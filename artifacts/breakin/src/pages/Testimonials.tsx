import { useRef, useState } from "react";
import { PageLayout, CallToAction } from "@/components/PageLayout";
import StoryCarousel, { stories } from "@/components/StoryCarousel";

export default function Testimonials() {
  const [currentStory, setCurrentStory] = useState(0);
  const featureRef = useRef<HTMLElement>(null);
  const openStory = (index: number) => {
    setCurrentStory(index);
    featureRef.current?.scrollIntoView({ block: "start" });
  };

  return (
    <PageLayout>
      <header className="container page-intro stories-intro">
        <div className="intro-grid">
          <div>
            <span className="eyebrow">Success stories / 02</span>
            <h1>
              The work behind <em>the breakthrough.</em>
            </h1>
          </div>
          <p className="lead">
            Candidates and mentors share what practical preparation changed for
            them.
          </p>
        </div>
      </header>
      <section className="container stories-feature" ref={featureRef}>
        <div className="stories-feature-label">
          <span className="eyebrow">Featured voices</span>
          <span>01—04 / The community</span>
        </div>
        <StoryCarousel current={currentStory} onChange={setCurrentStory} />
      </section>
      <section className="section-sm story-metrics">
        <div className="container stat-strip">
          <div className="stat">
            <strong>94%</strong>
            <span>Placement rate</span>
          </div>
          <div className="stat">
            <strong>$165k+</strong>
            <span>Average starting package</span>
          </div>
          <div className="stat">
            <strong>500+</strong>
            <span>Success stories</span>
          </div>
        </div>
      </section>
      <section className="section container stories-archive">
        <div className="section-heading">
          <div>
            <span className="eyebrow">From the community</span>
            <h2>
              Choose a perspective.
              <br />
              <em>Read the story.</em>
            </h2>
          </div>
          <p className="lead">
            Hear from candidates and mentors on both sides of the table.
          </p>
        </div>
        <div className="story-index" aria-label="Community story index">
          {stories.map((item, index) => (
            <button
              type="button"
              className={`story-index-row${currentStory === index ? " active" : ""}`}
              key={item.name}
              onClick={() => openStory(index)}
              aria-label={`Read ${item.name}'s story, ${item.outcome}`}
            >
              <span className="story-index-number">0{index + 1}</span>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <span>{item.outcome}</span>
              <span className="story-index-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <div className="testimonial-grid">
          <blockquote className="testimonial featured">
            <div>
              <span className="eyebrow">05 / Private equity Breaker</span>
              <h2>Elena R.</h2>
              <p className="muted">Technical mock interviews</p>
            </div>
            <div>
              <p className="quote">
                “The technical mock interviews were harder than the real thing.
                When I sat across from the MD, I felt like I'd done it a
                thousand times already.”
              </p>
              <div className="skill-stats">
                <div>
                  <strong>95%</strong>
                  <span>Technical fluency</span>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Case strategy</span>
                </div>
                <div>
                  <strong>92%</strong>
                  <span>Behavioral mastery</span>
                </div>
                <div>
                  <strong>+82%</strong>
                  <span>Competency lift</span>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </section>
      <CallToAction
        title="Your story starts with a plan."
        body="Explore the coaching and workshops designed for the path you want to pursue."
        href="/programs"
        label="Explore programs"
      />
    </PageLayout>
  );
}
