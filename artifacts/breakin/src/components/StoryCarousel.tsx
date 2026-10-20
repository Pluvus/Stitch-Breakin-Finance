import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const stories = [
  {
    name: "Sarah J.",
    role: "MBB Breaker",
    outcome: "Placed at McKinsey & Co.",
    quote:
      "The structured approach at BreakIn turned my 'maybe' profile into a 'must-hire' for McKinsey. The mentor network is truly unparalleled in the industry.",
  },
  {
    name: "Michael T.",
    role: "Senior Insider",
    outcome: "Ex-Goldman Sachs Director",
    quote:
      "As a mentor, I see candidates transform from raw talent to polished professionals in weeks. The curriculum mirrors the actual intensity of bulge bracket training.",
  },
  {
    name: "David L.",
    role: "Banking Breaker",
    outcome: "Placed at J.P. Morgan",
    quote:
      "Coming from a non-target school, I didn't think I stood a chance. BreakIn gave me the technical skills and the mindset to compete with Ivy League peers.",
  },
  {
    name: "Marcus W.",
    role: "Consulting Breaker",
    outcome: "Placed at BCG",
    quote:
      "BreakIn doesn't just teach you how to get the job; it teaches you how to excel once you're there. The post-placement support is a game-changer.",
  },
];

export default function StoryCarousel({
  compact = false,
  current: controlledCurrent,
  onChange,
}: {
  compact?: boolean;
  current?: number;
  onChange?: (index: number) => void;
}) {
  const [internalCurrent, setInternalCurrent] = useState(0);
  const current = controlledCurrent ?? internalCurrent;
  const story = stories[current];
  const select = (index: number) => {
    if (controlledCurrent === undefined) setInternalCurrent(index);
    onChange?.(index);
  };
  const move = (step: number) =>
    select((current + step + stories.length) % stories.length);

  return (
    <div
      className={`story-carousel${compact ? " compact" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Community stories"
    >
      <div
        className="story-carousel-main"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="story-carousel-heading">
          <span className="eyebrow">{story.role}</span>
          <span className="story-counter">
            0{current + 1} / 0{stories.length}
          </span>
        </div>
        <blockquote key={story.name}>
          <p>“{story.quote}”</p>
          <footer>
            <strong>{story.name}</strong>
            <span>{story.outcome}</span>
          </footer>
        </blockquote>
      </div>
      <div className="story-carousel-controls">
        <div className="story-dots" aria-label="Choose a story">
          {stories.map((item, index) => (
            <button
              type="button"
              key={item.name}
              aria-label={`Show story ${index + 1}: ${item.name}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => select(index)}
            />
          ))}
        </div>
        <div className="story-arrows">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous story"
          >
            <ArrowLeft size={19} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next story">
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
