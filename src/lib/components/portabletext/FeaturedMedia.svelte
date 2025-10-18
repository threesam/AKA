<script>
  import Image from "../Image.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.asset}
  <Image url={value.asset} alt={value.alt || ""} />
{/if}
