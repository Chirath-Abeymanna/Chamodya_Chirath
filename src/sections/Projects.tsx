import TextAnimation from "./components/TextAnimation";
import "./css/projectCard.css";
import projectData from "./components/data/projectdata";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsecRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1200;
      if (!isDesktop) {
        controls.start({ y: 0, opacity: 1 });
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: [0.2], rootMargin: "-100px 0px -200px 0px" }
      );

      if (projectsecRef.current) observer.observe(projectsecRef.current);
      return () =>
        projectsecRef.current && observer.unobserve(projectsecRef.current);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    if (isVisible && isDesktop) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    } else if (isDesktop) {
      controls.start({ y: 200, opacity: 0, transition: { duration: 0.8 } });
    }
  }, [isVisible, controls]);

  return (
    <div className="relative w-full h-full bg-background">
      <div className="projects-title h-[100vh] flex items-center justify-center">
        <TextAnimation text="P r o j e c t s" paragraph="" changeSpeed={0.1} />
      </div>

      <div ref={projectsecRef} className="projects">
        <div className="title mb-12">
          <h1 className="feature-title relative text-white text-[3rem] pb-0 lg:pb-10">
            Featured Projects
          </h1>
        </div>

        <div className="cards">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
