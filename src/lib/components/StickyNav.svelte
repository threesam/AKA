<script>
  import { onMount } from "svelte";

  let navLinks = [
    { id: "photojournalism", label: "Photojournalism" },
    { id: "substack", label: "Newsletter" },
    { id: "music-projects", label: "Music" },
    { id: "movies", label: "Movies" },
    { id: "paradigm-lost", label: "Book" },
    { id: "podcasts", label: "Podcasts" },
  ];

  let activeSection = $state("");
  let navElement = $state(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navElement?.offsetHeight || 0;
      const elementPosition = element.offsetTop - navHeight - 20;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const updateActiveSection = () => {
    const sections = navLinks.map((link) => ({
      id: link.id,
      element: document.getElementById(link.id),
    }));

    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element && section.element.offsetTop <= scrollPosition) {
        activeSection = section.id;
        break;
      }
    }
  };

  onMount(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection(); // Set initial active section

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  });
</script>

<nav
  bind:this={navElement}
  class="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
>
  <div class="max-w-7xl mx-auto px-4 py-3">
    <div class="flex items-center justify-center space-x-1">
      {#each navLinks as link}
        <button
          onclick={() => scrollToSection(link.id)}
          class="font-display px-4 py-2 rounded-full text-lg font-medium transition-all duration-200 {activeSection ===
          link.id
            ? 'bg-[var(--primary)] text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'}"
        >
          {link.label}
        </button>
      {/each}
    </div>
  </div>
</nav>

<style>
  /* Smooth scrolling for browsers that don't support it natively */
  html {
    scroll-behavior: smooth;
  }
</style>
