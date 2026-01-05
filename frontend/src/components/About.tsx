export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">

      {/* Main card with glass effect */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 text-white text-xl">
            💻
          </div>
          <div>
            <p className="text-2xl mb-4">
              Hi, I'm <span className="font-bold text-blue-600">Sayhoon Lee</span>
            </p>
            <p className="text-xl text-gray-700 font-semibold">
              Full-Stack Software Engineer
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0 text-xl">
            📚
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            I build scalable web applications using <span className="font-semibold text-blue-600">Django</span>, <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">JavaScript</span>, and <span className="font-semibold text-blue-600">TypeScript</span>. I focus on clean architecture, maintainable code, and practical solutions that scale well.
          </p>
        </div>
      </div>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['Django', 'React', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Docker'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Contact links */}
      <div className="flex gap-4">
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          <span className="text-xl">💼</span>
          GitHub
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <span className="text-xl">🔗</span>
          LinkedIn
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
        >
          <span className="text-xl">✉️</span>
          Contact
        </a>
      </div>
    </section>
  );
}