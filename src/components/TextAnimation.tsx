"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollParagraph = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      [0.6, 1],
      [1, 0.6],
    ],
  });
  const words = text.split("");

  return (
    <div
      ref={ref}
      className="text-8xl text-white text-center"
    >
      {words.map((word, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [0 + index * 0.1, 0.2 + index * 0.1],
          [0.1, 1]
        );

        return (
          <motion.span
            key={index}
            style={{ opacity }}
            transition={{ type: "spring" }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ScrollParagraph;
