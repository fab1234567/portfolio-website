import { useEffect, useState } from "react";
import { Shield, ShieldAlert } from "lucide-react";

type Theme = "red" | "blue";

function getInitial(): Theme {
  if (typeof window === "undefined") return "red";
  return (localStorage.getItem("theme") as Theme) || "red";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "blue");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const next = theme === "red" ? "blue" : "red";

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} team theme`}
      title={`Switch to ${next} team theme`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 text-primary transition-colors hover:bg-primary/10"
    >
      {theme === "red" ? <ShieldAlert className="h-4 w-4" /> : <Shield className="h-4 w-4" />}
    </button>
  );
}
