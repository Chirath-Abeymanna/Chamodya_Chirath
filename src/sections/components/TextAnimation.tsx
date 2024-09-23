"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollParagraph = ({
  text,
  paragraph,
  changeSpeed,
}: {
  text: string;
  paragraph: string;
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

  const words = paragraph?.trim() ? paragraph.split(" ") : text.split(" ");

  return (
    <div
      ref={ref}
      className={`${
        paragraph.trim()
          ? "text-[7vw]  text-center pl-4 h-[100vh] overflow-auto"
          : "text-[clamp(50px,10vw,200px)] text-center h-max overflow-auto"
      } text-white font-poppins relative`}
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
            className={`${
              paragraph.trim() ? "mr-2" : " ml-0 relative "
            } inline-block`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ScrollParagraph;
