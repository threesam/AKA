<script>
  let { title, description, position = "center" } = $props();

  const positionClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
</script>

<div class="flex flex-col w-full gap-4 px-4 py-12 {positionClasses[position]}">
  <h2 class="font-display text-5xl lg:text-7xl">
    {title || "Section"}
  </h2>
  {#if description}
    <p
      class="text-gray-600 dark:text-gray-300 max-w-xl text-lg lg:text-xl {textAlignment[
        position
      ]}"
    >
      {description}
    </p>
  {/if}
</div>
