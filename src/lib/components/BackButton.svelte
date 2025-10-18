<script>
  import Link from "$lib/components/Link.svelte";

  let { class: classNames } = $props();
</script>

<div class="sticky top-0 z-50 py-3 {classNames}">
  <div class="flex justify-start">
    <Link
      href="/"
      variant="default"
      class="p-3 inline-flex items-center font-light gap-2 bg-[var(--background)]/50 backdrop-blur-md rounded-3xl"
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
      <span>Want to go back?</span>
    </Link>
  </div>
</div>
