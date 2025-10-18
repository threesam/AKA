<script>
  import Line from "../Line.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.type}
  <Line type={value.type} />
{/if}
