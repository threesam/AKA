<script>
  import "../app.css";

  import { darkMode } from "$lib/utils/darkMode";
  import Footer from "$lib/components/Footer.svelte";

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

  let { children, data } = $props();
</script>

<main>
  {@render children()}
</main>

<Footer transformedWords={data.words} />
