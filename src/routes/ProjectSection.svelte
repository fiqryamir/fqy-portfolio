<script lang="ts">
	const projects = [
		{
			id: 'PROJ_01',
			title: 'Smartmap Explorer',
			subtitle: 'Configurable Dashboard',
			year: '2024',
			stack: ['React', 'Material-UI', 'Chart.js'],
			desc: 'Dynamic client-facing dashboard platform enabling users to build real-time data widgets.',
			status: 'DEPLOYED',
			link: '#'
		},
		{
			id: 'PROJ_02',
			title: 'TRACEY',
			subtitle: 'Enterprise Asset Mgmt',
			year: '2024',
			stack: ['Angular', 'TypeScript', 'MySQL', 'Express'],
			desc: 'Secure role-based authorization system for a large-scale enterprise platform.',
			status: 'INTERNAL',
			link: '#'
		},
		{
			id: 'PROJ_03',
			title: 'Arbitrage Platform',
			subtitle: 'Real-Time Trading Bot',
			year: '2025',
			stack: ['Next.js', 'Python', 'FastAPI', 'Redis'],
			desc: 'Distributed backend with independent Python workers for arbitrage detection.',
			status: 'IN_DEV',
			link: '#'
		}
	];
</script>

<section class="relative w-full border-b border-gray-200 bg-white font-sans text-black">
	<!-- MASTER GRID -->
	<!-- Removed border-l/r to fit the main frame perfectly -->
	<div class="relative grid w-full grid-cols-1 md:grid-cols-12">
		<!-- BACKGROUND GRID LINES (Matches Experience Section) -->
		<div class="pointer-events-none absolute inset-0 grid grid-cols-12">
			<div class="col-span-3 h-full border-r border-gray-200"></div>
			<div class="col-span-9 grid h-full grid-cols-2">
				<div class="h-full border-r border-gray-200"></div>
				<!-- Last col edge -->
			</div>
		</div>

		<!-- LEFT COL: Sticky Title (3 Cols) -->
		<div class="relative hidden md:col-span-3 md:block">
			<div
				class="sticky top-0 flex min-h-[calc(100vh-6.15rem)] flex-col justify-between border-r border-gray-200 p-8"
			>
				<div>
					<span class="block text-9xl font-bold tracking-tighter opacity-10">PROJ</span>
					<div class="mt-4 h-1 w-12 bg-black"></div>
				</div>

				<!-- Vertical Text -->
				<div
					class="writing-vertical-lr flex h-full max-h-[40vh] rotate-180 items-center font-mono text-[10px] tracking-widest text-gray-400 uppercase"
				>
					// SELECTED_WORKS_ARCHIVE
				</div>
			</div>
		</div>

		<!-- RIGHT COL: The Grid of Cards (9 Cols) -->
		<div class="relative z-10 bg-white md:col-span-9">
			<!-- HEADER -->
			<div class="flex items-end justify-between border-b border-gray-200 bg-white p-8 md:p-12">
				<div>
					<h2 class="text-4xl font-black tracking-tighter uppercase md:text-6xl">Modules</h2>
					<p class="mt-2 font-mono text-sm text-gray-500">// EXECUTABLE_PROGRAMS</p>
				</div>

				<!-- Filter Buttons (Updated Style) -->
				<!-- <div class="hidden gap-2 font-mono text-xs md:flex">
					<button
						class="border border-black bg-black px-3 py-1 text-white transition-all hover:bg-white hover:text-black"
						>[ALL]</button
					>
					<button
						class="border border-gray-200 bg-white px-3 py-1 text-gray-500 transition-all hover:border-black hover:text-black"
						>[WEB]</button
					>
					<button
						class="border border-gray-200 bg-white px-3 py-1 text-gray-500 transition-all hover:border-black hover:text-black"
						>[BACKEND]</button
					>
				</div> -->
			</div>

			<!-- PROJECTS GRID -->
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each projects as project, i}
					<!-- PROJECT CARD -->
					<!-- 
                       - Added 'border-gray-200' instead of black.
                       - Kept the hover:bg-black effect.
                    -->
					<a
						href={project.link}
						class="group relative flex h-96 flex-col justify-between overflow-hidden border-b border-gray-200 bg-white p-8 transition-colors duration-500 hover:bg-black hover:text-white {i %
							2 ===
						0
							? 'md:border-r'
							: ''}"
					>
						<!-- BACKGROUND GRID (Visible on Hover) -->
						<div
							class="pointer-events-none absolute inset-0 grid grid-cols-6 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
						>
							{#each Array(6) as _}
								<div class="h-full border-r border-white"></div>
							{/each}
						</div>

						<!-- TOP: ID & Status -->
						<div class="z-10 flex items-start justify-between font-mono text-xs">
							<span
								class="border border-gray-200 px-2 py-0.5 transition-colors group-hover:border-white"
							>
								{project.id}
							</span>
							<div class="flex items-center gap-2">
								<span class="relative flex h-2 w-2">
									<span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-0 group-hover:opacity-100"
									></span>
									<span
										class="relative inline-flex h-2 w-2 rounded-full bg-gray-300 transition-colors group-hover:bg-green-500"
									></span>
								</span>
								<span class="text-[10px] font-bold">{project.status}</span>
							</div>
						</div>

						<!-- MIDDLE: The Content -->
						<div class="relative z-10 mt-auto">
							<!-- Year -->
							<div
								class="mb-2 font-mono text-xs opacity-50 transition-opacity group-hover:opacity-100"
							>
								// COPYRIGHT {project.year}
							</div>

							<!-- Title -->
							<h3
								class="mb-1 text-3xl leading-none font-bold uppercase transition-transform duration-300 group-hover:translate-x-2"
							>
								{project.title}
							</h3>
							<h4
								class="mb-4 font-mono text-sm opacity-60 transition-transform delay-75 duration-300 group-hover:translate-x-2 group-hover:opacity-100"
							>
								{project.subtitle}
							</h4>

							<!-- Description (Hidden initially, slides up on hover) -->
							<p
								class="max-w-xs translate-y-4 text-sm leading-relaxed opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
							>
								{project.desc}
							</p>
						</div>

						<!-- BOTTOM: Tech Stack -->
						<div
							class="z-10 mt-6 flex flex-wrap gap-2 border-t border-gray-200 pt-4 transition-colors group-hover:border-white/30"
						>
							{#each project.stack as tech}
								<span
									class="border border-transparent px-1.5 py-0.5 font-mono text-[10px] uppercase group-hover:border-white"
								>
									{tech}
								</span>
							{/each}
						</div>

						<!-- DECORATION: Corner Cut -->
						<div
							class="absolute top-0 right-0 h-12 w-12 bg-black transition-colors duration-500 group-hover:bg-white"
							style="clip-path: polygon(100% 0, 0 0, 100% 100%);"
						></div>
					</a>
				{/each}

				<!-- FILLER BLOCK (Matches the gray grid style) -->
				<div
					class="h-96 border-b border-gray-200 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"
				></div>
			</div>
		</div>
	</div>
</section>

<style>
	.writing-vertical-lr {
		writing-mode: vertical-lr;
	}
</style>
