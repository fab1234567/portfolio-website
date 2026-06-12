import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ShieldCheck, Bug, Target, Eye } from "lucide-react";

const stats = [
  { value: "5+", label: "Years of Learning" },
  { value: "1", label: "Certification" },
  { value: "1", label: "Internship" },
  { value: "2+", label: "Security Projects" },
];

const traits = [
  { icon: ShieldCheck, text: "Self-taught cybersecurity journey driven by curiosity" },
  { icon: Bug, text: "Passion for offensive security & exploit research" },
  { icon: Target, text: "Focused on web application security" },
  { icon: Eye, text: "Responsible vulnerability disclosure mindset" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="01 // WHOAMI" title="About Me" />

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-muted-foreground"
          >
            <p>
              I am a self-taught cybersecurity enthusiast specializing in penetration testing. As an
              Offensive Security Researcher, I focus on discovering vulnerabilities in web
              applications and responsibly demonstrating their impact.
            </p>
            <p>
              My goal is to help organizations strengthen their security posture through ethical
              security research and continuous learning. Every engagement follows a strict ethical
              framework with responsible disclosure at its core.
            </p>
            <div className="space-y-3 pt-2">
              {traits.map((t) => (
                <div key={t.text} className="flex items-center gap-3">
                  <t.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{t.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass flex flex-col items-center justify-center rounded-xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-4xl font-black text-primary text-glow">
                  {s.value}
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}