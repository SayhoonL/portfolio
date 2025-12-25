type Section = "about" | "projects" | "experience" | "skills";

type NavbarProps = {
  setActiveSection: (section: Section) => void;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* LEFT: NAME */}
        <div className="nav-brand">SAYHOON LEE</div>

        {/* RIGHT: LINKS */}
        <ul className="nav-links">
          <li>
            <button onClick={() => setActiveSection("about")}>
              About
            </button>
          </li>

          <li>
            <button onClick={() => setActiveSection("projects")}>
              Projects
            </button>
          </li>

          <li>
            <button onClick={() => setActiveSection("experience")}>
              Education & Experience
            </button>
          </li>

          <li>
            <button onClick={() => setActiveSection("skills")}>
              Skills
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
