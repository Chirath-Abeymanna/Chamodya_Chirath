import NavBar from "./sections/NavBar";
import NavBarMobile from "./sections/NavBarMobile";
import Hero from "./sections/hero";
import HeroMobile from "./sections/HeroMobile";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Cursor from "./sections/components/cursor";
import "./css/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check the window size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      // Check for window width and orientation
      const isMobileWidth = window.innerWidth <= 700;
      const isPortraitMode = window.matchMedia(
        "(orientation: portrait)"
      ).matches;

      // Apply mobile view if it's either mobile width or portrait mode
      setIsMobile(isMobileWidth || isPortraitMode);
    };

    handleResize(); // Initial check when the component mounts
    window.addEventListener("resize", handleResize); // Add resize listener
    window.addEventListener("orientationchange", handleResize); // Listen for orientation changes

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
      window.removeEventListener("orientationchange", handleResize); // Clean up orientation listener
    };
  }, []);

  return (
    <div className="flex font-spartan">
      {isMobile ? "" : <Cursor />}
      <section className={`${isMobile ? "w-10% fixed z-30" : "w-[30%]"} mr-2`}>
        {isMobile ? <NavBarMobile /> : <NavBar />}
      </section>
      <section
        className={`${isMobile ? "relative w-[100%]  z-0" : "w-[70%]"} z-0`}
      >
        <motion.section
          id="hero"
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {isMobile ? <HeroMobile /> : <Hero />}
        </motion.section>
        <motion.section
          id="education"
          className="relative min-h-screen"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Education />
        </motion.section>
        <motion.section
          id="projects"
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Projects />
        </motion.section>
        <motion.section
          id="contact"
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.section>
      </section>
    </div>
  );
}

export default App;
