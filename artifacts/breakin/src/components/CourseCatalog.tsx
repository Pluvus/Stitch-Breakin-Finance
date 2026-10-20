import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { courseCategories, courses } from "@/data/courses";
import type { CourseCategory } from "@/data/courses";

type Filter = "All courses" | CourseCategory;

export default function CourseCatalog() {
  const [filter, setFilter] = useState<Filter>("All courses");
  const [selectedSlug, setSelectedSlug] = useState(courses[0].slug);
  const detailRef = useRef<HTMLElement>(null);
  const visibleCourses = filter === "All courses" ? courses : courses.filter((course) => course.category === filter);
  const selectedCourse = visibleCourses.find((course) => course.slug === selectedSlug) ?? visibleCourses[0];

  return (
    <section className="section course-section" id="courses" aria-labelledby="course-title">
      <div className="container">
        <div className="section-heading course-heading">
          <div>
            <span className="eyebrow">Course library / 12 focused studies</span>
            <h2 id="course-title">Choose what to master next.</h2>
          </div>
          <p className="lead">Explore a specific course, then name it in your application. Your monthly program includes access to the course library while enrolled.</p>
        </div>
        <div className="course-filters" role="group" aria-label="Filter courses by subject">
          {courseCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="course-filter"
              aria-pressed={filter === category}
              onClick={() => {
                setFilter(category);
                const first = category === "All courses" ? courses[0] : courses.find((course) => course.category === category);
                if (first) setSelectedSlug(first.slug);
              }}
            >
              {category}
              <span>{category === "All courses" ? courses.length : courses.filter((course) => course.category === category).length}</span>
            </button>
          ))}
        </div>
        <div className="course-browser">
          <div className="course-list" aria-label="Courses">
            {visibleCourses.map((course, index) => (
              <button
                className="course-row"
                type="button"
                key={course.slug}
                aria-pressed={selectedCourse.slug === course.slug}
                aria-controls="course-detail"
                onClick={() => {
                  setSelectedSlug(course.slug);
                  if (window.matchMedia("(max-width: 760px)").matches) {
                    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    window.requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" }));
                  }
                }}
              >
                <span className="course-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="course-row-main"><strong>{course.title}</strong><small>{course.category} <span aria-hidden="true">·</span> {course.duration}</small></span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
          <article className="course-detail" id="course-detail" aria-live="polite" ref={detailRef}>
            <div className="course-detail-top"><span className="eyebrow">Selected course</span><span>{selectedCourse.duration} / {selectedCourse.level}</span></div>
            <div>
              <span className="course-detail-category">{selectedCourse.category}</span>
              <h3>{selectedCourse.title}</h3>
              <p>{selectedCourse.summary}</p>
            </div>
            <div className="course-detail-bottom">
              <div className="course-detail-block"><span>What you’ll study</span><ol>{selectedCourse.modules.map((module) => <li key={module}>{module}</li>)}</ol></div>
              <div className="course-detail-block"><span>What you’ll leave with</span><p>{selectedCourse.outcome}</p></div>
              <Link className="btn btn-light" href={`/join?course=${selectedCourse.slug}`}>Select this course <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
        <p className="course-footnote">Choose a course to focus your application. Program level determines the amount of coaching and feedback around it.</p>
      </div>
    </section>
  );
}
