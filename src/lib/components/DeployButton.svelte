<script>
  import { fade, scale } from "svelte/transition";
  import { PUBLIC_DEPLOY_HOOK } from "$env/static/public";

  // Deploy hook state
  let showConfirm = $state(false);
  let isDeploying = $state(false);
  let deployMessage = $state("");
  let deployResult = $state(null);

  // Password unlock state
  let isUnlocked = $state(false);
  let showPasswordPrompt = $state(false);
  let passwordInput = $state("");
  let passwordError = $state("");

  // Check if already unlocked in this session
  if (typeof window !== "undefined") {
    isUnlocked = sessionStorage.getItem("deployUnlocked") === "true";
  }

  // Watch for keyboard shortcut changes
  $effect(() => {
    function handleKeyDown(e) {
      console.log("handleKeyDown", e);
      // Check for Cmd+Shift+E (Mac) or Ctrl+Shift+E (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "e") {
        e.preventDefault();
        if (!isUnlocked) {
          showPasswordPrompt = true;
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  async function handleDeploy() {
    if (!showConfirm) {
      showConfirm = true;
      return;
    }
  }

  async function confirmDeploy() {
    if (!PUBLIC_DEPLOY_HOOK) {
      deployMessage = "Deploy hook not configured";
      deployResult = { success: false, message: "Deploy hook not configured" };
      showConfirm = false;
      return;
    }

    isDeploying = true;
    deployMessage = "Deploying...";
    deployResult = null;

    try {
      const response = await fetch(PUBLIC_DEPLOY_HOOK, {
        method: "POST",
      });

      const result = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
      };

      deployResult = result;

      if (response.ok) {
        deployMessage = "Deploy triggered successfully!";
      } else {
        deployMessage = `Deploy failed: ${response.status} ${response.statusText}`;
      }
    } catch (error) {
      deployResult = {
        success: false,
        error: error.message,
      };
      deployMessage = `Error: ${error.message}`;
    } finally {
      isDeploying = false;
      setTimeout(() => {
        showConfirm = false;
        deployMessage = "";
        deployResult = null;
      }, 5000);
    }
  }

  function cancelDeploy() {
    showConfirm = false;
    deployMessage = "";
    deployResult = null;
  }

  function checkPassword() {
    if (passwordInput === "radical") {
      isUnlocked = true;
      showPasswordPrompt = false;
      passwordInput = "";
      passwordError = "";
      if (typeof window !== "undefined") {
        sessionStorage.setItem("deployUnlocked", "true");
      }
    } else {
      passwordError = "Incorrect password";
      passwordInput = "";
    }
  }

  function cancelPassword() {
    showPasswordPrompt = false;
    passwordInput = "";
    passwordError = "";
  }
</script>

{#if showPasswordPrompt}
  <!-- Password Prompt Modal -->
  <div
    class="fixed inset-0 bg-[var(--background)]/80 backdrop-blur-sm z-50 flex items-center justify-center"
    transition:fade={{ duration: 300 }}
  >
    <div
      class="bg-[var(--cardBg)] border-2 border-[var(--lineColor)] rounded-lg shadow-xl p-6 min-w-[300px]"
      transition:scale={{ duration: 300, start: 0.8, opacity: 0 }}
    >
      <h3 class="text-xl font-bold text-[var(--textColor)] mb-4">
        Enter Password
      </h3>
      <input
        type="password"
        bind:value={passwordInput}
        onkeydown={(e) => {
          if (e.key === "Enter") checkPassword();
          if (e.key === "Escape") cancelPassword();
        }}
        class="w-full px-3 py-2 border-2 border-[var(--lineColor)] rounded bg-[var(--background)] text-[var(--textColor)] focus:outline-none focus:border-[var(--primary)]"
        placeholder="Password"
      />
      {#if passwordError}
        <p class="text-red-600 dark:text-red-400 text-sm mt-2">
          {passwordError}
        </p>
      {/if}
      <div class="flex gap-2 mt-4">
        <button
          onclick={checkPassword}
          class="bg-[var(--primary)] text-white px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity"
        >
          Unlock
        </button>
        <button
          onclick={cancelPassword}
          class="bg-gray-300 dark:bg-gray-600 text-[var(--textColor)] px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
{/if}

{#if isUnlocked}
  <!-- Clickable overlay -->
  {#if showConfirm}
    <div
      class="fixed inset-0 bg-[var(--background)]/60 backdrop-blur-sm z-50"
      transition:fade={{ duration: 300 }}
      onclick={cancelDeploy}
      role="button"
      tabindex="0"
      onkeydown={(e) => e.key === "Escape" && cancelDeploy()}
    ></div>
  {/if}

  <!-- Deploy Hook Button -->
  <div class="fixed bottom-4 right-4 z-50">
    {#if !showConfirm}
      <button
        onclick={handleDeploy}
        class="bg-[var(--headerBackground)] text-white p-4 pb-3 rounded-full shadow-xl grayscale border-2 border-[var(--lineColor)] hover:shadow-xl transition-all duration-200 font-medium text-xl"
      >
        ♻️
      </button>
    {:else}
      <div
        class="bg-[var(--cardBg)] border-2 border-[var(--lineColor)] rounded-lg shadow-xl p-4 min-w-[200px]"
        in:scale={{ duration: 300, start: 0.8, opacity: 0 }}
      >
        <p class="text-lg text-[var(--textColor)] mb-3">
          Are you sure you want to refresh?
        </p>
        <div class="flex gap-2">
          <button
            onclick={confirmDeploy}
            disabled={isDeploying}
            class="bg-[var(--primary)] text-white px-3 py-1 rounded text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Yep, refresh it
          </button>
          <button
            onclick={cancelDeploy}
            disabled={isDeploying}
            class="bg-gray-300 dark:bg-gray-600 text-[var(--textColor)] px-3 py-1 rounded text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Eh, more changes first
          </button>
        </div>
        {#if deployMessage}
          <p class="text-xs mt-2 text-[var(--textColor)]">{deployMessage}</p>
        {/if}
        {#if deployResult}
          <div
            class="mt-3 p-2 rounded text-xs bg-[var(--background)] border border-[var(--lineColor)]"
          >
            <p class="font-bold mb-1">Result:</p>
            {#if deployResult?.success}
              <div
                class="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <span class="text-2xl">🚀</span>
                <span class="font-semibold">Deploy successful!</span>
              </div>
            {:else if deployResult}
              <div
                class="flex items-center gap-2 text-red-600 dark:text-red-400"
              >
                <span class="text-2xl">⚠️</span>
                <div>
                  <p class="font-semibold">Uh oh, tell Sam</p>
                  <pre
                    class="text-xs mt-1 text-[var(--textColor)] whitespace-pre-wrap">{JSON.stringify(
                      deployResult,
                      null,
                      2
                    )}</pre>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/if}
