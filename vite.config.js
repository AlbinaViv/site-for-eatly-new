import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Використовуйте './', щоб шляхи працювали правильно
  server: {
    port: 3000,
  },
});
