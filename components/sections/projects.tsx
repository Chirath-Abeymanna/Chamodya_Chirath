"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, type ReactNode, type RefObject } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Brain, Globe, Lock, CreditCard } from "lucide-react";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiReact, SiNodedotjs, 
  SiPython, SiGo, SiPostgresql, SiMongodb, SiDocker, 
  SiSpringboot, SiMysql, SiPytorch, SiTailwindcss, SiGithubactions,
  SiApachekafka, SiTrpc
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";

const projects = [
  {
    title: "Skillify",
    subtitle: "Career Roadmap Generator",
    description:
      "Skillify is an AI-powered platform transforming how users advance their academic and professional journeys. By analyzing each user’s unique skills, interests, and goals, Skillify creates dynamic, personalized career roadmaps. It helps users identify strengths, close skill gaps, and follow curated learning paths with certifications, all tailored to meet evolving market demands.",
    tech: ["Next js", "Typescript", "Mongo DB", "Docker", "OpenAI API"],
    icon: Globe,
    featured: true,
    githubUrl: "https://github.com/Chirath-Abeymanna/Skillify",
    liveUrl: "https://www.skillify.solutions/",
    status: "Open Source",
  },
  {
    title: "Securize",
    subtitle: "Cybersecurity analytics platform",
    description:
      "Securize is an AI-powered cybersecurity analytics platform that helps organizations identify and respond to security threats in real-time. It uses machine learning to analyze security events and provide insights into potential vulnerabilities and threats.",
    tech: ["Python", "Golang", "PostgreSQL", "Docker", "FastAPI", "GitHub Actions", "Next js", "AWS"],
    icon: Shield,
    featured: false,
    githubUrl: null,
    liveUrl: null,
    status: "Private Beta",
  },
  {
    title: "TumorSense",
    subtitle: "AI-Powered Tumor Detection System",
    description:
      "TumorSense is a Light weight CLI ML model that uses deep learning to detect tumors in using medical data. It mainly targets breast cancer detection and provides insights on whether the tumor is malignant or benign.",
    tech: ["Python", "Pytorch", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    icon: Brain,
    featured: false,
    githubUrl: "https://github.com/Chirath-Abeymanna/Cancer_predicting_model",
    liveUrl: null,
    status: "Open Source",
  },
  {
    title: "Car Price Prediction model",
    subtitle: "Machine Learning model",
    description:
      "Car Price Prediction model is a Light weight CLI ML model that uses deep learning to predict the price of a car based on the features of the car.",
    tech: ["Python", "Pytorch", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    icon: Lock,
    featured: false,
    githubUrl: "https://github.com/Chirath-Abeymanna/Car-Price-Predicting-system",
    liveUrl: null,
    status: "Open Source",
  },
  {
    title: "Ticketerr",
    subtitle: "Ticketing System",
    description:
      "Ticketerr is a movies and tickets booking system that help users to buy tickets and vendors to sell tickets.",
    tech: ["Spring Boot", "MySQL", "JSON", "Github Action"],
    icon: CreditCard,
    featured: false,
    githubUrl: "https://github.com/Chirath-Abeymanna/Real_Time_Ticketing_System",
    liveUrl: null,
    status: "Open Source",
  },
];

const techStack = [
  { name: "React", Icon: SiReact },
  {name:"RestAPI", Icon:SiApachekafka},
  {name:"gRPC", Icon:SiTrpc },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "Go", Icon: SiGo },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "API", Icon: SiSpringboot }, // Used as general API / backend logic fallback for now, using spring boot
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: FaAws },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Spring Boot", Icon: SiSpringboot },
];

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function FadeIn({ children, index = 0, className }: { children: ReactNode; index?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={slideIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`h-full${className ? ` ${className}` : ""}`}
    >
      {children}
    </motion.div>
  );
}

function ScrollItem({ tech, containerRef }: { tech: { name: string, Icon: any }, containerRef: RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const update = () => {
      if (ref.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const itemRect = ref.current.getBoundingClientRect();
        
        const containerCenter = containerRect.left + containerRect.width / 2;
        const itemCenter = itemRect.left + itemRect.width / 2;
        
        const dist = Math.abs(containerCenter - itemCenter);
        const maxDist = containerRect.width / 2;
        
        const ratio = Math.max(0, 1 - dist / maxDist);
        // Smoothstep easing for a smoother transition
        const easedRatio = ratio * ratio * (3 - 2 * ratio);
        
        const val = 0.4 + easedRatio * 0.6;
        
        ref.current.style.transform = `scale(${val})`;
        ref.current.style.opacity = val.toString();
      }
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerRef]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-3 min-w-[100px] text-muted-foreground transition-colors will-change-transform hover:opacity-100! hover:scale-110!">
      <tech.Icon size={40} className="hover:text-foreground transition-colors" />
      <span className="text-xs font-mono">{tech.name}</span>
    </div>
  );
}

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn index={0}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">03</span>
            <Separator className="flex-1 max-w-xs" />
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">Projects</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} index={i + 1} className={project.featured ? "md:col-span-2" : ""}>
                <Card
                  className={`group relative h-full flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg cursor-default ${
                    project.featured
                      ? "border-foreground/20 bg-card hover:border-foreground/40 hover:shadow-foreground/5"
                      : "border-foreground/10 hover:border-foreground/30 hover:shadow-foreground/5"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs font-mono">
                        Featured
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-muted mt-0.5 shrink-0">
                        <Icon size={16} className="text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-base">{project.title}</CardTitle>
                          <span className="text-xs text-muted-foreground/60 border border-border rounded px-1.5 py-0.5 font-mono">
                            {project.status}
                          </span>
                        </div>
                        <CardDescription className="mt-0.5">{project.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 flex-1 pt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs font-mono">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                      {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={13} />
                        Source
                      </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink size={13} />
                          Live
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn index={projects.length + 1}>
          <div className="mt-32">
            
            <div ref={scrollContainerRef} className="relative flex overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-16 animate-scroll group-hover:[animation-play-state:paused] whitespace-nowrap py-4 pl-16 w-max">
                {[...techStack, ...techStack].map((tech, i) => (
                  <ScrollItem key={i} tech={tech} containerRef={scrollContainerRef} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
