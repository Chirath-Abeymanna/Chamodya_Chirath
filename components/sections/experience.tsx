"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const experiences = [
  {
    title: "Intern - Project Manager & Full Stack Developer ",
    company: "MishraWarna (Pvt) Ltd",
    period: "2025 Jun — 2026 Jan",
    type: "Full-time",
    description:
      "Contributed to end-to-end delivery of Optical Spaces web application for clients. Managed cross-functional teams, defined technical roadmaps, and architected scalable backend systems using Next js.",
    highlights: [
      "Architected microservice backends ",
      "Reduced project delivery time by 30% via Agile sprint planning",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Jira",
      "Agile sprint planning",
      "Slack",
    ],
  },
];

function FadeIn({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={slideIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn index={0}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-md font-mono uppercase tracking-[0.3em] text-muted-foreground">
              02
            </span>
            <Separator className="flex-1 max-w-xs" />
            <h2 className="text-md font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Experience
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-46 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.title} index={i + 1}>
                <div className="md:grid md:grid-cols-[10rem_auto] md:gap-12">
                  {/* Date column */}
                  <div className="mb-4 md:mb-0 md:text-right">
                    <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                      {exp.period}
                    </p>
                    <span className="inline-block mt-1 text-xs text-muted-foreground/60 border border-border rounded px-1.5 py-0.5">
                      {exp.type}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="relative pl-0 md:pl-12">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full border-2 border-foreground bg-background" />

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-base font-semibold">{exp.title}</h3>
                        <a
                          href="https://mishrawarna.com"
                          target="_blank"
                          className="text-sm text-muted-foreground"
                        >
                          {exp.company}
                        </a>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs font-mono"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
