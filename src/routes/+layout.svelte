<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { darkMode } from "$lib/utils/darkMode";
  import { transform } from "$lib/utils/transform";

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

  // Transform words for WordCloud (same as homepage)
  const transformedWords =
    data?.data?.words && data?.data?.settings?.wordCloud?.uselessWords
      ? transform(data.data.words, data.data.settings.wordCloud.uselessWords)
      : [];
</script>

<Nav />

<main class="pt-12">
  {@render children()}
</main>

<Footer {transformedWords} />
