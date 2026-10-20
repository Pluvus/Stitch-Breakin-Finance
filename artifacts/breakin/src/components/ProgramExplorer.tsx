import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const workshops = [
  {
    title: "Strategic networking",
    body: "Develop an outreach process and build relationships with analysts, managing directors, and partners.",
    focus: "Turn a cold introduction into a thoughtful conversation.",
    detail: "Outreach strategy · Relationship building · Follow-up",
  },
  {
    title: "Resume optimization",
    body: "Make your experience easier to understand and more relevant to competitive screening.",
    focus: "Show evidence of impact in a format recruiters can scan.",
    detail: "Story selection · Structure · Review",
  },
  {
    title: "Behavioral mastery",
    body: "Structure credible answers to motivation, fit, and experience questions.",
    focus: "Tell a clear story about your decisions and potential.",
    detail: "Personal narrative · Fit questions · Practice",
  },
  {
    title: "Technical fundamentals",
    body: "Practice the finance and case skills used in recruiting assessments.",
    focus: "Build the confidence to reason aloud under pressure.",
    detail: "Finance concepts · Cases · Mock interviews",
  },
];

export default function ProgramExplorer() {
  return (
    <Tabs defaultValue="0" orientation="vertical" className="program-explorer">
      <TabsList className="program-tabs" aria-label="Core workshop topics">
        {workshops.map((item, index) => (
          <TabsTrigger
            className="program-tab"
            key={item.title}
            value={String(index)}
          >
            <span>0{index + 1}</span>
            <strong>{item.title}</strong>
            <ArrowUpRight size={19} aria-hidden="true" />
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="program-panels">
        {workshops.map((item, index) => (
          <TabsContent
            className="program-panel"
            key={item.title}
            value={String(index)}
          >
            <span className="eyebrow">Workshop 0{index + 1} / 04</span>
            <div className="program-panel-number" aria-hidden="true">
              0{index + 1}
            </div>
            <h3>{item.focus}</h3>
            <p>{item.body}</p>
            <div className="program-panel-bottom">
              <span>{item.detail}</span>
              <Link href="/join">
                Apply for coaching <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
