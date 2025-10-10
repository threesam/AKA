<script>
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
  import Banner from "$lib/components/Banner.svelte";

  let { error, status } = $props();

  const isDevelopment = process.env.NODE_ENV === "development";

  // Get appropriate error message based on status
  const getErrorMessage = (status) => {
    switch (status) {
      case 404:
        return "The page you're looking for doesn't exist.";
      case 500:
        return "Something went wrong on our end.";
      case 403:
        return "You don't have permission to access this page.";
      default:
        return "An unexpected error occurred.";
    }
  };

  const getErrorTitle = (status) => {
    switch (status) {
      case 404:
        return "Page Not Found";
      case 500:
        return "Server Error";
      case 403:
        return "Access Denied";
      default:
        return "Error";
    }
  };
</script>

<svelte:head>
  <title>{status} - {getErrorTitle(status)}</title>
</svelte:head>

<main class="relative min-h-screen flex flex-col items-center justify-center">
  <ParticleCanvas />

  <!-- Error Content -->
  <div class="relative z-10 text-center px-4 max-w-2xl mx-auto">
    <!-- Error Status -->
    <div class="mb-8">
      <h1
        class="text-8xl md:text-9xl font-['Anton'] text-red-600 dark:text-red-400 mb-4"
      >
        {status}
      </h1>
      <h2
        class="text-3xl md:text-4xl font-['Anton'] text-gray-900 dark:text-white mb-6"
      >
        {getErrorTitle(status)}
      </h2>
    </div>

    <!-- Error Message -->
    <div class="mb-12">
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
      >
        {getErrorMessage(status)}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/"
          class="bg-red-600 hover:bg-red-700 text-white font-['Anton'] px-8 py-4 rounded-lg transition-colors duration-200 text-center text-lg"
        >
          Go Home
        </a>
        <button
          onclick={() => history.back()}
          class="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-['Anton'] px-8 py-4 rounded-lg transition-colors duration-200 text-center text-lg"
        >
          Go Back
        </button>
      </div>
    </div>

    <!-- Development Error Details -->
    {#if isDevelopment && error}
      <details class="mt-8 text-left">
        <summary
          class="cursor-pointer text-red-600 dark:text-red-400 font-['Anton'] text-lg mb-4"
        >
          Technical Details (Development Only)
        </summary>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
          <pre
            class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{error}</pre>
        </div>
      </details>
    {/if}
  </div>

  <!-- Footer Message -->
  <div
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
  >
    <p class="text-sm text-gray-500 dark:text-gray-400">
      If this problem persists, please contact support.
    </p>
  </div>
</main>
