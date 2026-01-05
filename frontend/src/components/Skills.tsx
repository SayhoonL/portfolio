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
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setActiveSkill(skill);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = window.setTimeout(() => {
      setActiveSkill(null);
    }, 1000);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 -mt-8">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
      </div>

      {/* Explanation box */}
      {activeSkill && (
        <div
          key={activeSkill.name}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={activeSkill.icon}
              alt={activeSkill.name}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{activeSkill.description}</p>
        </div>
      )}

      {/* Skills grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        onMouseLeave={handleMouseLeave}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer flex flex-col items-center gap-3 ${
              activeSkill?.name === skill.name ? "ring-2 ring-yellow-400 scale-105" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(skill)}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
            <span className="text-white font-medium text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}