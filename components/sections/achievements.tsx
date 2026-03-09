"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Shield,
  Code2,
  Star,
  Award,
  Zap,
  Target,
  GitBranch,
} from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "Active contributor to cybersecurity and developer tooling open-source projects on GitHub.",
    tag: "Community",
  },
  {
    icon: Award,
    title: "AI Integration Pioneer",
    description: "Early adopter and implementer of LLM-based features in production applications, including RAG pipelines.",
    tag: "AI/ML",
  },
];

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function FadeIn({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={slideIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn index={0}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">05</span>
            <Separator className="flex-1 max-w-xs" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">Achievements</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} index={i + 1}>
                <div className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon size={15} className="text-muted-foreground" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono flex-shrink-0">
                      {item.tag}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-tight mb-1.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
