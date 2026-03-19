"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/footer";
import { SplashScreen } from "@/components/splash-screen";

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isMinDurationMet, setIsMinDurationMet] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const minDurationTimer = window.setTimeout(() => {
      setIsMinDurationMet(true);
    }, 1400);

    const fallbackTimer = window.setTimeout(() => {
      setIsVideoReady(true);
    }, 5000);

    return () => {
      window.clearTimeout(minDurationTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (isMinDurationMet && isVideoReady) {
      setIsSplashVisible(false);
    }
  }, [isMinDurationMet, isVideoReady]);

  useEffect(() => {
    document.body.style.overflow = isSplashVisible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSplashVisible]);

  return (
    <>
      <AnimatePresence>
        {isSplashVisible ? <SplashScreen isVisible={isSplashVisible} /> : null}
      </AnimatePresence>

      <main>
        <Navbar />
        <Hero onVideoReady={() => setIsVideoReady(true)} />
        <About />
        <Experience />
        <Projects />
        {/* <Achievements /> */}
        <Education />
        <Footer />
      </main>
    </>
  );
}
