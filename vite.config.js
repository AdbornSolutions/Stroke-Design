import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import optimizedImages from "./build/optimizedImages.js";

export default defineConfig({
  plugins: [
    optimizedImages(),
    react(),
    tailwindcss(),
  ],
});
