<script>
  import Link from "../Link.svelte";

  let { portableText, children } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.href}
  <Link href={value.href} external={value.blank || false}>
    {@render children?.()}
  </Link>
{:else}
  {@render children?.()}
{/if}
