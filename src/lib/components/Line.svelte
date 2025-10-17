<script>
  let { type = "line" } = $props();
</script>

{#if type === "line"}
  <hr class="max-w-2xl mx-auto border-gray-300 dark:border-gray-600" />
{:else if type === "break"}
  <br />
{/if}
