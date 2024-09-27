import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Adjust this according to your project structure
    },
  },
  build: {
    rollupOptions: {
      external: ["react-redux"],
    },
  },
});
