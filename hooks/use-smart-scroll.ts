"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "achievements",
  "education",
];

const THRESHOLD = 0.4; // advance when 40% of section scrolled through
const COOLDOWN_MS = 1100; // prevent re-triggering during scroll animation

export function useSmartScroll() {
  const isScrollingRef = useRef(false);
  const lastAdvancedTo = useRef<string | null>(null);
  const lastScrollY = useRef(0);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Block while a programmatic scroll is in progress
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Only act when scrolling downward
      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;
      if (!scrollingDown) return;

      for (let i = 0; i < SECTION_IDS.length - 1; i++) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if the viewport top is within this section
        if (scrollY >= sectionTop - 5 && scrollY < sectionBottom - 5) {
          const progress = (scrollY - sectionTop) / sectionHeight;

          if (progress >= THRESHOLD) {
            const nextId = SECTION_IDS[i + 1];
            // Don't re-trigger the same transition
            if (lastAdvancedTo.current === nextId) break;

            const nextSection = document.getElementById(nextId);
            if (!nextSection) break;

            // Lock scrolling and advance
            isScrollingRef.current = true;
            lastAdvancedTo.current = nextId;

            nextSection.scrollIntoView({ behavior: "smooth" });

            // Clear any pending cooldown and set a fresh one
            if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
            cooldownTimer.current = setTimeout(() => {
              isScrollingRef.current = false;
              // Reset the tracker so the same section can auto-advance again
              // if user scrolls back and forward through it
              lastAdvancedTo.current = null;
            }, COOLDOWN_MS);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    };
  }, []);
}
