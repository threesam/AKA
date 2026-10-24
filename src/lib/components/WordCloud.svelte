<script>
  import { onMount, onDestroy, untrack } from "svelte";
  import { fade } from "svelte/transition";
  import WordCloud from "wordcloud";

  // Props using Svelte 5 runes
  let {
    words = [],
    shape = "circle",
    opacity = 0.1,
    className = "",
    ...restProps
  } = $props();

  // State using Svelte 5 runes
  let canvasElement = $state(null);
  let containerElement = $state(null);
  let wordCloudInstance = $state(null);
  let isInitialized = $state(false);

  // Dark mode detection using CSS media query
  let isDark = $state(false);

  function updateDarkMode() {
    if (typeof window !== "undefined") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  // Resize observer for responsive behavior
  let resizeObserver = $state(null);

  // Initialize word cloud
  function initializeWordCloud() {
    if (!canvasElement || !containerElement || !words.length) return;

    // Clear existing word cloud
    if (wordCloudInstance) {
      wordCloudInstance = null;
    }

    // Use requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      // Get container dimensions
      const rect = containerElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      // Set canvas dimensions
      canvasElement.width = width;
      canvasElement.height = height;

      // Calculate grid size based on container size
      const gridSize = Math.min(width, height) / 50;

      // Color scheme based on theme
      const colors = isDark
        ? { primary: "#e5e7eb", background: "#000000" }
        : { primary: "#374151", background: "#ffffff" };

      // Create word cloud
      wordCloudInstance = WordCloud(canvasElement, {
        list: words,
        color: colors.primary,
        backgroundColor: colors.background,
        fontFamily: "anton",
        gridSize: Math.max(3, Math.floor(gridSize)),
        minSize: 1,
        weightFactor: 5,
        shape,
        ...restProps,
      });

      isInitialized = true;
    });
  }

  // Redraw when the theme or the word list changes — but only once the
  // first (deferred) draw has happened; untrack keeps the first draw from
  // retriggering these and drawing the cloud two more times.
  $effect(() => {
    isDark;
    words;
    if (untrack(() => isInitialized)) initializeWordCloud();
  });

  onMount(() => {
    // Initialize dark mode detection
    updateDarkMode();

    // Listen for dark mode changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      isDark = e.matches;
    };
    mediaQuery.addEventListener("change", handleChange);

    // Set up resize observer
    resizeObserver = new ResizeObserver(() => {
      if (isInitialized) {
        initializeWordCloud();
      }
    });

    if (containerElement) {
      resizeObserver.observe(containerElement);
    }

    // ponytail: the layout runs wordcloud2 on the main thread (~8s of CPU on
    // a throttled phone), so wait until the cloud is near the viewport and
    // the browser is idle. Hero clouds start after load; the footer one only
    // when scrolled to.
    let idleId;
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1));
    const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
    const visibility = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        visibility.disconnect();
        idleId = idle(initializeWordCloud);
      },
      { rootMargin: "200px" },
    );
    if (containerElement) visibility.observe(containerElement);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      visibility.disconnect();
      cancelIdle(idleId);
    };
  });

  onDestroy(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    if (wordCloudInstance) {
      wordCloudInstance = null;
    }
  });
</script>

<div
  bind:this={containerElement}
  class="relative w-full h-full overflow-hidden {className}"
>
  <canvas
    bind:this={canvasElement}
    class="absolute inset-0 w-full h-full"
    style="opacity: {opacity};"
  ></canvas>
</div>
