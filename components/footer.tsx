"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Chirath-Abeymanna",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chirath-abeymanna-990700292",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:chamodyachirath@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: name */}
        <div>
          <p className="text-sm font-semibold tracking-tight">
            Chamodya Chirath<span className="text-muted-foreground">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Software Engineer · Full Stack Developer
          </p>
        </div>

        {/* Center: links */}
        <div className="flex items-center gap-5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm group"
            >
              <Icon size={15} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        {/* Right: copyright */}
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Chamodya Chirath
        </p>
      </div>
    </footer>
  );
}
