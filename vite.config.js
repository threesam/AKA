import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";

// Vite 8 (rolldown) dropped the object form of manualChunks; the old
// `vendor: ["svelte"]` split + optimizeDeps hint are gone — SvelteKit's
// default chunking already splits the runtime out.
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), tailwindcss()],
};

export default config;
