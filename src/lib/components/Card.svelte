<script>
  import CtaButton from "$lib/components/CtaButton.svelte";

  /**
   * product: Object with title, description, image, url, etc.
   * flipped: Boolean to determine if image/content sides are flipped
   * primaryCtaText: Custom text for the primary CTA button (defaults to "Purchase Now")
   * secondaryCtaText: Custom text for the secondary CTA button (defaults to "Learn More")
   */
  export let product = {};
  export let flipped = false;
  export let primaryCtaText = "Purchase Now";
  export let secondaryCtaText = "Learn More";

  // Helper function to check if image is Sanity image object
  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }
</script>

<div class="">
  <!-- Desktop: 50/50 layout with optional flip -->
  <div
    class="hidden lg:flex items-center min-h-[500px] bg-[var(--headerBackground)] dark:bg-[var(--headerBackground)] shadow-2xl overflow-hidden {flipped
      ? 'flex-row-reverse'
      : ''}"
  >
    <!-- Image Section (50%) -->
    <div class="w-1/2 h-full relative">
      {#if product?.image}
        <img
          src={product.image + "?auto=format&h=750"}
          alt={product.alt || product.title}
          loading="lazy"
          class="w-full h-full object-cover"
        />
      {:else}
        <div
          class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
        >
          <svg
            class="w-24 h-24 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011 .07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      {/if}
    </div>

    <!-- Content Section (50%) -->
    <div class="w-1/2 p-12 flex flex-col justify-center">
      <div class="max-w-md mx-auto text-center">
        <h3
          class="text-2xl lg:text-5xl font-display text-gray-900 dark:text-white mb-4"
        >
          {product?.title || "Card"}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {product?.description ||
            "Support our mission through this exclusive content."}
        </p>

        <!-- CTA Buttons -->
        <div class="flex justify-center items-center gap-4">
          {#if product?.url}
            <CtaButton
              type="primary"
              size="lg"
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryCtaText}
            </CtaButton>
          {/if}

          {#if product?.slug}
            <CtaButton type="secondary" size="lg" href="/art/{product.slug}">
              {secondaryCtaText}
            </CtaButton>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile: Vertical layout -->
  <div
    class="lg:hidden bg-white dark:bg-[var(--headerBackground)] shadow-lg overflow-hidden"
  >
    <!-- Image -->
    <div class="relative h-64">
      {#if product?.image}
        <img
          src={product.image + "?auto=format&h=500"}
          alt={product.alt || product.title}
          class="w-full h-full object-cover"
          loading="lazy"
        />
      {:else}
        <div
          class="w-full h-full bg-gray-200 dark:bg-[var(--headerBackground)] flex items-center justify-center"
        >
          <svg
            class="w-16 h-16 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011 .07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      {/if}
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-2xl font-display text-gray-900 dark:text-white mb-3">
        {product?.title || "Card"}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {product?.description ||
          "Support our mission through this exclusive content."}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col gap-3 lg:flex-row">
        {#if product?.url}
          <CtaButton
            type="primary"
            size="md"
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryCtaText}
          </CtaButton>
        {/if}

        {#if product?.slug}
          <CtaButton type="secondary" size="md" href="/art/{product.slug}">
            {secondaryCtaText}
          </CtaButton>
        {/if}
      </div>
    </div>
  </div>
</div>
