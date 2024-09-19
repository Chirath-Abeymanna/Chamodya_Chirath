import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Chamodya_Chirath/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Controls file paths in dist
      },
    },
  },
  plugins: [react()],
});
