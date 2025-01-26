import TextAnimation from "./components/TextAnimation";
import "./css/projectCard.css";
import projectData from "./components/data/projectdata";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsecRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Observer to detect when the section is in 30% of the viewport, only for desktop views
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1200;
      console.log(isDesktop);
      if (!isDesktop) {
        // Stop animations for mobile view
        controls.start({
          y: 0,
          opacity: 1,
        });
        return; // Exit early if not desktop
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when 30% of the element is in view
          } else {
            setIsVisible(false);
          }
        },
        {
          threshold: [0.3], // Trigger when 30% of the element is in view
        }
      );

      if (projectsecRef.current) {
        observer.observe(projectsecRef.current);
      }

      return () => {
        if (projectsecRef.current) {
          observer.unobserve(projectsecRef.current);
        }
      };
    };

    // Run resize check initially and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controls]);

  // Animate when isVisible is true, only for desktop views
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    if (isVisible && isDesktop) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else if (isDesktop) {
      controls.start({
        y: 100, // Move down initially
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="relative w-full h-full bg-background overflow-hidden ">
      <div className="projects-title h-[100vh] flex items-center justify-center">
        <TextAnimation text="P r o j e c t s" paragraph="" changeSpeed={0.1} />
      </div>

      {/* The section being observed for animation */}
      <div ref={projectsecRef} className="projects relative p-10">
        <div className="title">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={controls}>
            <h1 className="feature-title relative text-white text-[clamp(30px,3vw,60px)] pb-10">
              Featured Projects
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }} // Starting position
            animate={controls}
          >
            <button className="all-projects relative">
              <div className="buttonText">
                View All projects
                <i className="fa fa-arrow-right ml-2"></i>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Animated div */}
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Starting position
          animate={controls} // Controlled by intersection observer
          className="cards"
        >
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              languages={project.languages}
              description={project.description}
              link={project.link}
              Image={project.img}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
