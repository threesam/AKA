<script>
  export let url,
    title = "archived video from ArtKillingApathy";

  let width;
  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }
</script>

<div class="aspect-video w-full relative">
  <iframe src={url} frameborder="0" {title} allowfullscreen></iframe>
</div>

<style>
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
