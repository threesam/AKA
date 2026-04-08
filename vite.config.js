import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/svelte")) return "vendor";
        },
      },
    },
  },
  optimizeDeps: {
    include: ["svelte"],
  },
};

export default config;
