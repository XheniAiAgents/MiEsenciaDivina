import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8088,
    host: true,
    allowedHosts: ["miesenciadivina.com", "www.miesenciadivina.com"],
  },
  server: {
    port: 8088,
    host: true,
  },
});
