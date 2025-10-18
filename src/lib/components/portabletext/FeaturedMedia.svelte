<script>
  import Image from "../Image.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.asset}
  <div class="py-8">
    <Image url={value.asset} alt={value.alt || ""} />
  </div>
{/if}
