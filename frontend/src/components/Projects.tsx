import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTO_PLAY_DELAY = 5000;

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string;
  live_url?: string | null;
  image?: string | null;
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects/`)
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) =>
        console.error("Failed to fetch projects:", err)
      );
  }, []);

  const total = projects.length;
  const project = projects[index];

  const next = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % total);
      setProgress(0);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + total) % total);
      setProgress(0);
      setIsTransitioning(false);
    }, 300);
  };

  // START AUTOPLAY
  const startAutoPlay = () => {
    if (intervalRef.current || total <= 1) return;

    setProgress(0);

    // Progress bar animation
    progressRef.current = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + (100 / (AUTO_PLAY_DELAY / 100));
      });
    }, 100);

    // Auto advance
    intervalRef.current = window.setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % total);
        setProgress(0);
        setIsTransitioning(false);
      }, 300);
    }, AUTO_PLAY_DELAY);
  };

  // STOP AUTOPLAY
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [total]);

  if (!project) return null;

  return (
    <section
      className="relative py-12 px-6"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >

      {/* FEATURED CARD */}
      <div className="max-w-6xl mx-auto">
        <div
          className={`
            grid md:grid-cols-2
            rounded-3xl
            overflow-hidden
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-2xl
            transition-opacity duration-300
            ${isTransitioning ? 'opacity-0' : 'opacity-100'}
          `}
        >
          {/* IMAGE */}
          <div className="relative">
            {project.image && (
              <img
                src={`${API_BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* CONTENT */}
          <div className="p-10 text-white flex flex-col">
            <div className="text-sm text-purple-300 mb-3">
              Project {index + 1} of {total}
            </div>

            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-purple-100 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech_stack.split(/[·,|]/).map((tech, idx) => {
                const trimmed = tech.trim();
                if (!trimmed) return null;
                return (
                  <span
                    key={`${trimmed}-${idx}`}
                    className="
                      px-3 py-1 text-xs font-semibold
                      rounded-full
                      bg-purple-500/30
                      border border-purple-400/40
                    "
                  >
                    {trimmed}
                  </span>
                );
              })}
            </div>

            {/* ACTION ICONS */}
            <div className="flex items-center gap-4 mb-8">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-lg
                    bg-white/10
                    hover:bg-white/20
                    transition
                  "
                >
                  <FaGithub />
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-lg
                    bg-white/10
                    hover:bg-white/20
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            {/* NAV + PROGRESS */}
            <div className="flex items-center gap-4 mt-auto">
              <button
                onClick={prev}
                className="
                  p-3 rounded-full
                  border border-white/30
                  hover:bg-white/10
                "
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={next}
                className="
                  p-3 rounded-full
                  border border-white/30
                  hover:bg-white/10
                "
              >
                <FaChevronRight />
              </button>

              {/* PROGRESS BAR */}
              <div className="flex-1 h-1 bg-white/20 rounded-full ml-4">
                <div
                  className="
                    h-full
                    bg-gradient-to-r
                    from-pink-400
                    to-purple-400
                    rounded-full
                  "
                  style={{ 
                    width: `${progress}%`,
                    transition: 'width 0.1s linear'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}