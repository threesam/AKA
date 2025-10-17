<script>
  let { type = "line" } = $props();
</script>

{#if type === "line"}
  <hr class="max-w-2xl mx-auto border-[var(--lineColor)]" />
{:else if type === "break"}
  <br />
{/if}
