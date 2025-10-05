<script>
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
</script>
