import { useEffect, useRef, useState } from "react";
import ProfileImage from "../assets/profile.jpg";
import "../css/HeroMobile.css";
import "../css/App.css";
import TextAnimation from "./components/TextAnimation";
import Counter from "./components/Counter";

function HeroMobile() {
  const NoProject = 3;
  const NoAchivements = 5;
  const NoSkills = 10;

  const [animate, setAnimate] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for JavaScript errors
    console.log("HeroMobile component mounted");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // Optionally, disconnect after it animates once
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold if needed (0.1 means the element is 10% visible)
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <div className="relative h-max top-[3rem] bg-background  pb-20 overflow-x-hidden">
      {/* Ensure no overlay elements are blocking interactions */}
      <div className="relative flex justify-center mt-[20%] pb-[15vh] Profile  w-[100vw] h-max  text-white font-poppins">
        <div>
          <div className="relative justify-center h-max ">
            <h1
              id="nameMobile"
              className="relative text-[11vw] font-guriella tracking-wider text-name font-bold"
            >
              Chamodya Chirath
            </h1>
          </div>
          <div className="relative flex justify-center h-max mb-5">
            <button className="relative font-spartan font-medium text-white text-[4vw]">
              <span className="absolute top-[25%] flex h-[2vw] w-[2vw]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-circle h-[2vw] w-[2vw] bg-green-400"></span>
              </span>
              <span className="relative top-0 ml-3 ">
                Availabe for a part time position
              </span>
            </button>
          </div>
          <div className="relative top-[1vh]  flex justify-center h-max ">
            <div className="ProfilePic w-max ml-auto mr-auto mb-5">
              <img
                className="profile w-[60vw] h-[60vw] rounded-circle"
                src={ProfileImage}
                alt="Profile pic"
              />
            </div>
          </div>
          <div className="flex justify-center h-max ">
            <h2 className="text-[5vw] font-guriella text-[#bde2fa]">
              Software Engineer | Web Developer
            </h2>
          </div>
        </div>
      </div>
      <div className=" h-max w-[100vw] pr-8 ">
        <TextAnimation
          text=""
          paragraph="I am a Computer Science undergraduate with a passion for creating innovative solutions. Currently, I am specializing in Robotics Engineering and Machine Learning, while also nurturing a strong interest in web development, which I am pursuing independently."
          changeSpeed={0.02}
        />
      </div>
      <div className="relative h-max bg-background rounded-md  mr-5 ml-5 -mt-20">
        <div className="relative top-0 left-0 w-full h-max ">
          <div
            className={`project-card h-max p-[8vw] rounded-md bg-[#101014] text-white overflow-hidden mb-[3vh]`}
          >
            <div
              className={`relative flex justify-around h-max ${
                animate ? "fade-in-up fade-delay-2" : ""
              }`}
            >
              <h1 className="h-max  font-Lexend text-center text-[10vw]">
                <Counter endNumber={NoProject} />
              </h1>
              <p className="relative top-5 text-[5vw] space-y-8 leading-5 text-[#CFCFCF] text-center">
                projects completed
              </p>
            </div>
          </div>

          <div
            className={`Achievement-card h-max p-[8vw] rounded-md bg-[#101014] text-white overflow-hidden mb-[3vh]`}
          >
            <div
              className={`relative flex justify-around h-max ${
                animate ? "fade-in-up fade-delay-2" : ""
              }`}
            >
              <div className="relative flex mb-8 h-12">
                <h1 className="h-max  font-Lexend text-center text-[10vw] w-[30vw]">
                  <i className="absolute top-[1.5vh] -left-[4vw] fa fa-trophy"></i>
                  <Counter endNumber={NoAchivements} />
                </h1>
              </div>
              <div className="relative -top-1">
                <p className=" relative top-5 text-[5vw] space-y-8 leading-5 text-[#CFCFCF] text-center">
                  Achievements
                </p>
              </div>
            </div>
          </div>

          <div
            className={`Skills-card h-max p-[8vw] rounded-md bg-[#101014] text-white overflow-hidden mb-[3vh]`}
          >
            <div
              className={`relative flex justify-around h-max ${
                animate ? "fade-in-up fade-delay-2" : ""
              }`}
            >
              <h1 className="h-max  font-Lexend text-center text-[10vw]">
                <Counter endNumber={NoSkills} />
              </h1>
              <p className="relative top-5 text-[5vw] space-y-8 leading-5 text-[#CFCFCF] text-center">
                Skills collected
              </p>
            </div>
          </div>
          <div
            className={`Tech-card h-max p-[8vw] rounded-md bg-[#101014] text-white overflow-hidden mb-[3vh]`}
          >
            <div
              className={`relative flex justify-around h-max  ${
                animate ? "fade-in-up fade-delay-2" : ""
              }`}
            >
              <h1 className="h-max  font-Lexend text-center text-[10vw]">
                TECH
              </h1>
              <p className="relative top-5 text-[5vw] space-y-8 leading-5 text-[#CFCFCF] text-center">
                Enthusiast
              </p>
            </div>
          </div>
          <div
            className={`Tech-card h-max p-[4vw] rounded-md border border-[#0de5f8]  text-white overflow-hidden mb-[3vh]`}
          >
            <div
              className={`relative   ${
                animate ? "fade-in-up fade-delay-2" : ""
              }`}
            >
              <div className="pl-10 flex h-max justify-center">
                <h1 className="h-max text-[3vw] font-poppins text-cente r">
                  Looking for a new Talent ?
                </h1>
              </div>
              <div className="relative flex h-max justify-center right-3">
                <h2 className="text-[6vw] pt-3 transition-colors hover:text-[#8078d3]">
                  <a href="mailto:chamodyachiarth@gmail.com">
                    {" "}
                    chamodyachirath@gmail.com{" "}
                  </a>
                </h2>
              </div>
              <h2 className="pt-[3vh] mb-2 text-xl flex h-max justify-end ">
                <a
                  href="CV.pdf"
                  download="Chamodya_Chirath.pdf"
                  className=" relative pl-3"
                >
                  <button className="flex h-max  text-[4vw] hover:text-[#4c77ab]">
                    <div className="absolute top-[30%] left-0 w-[2vw] h-[2vw] bg-[#4c77ab] mr-2 rounded-circle  transition-[ease-in-out] "></div>{" "}
                    Get CV
                  </button>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;
