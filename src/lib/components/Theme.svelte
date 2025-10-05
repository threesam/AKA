<script>
  import { darkMode } from "$lib/utils/darkMode";

  function changeTheme() {
    // grab body
    const body = document.querySelector("body");

    // if lightMode
    if ($darkMode === false) {
      body.classList.add("dark");
      $darkMode = true;
    } else {
      body.classList.remove("dark");
      $darkMode = false;
    }
  }

  function handleKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      changeTheme();
    }
  }
</script>

{#if $darkMode}
  <button
    type="button"
    onclick={changeTheme}
    onkeydown={handleKeydown}
    aria-label="Switch to light mode"
    class="theme-toggle"
  >
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
        stroke="currentColor"
        stroke-linecap="square"
      />
    </svg>
  </button>
{:else}
  <button
    type="button"
    onclick={changeTheme}
    onkeydown={handleKeydown}
    aria-label="Switch to dark mode"
    class="theme-toggle"
  >
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
    </svg>
  </button>
{/if}

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;
  }

  .theme-toggle:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .theme-toggle:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
</style>
