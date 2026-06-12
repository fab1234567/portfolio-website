import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education, Experience } from "@/components/portfolio/Timeline";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jerin James — Offensive Security Researcher & Penetration Tester" },
      {
        name: "description",
        content:
          "Portfolio of Jerin James, a self-taught cybersecurity enthusiast, offensive security researcher and penetration tester focused on ethical web application security.",
      },
      { property: "og:title", content: "Jerin James — Offensive Security Researcher" },
      {
        property: "og:description",
        content: "Penetration tester and offensive security researcher. Ethical, No-Harm vulnerability research.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
