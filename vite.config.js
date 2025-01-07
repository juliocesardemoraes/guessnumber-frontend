import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    root: "./src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/index.html"),
          login: resolve(__dirname, "src/login.html"),
          placar: resolve(__dirname, "src/placar.html"),
        },
      },
    },
  };
});
