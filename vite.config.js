import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["svelte"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["svelte"],
  },
};

export default config;
