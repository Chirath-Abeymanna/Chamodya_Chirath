"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-9" aria-hidden />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative overflow-hidden group"
    >
      <Sun
        className="absolute transition-all duration-300 rotate-0 scale-100 group-hover:rotate-12 dark:-rotate-90 dark:scale-0"
        size={18}
      />
      <Moon
        className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100 dark:group-hover:-rotate-12"
        size={18}
      />
    </Button>
  );
}
