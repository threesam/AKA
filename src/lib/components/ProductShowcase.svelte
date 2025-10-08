<script>
  import Image from "$lib/components/Image.svelte";
  import Cta from "$lib/components/Cta.svelte";

  /**
   * products: Array of product objects with title, description, image, gumroadUrl, etc.
   */
  export let products = [];

  // Helper function to check if image is Sanity image object
  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }
</script>

<section class="product-showcase">
  <div class="container mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h2
        class="text-4xl md:text-5xl font-['Anton'] text-red-600 dark:text-red-400 mb-4"
      >
        Featured Products
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Support the mission through exclusive art, prints, and activism
        merchandise
      </p>
    </div>

    {#if products.length > 0}
      <div class="space-y-8">
        {#each products as product, index}
          <!-- Desktop: 50/50 layout with alternating image/content sides -->
          <div
            class="hidden md:flex items-center min-h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden {index %
              2 ===
            1
              ? 'flex-row-reverse'
              : ''}"
          >
            <!-- Image Section (50%) -->
            <div class="w-1/2 h-full relative">
              {#if product?.image}
                {#if isSanityImage(product.image)}
                  <Image
                    url={product.image}
                    alt={product.alt || product.title}
                  />
                {:else}
                  <img
                    src={product.image}
                    alt={product.alt || product.title}
                    class="w-full h-full object-cover"
                  />
                {/if}
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
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
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
                  class="text-3xl font-['Anton'] text-gray-900 dark:text-white mb-4"
                >
                  {product?.title || "Featured Product"}
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                >
                  {product?.description ||
                    "Support our mission through this exclusive product."}
                </p>

                <!-- CTA Buttons -->
                <div class="space-y-4">
                  {#if product?.gumroadUrl}
                    <a
                      href={product.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cta-primary"
                    >
                      Purchase Now
                    </a>
                  {/if}

                  {#if product?.slug}
                    <a href="/art/{product.slug}" class="cta-secondary">
                      Learn More
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile: Vertical layout -->
          <div
            class="md:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
          >
            <!-- Image -->
            <div class="relative h-64">
              {#if product?.image}
                {#if isSanityImage(product.image)}
                  <Image
                    url={product.image}
                    alt={product.alt || product.title}
                  />
                {:else}
                  <img
                    src={product.image}
                    alt={product.alt || product.title}
                    class="w-full h-full object-cover"
                  />
                {/if}
              {:else}
                <div
                  class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                >
                  <svg
                    class="w-16 h-16 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              {/if}
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3
                class="text-2xl font-['Anton'] text-gray-900 dark:text-white mb-3"
              >
                {product?.title || "Featured Product"}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {product?.description ||
                  "Support our mission through this exclusive product."}
              </p>

              <!-- CTA Buttons -->
              <div class="space-y-3">
                {#if product?.gumroadUrl}
                  <a
                    href={product.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cta-primary-mobile"
                  >
                    Purchase Now
                  </a>
                {/if}

                {#if product?.slug}
                  <a href="/art/{product.slug}" class="cta-secondary-mobile">
                    Learn More
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <svg
          class="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-gray-600 dark:text-gray-400">
          No products available at the moment
        </p>
      </div>
    {/if}
  </div>
</section>

<style>
  .product-showcase {
    background: var(--background);
    border-top: 2px solid var(--primary);
  }

  .cta-primary {
    display: inline-block;
    width: 100%;
    background: var(--primary);
    color: white;
    font-family: "Anton", var(--headingFont);
    font-weight: 400;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    text-align: center;
    font-size: 1.125rem;
    text-decoration: none;
  }

  .cta-primary:hover {
    background: var(--primaryHover, #dc2626);
    transform: translateY(-1px);
  }

  .cta-secondary {
    display: inline-block;
    width: 100%;
    border: 2px solid transparent;
    color: var(--primary);
    font-family: "Anton", var(--headingFont);
    font-weight: 400;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    text-align: center;
    text-decoration: none;
  }

  .cta-secondary:hover {
    border-color: var(--primary);
    transform: translateY(-1px);
  }

  .cta-primary-mobile {
    display: block;
    width: 100%;
    background: var(--primary);
    color: white;
    font-family: "Anton", var(--headingFont);
    font-weight: 400;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    text-align: center;
    text-decoration: none;
  }

  .cta-primary-mobile:hover {
    background: var(--primaryHover, #dc2626);
    transform: translateY(-1px);
  }

  .cta-secondary-mobile {
    display: block;
    width: 100%;
    border: 2px solid transparent;
    color: var(--primary);
    font-family: "Anton", var(--headingFont);
    font-weight: 400;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    text-align: center;
    text-decoration: none;
  }

  .cta-secondary-mobile:hover {
    border-color: var(--primary);
    transform: translateY(-1px);
  }
</style>
