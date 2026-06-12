import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { icon: Mail, label: "jerin2k4@gmail.com", href: "mailto:jerin2k4@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/jerinames", href: "https://www.linkedin.com/in/jerinames/" },
  { icon: Github, label: "github.com/fab1234567", href: "https://github.com/fab1234567" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message sent! I'll get back to you soon.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="06 // ESTABLISH CONNECTION"
          title="Get In Touch"
          subtitle="Have a security project or opportunity? Let's talk."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-xl p-4 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="break-all font-mono text-sm text-foreground">{c.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                placeholder="Name"
                className="rounded-md border border-input bg-input/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-md border border-input bg-input/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md border border-input bg-input/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full resize-none rounded-md border border-input bg-input/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--gradient-primary)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {sending ? "Transmitting..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}