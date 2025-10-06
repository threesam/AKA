<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  let show = false;
  onMount(() => (show = true));
</script>

{#if show}
  <!-- content here -->
  <div in:fly={{ y: -30, duration: 1000 }} class="card">
    <h1 class="text-3xl! font-bold">Contact</h1>
    <SocialLinks />
    <!-- <form in:fade name="contact" method="POST" data-netlify="true" netlify-honeypot=“bot-field”>
      <input type="hidden" name="form-name" value="contact" /> 
      
      <div>
        <label for="name">Name</label>
        <input id="name" type="name" name="name" />
      </div>
      
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      
      <div>
        <label for="message">Message
          <textarea id="messsage" name="message" />
        </label>
      </div>
      
      <button type="submit">Send</button>
    </form> -->
  </div>
{/if}

<style>
  .border {
    padding: 2rem;
    margin: 1rem;
    position: relative;
    z-index: 10;
  }

  /* form {
    text-align: left;
  } */

  /* form div {
    margin-bottom: 0.5rem;
  } */

  /* button {
    font-weight: 700;
  } */
</style>
