import NavBar from "./sections/NavBar";
import Hero from "./sections/hero";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/contact";
import Cursor from "./sections/components/cursor";
import "./css/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex font-spartan">
      <Cursor />
      <section className="w-[30%] mr-2">
        <NavBar />
      </section>
      <section className="w-[70%] ">
        <motion.section
          id="hero"
          className="h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
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
