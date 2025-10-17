<script>
  import { slide } from "svelte/transition";

  // Using Svelte 5 runes
  let email = $state("");
  let isSubmitted = $state(false);
  let message = $state("");
  let isLoading = $state(false);

  // Derived state for form validation
  let isFormValid = $derived(email.trim().length > 0 && !isLoading);

  // Effect to handle form reset after submission
  $effect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        email = "";
        isSubmitted = false;
        message = "";
      }, 3000);

      return () => clearTimeout(timer);
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) return;

    isLoading = true;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.status === 400) {
        message = "Already Subscribed!";
      } else if (response.status === 200) {
        message = "Thanks for Subscribing!";
      } else {
        message = "Something went wrong. Please try again.";
      }

      isSubmitted = true;
    } catch (error) {
      console.error(error);
      message = "Something went wrong. Please try again.";
      isSubmitted = true;
    } finally {
      isLoading = false;
    }
  }
</script>

<div>
  <h3
    class="text-lg lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-['Anton'] tracking-wide"
  >
    Follow for Updates
  </h3>
  <form onsubmit={handleSubmit} class="flex">
    <label for="email" class="flex-1">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="enter email"
        bind:value={email}
        disabled={isLoading}
        required
        class="w-full h-full border-2 border-[var(--lineColor)] text-base rounded-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </label>
    <button
      type="submit"
      disabled={!isFormValid}
      class="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-['Anton'] px-6 py-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--primary)]"
    >
      {isLoading ? "Subscribing..." : "Subscribe"}
    </button>
  </form>
  {#if isSubmitted}
    <h5 transition:slide class="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {message}
    </h5>
  {/if}
</div>
