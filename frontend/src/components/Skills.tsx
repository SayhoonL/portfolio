import { useRef, useState } from "react";

type Skill = {
  name: string;
  icon: string;
  description: string;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: "/react.png",
    description:
      "Built interactive, component-based user interfaces using functional components, hooks, and state-driven rendering.",
  },
  {
    name: "TypeScript",
    icon: "/typescript.png",
    description:
      "Used TypeScript to add static typing to React applications, improving code reliability, readability, and refactoring safety.",
  },
  {
    name: "JavaScript",
    icon: "/javascript.png",
    description:
      "Implemented core application logic and asynchronous workflows using modern JavaScript features such as async/await and ES6 syntax.",
  },
  {
    name: "Python",
    icon: "/python.png",
    description:
      "Used Python for backend development and scripting, implementing business logic and data processing in a clean, maintainable way.",
  },
  {
    name: "Django",
    icon: "/django.png",
    description:
      "Developed RESTful APIs using Django and Django REST Framework, handling authentication, request validation, and database interactions.",
  },
  {
    name: "PostgreSQL",
    icon: "/postgres.png",
    description:
      "Designed relational database schemas and wrote efficient SQL queries to reliably store and retrieve application data.",
  },
  {
    name: "Docker",
    icon: "/docker.png",
    description:
      "Containerized applications with Docker to ensure consistent development and deployment environments across local and cloud setups.",
  },
  {
    name: "Google Cloud Platform",
    icon: "/google-cloud.png",
    description:
      "Deployed and managed applications on Google Cloud Platform using services such as Cloud Run and Cloud SQL for scalable production hosting.",
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const hideTimeout = useRef<number | null>(null);

  const handleMouseEnter = (skill: Skill) => {
    // Cancel pending hide
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setActiveSkill(skill);
  };

  const handleMouseLeave = () => {
    // Delay hiding by 3 seconds
    hideTimeout.current = window.setTimeout(() => {
      setActiveSkill(null);
    }, 1000);
  };

  return (
    <section className="section">

      {/* Explanation box */}
      {activeSkill && (
        <div
          key={activeSkill.name}
          className="skills-explanation show"
        >
          <img
            src={activeSkill.icon}
            alt={activeSkill.name}
            className="skills-explanation-icon"
          />
          <h3>{activeSkill.name}</h3>
          <p>{activeSkill.description}</p>
        </div>
      )}

      {/* Skills grid */}
      <div
        className={`skills-grid ${activeSkill ? "shifted" : ""}`}
        onMouseLeave={handleMouseLeave}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill-card ${
              activeSkill?.name === skill.name ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(skill)}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
