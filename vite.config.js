import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/Experiencia-Pratica-1/" : "/",
  build: {
    rollupOptions: {
      input: {
        index: `${projectRoot}index.html`,
        projetos: `${projectRoot}projetos.html`,
        cadastro: `${projectRoot}cadastro.html`,
      },
    },
  },
});
