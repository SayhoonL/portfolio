export default function EducationExperience() {
  const umichLogo = `${import.meta.env.VITE_API_BASE_URL}/media/projects/michlogo.png`;

  return (
    <section className="section" id="education-experience">
      <h2>EDUCATION & EXPERIENCE</h2>

      {/* Education */}
      <div className="experience-item">
        <h3>Education</h3>

        <div style={{ marginTop: "0.75rem" }}>
          <p className="school-name-row">
            <img
              className="school-logo"
              src={umichLogo}
              alt="University of Michigan logo"
            />
            <span>
              <strong>University of Michigan</strong> · Ann Arbor, MI
            </span>
          </p>

          <p>B.S. in Computer Science</p>
          <p>
            <em>Sep 2020 – Jan 2025</em>
          </p>
        </div>

        <ul style={{ marginTop: "0.75rem" }}>
          <li>
            Relevant coursework: Data Structures & Algorithms, Web Development,
            Databases
          </li>
          <li>
            Project-focused work in full-stack development (React, Django/Flask,
            SQL)
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="experience-item" style={{ marginTop: "2rem" }}>
        <h3>Experience</h3>

        <div style={{ marginTop: "0.75rem" }}>
          <p>
            <strong>Software Engineering Consultant</strong> · Remote
          </p>
          <p>
            <em>Jan 2025 – Present</em>
          </p>
          <ul>
            <li>
              Developed full-stack web applications using React, Node.js, and
              MongoDB to automate business workflows.
            </li>
            <li>
              Designed and implemented RESTful APIs and delivered deployments
              using cloud and static hosting platforms.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <p>
            <strong>Technical Instructor</strong> · University of Michigan · Ann
            Arbor, MI
          </p>
          <p>
            <em>Sep 2022 – Sep 2024</em>
          </p>
          <ul>
            <li>
              Mentored students in web development fundamentals, backend design,
              and deployment workflows.
            </li>
            <li>
              Taught core CS topics including Data Structures, Algorithms, and
              Object-Oriented Programming in C++.
            </li>
            <li>
              Guided students through Git/GitHub collaboration and practical
              debugging habits.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
