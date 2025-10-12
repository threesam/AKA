<script>
  import SubscribeForm from "../components/SubscribeForm.svelte";
  import SocialLinks from "../components/SocialLinks.svelte";
  import { onMount } from "svelte";
  import Logo from "./icons/Logo.svelte";

  let { transformedWords = [] } = $props();

  let WordCloud = $state(null);
  onMount(async () => {
    const mod = await import("$lib/components/WordCloud.svelte");
    WordCloud = mod.default;
  });
</script>

<footer
  class="relative w-full bg-[var(--footerBackground)] border-t border-gray-200 dark:border-gray-800 overflow-hidden"
>
  <!-- Word Cloud Background -->
  <div class="absolute inset-0 w-screen h-full z-0">
    {#if WordCloud}
      <WordCloud
        words={transformedWords}
        opacity={0.05}
        className="w-full h-full"
        shape="circle"
      />
    {/if}
  </div>

  <!-- Footer Content -->
  <div
    class="relative z-10 max-w-7xl mx-auto px-6 py-4 min-h-screen grid place-content-center"
  >
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <!-- Brand & Mission Section -->

      <!-- Quick Links -->
      <div>
        <Logo classes="w-auto" />
        <p
          class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md"
        >
          Amplifying voices for social change through art, journalism, and
          activism. Challenging apathy and inspiring action in the fight for
          justice.
        </p>
        <div class="">
          <h4 class="text-xl">Want to work together?</h4>
          <p>
            message me at:
            <a
              href="mailto:eleanor@artkillingapathy.com?subject=From Website"
              class="text-red-600 dark:text-red-400 hover:underline text-sm"
            >
              eleanor@artkillingapathy.com
            </a>
          </p>
        </div>
      </div>

      <!-- Social & Contact -->
      <div>
        <div class="text-gray-600 dark:text-gray-300">
          <!-- Newsletter Subscription -->
          <div
            class="bg-[var(--cardBg)] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8"
          >
            <SubscribeForm />
          </div>
        </div>
        <h4
          class="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-display tracking-wide"
        >
          Connect
        </h4>
        <div class="flex flex-col space-y-4">
          <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
      <div
        class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
      >
        <div class="text-sm text-gray-500 dark:text-gray-400">
          © 2014-{new Date().getFullYear()} Art Killing Apathy. All rights reserved.
        </div>

        <div
          class="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
        >
          <a
            href="/privacy"
            class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Terms of Use
          </a>
          <span class="text-[var(--textColor)]">
            Site by <a
              href="https://sixtom.com"
              class="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >SIXTOM</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>
