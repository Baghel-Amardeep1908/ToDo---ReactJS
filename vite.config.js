import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Baghel-Amardeep1908/ToDo---ReactJS.git",

  plugins: [react()],
});
