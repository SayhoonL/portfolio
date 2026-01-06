import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      {/* Main About Section - No background box */}
      <div className="p-8 mb-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-8">

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block text-white">
              Hi, I'm
            </span>

            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sayhoon Lee
            </span>

            <span className="block text-white text-2xl md:text-3xl font-semibold mt-2">
              Web Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            Building modern web applications.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/SayhoonL"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sayhoon-lee-03ab43305/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl"
          >
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold">LinkedIn</span>
          </a>

          <a
            href="mailto:sayhoon77@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all shadow-lg hover:shadow-xl"
          >
            <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Email</span>
          </a>

          <a
            href="/SayhoonLeeResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-xl"
          >
            <FaFileAlt className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}