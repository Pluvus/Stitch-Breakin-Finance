import { PageLayout, CallToAction } from "@/components/PageLayout";

const principles = [
  {
    title: "Transparency",
    body: "Demystify hiring processes and make interview expectations easier to understand.",
  },
  {
    title: "Access",
    body: "Open professional networks to capable candidates regardless of school or background.",
  },
  {
    title: "Excellence",
    body: "Prepare people to contribute once they have earned the role, not only to win an offer.",
  },
];

export default function OurStory() {
  return (
    <PageLayout>
      <header className="container page-intro story-intro">
        <span className="eyebrow">Our story / 03</span>
        <div className="intro-grid">
          <h1>
            Talent is everywhere.
            <br />
            <em>Access should be, too.</em>
          </h1>
          <p className="lead">
            BreakIn was built to share the knowledge, practice, and professional
            context that too often stay behind closed doors.
          </p>
        </div>
      </header>
      <figure className="container story-photo">
        <img
          src="/stock-office.jpg"
          alt="Black and white view of an office lounge overlooking a city"
        />
        <figcaption>
          <span>Open the room. Share the playbook.</span>
        </figcaption>
      </figure>
      <section className="section founder-section">
        <div className="container founder-grid">
          <div>
            <span className="eyebrow">Why we began</span>
            <span className="founder-mark" aria-hidden="true">
              “
            </span>
          </div>
          <blockquote>
            <p>
              “I spent years in the bullpen at Citi NY, looking around and
              realizing how many brilliant candidates were filtered out simply
              because they didn't have the ‘insider’ playbook. I saw the
              gatekeeping firsthand. BreakIn was born out of the necessity to
              level the playing field.”
            </p>
            <footer>
              <strong>Nathan Chen</strong>
              <span>Founder, BreakIn</span>
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The idea</span>
            <h2>Open the playbook.</h2>
          </div>
          <p className="lead">
            A career should be shaped by ability and work ethic, not by access
            to the right informal network.
          </p>
        </div>
        <div className="story-grid">
          <div>
            <span className="approach-number">01</span>
            <h3>The problem</h3>
            <p>
              Competitive recruiting can reward inherited connections and
              familiarity with unwritten rules.
            </p>
          </div>
          <div>
            <span className="approach-number">02</span>
            <h3>The response</h3>
            <p>
              Mentorship, realistic interview practice, and a technical
              curriculum grounded in recruiting cycles.
            </p>
          </div>
          <div>
            <span className="approach-number">03</span>
            <h3>The vision</h3>
            <p>
              A world where intellectual horsepower and work ethic are the
              prerequisites for entering competitive industries.
            </p>
          </div>
        </div>
      </section>
      <section className="wash section principles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What guides us</span>
              <h2>Access with high standards.</h2>
            </div>
          </div>
          <div className="three-col">
            {principles.map((item, index) => (
              <div className="feature-row" key={item.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction
        title="Find your way forward."
        body="Learn how the programs work, or tell us about the career you want to build."
        href="/programs"
        label="Explore programs"
      />
    </PageLayout>
  );
}
