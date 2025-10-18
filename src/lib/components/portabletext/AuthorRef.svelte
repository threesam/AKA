<script>
  import Author from "../Author.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.author}
  <Author author={value.author} />
{/if}
