// This project was created by C.C.

import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Modal from "./components/subWindow2";

const Hero = () => {
  const NoProject = 6;
  const NoAchivements = 5;
  const NoSkills = 12;

  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full bg-background h-full flex flex-col justify-center overflow-hidden z0">
      {showModal && (
        <Modal imageSrc={null} onClose={() => setShowModal(false)} />
      )}
      <head>
        <link rel="preload" href="CV.pdf" as="document" />
      </head>
      <div className="header flex relative h-max">
        <div
          className={`font-Kameron text-white ml-5 mt-5 text-[clamp(40px,3vw,900px)] -space-y-1 tracking-wide ${
            animate ? "fade-in-up" : ""
          }`}
        >
          <h1>
            <span className="text-grey hover:text-blue-300">IMA</span>
            GINE
          </h1>
          <h1>
            DES<span className="text-grey hover:text-blue-400">IGN</span>
          </h1>
          <h1>
            <span className="text-grey hover:text-blue-500">DEV</span>LOP
          </h1>
        </div>
        <div
          className={`absolute mt-5 right-10 ${animate ? "fade-in-up" : ""}`}
        >
          <button className="relative p-2 mt-10 font-spartan font-medium text-white text-[clamp(22px,1vw,100px)]">
            <span className="absolute flex h-3 w-3 left-0 top-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
            <div className="ml-3 ">Availabe for Part time position</div>
          </button>
        </div>
      </div>

      {/* Background blur */}
      <div
        className={`absolute top-[35vh] left-[15vw] background w-[30vw] h-[25vh] rounded-circle bg-[#008BD6] blur-[6rem] ${
          animate ? "fade-in-up fade-delay-3" : ""
        }`}
      ></div>

      {/* About card */}
      <div className="relative mt-16 left-5 flex justify-start  w-[67vw] h-max">
        <div
          className={`about-card relative w-[40vw] p-5 mr-6 pt-[clamp(2px,1vh,50px)] rounded-md bg-card text-white overflow-hidden`}
        >
          <div
            className={`${
              animate ? "fade-in-up fade-delay-1" : ""
            } overflow-hidden`}
          >
            <h2 className="text-[clamp(25px,1.5vw,100px)] mb-5">
              Little About me
            </h2>
            <p className="relative text-[clamp(15px,1vw,70px)] space-y-8 mb-2 mt-5 leading-5 text-[#CFCFCF] overflow-hidden">
              I am a Computer Science undergraduate with a passion for creating
              innovative solutions. Currently, I am specializing in Machine
              Learning, while also nurturing a strong interest in full stack web
              development, which I am pursuing independently. <br />
              <br /> This portfolio showcases my skills, interests, and
              dedication to growth in these fields
            </p>
            <p className="text-[clamp(18px,1.5vw,20px)] text-center w-max text-[#CFCFCF]  overflow-hidden">
              - To be great you have to give it you’re all and a little bit{" "}
              <span className="text-white font-semibold">more</span>. -
            </p>
          </div>
        </div>
        <div
          className={`relative mr-2 top-10 ink-card w-max h-max  p-[2vw] rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <div className="">
              <h1 className="h-max text-[clamp(10px,1.3vw,100px)] font-poppins text-center">
                Looking for a new Talent ?
              </h1>
            </div>
            <div className="relative h-max mb-[4vh] ">
              <h2 className="text-[clamp(15px,1.2vw,100px)] text-center pt-3 transition-colors hover:text-[#8078d3]">
                <a href="mailto:chamodyachiarth@gmail.com">
                  {" "}
                  chamodyachirath@gmail.com{" "}
                </a>
              </h2>
            </div>
            <div className="absolute w-max h-max  top-20  right-0 ">
              <h2 className="pt-3  text-[clamp(15px,1.3vw,100px)] ">
                <a href="CV.pdf" download="Chamodya_Chirath.pdf">
                  <button className="flex hover:text-[#4c77ab]">
                    <div className="w-[10px] h-[10px] bg-[#4c77ab] mr-2 rounded-circle mt-2 transition-[ease-in-out] "></div>{" "}
                    Get CV
                  </button>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Project Card */}
      <div className="relative mt-10 mb-10 left-0 w-full h-max flex justify-around">
        <a
          href="#projects"
          className={`project-card w-[12vw] h-max p-[2vw] pb-2 rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className="relative h-max text-[3vw]  font-Lexend text-center ">
              <Counter endNumber={NoProject} />
            </h1>
            <p className="relative -top-2 text-[15px]  text-[#CFCFCF] text-center ">
              projects completed
            </p>
          </div>
        </a>

        <div
          className={`Achievement-card w-max h-max p-[2vw]  rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative block ${
              animate ? "fade-in-up fade-delay-2" : ""
            }`}
          >
            <div className="relative flex mb-2 h-12">
              <h1 className="font-Lexend text-[3vw] text-center flex">
                <i className="relative text-clamp fa fa-trophy mr-1 top-2"></i>
                <Counter endNumber={NoAchivements} />
              </h1>
            </div>
            <div className="relative top-5 pb-2">
              <p className=" text-[15px]  text-[#CFCFCF] text-center">
                Achievements
              </p>
            </div>
          </div>
        </div>

        <div
          className={`Skills-card w-max h-max p-8 pb-2 rounded-md bg-[#101014] text-white overflow-hidden cursor-pointer`}
          onClick={() => setShowModal(true)}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className="text-[3vw] mb-5 font-Lexend text-center">
              <Counter endNumber={NoSkills} />
            </h1>
            <p className="relative -top-2 text-[15px] space-y-8  leading-5 text-[#CFCFCF] text-center">
              Skills collected
            </p>
          </div>
        </div>
        <div
          className={`Tech-card w-max h-max p-2 pt-8 rounded-md bg-[#101014] text-white`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className="text-[clamp(20px,3vw,45px)] mb-5 font-Lexend text-center">
              TECH
            </h1>
            <p className="relative -top-2 text-[15px] space-y-8 leading-5 text-[#CFCFCF] text-center">
              Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
