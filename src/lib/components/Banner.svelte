<script>
  let { category } = $props();
</script>

<div class="flex flex-col items-center w-full px-5 py-10 mt-32 text-center">
  <h2 class="font-display text-5xl lg:text-7xl">
    {category?.title || "Category"}
  </h2>
  {#if category?.description}
    <p
      class="text-gray-600 dark:text-gray-300 max-w-xl text-lg lg:text-xl text-center"
    >
      {category.description}
    </p>
  {/if}
</div>
