import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Chat from "./components/Chat";

import "./styles/portfolio.css";

type Section = "about" | "projects" | "experience" | "skills";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

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

          {activeSection === "projects" && <Projects />}

          {activeSection === "experience" && <EducationExperience />}

          {activeSection === "skills" && <Skills />}
        </div>
      </main>

      <Chat />
    </>
  );
}
