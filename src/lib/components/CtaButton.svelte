<script>
  /**
   * type: 'primary' or 'secondary' (defaults to 'primary')
   * size: 'sm', 'md', 'lg' (defaults to 'md')
   * href: URL for links (optional)
   * onclick: Click handler for buttons (optional)
   * disabled: Whether button is disabled (defaults to false)
   * target: Link target (e.g., '_blank' for external links)
   * rel: Link rel attribute (e.g., 'noopener noreferrer')
   */
  export let type = "primary";
  export let size = "md";
  export let href = null;
  export let onclick = null;
  export let disabled = false;
  export let target = null;
  export let rel = null;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const typeClasses = {
    primary:
      "text-white border-2 bg-[var(--primary)] border-[var(--primary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-transparent",
    secondary:
      "border-2 border-transparent text-white hover:text-[var(--primary)]",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed hover:text-white";

  const baseClasses = `
    font-display font-weight-400 transition-colors duration-300 text-center text-decoration-none rounded-full
    ${sizeClasses[size]}
    ${disabled ? disabledClasses : typeClasses[type]}
  `.trim();
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    class={baseClasses}
    class:pointer-events-none={disabled}
  >
    <slot />
  </a>
{:else}
  <button
    {onclick}
    {disabled}
    class={baseClasses}
    class:cursor-not-allowed={disabled}
  >
    <slot />
  </button>
{/if}
