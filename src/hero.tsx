// This project was created by C.C.

import { useEffect, useState } from "react";
import Counter from "./components/Counter";

const Hero = () => {
  const NoProject = 3;
  const NoAchivements = 5;
  const NoSkills = 10;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full bg-hero h-[100vh] flex flex-col justify-center overflow-x-hidden"
    >
      <div className="header flex relative">
        <div
          className={`font-Kameron text-white ml-5 mt-10 text-5xl space-y-3 cursor-default tracking-wide ${
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
          <button className="border rounded-md border-[#49B4CE] w-32 h-15 p-2 mt-10 font-spartan font-medium text-hire text-2xl">
            Hire me
          </button>
        </div>
      </div>

      {/* Background blur */}
      <div
        className={`absolute top-[40vh] left-[20vw] background w-[30rem] h-[20rem] rounded-circle bg-[#008BD6] blur-[6rem] ${
          animate ? "fade-in-up fade-delay-3" : ""
        }`}
      ></div>

      {/* About card */}
      <div
        className={`about-card absolute top-60 left-5 w-[100%] max-w-[45vw] h-[100%] max-h-[15rem] p-8 mr-6 rounded-md bg-[#101014] text-white overflow-hidden`}
      >
        <div className={`${animate ? "fade-in-up fade-delay-1" : ""}`}>
          <h1 className="text-xl mb-5">Little About me</h1>
          <p className="text-[clamp(9px,0.8vw,20px)] space-y-8 mb-2 leading-5 text-[#CFCFCF] overflow-hidden">
            I am a Computer Science undergraduate with a passion for creating
            innovative solutions. Currently, I am specializing in Robotics
            Engineering and Machine Learning, while also nurturing a strong
            interest in web development, which I am pursuing independently.{" "}
            <br />
            <br /> This portfolio showcases my skills, interests, and dedication
            to growth in these fields
          </p>
          <p className="text-[clamp(9px,1vw,20px)] text-center text-[#CFCFCF]">
            - To be great you have to give it you’re all and a little bit{" "}
            <span className="text-white font-semibold">more</span>. -
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="absolute top-[70vh] left-0 w-full h-max flex justify-around">
        <div
          className={`project-card w-[12vw] h-[20vh] p-8 rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className="h-max  font-Lexend text-center">
              <Counter endNumber={NoProject} />
            </h1>
            <p className="relative -top-2 text-[12px] space-y-8 leading-5 text-[#CFCFCF] text-center">
              projects completed
            </p>
          </div>
        </div>

        <div
          className={`Achievement-card w-[12vw] h-[20vh] p-2 pt-8 rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative block ${
              animate ? "fade-in-up fade-delay-2" : ""
            }`}
          >
            <div className="relative flex mb-8 ml-5 h-12">
              <h1 className="font-Lexend text-center flex">
                <i className="relative text-clamp fa fa-trophy mr-1 top-2"></i>
                <Counter endNumber={NoAchivements} />
              </h1>
            </div>
            <div className="relative -top-1">
              <p className=" text-[12px] space-y-8 leading-5 text-[#CFCFCF] text-center">
                Achievements
              </p>
            </div>
          </div>
        </div>

        <div
          className={`Skills-card w-[12vw] h-[20vh] p-2 pt-8 rounded-md bg-[#101014] text-white overflow-hidden`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className=" mb-5 font-Lexend text-center">
              <Counter endNumber={NoSkills} />
            </h1>
            <p className="relative -top-2 text-[12px] space-y-8  leading-5 text-[#CFCFCF] text-center">
              Skills collected
            </p>
          </div>
        </div>
        <div
          className={`Tech-card w-[12vw] h-[20vh] p-2 pt-8 rounded-md bg-[#101014] text-white`}
        >
          <div
            className={`relative ${animate ? "fade-in-up fade-delay-2" : ""}`}
          >
            <h1 className="text-[clamp(20px,3vw,45px)] mb-5 font-Lexend text-center">
              TECH
            </h1>
            <p className="relative -top-2 text-[12px] space-y-8 leading-5 text-[#CFCFCF] text-center">
              Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;