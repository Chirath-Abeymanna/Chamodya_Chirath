import { useEffect } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import "../css/SubWindow.css"; // Importing the new CSS file
import {
  SiTypescript,
  SiNextdotjs,
  SiFlask,
  SiSpringboot,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

interface ModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div>
        <div className="close-box">
          <button className="close-button" onClick={onClose}>
            <i className="fa fa-xmark"></i>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="model-2"
        >
          <div className="skills-container">
            <div className="skills">
              <ul className="skill-list">
                <li className="title">Languages</li>
                <li>
                  <i className="fa-brands fa-python"></i> Python
                </li>
                <li>
                  <i className="fa-brands fa-java"></i> Java
                </li>
                <li>
                  <i className="fa-brands fa-js"></i> JavaScript
                </li>
                <li>
                  <SiTypescript /> TypeScript
                </li>
                <li>
                  <i className="fa-brands fa-html5"></i> HTML
                </li>
                <li>
                  <i className="fa-brands fa-css3"></i> CSS
                </li>
              </ul>
            </div>
            <div className="skills">
              <ul className="skill-list">
                <li className="title">Framework</li>
                <li>
                  <i className="fa-brands fa-react"></i> React
                </li>
                <li>
                  <i className="fa-brands fa-angular"></i> Angular
                </li>
                <li>
                  <SiNextdotjs /> Next js
                </li>
                <li>
                  <SiFlask /> Flask
                </li>
                <li>
                  <SiSpringboot /> Spring Boot
                </li>
                <li>
                  <SiTailwindcss />
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="skills">
              <ul className="skill-list">
                <li className="title">Version Control</li>
                <li>
                  <SiGithub />
                  Github
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>,

    document.body // 💡 Mounts the modal to the body, preventing parent influence
  );
};

export default Modal;
