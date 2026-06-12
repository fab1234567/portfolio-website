import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Terminal } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Offensive Security Researcher",
  "Penetration Tester",
  "Cybersecurity Enthusiast",
  "Bug Bounty Hunter",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for security research
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            Jerin <span className="text-primary text-glow">James</span>
          </h1>
          <p className="mt-4 flex items-center gap-2 font-mono text-lg text-foreground sm:text-xl">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-primary">{typed}</span>
            <span className="animate-caret text-primary">_</span>
          </p>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Self-taught cybersecurity enthusiast specializing in penetration testing. I discover
            vulnerabilities in web applications and responsibly demonstrate their impact with a
            strict <span className="font-semibold text-foreground">"No Harm"</span> approach.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-primary)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-primary/10"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-2xl bg-[var(--gradient-primary)] opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-2xl border-primary/30">
            <img
              src={profileImg}
              alt="Jerin James, offensive security researcher"
              width={768}
              height={896}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-xs">
              <span className="text-primary">root@jerin:~#</span>
              <span className="text-muted-foreground">access: granted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}