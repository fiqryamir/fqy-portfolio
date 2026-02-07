<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Fiqry | Software Engineer</title>
	<meta
		name="description"
		content="Full Stack Engineer portfolio. Building scalable applications and REST APIs."
	/>

	<!-- Open Graph / Facebook / LinkedIn -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fiqry.dev/" />
	<meta property="og:title" content="Fiqry | Software Engineer" />
	<meta property="og:description" content="Full Stack Engineer based in Kuala Lumpur." />
	<meta property="og:image" content="https://fiqry.dev/og-image.png" />
	<!-- Make a cool screenshot of your hero section -->

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Fiqry | Software Engineer" />
	<meta property="twitter:description" content="Full Stack Engineer based in Kuala Lumpur." />
	<meta property="twitter:image" content="https://fiqry.dev/og-image.png" />
</svelte:head>
{@render children()}
