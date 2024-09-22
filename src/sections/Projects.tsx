import { motion } from "framer-motion";
import TextAnimation from "./components/TextAnimation";
import "./css/projectCard.css";
import projectData from "./components/data/projectdata";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <div className="relative w-full h-full bg-background">
      <div className="h-[100vh]">
        <TextAnimation text="P r o j e c t s" changeSpeed={0.1} />
      </div>
      <motion.div className="projects relative  p-10">
        <div className="title">
          <h1 className="relative text-white text-5xl pb-10">
            Featured Projects
          </h1>
          <button className="all-projects relative ">
            <div className="buttonText">
              View All projects
              <i className="fa fa-arrow-right ml-2"></i>
            </div>
          </button>
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
      </motion.div>
    </div>
  );
}

export default Projects;
