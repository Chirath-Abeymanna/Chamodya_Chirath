"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      variants={slideIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-md font-mono uppercase tracking-[0.3em] text-muted-foreground">01</span>
            <Separator className="flex-1 max-w-xs" />
            <h2 className="text-md font-mono uppercase tracking-[0.3em] text-muted-foreground">About</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-tight">
                I build things that live at the intersection of{" "}
                <span className="text-foreground font-medium">software</span>,{" "}
                <span className="text-foreground font-medium">security</span>, and{" "}
                <span className="text-foreground font-medium">intelligence</span>.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                With a background spanning full-stack engineering and project management, I approach every problem from multiple angles — writing the code,
                securing it, and shipping it on time.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Currently focused on building AI-assisted security tooling and scalable backend systems
                using Go and Python. I believe in clear architecture, minimal abstractions, and code
                that&apos;s as readable as it is robust.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground leading-relaxed">
                Outside of writing code, I focus on strengthening my problem-solving, communication, and teamwork skills, while 
                continuously learning new technologies and collaborating with others to build better software.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-6 bg-blue-400/20 blur-3xl pointer-events-none animate-blob" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
                {/* Mid glow ring */}
                <div className="absolute -inset-2 bg-blue-500/10 blur-xl pointer-events-none animate-blob" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
                <div 
                  className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden border border-border/60 shadow-2xl animate-blob transition-all duration-500"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                >
                  <img
                    src="/m.jpeg"
                    alt="Chamodya Chirath"
                    className="w-full h-full object-cover object-[center_10%] scale-110"
                  />
                </div>
                {/* Decorative shimmer ring */}
                <div 
                  className="absolute inset-0 ring-1 ring-blue-400/30 pointer-events-none animate-blob"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
