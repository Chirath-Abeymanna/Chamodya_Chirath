import TextAnimation from "./components/TextAnimation";
import ContactForm from "./components/ContactForm";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactformRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Observer to detect when the section is in 30% of the viewport
  useEffect(() => {
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

    if (contactformRef.current) {
      observer.observe(contactformRef.current);
    }

    return () => {
      if (contactformRef.current) {
        observer.unobserve(contactformRef.current);
      }
    };
  }, []);

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
    <div className=" w-full min-h-screen bg-background pb-[20vh] overflow-x-hidden">
      <div className="h-[100vh] flex relative justify-center items-center ">
        <div className="  pr-5">
          <TextAnimation text="G e t " paragraph="" changeSpeed={0.1} />
        </div>
        <div className=" pr-5">
          <TextAnimation text="  i n" paragraph="" changeSpeed={0.1} />
        </div>
        <div className="">
          <TextAnimation text="T o u c h" paragraph="" changeSpeed={0.1} />
        </div>
      </div>
      <motion.div
        ref={contactformRef}
        className="relative form-container w-full h-full flex justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="overflow-hidden"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
