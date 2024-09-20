import NavBar from "./NavBar";
import Hero from "./hero";
import Education from "./Education";
import "./css/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useRef } from "react";

function App() {
  const educationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the scrollable content area

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
  //           const target = educationRef.current;
  //           if (target) {
  //             const targetPosition =
  //               target.getBoundingClientRect().top + window.scrollY;
  //             const targetHeight = target.clientHeight;
  //             const viewportHeight = window.innerHeight;

  //             // Calculate the scroll position to bring the section fully into view
  //             contentRef.current?.scrollTo({
  //               top: targetPosition - (viewportHeight - targetHeight),
  //               behavior: "smooth",
  //             });
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: [0.35], // Trigger when 35% of the Education section is in view
  //     }
  //   );

  //   const target = educationRef.current;
  //   if (target) {
  //     observer.observe(target);
  //   }

  //   return () => {
  //     if (target) {
  //       observer.unobserve(target);
  //     }
  //   };
  // }, []);

  return (
    <div className="flex">
      <section className="w-[30%]">
        <NavBar />
      </section>
      <section className="w-[70%]">
        <section className="h-screen">
          <Hero />
        </section>
        <section className="h-screen">
          <Education />
        </section>
      </section>
    </div>
  );
}

export default App;
