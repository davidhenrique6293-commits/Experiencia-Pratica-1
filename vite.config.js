import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
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
