import { useEffect, useState } from "react";
import "./css/navbar.css";
import "./css/App.css";
import profileImage from "./assets/profile.jpg";

const NavBar: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="NavBar bg-nav-bg fixed h-full w-navbar text-white transition-all">
      <div className="">
        <div className="ProfilePic w-profile ml-auto mr-auto mt-10 mb-6 items-center">
          <img
            className="profile rounded-circle w-36 h-36 ml-auto mr-auto object-cover"
            src={profileImage}
            alt="Profile pic"
          />
        </div>
        <h2 className="text-3xl ml-5 mb-3">
          Hi I'm{" "}
          <span id="name" className="text-name font-bold">
            Chamodya Chirath
          </span>
        </h2>
        <div className="ml-5 mb-20 relative text-gray-300">
          <h4
            className={`transition-transform ease-in-out duration-500 absolute top-0 left-0 ${
              visibleIndex === 0
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Software Engineer
          </h4>
          <h4
            className={`transition-transform ease-in-out duration-500 absolute top-0 left-0 ${
              visibleIndex === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Web Developer
          </h4>
        </div>
        <ul className="ml-[5vw] text-2xl space-y-10">
          <li className="">
            <a href="#hero" className="active ">
              <i className="fa fa-mug-hot"></i> Home
            </a>
          </li>
          <li>
            <a href="#education">
              <i className="fa fa-book"></i> Education
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fa fa-bars-progress"></i> Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-phone"></i> Get in touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
