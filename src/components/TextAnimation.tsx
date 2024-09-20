"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { h2 } from "framer-motion/client";
import { useRef } from "react";

const TextAnimation = ({ paragraph }: { paragraph: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      [0.5, 1],
      [1, 0.5],
    ],
  });
  const words = paragraph.split("");

  return (
    <h2>
      {words.map((word, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [0 + index * 0.01, 0.2 + index * 0.01],
          [0.1, 1]
        );

        return (
          <motion.span
            key={index}
            style={{ opacity }}
            transition={{ type: "spring" }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default TextAnimation;
