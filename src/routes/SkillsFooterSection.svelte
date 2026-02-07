<script lang="ts">
	const skills = [
		{ category: 'LANGUAGES', items: ['TypeScript', 'JavaScript', 'Dart', 'SQL', 'Python'] },
		{
			category: 'FRONTEND',
			items: ['Next.js', 'React', 'Angular', 'Flutter', 'HTML5', 'CSS3', 'Material-UI', 'Chart.js']
		},
		{ category: 'BACKEND', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
		{ category: 'DATABASES', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
		{ category: 'DEVOPS', items: ['Git', 'Docker', 'Nginx', 'PM2', 'JIRA', 'Postman'] }
	];

	const socialLinks = [
		{ label: 'LINKEDIN', url: 'https://linkedin.com/in/fiqrymuhammad' },
		{ label: 'GITHUB', url: 'https://github.com/fiqryamir' },
		{ label: 'EMAIL', url: 'mailto:mfiqry@outlook.com' }
	];
</script>

<section
	class="relative flex min-h-screen w-full flex-col justify-between bg-black font-sans text-white"
>
	<!-- TOP HALF: SKILLS MATRIX -->
	<div class="grid w-full flex-grow grid-cols-1 border-1 border-gray-200 md:grid-cols-12">
		<!-- BACKGROUND GRID LINES (Subtle for Dark Mode) -->
		<div class="pointer-events-none absolute inset-0 grid grid-cols-12">
			<div class="col-span-3 h-full border-r border-white/20"></div>
			<div class="col-span-9 grid h-full grid-cols-4">
				<div class="h-full border-r border-white/20"></div>
				<div class="h-full border-r border-white/20"></div>
				<div class="h-full border-r border-white/20"></div>
			</div>
		</div>

		<!-- LEFT COL: Sticky Label (3 Cols) -->
		<div class="relative hidden md:col-span-3 md:block">
			<div class="sticky top-0 border-r border-white/20 p-8">
				<!-- 
                   CHANGED '03' -> 'SYS' 
                   Matches 'EXP' and 'PROJ' pattern.
                -->
				<span class="text-outline-white -ml-2 block text-9xl font-bold tracking-tighter opacity-30"
					>SYS</span
				>

				<div class="mt-8 font-mono text-[10px] leading-relaxed opacity-60">
					// SYSTEM_SPECS
					<br />
					// KERNEL_VER_2.0
					<br />
					// CAPABILITIES_LIST
				</div>
			</div>
		</div>

		<!-- RIGHT COL: The Dense Grid (9 Cols) -->
		<div class="relative z-10 md:col-span-9">
			{#each skills as group}
				<!-- SKILL CATEGORY ROW -->
				<div class="border-b border-white/20">
					<!-- Category Header -->
					<div
						class="inline-block border-r border-b border-white/20 bg-white px-3 py-1 font-mono text-[10px] font-bold text-black"
					>
						{group.category}
					</div>

					<!-- Items Grid -->
					<div class="grid grid-cols-2 md:grid-cols-4">
						{#each group.items as skill}
							<div
								class="group relative cursor-crosshair overflow-hidden border-r border-white/20 p-4 transition-colors duration-200 hover:bg-white hover:text-black"
							>
								<!-- Hover: Green Dot -->
								<div
									class="absolute top-2 right-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 opacity-0 transition-opacity group-hover:opacity-100"
								></div>

								<span class="relative z-10 font-mono text-xs font-bold tracking-wider uppercase">
									{skill}
								</span>

								<!-- Random Number Deco -->
								<span
									class="absolute right-2 bottom-1 font-mono text-[8px] opacity-20 group-hover:opacity-100"
								>
									v.{Math.floor(Math.random() * 9)}.0
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}

			<!-- FILLER SPACE -->
			<div
				class="h-32 w-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
			></div>
		</div>
	</div>

	<!-- BOTTOM HALF: FOOTER / CTA -->
	<footer class="relative overflow-hidden border-t-2 border-white bg-white py-20 text-black">
		<div class="relative z-10 w-full px-8 md:px-12">
			<div class="grid grid-cols-1 items-end gap-12 md:grid-cols-2">
				<!-- CALL TO ACTION -->
				<div>
					<p
						class="mb-4 inline-block bg-black px-2 py-0.5 font-mono text-[10px] font-bold text-white"
					>
						// STATUS: AVAILABLE FOR HIRE
					</p>
					<h2 class="mb-8 text-6xl leading-[0.85] font-black tracking-tighter md:text-8xl">
						LET'S<br />BUILD.
					</h2>

					<a
						href="mailto:mfiqry@outlook.com"
						class="group inline-flex items-center gap-4 border-b-4 border-black pb-1 text-xl font-bold transition-all hover:pb-2"
					>
						<span class="transition-transform group-hover:translate-x-2">INITIATE_CONTACT</span>
						<span>-></span>
					</a>
				</div>

				<!-- SOCIAL LINKS -->
				<div class="flex flex-col gap-3 font-mono text-xs font-bold md:text-right">
					{#each socialLinks as link}
						<a
							href={link.url}
							target="_blank"
							class="w-fit px-2 py-1 transition-colors hover:bg-black hover:text-white md:ml-auto"
						>
							[{link.label}]
						</a>
					{/each}
					<p class="mt-8 text-[10px] opacity-40">© 2025 FIQRY.DEV // SYSTEM_VER_1.0</p>
				</div>
			</div>
		</div>

		<!-- DECORATION: Giant Background Text -->
		<div
			class="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] select-none"
		>
			<span class="text-[20vw] leading-none font-black whitespace-nowrap"> SYSTEM_OFFLINE </span>
		</div>
	</footer>
</section>

<style>
	.text-outline-white {
		color: transparent;
		-webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
	}
</style>
