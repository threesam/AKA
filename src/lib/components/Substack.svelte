<script>
  import CtaButton from "$lib/components/CtaButton.svelte";

  /**
   * project: Substack project object with title, description, image, etc.
   */
  let { project } = $props();
</script>

{#if project}
  <div class="substack-section w-full max-w-4xl mx-auto px-4">
    <div
      class="bg-gradient-to-r bg-[var(--headerBackground)] dark:bg-[var(--headerBackground)] rounded-3xl shadow-xl overflow-hidden"
    >
      <div class="flex flex-col lg:flex-row min-h-[400px]">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 relative">
          {#if project.image}
            <img
              src={project.image +
                "?auto=format&quality=90&h=750&w=750&crop=entropy"}
              alt={project.alt || project.title}
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
          {:else}
            <div
              class="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
            >
              <div class="text-center">
                <svg
                  class="w-24 h-24 text-orange-500 dark:text-orange-400 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
                  />
                </svg>
                <p class="text-orange-600 dark:text-orange-400 font-medium">
                  Substack
                </p>
              </div>
            </div>
          {/if}
        </div>

        <!-- Content Section -->
        <div class="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div class="max-w-md mx-auto text-center lg:text-left">
            <!-- Substack Icon -->
            <div class="flex items-center justify-center lg:justify-start mb-4">
              <svg
                class="w-8 h-8 text-orange-500 dark:text-orange-400 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
                />
              </svg>
              <span
                class="text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wide"
                >Newsletter</span
              >
            </div>

            <h3
              class="text-3xl lg:text-4xl font-display text-gray-900 dark:text-white mb-4"
            >
              {project.title}
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg"
            >
              {project.description ||
                "Stay updated with our latest thoughts and insights."}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col gap-3 lg:flex-row">
              {#if project.cta?.url}
                <CtaButton
                  type="primary"
                  size="lg"
                  href={project.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe Now
                </CtaButton>
              {/if}

              <CtaButton
                type="secondary"
                size="lg"
                href="/art/{project.slug}"
                data-sveltekit-preload-data="tap"
              >
                Learn More
              </CtaButton>
            </div>

            <!-- Substack Features -->
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
                  Free to read
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
                  Email delivery
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
                  No spam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
