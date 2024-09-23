/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/sections/NavBar.tsx",
    "./src/sections/hero.tsx",
    "./src/sections/projects.tsx",
    "./src/sections/Education.tsx",
    "./src/sections/Contact.tsx",
    "./src/sections/HeroMobile.tsx",
    ".src/sections/components/ProjectCard.tsx",
    "./src/sections/components/TextAnimation.tsx",
    "./src/sections/components/TimelineElements.tsx",
    "./src/sections/components/ContactForm.tsx",
    "./src/sections/components/NavBarMobile.tsx",
  ],
  theme: {
    extend: {
      width: {
        profile: "15vw",
        navbar: "30vw",
        hero: "70vw",
      },
      fontSize: {
        clamp: "clamp(20px, 3vw, 45px)",
      },
      textColor: {
        name: "#25C0E7",
        nav: "#1182B6",
        grey: "#8D8D8D",
        hire: "#49B4CE",
      },
      backgroundColor: {
        "nav-bg": "#121213",
        background: "#0B0B0C",
        blue: "#1182B6",
        card: "#101014",
      },
      borderRadius: {
        circle: "50%",
      },
      fontFamily: {
        Kameron: "Kameron",
        spartan: "spartan",
        Lexend: "Lexend",
        poppins: "poppins",
        guriella: "guriella",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
