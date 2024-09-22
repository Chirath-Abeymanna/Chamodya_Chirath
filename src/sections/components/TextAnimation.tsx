"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollParagraph = ({
  text,
  changeSpeed,
}: {
  text: string;
  changeSpeed: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      [0.4, 1],
      [1, 0.4],
    ],
  });
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className="text-8xl text-white text-center font-poppins pt-[30vh]"
    >
      {words.map((word, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [0 + index * changeSpeed, changeSpeed + index * changeSpeed],
          [0.2, 1]
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
