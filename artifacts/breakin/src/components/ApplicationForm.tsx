import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "wouter";
import { PageLayout } from "./PageLayout";
import { courses, courseCategories } from "@/data/courses";
import ApplicationSelect from "./ApplicationSelect";

type Mode = "breaker" | "insider";
const industries = [
  "Investment banking (IB)",
  "Sales & trading (S&T)",
  "Management consulting",
  "Private equity",
];

export default function ApplicationForm({ mode }: { mode: Mode }) {
  const [ready, setReady] = useState(false);
  const insider = mode === "insider";
  const requestedProgram = new URLSearchParams(window.location.search).get("program");
  const selectedProgram = ["fellowship", "intensive", "partnership"].includes(
    requestedProgram ?? "",
  )
    ? requestedProgram ?? ""
    : "";
  const requestedCourse = new URLSearchParams(window.location.search).get("course");
  const selectedCourse = courses.some((course) => course.slug === requestedCourse) ? requestedCourse ?? "" : "";
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReady(true);
    window.requestAnimationFrame(() =>
      document
        .getElementById("form-status")
        ?.scrollIntoView({ behavior: "smooth", block: "center" }),
    );
  };
  return (
    <PageLayout>
      <div className="container section">
        <div className="application-intro">
          <span className="eyebrow">
            {insider ? "Mentor application" : "Coaching application"}
          </span>
          <h1>
            {insider
              ? "Share what you know. Open what’s next."
              : "Tell us where you want to go."}
          </h1>
          <p className="lead">
            {insider
              ? "Help the next generation navigate finance and consulting with the benefit of your first hand experience."
              : "Give us a little context about your background and interests so we can understand the support you’re looking for."}
          </p>
          <p className="fine" style={{ marginTop: 16 }}>
            This application is currently a preview. You can complete the form,
            but it cannot send your information yet.
          </p>
        </div>
        <div className="application-layout">
          <div>
            {ready && (
              <div
                id="form-status"
                className="success"
                role="status"
                aria-live="polite"
                style={{ marginBottom: 24 }}
              >
                <span className="eyebrow">Form complete</span>
                <h2>Your details are ready.</h2>
                <p>
                  This site does not have a submission service connected yet, so
                  your information has not been sent to BreakIn. Your answers
                  remain below and can be edited.
                </p>
                <div className="actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setReady(false)}
                  >
                    Continue editing
                  </button>
                </div>
              </div>
            )}
            <form
              className="application-card"
              onSubmit={submit}
              onChange={() => ready && setReady(false)}
            >
              <fieldset className="form-section">
                <legend>About you</legend>
                <div className="form-grid">
                  {insider ? (
                    <>
                      <div className="field">
                        <label htmlFor="first-name">
                          First name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="first-name"
                          name="firstName"
                          autoComplete="given-name"
                          placeholder="Jane"
                          required
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="last-name">
                          Last name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="last-name"
                          name="lastName"
                          autoComplete="family-name"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <div className="field">
                      <label htmlFor="full-name">
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="full-name"
                        name="fullName"
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  )}
                  <div className="field">
                    <label htmlFor="email">
                      Email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
              </fieldset>
              {insider ? (
                <fieldset className="form-section">
                  <legend>Professional background</legend>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="firm">Current firm or school</label>
                      <input
                        id="firm"
                        name="firm"
                        autoComplete="organization"
                        placeholder="Your organization"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="level">Experience level</label>
                      <ApplicationSelect
                        id="level"
                        name="level"
                        placeholder="Select a level"
                        options={["Analyst", "Associate", "VP / Manager", "MD / Partner", "MBA / Graduate Student"].map((label) => ({ value: label, label }))}
                      />
                    </div>
                    <div className="field wide">
                      <label htmlFor="linkedin">LinkedIn profile URL</label>
                      <input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://www.linkedin.com/in/your-name"
                      />
                    </div>
                    <div className="field wide">
                      <label htmlFor="motivation">
                        Why do you want to mentor?
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={5}
                        placeholder="Tell us what you hope to share with future Breakers."
                      />
                    </div>
                  </div>
                </fieldset>
              ) : (
                <>
                  <fieldset className="form-section">
                    <legend>Your education</legend>
                    <div className="form-grid">
                      <div className="field">
                        <label htmlFor="university">
                          School or university <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="university"
                          name="university"
                          placeholder="Your school"
                          required
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="year">
                          Graduation year <span aria-hidden="true">*</span>
                        </label>
                        <ApplicationSelect
                          id="year"
                          name="year"
                          placeholder="Select a year"
                          required
                          options={Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => ({ value: String(year), label: String(year) }))}
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-section">
                    <legend>Program preference</legend>
                    <div className="field">
                      <label htmlFor="program-interest">Which support interests you?</label>
                      <ApplicationSelect
                        id="program-interest"
                        name="programInterest"
                        defaultValue={selectedProgram}
                        placeholder="Help me choose a program"
                        options={[
                          { value: "fellowship", label: "Fellowship · $499/month", description: "Courses and group coaching" },
                          { value: "intensive", label: "Mentor Intensive · $1,499/month", description: "Private mentorship" },
                          { value: "partnership", label: "Offer Partnership · $499/month", description: "Possible one-time success fee also applies" },
                        ]}
                      />
                    </div>
                    <div className="field" style={{ marginTop: 18 }}>
                      <label htmlFor="course-interest">Which course would you like to focus on?</label>
                      <ApplicationSelect
                        id="course-interest"
                        name="courseInterest"
                        defaultValue={selectedCourse}
                        placeholder="Help me choose a course"
                        groups={courseCategories.filter((category) => category !== "All courses").map((category) => ({
                          label: category,
                          options: courses.filter((course) => course.category === category).map((course) => ({ value: course.slug, label: course.title, description: `${course.duration} · ${course.level}` })),
                        }))}
                      />
                    </div>
                  </fieldset>
                  <fieldset className="form-section">
                    <legend>Career interests</legend>
                    <p className="fine" style={{ marginBottom: 15 }}>
                      Select any paths you are considering.
                    </p>
                    <div className="choice-grid">
                      {industries.map((industry) => (
                        <label className="choice" key={industry}>
                          <input
                            type="checkbox"
                            name="industry"
                            value={industry}
                          />
                          <span>{industry}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </>
              )}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Check application{" "}
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
                <span className="fine">Fields marked * are required.</span>
              </div>
            </form>
          </div>
          <aside className="aside-note">
            <span className="eyebrow">
              {insider ? "Why mentor" : "What to expect"}
            </span>
            <h3>
              {insider
                ? "Your experience can change someone’s path."
                : "A thoughtful first step."}
            </h3>
            <p>
              {insider
                ? "BreakIn’s Insider network connects candidates to the professional insight that formal recruiting rarely explains."
                : "The application asks only for context needed to understand your goals. No payment is collected here."}
            </p>
            <ul>
              {(insider
                ? [
                    "Share your professional journey",
                    "Help candidates prepare for real interviews",
                    "Expand access to your industry",
                  ]
                : [
                    "Tell us about your background",
                    "Choose your areas of interest",
                    "Explore programs that fit your goals",
                  ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="actions">
              <Link
                href={insider ? "/our-story" : "/programs"}
                className="btn btn-quiet"
              >
                {insider ? "Read our story" : "Explore programs"}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
