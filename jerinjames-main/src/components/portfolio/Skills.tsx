import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Swords, Network, Cpu } from "lucide-react";

const groups = [
  {
    icon: Swords,
    title: "Offensive Security",
    skills: [
      { name: "Penetration Testing", level: 88 },
      { name: "Web Application Security", level: 85 },
      { name: "Vulnerability Assessment", level: 82 },
      { name: "Bug Bounty Hunting", level: 75 },
    ],
  },
  {
    icon: Network,
    title: "Security Operations",
    skills: [
      { name: "SOC Analysis", level: 80 },
      { name: "Threat Hunting", level: 72 },
      { name: "SIEM Tools", level: 75 },
    ],
  },
  {
    icon: Cpu,
    title: "Systems & Intelligence",
    skills: [
      { name: "Linux Administration", level: 85 },
      { name: "OSINT", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="04 // ARSENAL" title="Skills & Expertise" />
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="glass group rounded-xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold uppercase tracking-wide">
                  {g.title}
                </h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between font-mono text-xs">
                      <span className="text-foreground">{s.name}</span>
                      <span className="text-primary">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-[var(--gradient-primary)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}