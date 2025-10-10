<script>
  /**
   * title: The text to display in the banner
   * size: Size variant - 'sm', 'md', 'lg' (defaults to 'md')
   */
  export let title;
  export let size = "md";

  const sizeClasses = {
    sm: "text-2xl md:text-3xl py-4",
    md: "text-4xl md:text-5xl py-8",
    lg: "text-4xl md:text-6xl py-8",
  };
</script>

<h2
  class="text-center font-['Anton'] w-full mt-0 mb-8 border-t-2 border-b-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 {sizeClasses[
    size
  ]}"
>
  {title}
</h2>
