<script>
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";

  let segment = $derived($page.url.pathname.substring(1));
  const origin = $page.url.origin;

  import Logo from "./icons/Logo.svelte";

  // Scroll behavior state
  let isVisible = $state(true);
  let lastScrollY = $state(0);
  let scrollTimeout = $state(null);

  function handleScroll() {
    const currentScrollY = window.scrollY;

    // Clear existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Show header when scrolling up or at top
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      isVisible = true;
    }
    // Hide header when scrolling down more than 100px
    else if (currentScrollY > 100) {
      isVisible = false;
    }

    lastScrollY = currentScrollY;
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  });
</script>

<header class:visible={isVisible}>
  <a
    class="logo"
    aria-current={segment === undefined ? "page" : undefined}
    href={`${origin}`}><Logo {segment} /></a
  >

  <nav class="">
    <a
      class={segment === "art" ? "active" : ""}
      aria-current={segment === "art" ? "page" : undefined}
      href={`${origin}/art`}>Art</a
    >
    <a
      class={segment === "about" ? "active" : ""}
      aria-current={segment === "about" ? "page" : undefined}
      href={`${origin}/about`}>About</a
    >
    <a
      class={segment === "contact" ? "active" : ""}
      aria-current={segment === "contact" ? "page" : undefined}
      href={`${origin}/contact`}>Contact</a
    >
  </nav>
</header>

<style>
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    color: var(--headerTextColor);
    height: var(--headerHeight);
    background: transparent;
    box-shadow: var(--level-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--containerPadding);
    z-index: 20;
    transform: translateY(0);
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    opacity: 1;
  }

  header:not(.visible) {
    transform: translateY(-100%);
    opacity: 0;
  }

  nav {
    display: flex;
    align-items: center;
  }

  header nav a {
    color: inherit;
    text-decoration: none;
  }

  header nav a + a {
    margin-left: 1.25rem;
  }
  a {
    font-weight: normal;
    transition: all 0.3s ease-in-out;
    line-height: 0;
    font-family: "Anton", var(--headingFont);
  }
  .active {
    color: var(--primary);
  }
</style>
