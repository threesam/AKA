<script>
  import SubscribeForm from "../components/SubscribeForm.svelte";
  import SocialLinks from "../components/SocialLinks.svelte";
  import WordCloud from "../components/WordCloud.svelte";

  let flatten = false;
  function setSize(node) {
    if (node.clientWidth < 767) {
      flatten = true;
    }
  }

  // Words for the footer word cloud
  const footerWords = [
    ["justice", 8],
    ["activism", 7],
    ["change", 6],
    ["art", 5],
    ["truth", 5],
    ["freedom", 4],
    ["equality", 4],
    ["hope", 3],
    ["courage", 3],
    ["solidarity", 3],
    ["resistance", 3],
    ["voice", 2],
    ["power", 2],
    ["community", 2],
    ["revolution", 2],
    ["peace", 2],
    ["love", 2],
    ["action", 2],
  ];
</script>

<footer
  use:setSize
  class="relative w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800 overflow-hidden"
>
  <!-- Word Cloud Background -->
  <div class="absolute inset-0 w-screen h-full z-0">
    <WordCloud
      words={footerWords}
      opacity={0.05}
      className="w-full h-full"
      shape="circle"
    />
  </div>

  <!-- Footer Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-6 py-16">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
      <!-- Brand & Mission Section -->
      <div class="lg:col-span-2">
        <h3
          class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Anton'] tracking-wide"
        >
          Art Killing Apathy
        </h3>
        <p
          class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md"
        >
          Amplifying voices for social change through art, journalism, and
          activism. Challenging apathy and inspiring action in the fight for
          justice.
        </p>

        <!-- Newsletter Subscription -->
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <SubscribeForm />
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4
          class="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-['Anton'] tracking-wide"
        >
          Explore
        </h4>
        <nav class="space-y-3">
          <a
            href="/art"
            class="block text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          >
            Art & Activism
          </a>
          <a
            href="/about"
            class="block text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          >
            About Eleanor
          </a>
          <a
            href="/press"
            class="block text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          >
            Press & Media
          </a>
          <a
            href="/contact"
            class="block text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>

      <!-- Social & Contact -->
      <div>
        <h4
          class="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-['Anton'] tracking-wide"
        >
          Connect
        </h4>
        <div class="flex flex-col space-y-4">
          <div class="text-gray-600 dark:text-gray-300">
            <p class="text-sm font-medium mb-2">Stay Connected</p>
            <SocialLinks {flatten} />
          </div>

          <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Direct Contact
            </p>
            <a
              href="mailto:eleanor@artkillingapathy.com?subject=From Website"
              class="text-red-600 dark:text-red-400 hover:underline text-sm"
            >
              eleanor@artkillingapathy.com
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-gray-200 dark:border-gray-700">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
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
          <span class="text-gray-400 dark:text-gray-600">
            Site by <a
              href="https://threesam.com"
              class="hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >Sam</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>
