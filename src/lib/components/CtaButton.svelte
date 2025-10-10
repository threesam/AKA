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
      "bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700",
    secondary:
      "border-2 border-transparent text-red-600 hover:border-red-600 hover:text-white",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed hover:text-white";

  const baseClasses = `
    font-['Anton'] font-weight-400 rounded-lg transition-colors duration-200 text-center text-decoration-none
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
