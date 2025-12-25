import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string;
  live_url?: string | null;
  image?: string | null;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects/`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) =>
        console.error("Failed to fetch projects:", err)
      );
  }, []);

  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Image */}
            {project.image && (
              <img
                src={`${API_BASE_URL}${project.image}`}
                alt={project.title}
                className="project-image"
              />
            )}

            {/* Title always visible */}
            <div className="project-title">
              {project.title}
            </div>

            {/* Hover overlay */}
            <div className="project-overlay">
              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-tech-tiles">
                {project.tech_stack
                  .split("·")
                  .map((tech) => (
                    <span key={tech} className="tech-tile">
                      {tech.trim()}
                    </span>
                  ))}
              </div>

              <div className="project-links">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
