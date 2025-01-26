import { useState } from "react";
import { Link } from "react-scroll";
import "../css/navbarmobile.css";

function NavBarMobile() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  // Function to handle setting the active class
  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="relative z-10 container w-[100vw] h-[100vh] bg-slate-400 ">
      <div className="bars ">
        <button type="button" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      <div className={`nav-bar ${isNavVisible ? "open" : ""}`}>
        <div className="close-button-container">
          <button onClick={toggleNav} type="button" className="close-Button">
            <i className="fa fa-close"></i>
          </button>
        </div>

        <div className=" flex items-center justify-center">
          <nav>
            {/* Navigation Links */}
            <ul>
              {["hero", "education", "projects", "contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <Link
                    className={activeSection === section ? "active" : ""}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={section === "education" ? -70 : -100}
                    duration={500}
                    onSetActive={() => handleSetActive(section)}
                    onClick={toggleNav}
                  >
                    <i
                      className={`fa ${
                        section === "hero"
                          ? "fa-mug-hot"
                          : section === "education"
                          ? "fa-book"
                          : section === "projects"
                          ? "fa-bars-progress"
                          : "fa-phone"
                      }`}
                    ></i>{" "}
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;
