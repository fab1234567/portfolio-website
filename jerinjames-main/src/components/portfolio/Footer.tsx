import { Mail, Linkedin, Github, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-bold tracking-wider">
          <Shield className="h-5 w-5 text-primary" />
          JERIN JAMES
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Built with a No Harm mindset.
        </p>
        <div className="flex gap-4">
          <a href="mailto:jerin2k4@gmail.com" className="text-muted-foreground hover:text-primary" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/jerinames/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/fab1234567" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}