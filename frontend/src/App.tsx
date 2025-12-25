import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Chat from "./components/Chat";

import "./styles/portfolio.css";

/**
 * IMPORTANT:
 * Use simple, safe keys for sections.
 * Display labels are handled in Navbar.
 */
type Section = "about" | "projects" | "experience" | "skills";

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string;
  live_url?: string | null;
  image?: string | null;
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  const isHeroCompact = activeSection !== "about";
  const shouldAnimate = activeSection !== "about";

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />

      <Hero compact={isHeroCompact} />

      <main className="content">
        <div
          key={activeSection}
          className={shouldAnimate ? "section-animate" : ""}
        >
          {activeSection === "about" && <About />}

          {activeSection === "projects" &&
            (loading ? (
              <p>Loading projects...</p>
            ) : (
              <Projects projects={projects} />
            ))}

          {activeSection === "experience" && <EducationExperience />}

          {activeSection === "skills" && <Skills />}
        </div>
      </main>

      <Chat />
    </>
  );
}
