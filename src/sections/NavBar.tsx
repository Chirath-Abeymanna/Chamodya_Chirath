import { useState } from "react";
import { Link } from "react-scroll";
import "../css/navbar.css";
import profileImage from "../assets/profile.jpg";
import logo from "../assets/ico.svg";

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Function to handle setting the active class
  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="NavBar bg-nav-bg fixed h-full w-navbar text-white transition-all">
      <div>
        {/* Profile Section */}
        <div className="Logo absolute top-5 left-3">
          <img className="w-10 h-10" src={logo} alt="" />
        </div>
        <div className="ProfilePic w-profile ml-auto mr-auto mt-10 mb-5">
          <img className="profile" src={profileImage} alt="Profile pic" />
        </div>

        {/* Name with Typewriter Animation */}
        <h2 className="text-4xl ml-5 mb-3 font-guriella ">
          <span id="name" className="text-name tracking-wide font-bold">
            Chamodya Chirath
          </span>
        </h2>

        {/* Title Section */}
        <div className="ml-5 mb-10 h-3 relative text-sm text-gray-400 flex flex-wrap">
          <h4 className="transition-transform ease-in-out duration-500">
            Software Engineer
          </h4>
          <h4 className="transition-transform ease-in-out duration-500">
            / Web Developer
          </h4>
        </div>

        {/* Navigation Links */}
        <ul className="ml-[5vw] text-2xl space-y-10 cursor-pointer">
          <li className="nav-item">
            <Link
              className={activeSection === "hero" ? "active" : ""}
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive("hero")}
            >
              <i className="fa fa-mug-hot"></i> Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={activeSection === "education" ? "active" : ""}
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => handleSetActive("education")}
            >
              <i className="fa fa-book"></i> Education
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={activeSection === "projects" ? "active" : ""}
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onSetActive={() => handleSetActive("projects")}
            >
              <i className="fa fa-bars-progress"></i> Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={activeSection === "contact" ? "active" : ""}
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive("contact")}
            >
              <i className="fa fa-phone"></i> Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
