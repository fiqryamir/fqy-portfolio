<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSection from './HeroSection.svelte';
	import ExperienceSection from './ExperienceSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import SkillsFooterSection from './SkillsFooterSection.svelte';
	import { fade, fly } from 'svelte/transition';
	import Logo from './Logo.svelte';

	// Mapping ID to Label for the Header
	const navItems = [
		{ id: 'hero', label: 'INTRO' },
		{ id: 'experience', label: 'LOGS' },
		{ id: 'projects', label: 'MODULES' },
		{ id: 'skills', label: 'SYSTEM' }
	];

	let activeSection = 'hero';
	let mainContainer: HTMLElement;

	let isMenuOpen = false;

	let loading = true;
	let loadingText = 'INITIALIZING...';

	// Function to handle smooth scrolling manually
	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element && mainContainer) {
			// Calculate offset if needed, but scrollIntoView is usually easiest
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		const steps = [
			'ESTABLISHING_CONNECTION...',
			'MOUNTING_DRIVES...',
			'LOADING_ASSETS...',
			'SYSTEM_READY.'
		];

		let i = 0;
		const interval = setInterval(() => {
			if (i < steps.length) {
				loadingText = steps[i];
				i++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					loading = false;
				}, 500); // Fade out
			}
		}, 300); // Speed of text change

		// Observer to track which section is visible
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				root: mainContainer, // Observe scrolling inside the main div, not window
				threshold: 0.25 // Trigger when 25% of the section is visible
			}
		);

		// Observe all sections
		navItems.forEach((item) => {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Action items for the menu
	const menuItems = [
		{
			label: 'HOME',
			action: () => {
				scrollToSection('hero');
				toggleMenu();
			}
		},
		{
			label: 'LOGS',
			action: () => {
				scrollToSection('experience');
				toggleMenu();
			}
		},
		{
			label: 'MODULES',
			action: () => {
				scrollToSection('projects');
				toggleMenu();
			}
		},
		{
			label: 'SYSTEM',
			action: () => {
				scrollToSection('skills');
				toggleMenu();
			}
		}
	];
</script>

{#if loading}
	<div
		class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono text-white"
		transition:fade
	>
		<div class="w-64">
			<div class="mb-2 text-xs text-gray-500">// BOOT_SEQUENCE</div>
			<div class="text-xl font-bold tracking-widest">{loadingText}</div>
			<!-- Progress Bar -->
			<div class="mt-4 h-1 w-full overflow-hidden rounded bg-gray-800">
				<div
					class="h-full animate-[width_1.5s_ease-in-out_forwards] bg-green-500"
					style="width: 0%"
				></div>
			</div>
		</div>
	</div>
{/if}

<!-- OUTER SCREEN -->
<div
	class="h-screen w-screen overflow-hidden p-4 font-sans text-black selection:bg-black selection:text-white md:p-6"
>
	<!-- APP WINDOW -->
	<div
		class="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
	>
		{#if isMenuOpen}
			<!-- Backdrop (Click to close) -->
			<div
				class="absolute inset-0 z-50 cursor-pointer bg-black/50 backdrop-blur-sm"
				on:click={toggleMenu}
				transition:fly={{ duration: 300, opacity: 0 }}
			></div>

			<!-- The Drawer Container -->
			<div
				class="absolute top-0 left-0 z-[60] flex h-full w-full flex-row overflow-hidden rounded-xl bg-black text-white shadow-2xl md:w-[480px]"
				transition:fly={{ x: -480, duration: 400, opacity: 1 }}
			>
				<!-- 1. MAIN CONTENT AREA (Left Side) -->
				<div class="relative z-10 flex flex-1 flex-col justify-between pb-3">
					<!-- Top: Brand / Status -->
					<div
						class="mb-12 flex h-16 items-center gap-2 px-4 pt-2 font-mono text-xs text-green-400"
					>
						<span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
						SYSTEM_PAUSED
					</div>

					<!-- Middle: Navigation Links -->
					<div class="flex flex-col gap-4 px-4">
						{#each navItems as item}
							<button
								on:click={() => {
									scrollToSection(item.id);
									toggleMenu();
								}}
								class="text-left text-6xl leading-none font-black tracking-tighter transition-all duration-300 hover:translate-x-2 hover:text-green-400"
							>
								{item.label}
							</button>
						{/each}

						<!-- THE GREEN BOX (Resume) -->
						<a href="/resume.pdf" target="_blank" class="group mt-8 w-fit">
							<div
								class="bg-green-500 px-4 py-2 text-4xl font-black tracking-tighter text-black transition-colors group-hover:bg-white"
							>
								RESUME
								<span class="ml-1 align-top font-mono text-xs opacity-50">.PDF</span>
							</div>
						</a>
					</div>

					<!-- Bottom: Footer Meta -->
					<div class="mt-12 grid grid-cols-2 gap-8 border-t border-gray-800 px-4 pt-8">
						<div>
							<h4 class="mb-2 font-mono text-[10px] text-gray-500">CONNECT</h4>
							<div class="flex flex-col gap-1 font-mono text-xs font-bold text-gray-300">
								<a href="#" class="transition-colors hover:text-green-400">LINKEDIN</a>
								<a href="#" class="transition-colors hover:text-green-400">GITHUB</a>
							</div>
						</div>
						<div>
							<h4 class="mb-2 font-mono text-[10px] text-gray-500">VERSION</h4>
							<div class="font-mono text-xs font-bold text-gray-600">V.1.0.4</div>
						</div>
					</div>

					<!-- Background Deco -->
					<div class="pointer-events-none absolute right-12 bottom-0 opacity-10">
						<span class="text-9xl leading-none font-black text-gray-800">01</span>
					</div>
				</div>

				<!-- 2. RIGHT SIDEBAR STRIP (The "Mirror") -->
				<!-- This replaces the left sidebar when menu is open -->
				<div
					class="z-20 flex w-16 flex-col items-center justify-between border-l border-gray-800 bg-black pb-3"
				>
					<div class="flex w-full items-center justify-center border-b border-gray-800 py-3">
						<!-- Top: Close Button (Cross) -->
						<button
							on:click={toggleMenu}
							class="group flex h-10 w-10 items-center justify-center transition-all hover:border-white hover:bg-white hover:text-black"
						>
							<!-- Animated Cross Icon -->
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								class="transition-transform duration-300 group-hover:rotate-90"
							>
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>
					</div>

					<!-- Middle: Vertical Text Deco -->
					<div
						class="writing-vertical-lr rotate-180 font-mono text-[10px] tracking-widest text-gray-600"
					>
						// MENU_ACTIVE
					</div>

					<!-- Bottom: Crosshair Icon -->
					<div class="flex h-8 w-8 items-center justify-center border border-gray-800">
						<div class="h-1 w-1 bg-green-500"></div>
					</div>
				</div>
			</div>
		{/if}
		<!-- 1. FIXED HEADER -->
		<header
			class="z-40 flex shrink-0 items-center justify-between border-b border-gray-200 bg-white pr-6 pl-0"
		>
			<!-- Left: Hamburger (Visual Only) -->
			<div
				class="flex h-full w-16 cursor-pointer items-center justify-center border-r border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50"
				on:click={toggleMenu}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
					><path
						d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"
					></path></svg
				>
			</div>

			<!-- Center: Navigation -->
			<nav class="hidden gap-2 font-mono text-[10px] font-bold tracking-widest uppercase md:flex">
				{#each navItems as item}
					<button
						on:click={() => scrollToSection(item.id)}
						class="px-3 py-1 transition-all duration-300 {activeSection === item.id
							? 'bg-black text-white'
							: 'text-gray-400 hover:text-black'}"
					>
						{item.label}
					</button>
				{/each}
			</nav>

			<!-- Right: Status Indicator (Replaces Sign In) -->
			<div class="flex items-center gap-2 font-mono text-[10px] font-bold">
				<div class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
				</div>
				<span>ONLINE</span>
			</div>
		</header>

		<!-- 2. MAIN LAYOUT -->
		<div class="relative flex flex-1 overflow-hidden">
			<!-- FIXED LEFT SIDEBAR -->
			<aside
				class="z-30 flex w-16 shrink-0 flex-col items-center justify-between border-r border-gray-200 bg-white py-6 md:w-16"
			>
				<!-- <Logo /> -->
				<!-- Center Crosshair -->
			</aside>

			<!-- SCROLLABLE CONTENT AREA -->
			<!-- We bind 'mainContainer' here to use in the script -->
			<main
				bind:this={mainContainer}
				class="scrollbar-hide relative flex-1 overflow-y-auto bg-white"
			>
				<div class="flex min-h-full w-full flex-col">
					<!-- We wrap sections in divs with IDs for scrolling -->
					<div id="hero" class="w-full">
						<HeroSection />
					</div>
					<div id="experience" class="w-full">
						<ExperienceSection />
					</div>
					<div id="projects" class="w-full">
						<ProjectSection />
					</div>
					<div id="skills" class="w-full">
						<SkillsFooterSection />
					</div>
				</div>
			</main>
		</div>
	</div>
</div>

<style>
	/* Hide Scrollbar */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	main {
		scroll-behavior: smooth;
	}

	.writing-vertical-lr {
		writing-mode: vertical-lr;
	}

	@keyframes width {
		to {
			width: 100%;
		}
	}
</style>
