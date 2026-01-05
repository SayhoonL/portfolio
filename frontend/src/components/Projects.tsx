import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-10">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => {
          const primaryLink =
            project.live_url || project.github_url;

          return (
            <a
              key={project.id}
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                {/* Image (CARD SIZE CONTROLLED HERE) */}
                {project.image && (
                  <img
                    src={`${API_BASE_URL}${project.image}`}
                    alt={project.title}
                    className="h-50 w-full object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack
                      .split("·")
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-800 hover:text-black"
                      >
                        <FaGithub size={18} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    )}

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
