import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8088,
    host: true,
  },
  server: {
    port: 8088,
    host: true,
  },
});
