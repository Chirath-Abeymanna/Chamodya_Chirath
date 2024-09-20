/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/NavBar.tsx",
    "./src/hero.tsx",
    "./src/Education.tsx",
    "./src/components/TextAnimation.tsx",
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
        hero: "#1E1E1E",
      },
      borderRadius: {
        circle: "50%",
      },
      fontFamily: {
        Kameron: "Kameron",
        spartan: "spartan",
        Lexend: "Lexend",
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
