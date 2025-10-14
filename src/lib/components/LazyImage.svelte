<script>
  import { fade, fly } from "svelte/transition";
  import { urlFor } from "$lib/utils/sanity";

  let {
    url,
    alt = "",
    caption,
    rounded = false,
    size = "medium", // small, medium, large, xlarge
    aspectRatio = "auto", // auto, square, video, wide
    quality = 80,
    priority = false, // Skip lazy loading for above-the-fold images
  } = $props();

  let container = $state();
  let imageElement = $state();
  let loaded = $state(false);
  let visible = $state(false);
  let width = $state(0);
  let height = $state(0);
  let observer = $state();
  let showPlaceholder = $state(true);
  let showImage = $state(false);

  // Size configurations for different contexts
  const sizeConfig = {
    small: { width: 300, height: 200 }, // Cards, thumbnails
    medium: { width: 600, height: 400 }, // Standard content
    large: { width: 1200, height: 800 }, // Hero images, featured
    xlarge: { width: 1920, height: 1080 }, // Full-width banners
  };

  // Aspect ratio configurations
  const aspectRatioConfig = {
    auto: null, // Use natural aspect ratio
    square: 1,
    video: 16 / 9,
    wide: 21 / 9,
  };

  function getImageDimensions() {
    const config = sizeConfig[size] || sizeConfig.medium;
    const aspectRatioValue = aspectRatioConfig[aspectRatio];

    if (aspectRatioValue) {
      return {
        width: config.width,
        height: Math.round(config.width / aspectRatioValue),
      };
    }

    return config;
  }

  function parentWidth(node) {
    if (node.parentElement) {
      width = node.parentElement.clientWidth;
      height = node.parentElement.clientHeight;
    }
  }

  function setupIntersectionObserver() {
    if (priority) {
      visible = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (container) {
      observer.observe(container);
    }
  }

  function handleImageLoad() {
    loaded = true;
    // Smooth transition from placeholder to image
    setTimeout(() => {
      showImage = true;
      showPlaceholder = false;
    }, 100);
  }

  function handleImageError() {
    console.warn(`Failed to load image: ${url}`);
    // Keep placeholder visible on error
    showImage = false;
    showPlaceholder = true;
  }

  // Use $effect for lifecycle management
  $effect(() => {
    if (container) {
      parentWidth(container);
      setupIntersectionObserver();
    }

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

  // Generate optimized image URL using $derived
  const imageUrl = $derived(
    visible && url
      ? (() => {
          const dimensions = getImageDimensions();
          return urlFor(url)
            .width(dimensions.width)
            .height(dimensions.height)
            .auto("format")
            .quality(quality)
            .url();
        })()
      : null
  );
</script>

<figure
  class:rounded
  use:parentWidth
  bind:this={container}
  style="width: {width}px; height: {height}px;"
>
  <!-- Fallback shell to prevent layout shift -->
  <div class="image-container">
    <!-- Placeholder shell -->
    {#if showPlaceholder}
      <div class="placeholder">
        <div class="placeholder-content">
          <svg class="placeholder-icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    {/if}

    <!-- Actual image -->
    {#if visible && imageUrl && showImage}
      <img
        bind:this={imageElement}
        src={imageUrl}
        {alt}
        class:loaded
        onload={handleImageLoad}
        onerror={handleImageError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        transition:fade={{ duration: 300 }}
      />
    {/if}

    <!-- Hidden preloader for smooth transition -->
    {#if visible && imageUrl && !showImage}
      <img
        src={imageUrl}
        {alt}
        style="display: none;"
        onload={handleImageLoad}
        onerror={handleImageError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    {/if}
  </div>

  {#if caption}
    <figcaption><em>{caption}</em></figcaption>
  {/if}
</figure>

<style>
  figure {
    margin: 0;
    position: relative;
    overflow: hidden;
    background: var(--background, #f3f4f6);
  }

  .rounded {
    border-radius: 0.5rem;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }

  img.loaded {
    filter: brightness(100%);
  }

  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    z-index: 1;
  }

  .placeholder-content {
    text-align: center;
  }

  .placeholder-icon {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  figcaption {
    margin: 0 auto;
    font-size: var(--smallText, 0.875rem);
    max-width: 40rem;
    padding: 0 var(--containerPadding, 1rem) var(--containerPadding, 1rem)
      var(--containerPadding, 1rem);
    color: var(--textSecondary, #6b7280);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Dark mode adjustments */
  :global(.dark) .placeholder {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
  }

  :global(.dark) .placeholder-icon {
    color: #6b7280;
  }
</style>
