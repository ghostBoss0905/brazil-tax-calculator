import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  // 强制指定输出目录为 dist，这是 Vercel 的标准
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
