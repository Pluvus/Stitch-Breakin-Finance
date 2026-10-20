import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageLayout, CallToAction } from "@/components/PageLayout";
import StoryCarousel from "@/components/StoryCarousel";
import { ExamplePaths, NetworkShowcase } from "@/components/NetworkShowcase";

const advantages = [
  {
    number: "01",
    title: "Insight from the inside",
    body: "Learn from professionals who know the recruiting process and the work that follows.",
  },
  {
    number: "02",
    title: "Practice that translates",
    body: "Build the technical, behavioral, and networking skills that move an application forward.",
  },
  {
    number: "03",
    title: "Access within reach",
    body: "A peer-led model designed to make high-quality coaching more accessible.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="home-editorial">
        <div className="container">
          <div className="home-editorial-top">
            <span className="eyebrow">Finance & consulting mentorship</span>
            <span className="hero-edition">
              Guidance <span>·</span> Practice <span>·</span> Opportunity
            </span>
          </div>
          <div className="home-editorial-copy">
            <h1>
              Ambition deserves <em>an open door.</em>
            </h1>
            <div>
              <p>
                Practical coaching, sharper preparation, and first-hand guidance
                for the careers you want to build.
              </p>
              <div className="actions">
                <Link href="/join" className="btn btn-light">
                  Apply for coaching{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/programs" className="text-link light-link">
                  Explore the programs{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <figure className="home-photo">
            <img
              src="/stock-collaboration.jpg"
              alt="Two women working on laptops in a bright office"
            />
            <figcaption>
              <span>Perspective changes everything.</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="proof-band">
        <div className="container proof-inner">
          <div className="proof-intro">
            <span className="eyebrow">A network that opens doors</span>
            <p>Experience that reaches beyond a single classroom.</p>
          </div>
          <div className="proof-stat">
            <strong>
              20<span>+</span>
            </strong>
            <span>Industry Insiders sharing their experience</span>
          </div>
          <div className="proof-stat">
            <strong>
              50<span>+</span>
            </strong>
            <span>Successful Breakers across the community</span>
          </div>
          <div className="proof-stat">
            <strong>04</strong>
            <span>Core workshops across the recruiting journey</span>
          </div>
        </div>
      </section>
      <NetworkShowcase />
      <section className="section container approach-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The BreakIn approach</span>
            <h2>
              Know the work.
              <br />
              <em>Know the way in.</em>
            </h2>
          </div>
          <p className="lead">
            The strongest preparation connects real career context with the
            skills employers actually assess.
          </p>
        </div>
        <div className="approach-grid">
          {advantages.map((item) => (
            <article className="approach-item" key={item.number}>
              <span className="approach-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ExamplePaths />
      <section className="journey-section">
        <div className="container journey-grid">
          <div className="journey-intro">
            <span className="eyebrow">A practical path</span>
            <h2>From first contact to the final conversation.</h2>
            <p className="lead">
              Our workshops turn a daunting recruiting process into concrete
              steps you can practice.
            </p>
            <Link href="/programs" className="btn btn-primary">
              See the curriculum <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div
            className="journey-track"
            aria-label="Recruiting preparation steps"
          >
            <div>
              <span>01 / Connect</span>
              <strong>Strategic networking</strong>
              <p>
                Reach out with purpose and build meaningful professional
                relationships.
              </p>
            </div>
            <div>
              <span>02 / Present</span>
              <strong>Application materials</strong>
              <p>
                Show your experience clearly in a competitive screening process.
              </p>
            </div>
            <div>
              <span>03 / Perform</span>
              <strong>Interview preparation</strong>
              <p>
                Practice technical and behavioral questions before they count.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section container home-stories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">In their words</span>
            <h2>Progress you can hear.</h2>
          </div>
          <Link href="/testimonials" className="text-link">
            All community stories <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <StoryCarousel compact />
      </section>
      <CallToAction
        title="Make your next application count."
        body="Tell us where you want to go. We’ll help you identify the preparation that matters most."
      />
    </PageLayout>
  );
}
