import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap as SchoolIcon } from "@fortawesome/free-solid-svg-icons";
import { faPager as CertificateIcon } from "@fortawesome/free-solid-svg-icons";
import timelineElements from "./data/TimelineElementsdata";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/timeline.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Modal from "../components/SubWindow";

function Timeline() {
  let schoolIconStyles = { background: "#1c6079", color: "#ffffff" };
  let CertificateIconStyles = { background: "#0A4BBB", color: "#ffffff" };
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 50% of the element is in view
      }
    );

    const timelineElement = document.getElementById("timeline");
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => {
      if (timelineElement) {
        observer.unobserve(timelineElement);
      }
    };
  }, []);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <motion.div
      id="timeline"
      className=" relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <VerticalTimeline animate={isVisible}>
        {" "}
        {/* Enable animation based on visibility */}
        {timelineElements.map((element) => {
          let isCertificateIcon = element.icon === "certificate";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="container font-poppins"
              key={element.id}
              iconClassName="timelineIcon"
              iconStyle={
                isCertificateIcon ? CertificateIconStyles : schoolIconStyles
              }
              icon={
                <FontAwesomeIcon
                  icon={isCertificateIcon ? CertificateIcon : SchoolIcon}
                  style={{
                    color: isCertificateIcon
                      ? CertificateIconStyles.color
                      : schoolIconStyles.color,
                  }}
                  size="8x"
                />
              }
            >
              <h3
                id="title"
                className="text-2xl font-bold vertical-timeline-element-title"
              >
                {element.title}
              </h3>
              <h5
                id="location"
                className="text-sm vertical-timeline-element-subtitle"
              >
                {element.location}
              </h5>
              <h6 id="date" className="text-[10px] text-gray-500">
                {element.date}
              </h6>
              <p id="description">{element.description}</p>
              {showButton && (
                <button
                  className={`button ${
                    isCertificateIcon ? "certificateButton" : "schoolButton"
                  }`}
                  onClick={() => openModal(element.img)}
                >
                  {element.buttonText}
                </button>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {/* Modal Component */}
      {selectedImage && (
        <Modal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </motion.div>
  );
}

export default Timeline;
