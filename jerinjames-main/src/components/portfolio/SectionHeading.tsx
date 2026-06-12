import { motion } from "framer-motion";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <span className="font-mono text-sm tracking-[0.3em] text-primary">{index}</span>
      <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[var(--gradient-primary)]" />
    </motion.div>
  );
}