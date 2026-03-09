"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bsc (Hons) Computer Science",
    institution: "University of Westminster (conducted through Informatics Institue of Technology, Sri Lanka)",
    period: "2024 — 2027",
    location: "Colombo, Sri Lanka",
    status: "Pursuing",
    courses: [
      "Data Structures & Algorithms",
      "Network Security",
      "Software Engineering",
      "Operating Systems",
      "Database Management",
      "Machine Learning Fundamentals",
      "Full Stack Development",
      "Cloud Computing",
    ],
    description:
      "Focused on the intersection of software engineering and Computer Science. Engaged in research projects and secure system design.",
  },
  {
    degree: "Advanced Level (A/L) — Commerce Stream",
    institution: "R/ Sivali Central College",
    period: "2019 — 2022",
    location: "Ratnapura, Sri Lanka",
    status: "Completed",
    courses: ["Information and Communication Technology (A)", "Accounting (A)", "Economics (B)"],
    description:
      "Focused on the intersection of software engineering and Computer Science. Engaged in research projects and secure system design.",
  },
];

const certifications = [
  { name: "Coderally 5.0 Hackathon", issuer: "Coderally", year: 2024 },
  { name: "IEEE XTREME 18.0", issuer: "IEEE", year: 2024 },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: 2025 },
  { name: "Go Programming (Fundamentals)", issuer: "Udemy", year: 2025 },
];

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function FadeIn({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
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

export function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn index={0}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">04</span>
            <Separator className="flex-1 max-w-xs" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">Education</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Education entries */}
          <div className="md:col-span-2 space-y-10">
            {education.map((edu, i) => (
              <FadeIn key={edu.degree} index={i + 1}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-muted mt-0.5 shrink-0">
                      <GraduationCap size={15} className="text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold leading-snug">{edu.degree}</h3>
                        <Badge
                          variant={edu.status === "Pursuing" ? "default" : "secondary"}
                          className="text-xs font-mono"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground/60 font-mono mt-0.5">
                        {edu.period} · {edu.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pl-11">
                    {edu.courses.map((c) => (
                      <Badge key={c} variant="outline" className="text-xs font-mono">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <div className="md:col-span-1">
            <FadeIn index={3}>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Certifications
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="group">
                    <p className="text-sm font-medium leading-snug">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/60 font-mono">{cert.year}</p>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
