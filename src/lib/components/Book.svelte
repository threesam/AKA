<script>
  import CtaButton from "$lib/components/CtaButton.svelte";

  /**
   * book: Book object with title, description, image, etc.
   */
  let { book } = $props();

  // Helper function to check if image is Sanity image object
  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }
</script>

{#if book}
  <div class="book-section w-full max-w-6xl mx-auto px-4">
    <div
      class="bg-gradient-to-br bg-[var(--headerBackground)] dark:bg-[var(--headerBackground)] rounded-3xl shadow-xl overflow-hidden"
    >
      <div class="flex flex-col lg:flex-row min-h-[500px]">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 relative">
          {#if book.image}
            <img
              src={book.image +
                "?auto=format&quality=90&h=750&w=750&crop=entropy"}
              alt={book.alt || book.title}
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          {:else}
            <div
              class="w-full h-full bg-gradient-to-br bg-[var(--headerBackground)] dark:bg-[var(--headerBackground)] flex items-center justify-center"
            >
              <div class="text-center">
                <svg
                  class="w-24 h-24 text-amber-600 dark:text-amber-400 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                  />
                </svg>
                <p class="text-amber-600 dark:text-amber-400 font-medium">
                  Book Cover
                </p>
              </div>
            </div>
          {/if}
        </div>

        <!-- Content Section -->
        <div class="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div class="max-w-md mx-auto text-center lg:text-left">
            <!-- Book Icon -->
            <div class="flex items-center justify-center lg:justify-start mb-4">
              <svg
                class="w-8 h-8 text-amber-600 dark:text-amber-400 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                />
              </svg>
              <span
                class="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wide"
                >Book</span
              >
            </div>

            <h3
              class="text-3xl lg:text-4xl font-['Anton'] text-gray-900 dark:text-white mb-4"
            >
              {book.title}
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg"
            >
              {book.description ||
                "Discover the insights and perspectives within this compelling read."}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col gap-4 lg:flex-row">
              {#if book.cta?.url}
                <CtaButton
                  type="primary"
                  size="lg"
                  href={book.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Now
                </CtaButton>
              {/if}

              <CtaButton type="secondary" size="lg" href="/art/{book.slug}">
                Learn More
              </CtaButton>
            </div>

            <!-- Book Features -->
            <div class="mt-8 pt-6 border-t border-[var(--lineColor)]">
              <div
                class="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400"
              >
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Digital format
                </div>
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Instant access
                </div>
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Deep insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
