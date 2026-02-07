<script lang="ts">
	// No more marquee logic needed
</script>

<section
	class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col justify-between overflow-hidden border-b border-gray-200 font-sans selection:bg-black selection:text-white"
>
	<!-- MAIN GRID LAYOUT -->
	<div class="relative grid h-full w-full flex-grow grid-cols-1 md:grid-cols-12">
		<!-- BACKGROUND GRID LINES -->
		<div class="pointer-events-none absolute inset-0 grid h-full w-full grid-cols-12">
			<div class="col-span-3 h-full border-r border-gray-200"></div>
			<div class="col-span-3 h-full border-r border-gray-200"></div>
			<div class="col-span-3 h-full border-r border-gray-200"></div>
		</div>

		<!-- LEFT COLUMN: Intro -->
		<div
			class="relative z-10 flex flex-col justify-end border-r border-gray-200 bg-white/50 p-8 backdrop-blur-sm md:col-span-3"
		>
			<div class="mb-12">
				<p class="mb-4 font-mono text-xs text-gray-500">// INTRO_SEQUENCE</p>
				<p class="text-lg leading-tight font-medium">
					Building scalable applications and REST APIs in Agile environments.
				</p>
			</div>
			<!-- Simple Down Arrow -->
			<div class="mt-auto"></div>
		</div>

		<!-- RIGHT COLUMN: Big Text -->
		<div class="relative flex flex-col justify-center overflow-hidden md:col-span-9">
			<!-- Crosshair Deco -->
			<div
				class="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-black opacity-20"
			></div>
			<div
				class="absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-black opacity-20"
			></div>

			<!-- THE BIG TEXT -->
			<div class="relative z-20 w-full px-8 mix-blend-hard-light">
				<h1
					class="hover:text-outline cursor-default text-[11vw] leading-[0.8] font-black tracking-tighter transition-all duration-500"
				>
					SOFTWARE
				</h1>
				<h1
					class="text-outline ml-[10vw] cursor-default text-[11vw] leading-[0.8] font-black tracking-tighter transition-all duration-500 hover:text-black"
				>
					ENGINEER
				</h1>
			</div>
		</div>
	</div>

	<!-- BOTTOM BAR: STATIC STATUS (Replaces Marquee) -->
	<div
		class="flex h-12 w-full shrink-0 items-center justify-between border-t border-gray-200 bg-white px-6 font-mono text-[10px] font-bold tracking-widest text-black uppercase md:text-xs"
	>
		<!-- Connection -->
		<div class="flex items-center gap-2">
			<span class="relative flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
			</span>
			<span>System Online</span>
		</div>

		<!-- Coordinates -->
		<div class="hidden opacity-40 md:block">LAT: 3.1412° N /// LON: 101.6869° E</div>

		<!-- Scroll Indicator / Version -->
		<div class="flex items-center gap-2">
			<span class="opacity-40">SCROLL FOR LOGS</span>
			<div class="flex h-3 w-3 items-center justify-center border border-black">
				<div class="h-1 w-1 bg-black"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.text-outline {
		color: transparent;
		-webkit-text-stroke: 2px black;
	}
</style>
