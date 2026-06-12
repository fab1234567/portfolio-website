import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Github, Terminal, KeyRound, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    icon: Terminal,
    title: "Linux Privilege Escalation Automation Toolkit",
    short:
      "Automated Linux privilege escalation enumeration toolkit identifying misconfigurations and escalation vectors.",
    long: "Developed an automated Linux privilege escalation enumeration toolkit capable of identifying misconfigurations, privilege escalation vectors, and generating security hardening recommendations. Designed to accelerate authorized assessments and education.",
    tags: ["Linux Enumeration", "Security Auditing", "Privesc Detection", "Hardening"],
    repo: "https://github.com/fab1234567",
  },
  {
    icon: KeyRound,
    title: "Password Cracking & Credential Attack Suite",
    short:
      "Security testing toolkit for password auditing and credential attack simulations in authorized environments.",
    long: "Developed a security testing toolkit for password auditing and credential attack simulations in controlled and authorized environments. Supports authentication analysis and credential strength assessments for defensive hardening.",
    tags: ["Password Auditing", "Credential Testing", "Security Assessment", "Auth Analysis"],
    repo: "https://github.com/fab1234567",
  },
];

export function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="05 // PAYLOADS" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass group flex flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-[var(--gradient-hero)]">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <p.icon className="relative h-14 w-14 text-primary transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.short}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                  >
                    Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-primary/10"
                  >
                    <Github className="h-3.5 w-3.5" /> Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass max-w-lg border-primary/30">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display uppercase tracking-wide">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="pt-2 text-left text-muted-foreground">
                  {active.long}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={active.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-primary)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}