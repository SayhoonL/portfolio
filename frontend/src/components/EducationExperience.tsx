export default function EducationExperience() {
  const umichLogo = `${import.meta.env.VITE_API_BASE_URL}/media/projects/michlogo.png`;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 -mt-8">
      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <img
              className="w-20 h-20 object-contain rounded-lg bg-white/20 p-2"
              src={umichLogo}
              alt="University of Michigan logo"
            />
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-1">
                University of Michigan
              </h4>
              <p className="text-gray-300 mb-1">B.S. in Computer Science</p>
              <p className="text-gray-400 text-sm">Ann Arbor, MI · Sep 2020 – Jan 2025</p>
            </div>
          </div>
          
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Relevant coursework: Data Structures & Algorithms, Web Development, Databases</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Project-focused work in full-stack development (React, Django/Flask, SQL)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
        
        {/* Job 1 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all mb-6">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-white mb-1">
              Software Engineering Consultant
            </h4>
            <p className="text-gray-400 text-sm">Remote · Jan 2025 – Present</p>
          </div>
          
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Developed full-stack web applications using React, Node.js, and MongoDB to automate business workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Designed and implemented RESTful APIs and delivered deployments using cloud and static hosting platforms.</span>
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-white mb-1">
              Technical Instructor
            </h4>
            <p className="text-gray-400 text-sm">University of Michigan · Ann Arbor, MI · Sep 2022 – Sep 2024</p>
          </div>
          
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Mentored students in web development fundamentals, backend design, and deployment workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Taught core CS topics including Data Structures, Algorithms, and Object-Oriented Programming in C++.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">▸</span>
              <span>Guided students through Git/GitHub collaboration and practical debugging habits.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}