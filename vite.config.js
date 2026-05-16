import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const repoName = "renan-gagliano-institutional-platform";
const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  base: process.env.GITHUB_PAGES === "true" ? `/${repoName}/` : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
