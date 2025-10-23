<script>
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { PUBLIC_DEPLOY_HOOK } from "$env/static/public";

  // Deploy hook state
  let showConfirm = $state(false);
  let isDeploying = $state(false);
  let deployMessage = $state("");
  let deployResult = $state(null);
  let isProd = $state(false);

  onMount(() => {
    isProd = process.env.NODE_ENV === "production";
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
</script>

{#if !isProd}
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
