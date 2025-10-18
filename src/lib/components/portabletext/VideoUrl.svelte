<script>
  import Video from "../Video.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.url}
  <Video url={value.url} />
{/if}
