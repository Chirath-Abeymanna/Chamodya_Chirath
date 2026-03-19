"use client";

import { motion } from "framer-motion";

type SplashScreenProps = {
  isVisible: boolean;
};

export function SplashScreen({ isVisible }: SplashScreenProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-100 overflow-hidden bg-background"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_-10%,hsl(213_80%_60%/0.14),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_120%,hsl(333_85%_62%/0.14),transparent)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground"
          >
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Chamodya
            <span className="ml-3 text-muted-foreground">Chirath</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-2 h-1.5 w-52 overflow-hidden rounded-full bg-secondary"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[linear-gradient(90deg,hsl(213_80%_60%),hsl(333_85%_62%))]"
              animate={{ x: ["-110%", "210%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-sm text-muted-foreground"
          >
            Loading Details
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
