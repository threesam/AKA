<script>
  let {
    href,
    children,
    external = true,
    variant = "default",
    size = "md",
    class: className = "",
  } = $props();

  const variants = {
    default:
      "text-current hover:text-[var(--primary)] underline decoration-[var(--primary)] decoration-2 underline-offset-4 hover:underline-offset-2 transition-all duration-200",
    primary: "text-primary hover:text-primary/80 font-medium",
    secondary:
      "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
    underline:
      "text-current hover:text-current underline hover:no-underline decoration-2 underline-offset-4",
    button:
      "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200",
  };

  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const baseClasses =
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-sm";
  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.md;
</script>

<a
  {href}
  rel={external ? "noopener noreferrer" : undefined}
  target={external ? "_blank" : undefined}
  class="{baseClasses} {variantClasses} {sizeClasses} {className}"
  data-sveltekit-preload-data={external ? undefined : "tap"}
>
  {@render children()}
</a>
