<script>
  import { goto } from "$app/navigation";

  let { class: classNames } = $props();

  // Go back function using history with scroll restoration
  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Use history.back() which preserves scroll position
      window.history.back();
    } else {
      // Fallback to home page
      goto("/");
    }
  }
</script>

<div class="sticky top-0 z-50 py-3 {classNames}">
  <div class="flex justify-start">
    <button
      onclick={goBack}
      class="p-3 inline-flex items-center font-light gap-2 text-[var(--textColor)] hover:text-[var(--primary)] transition-colors duration-300 bg-[var(--background)]/50 backdrop-blur-md rounded-3xl"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span class="hover:underline">Want to go back?</span>
    </button>
  </div>
</div>
