"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, X } from "lucide-react";

type HeroProps = {
  onVideoReady?: () => void;
};

export function Hero({ onVideoReady }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const hasNotifiedVideoReady = useRef(false);

  // Mouse position tracking for background grid
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Calculate relative coordinates
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const container = ref.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovering(true));
      container.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovering(true));
        container.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const notifyVideoReady = () => {
    if (hasNotifiedVideoReady.current) {
      return;
    }
    hasNotifiedVideoReady.current = true;
    onVideoReady?.();
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        {/* Static base grid (faint) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-90 dark:opacity-20" />

        {/* Interactive colored grid lines */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovering ? 0.2 : 0.1,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.8) 0%, rgba(236, 72, 153, 0.6) 50%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
            WebkitMaskSize: `4rem 4rem`,
            maskImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
            maskSize: `4rem 4rem`,
          }}
        />

        {/* Soft glowing aura behind the colored grid lines */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovering ? 0.35 : 0,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 60%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
            WebkitMaskSize: `4rem 4rem`,
            maskImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
            maskSize: `4rem 4rem`,
          }}
        />

        {/* Ambient static glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,hsl(213_80%_60%/0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,hsl(213_80%_60%/0.12),transparent)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,hsl(213_70%_55%/0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,hsl(213_70%_55%/0.08),transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Two-column content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-10 py-24 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-14 items-center">
          {/* LEFT — Video */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="relative w-full">
              {/* Subtle glow ring around video */}
              <div className="absolute -inset-4 rounded-3xl bg-blue-400/25 blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl aspect-video">
                <video
                  src="/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={notifyVideoReady}
                  onCanPlayThrough={notifyVideoReady}
                  onError={notifyVideoReady}
                  className="absolute inset-0 w-[98%] scale-105 h-full object-cover hover:scale-110 transition-all duration-800 ease-in-out "
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start order-2 lg:order-2 lg:ml-10"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest lg:tracking-[0.3em] text-muted-foreground border border-border rounded-full px-4 py-1.5">
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-5 text-center lg:text-left"
            >
              Chamodya
              <br />
              <span className="text-muted-foreground lg:ml-96"> Chirath</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground font-light mb-3 text-center lg:text-left"
            >
              Software Engineer{" "}
              <span className="text-foreground/40 px-2">·</span>
              Full Stack Developer{" "}
              <span className="text-foreground/40 px-2">·</span>
              AI Enthusiast
            </motion.p>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-muted-foreground mb-10 max-w-md leading-relaxed text-center lg:text-left"
            >
              Building scalable web applications and intelligent solutions.
              <br />
              Code. Build. Solve. Repeat.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="px-8 font-medium"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsContactOpen(true)}
                className="px-8 font-medium"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom center, independent of columns */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-2xl p-8 shadow-[0_8px_32px_hsl(var(--foreground)/0.08),inset_0_1px_0_hsl(var(--background)/0.5)]"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute right-6 top-6 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Get in touch
              </h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out to me via email or connect with me on
                social media. I am always open to new opportunities!
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:chamodyachirath@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-border/40 bg-background/30 p-4 hover:bg-accent/40 hover:border-border transition-all group"
                >
                  <div className="flex bg-muted rounded-xl p-3 group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} className="text-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Email</span>
                    <span className="text-xs text-muted-foreground">
                      chamodyachirath@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/chirath-abeymanna-990700292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/40 bg-background/30 p-4 hover:bg-accent/40 hover:border-border transition-all group"
                >
                  <div className="flex bg-muted rounded-xl p-3 group-hover:bg-[#0A66C2]/10 transition-colors">
                    <Linkedin
                      size={20}
                      className="text-foreground group-hover:text-[#0A66C2] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">LinkedIn</span>
                    <span className="text-xs text-muted-foreground">
                      Chirath Abeymanna
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Chirath-Abeymanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/40 bg-background/30 p-4 hover:bg-accent/40 hover:border-border transition-all group"
                >
                  <div className="flex bg-muted rounded-xl p-3 group-hover:bg-foreground/10 transition-colors">
                    <Github size={20} className="text-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">GitHub</span>
                    <span className="text-xs text-muted-foreground">
                      Chirath-Abeymanna
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
