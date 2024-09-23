import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import TextAnimation from "./components/TextAnimation";
import Timeline from "./components/TimelineElements";
import "../css/education.css";

function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Observer to detect when timeline is in 20% of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.3) {
          setIsVisible(true); // Set visible when 20% of the element is in view
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: [0.3], // Trigger when 20% of the element is in view
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  // Trigger scroll up animation when visible
  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        y: 100, // Move down initially
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="w-full min-h-screen bg-background pb-[20vh]">
      <div className="education h-[100vh] flex items-center justify-center">
        <div className="">
          <div>
            <TextAnimation
              text="Edu cat ion &"
              paragraph=""
              changeSpeed={0.2}
            />
          </div>
          <div className="relative">
            <TextAnimation
              text=" Cert ifi cat ions"
              paragraph=""
              changeSpeed={0.2}
            />
          </div>
        </div>
      </div>

      <motion.div
        ref={timelineRef}
        className="timeline relative"
        initial={{ y: 100, opacity: 0 }} // Initially below view and hidden
        animate={controls}
      >
        <Timeline />
      </motion.div>
    </div>
  );
}

export default Education;
