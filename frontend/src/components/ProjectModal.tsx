import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
};

export default function ProjectModal({ isOpen, onClose, projectTitle }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900/95 to-pink-900/95 border border-white/20 rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="text-white text-xl" />
        </button>

        {/* Content */}
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 pr-10">{projectTitle}</h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">About This Project</h3>
              <p className="text-purple-100 leading-relaxed">
                The Instagram Clone is a client-side dynamic social media application that replicates core Instagram functionality.
                This project demonstrates proficiency in building interactive, single-page applications with asynchronous data handling
                and modern web development practices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Key Features</h3>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Dynamic Feed:</strong> Real-time post rendering with infinite scroll functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>REST API Integration:</strong> Asynchronous data fetching and updates without page reloads</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Interactive UI:</strong> Like/unlike posts, comments, and user interactions with instant feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Client-Side Routing:</strong> Seamless navigation between user profiles, post details, and feed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>State Management:</strong> Efficient client-side state handling for optimal performance</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Technical Implementation</h3>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Vanilla JavaScript:</strong> Built without frameworks to demonstrate core JS proficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>RESTful Architecture:</strong> Proper HTTP methods (GET, POST, PUT, DELETE) for CRUD operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Responsive Design:</strong> Mobile-first approach with CSS Grid and Flexbox</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Error Handling:</strong> Robust error management for failed API requests and edge cases</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Repository Access</h3>
              <p className="text-purple-100 leading-relaxed">
                This project is part of a private academic repository and is not publicly accessible at this time.
                The codebase adheres to university guidelines regarding academic integrity and coursework privacy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
