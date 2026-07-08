<script>
  import CtaButton from "../CtaButton.svelte";

  let { portableText } = $props();
  const { value } = $derived(portableText);
</script>

{#if value?.url}
  <CtaButton
    href={value.url}
    type={value.secondary ? "secondary" : "primary"}
    target={value.external ? "_blank" : null}
    rel={value.external ? "noopener noreferrer" : null}
    data-umami-event="cta-body-click"
  >
    {value.text || value.title || ""}
  </CtaButton>
{/if}
