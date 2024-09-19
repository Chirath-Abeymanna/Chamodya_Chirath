import { useState, useEffect } from "react";

interface CounterProps {
  endNumber: number;
  duration?: number;
}

const ProjectCard: React.FC<CounterProps> = ({
  endNumber,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endNumber / (duration / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= endNumber) {
        setCount(endNumber);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [endNumber, duration]);

  return <h1 className="text-5xl mb-5 font-Lexend text-center">{count}+</h1>;
};

export default ProjectCard;
