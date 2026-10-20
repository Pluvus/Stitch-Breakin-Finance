import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
export default function NotFound() {
  return (
    <PageLayout>
      <section className="container not-found">
        <span className="eyebrow">Page not found</span>
        <h1>Let’s get you back on track.</h1>
        <p className="lead" style={{ marginTop: 20 }}>
          The page you were looking for isn’t here.
        </p>
        <div className="actions">
          <Link href="/" className="btn btn-primary">
            Return home <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/programs" className="btn btn-secondary">
            Explore programs
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
