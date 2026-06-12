import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Business Administration (BBA)",
    org: "",
    period: "COMPLETED 2026",
    desc: "Pursuing a BBA while self-studying offensive security and penetration testing.",
  },
  {
    icon: Award,
    title: "Certified I.T Infrastructure & Cyber SOC Analyst",
    org: "Professional Certification",
    period: "Completed 2022",
    desc: "Hands-on training in IT infrastructure security, SOC operations and incident analysis.",
  },
];

const experience = [
  {
    icon: Briefcase,
    title: "Cybersecurity Intern",
    org: "Unified Mentor Private Ltd",
    period: "Internship",
    bullets: [
      "Security research & vulnerability assessment",
      "Security testing of web applications",
      "Documentation and reporting of findings",
      "Learning offensive security methodologies",
    ],
  },
];

function TimelineList({
  items,
}: {
  items: {
    icon: typeof GraduationCap;
    title: string;
    org: string;
    period: string;
    desc?: string;
    bullets?: string[];
  }[];
}) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-14"
          >
            <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card shadow-[var(--shadow-glow)]">
              <item.icon className="h-5 w-5 text-primary" />
            </span>
            <div className="glass rounded-xl p-5 transition-transform hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              {item.desc && <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>}
              {item.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="02 // CREDENTIALS" title="Education & Certifications" />
        <TimelineList items={education} />
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="03 // CAREER" title="Experience" />
        <TimelineList items={experience} />
      </div>
    </section>
  );
}