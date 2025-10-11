<script>
  export let url,
    title = "archived video from ArtKillingApathy";

  let width;
  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }
</script>

<div class="aspect-video w-full relative">
  <iframe
    class="inset-0 absolute w-full h-full"
    src={url}
    frameborder="0"
    {title}
    allowfullscreen
  ></iframe>
</div>
