<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
	$: segment = $page.path.substring(1)

	import Logo from './icons/Logo.svelte'
</script>

<style>
	header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: var(--headerTextColor);
  height: var(--headerHeight);
  background: var(--headerBackground);
  box-shadow: var(--level-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--containerPadding);
  z-index: 20;
}

nav {
	display: flex;
	align-items: center;
}

header nav a {

  color: inherit;
  text-decoration: none;
}

header nav a + a,
header nav div {
  margin-left: 0.75rem;
}
	a {
		font-weight: normal;
		transition: all 0.3s ease-in-out;
		line-height: 0;
		font-family: var(--headingFont);
	}
	span {
		color: var(--primary);
	}
	.active {
		color: var(--primary);
	}
</style>

<header>
	<a class="logo" aria-current="{segment === undefined ? 'page' : undefined}" href="."><Logo {segment} /></a>

	<nav>
		<a rel="prefetch" class={segment === "art" ? 'active' : ""} aria-current="{segment === 'art' ? 'page' : undefined}" href="art">art</a>
		<a rel="prefetch" class={segment === "about" ? 'active' : ""} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a rel="prefetch" class={segment === "contact" ? 'active' : ""} aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a>
	</nav>
		
</header>
