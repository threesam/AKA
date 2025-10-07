<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { darkMode } from "$lib/utils/darkMode";

  // Apply theme to body based on dark mode state
  $effect(() => {
    if (typeof document !== "undefined") {
      const body = document.querySelector("body");
      if (body) {
        if ($darkMode) {
          body.classList.add("dark");
        } else {
          body.classList.remove("dark");
        }
      }
    }
  });

  let { children } = $props();
</script>

<Nav />

<main>
  {@render children()}
</main>

<Footer />
