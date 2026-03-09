"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Single overlay div — fades in as one unit so border/blur/bg appear together */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 bg-background/85 backdrop-blur-md border-b border-border shadow-sm ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <div ref={navRef}>
        <nav className="relative z-10 max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-semibold text-base tracking-tight hover:opacity-70 transition-opacity"
        >
          CC<span className="text-muted-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground text-sm font-normal"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {/* Mobile dropdown — floating glassmorphism card */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top right" }}
            className="md:hidden absolute top-18 right-4 w-56 z-50
              rounded-2xl border border-border/40
              bg-background/40 backdrop-blur-2xl
              shadow-[0_8px_32px_hsl(var(--foreground)/0.08),inset_0_1px_0_hsl(var(--background)/0.5)]
              p-2 flex flex-col gap-0.5"
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-background/50 font-normal rounded-xl"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
}
