const schools = [
  { name: "Harvard", logo: "harvard" },
  { name: "Yale", logo: "yale" },
  { name: "Princeton", logo: "princeton" },
  { name: "Columbia", logo: "columbia" },
  { name: "Penn", logo: "penn" },
  { name: "Brown", logo: "brown" },
  { name: "Cornell", logo: "cornell" },
  { name: "Dartmouth", logo: "dartmouth" },
  { name: "MIT", logo: "mit" },
  { name: "Stanford", logo: "stanford" },
  { name: "Caltech", logo: "caltech" },
  { name: "University of Chicago", logo: "uchicago" },
  { name: "Duke", logo: "duke" },
  { name: "Johns Hopkins", logo: "johns-hopkins" },
  { name: "Northwestern", logo: "northwestern" },
  { name: "Rice", logo: "rice" },
  { name: "Vanderbilt", logo: "vanderbilt" },
  { name: "Carnegie Mellon", logo: "carnegie-mellon" },
  { name: "UC Berkeley", logo: "uc-berkeley" },
  { name: "UCLA", logo: "ucla" },
];

const firms = [
  { name: "McKinsey & Company", logo: "mckinsey.svg" },
  { name: "Goldman Sachs", logo: "goldman-sachs.svg" },
  { name: "J.P. Morgan", logo: "jp-morgan.svg" },
  { name: "Boston Consulting Group", logo: "bcg.svg" },
  { name: "Blackstone", logo: "blackstone.svg" },
  { name: "Bain & Company", logo: "bain.svg" },
  { name: "Morgan Stanley", logo: "morgan-stanley.svg" },
  { name: "BlackRock", logo: "blackrock.svg" },
];

const examplePaths = [
  { name: "Evelyn Chen", school: "Harvard", firm: "Goldman Sachs", schoolLogo: "harvard", firmLogo: "goldman-sachs.png" },
  { name: "Marcus Bennett", school: "Dartmouth", firm: "J.P. Morgan", schoolLogo: "dartmouth", firmLogo: "jp-morgan.png" },
  { name: "Aisha Rahman", school: "MIT", firm: "BCG", schoolLogo: "mit", firmLogo: "bcg.png" },
  { name: "Lucas Wang", school: "Penn", firm: "Blackstone", schoolLogo: "penn", firmLogo: "blackstone.png" },
  { name: "Sofia Alvarez", school: "Brown", firm: "McKinsey", schoolLogo: "brown", firmLogo: "wordmarks/mckinsey.svg" },
  { name: "James Carter", school: "Stanford", firm: "Bain & Company", schoolLogo: "stanford", firmLogo: "bain.png" },
];

export function NetworkShowcase() {
  return (
    <section className="network-section section" aria-labelledby="network-title">
      <div className="container">
        <div className="network-heading">
          <div>
            <span className="eyebrow">A wider circle</span>
            <h2 id="network-title">
              The network behind <em>the next move.</em>
            </h2>
          </div>
          <p className="lead">
            Our mentors bring perspectives shaped by leading universities and
            the firms defining finance and consulting. We help you find a way
            into those conversations.
          </p>
        </div>

        <div className="network-group">
          <div className="network-group-label">
            <span>01 / Universities</span>
            <p>All eight Ivy League schools and twelve other leading institutions</p>
          </div>
          <ul className="school-grid" aria-label="Schools in the network landscape">
            {schools.map((school) => (
              <li key={school.name}>
                <span className="network-logo school-logo" aria-hidden="true">
                  <img src={`/logos/schools/${school.logo}.png`} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="school-name">{school.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="network-group firm-group">
          <div className="network-group-label">
            <span>02 / Firms</span>
            <p>Perspectives from the work you want to do</p>
          </div>
          <ul className="firm-grid" aria-label="Firms in the network landscape">
            {firms.map((firm) => (
              <li key={firm.name}>
                <img
                  className="firm-wordmark"
                  src={`/logos/firms/wordmarks/${firm.logo}`}
                  alt={firm.name}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="network-note">
          School and firm names identify institutions. Their inclusion does not imply endorsement.
        </p>
      </div>
    </section>
  );
}

export function ExamplePaths() {
  return (
    <section className="paths-section section" aria-labelledby="paths-title">
      <div className="container">
        <div className="section-heading paths-heading">
          <div>
            <span className="eyebrow">Illustrative profiles</span>
            <h2 id="paths-title">A few ways forward.</h2>
          </div>
          <p className="lead">
            Different backgrounds. Different destinations. The right guidance
            makes each route more navigable.
          </p>
        </div>
        <div className="paths-grid">
          {examplePaths.map((path, index) => (
            <article className="path-card" key={path.name}>
              <div className="path-card-top">
                <span>Example {String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{path.name}</h3>
              <div className="path-route">
                <div>
                  <img src={`/logos/schools/${path.schoolLogo}.png`} alt="" />
                  <span>{path.school}</span>
                </div>
                <span className="path-arrow" aria-hidden="true">→</span>
                <div>
                  <img
                    className={path.firmLogo.startsWith("wordmarks/") ? "path-wordmark" : undefined}
                    src={`/logos/firms/${path.firmLogo}`}
                    alt={path.firmLogo.startsWith("wordmarks/") ? path.firm : ""}
                  />
                  {!path.firmLogo.startsWith("wordmarks/") && <span>{path.firm}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
