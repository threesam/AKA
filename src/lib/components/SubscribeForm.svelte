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

<div class="subscribe-form">
  <h3>Follow for Updates</h3>
  <form onsubmit={handleSubmit}>
    <label for="email">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="enter email"
        bind:value={email}
        disabled={isLoading}
        required
      />
    </label>
    <button type="submit" disabled={!isFormValid}>
      {isLoading ? "Subscribing..." : "Subscribe"}
    </button>
  </form>
  {#if isSubmitted}
    <h5 transition:slide>{message}</h5>
  {/if}
</div>

<style>
  .subscribe-form {
    max-width: 100%;
  }
  form {
    display: flex;
  }

  label {
    flex: 1;
    align-self: stretch;
    padding: 1px 0;
  }

  input {
    height: 100%;
    border: 0.125rem solid var(--textColor);
    font-size: 1rem;
    border-radius: 0;
    background: var(--background);
    color: var(--textColor);
    padding: 0.28rem;
  }
  /* magic number to match svg search icon */

  input:focus {
    border: 0.125rem solid transparent;
    outline: 0.125rem solid var(--primary);
    outline-style: groove;
  }

  button {
    background-color: var(--primary);
    font-family: var(--headingFont);
    padding: 1rem 1.5rem;
  }

  h3,
  h5 {
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: var(--h4);
    }
  }
</style>
