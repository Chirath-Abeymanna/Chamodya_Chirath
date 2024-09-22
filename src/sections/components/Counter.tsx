// Counter component to animate the numbers in cards in hero section

import { useState, useEffect } from "react";

interface CounterProps {
  endNumber: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ endNumber, duration = 2000 }) => {
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

  return <p className="text-clamp mb-5 font-Lexend text-center">{count}+</p>;
};

export default Counter;
