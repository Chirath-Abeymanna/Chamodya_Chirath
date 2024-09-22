import { useEffect } from "react";
import "../css/cursor.css";

function Cursor() {
  useEffect(() => {
    const cursorDot = document.querySelector(
      "[data-cursor-dot]"
    ) as HTMLElement;
    const cursorOutline = document.querySelector(
      "[data-cursor-outline]"
    ) as HTMLElement;

    if (!cursorDot || !cursorOutline) return; // Ensure elements exist

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      // Hide the custom cursor when mouse leaves the window
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
      console.log("Mouse left");
    };

    const handleMouseEnter = () => {
      // Show the custom cursor again when mouse enters
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";
      console.log("Mouse enter");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </div>
  );
}

export default Cursor;
