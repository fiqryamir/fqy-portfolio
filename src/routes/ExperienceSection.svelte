<script lang="ts">
	const jobs = [
		{
			id: '01',
			role: 'Full Stack Engineer',
			company: 'Telekom Malaysia',
			location: 'Kuala Lumpur, WP',
			period: 'May 2024 — Present',
			tech: ['React', 'Node.js', 'Express', 'TypeScript', 'Angular', 'MySQL'],
			points: [
				'Drove a 50% reduction in page load times by refactoring API calls and normalizing database schemas.',
				'Delivered a client-facing configurable dashboard using React and Chart.js.',
				'Led the development of a smart city proof-of-concept (POC) using Next.js and TypeScript.'
			]
		},
		{
			id: '02',
			role: 'Frontend Engineer',
			company: 'TM R&D',
			location: 'Cyberjaya, Selangor',
			period: 'Jan 2024 — Apr 2024',
			tech: ['JavaScript', 'Webix', 'JIRA', 'Agile'],
			points: [
				'Engineered critical frontend solutions for a large-scale workforce management system.',
				'Improved core functionality and user workflow using the Webix framework.',
				'Contributed effectively within an Agile (Scrum) environment for sprint planning.'
			]
		}
	];
</script>

<section class="relative w-full border-b border-gray-200 bg-white font-sans text-black">
	<!-- 
      THE GRID 
      - Using 'w-full' to fill the frame.
      - Grid lines are now 'border-gray-200' for a subtle look.
    -->
	<div class="relative grid w-full grid-cols-1 md:grid-cols-12">
		<!-- BACKGROUND VERTICAL LINES -->
		<div class="pointer-events-none absolute inset-0 grid grid-cols-12">
			<div class="col-span-3 h-full border-r border-gray-200"></div>
			<div class="col-span-9 grid h-full grid-cols-3">
				<div class="h-full border-r border-gray-200"></div>
				<div class="h-full border-r border-gray-200"></div>
			</div>
		</div>

		<!-- LEFT COLUMN: Sticky "Log" Header (3 Cols) -->
		<div class="relative hidden md:col-span-3 md:block">
			<div
				class="sticky top-0 flex min-h-[calc(100vh-7rem)] flex-col justify-between border-r border-gray-200 p-8"
			>
				<div>
					<span class="block text-9xl font-bold tracking-tighter opacity-10">EXP</span>
					<div class="mt-4 h-1 w-12 bg-black"></div>
				</div>

				<div class="font-mono text-[10px] leading-relaxed text-gray-400 uppercase">
					<p>// CAREER_LOGS_INIT</p>
					<p>// TOTAL_ENTRIES: {jobs.length}</p>
					<!-- Animated Bar -->
					<div class="mt-4 flex gap-1">
						{#each Array(5) as _, i}
							<div
								class="h-4 w-1 animate-pulse bg-gray-300"
								style="animation-delay: {i * 100}ms"
							></div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- RIGHT COLUMN: The Feed (9 Cols) -->
		<div class="relative z-10 flex flex-col md:col-span-9">
			{#each jobs as job, index}
				<!-- INDIVIDUAL JOB ROW -->
				<!-- 'group' allows us to animate elements when hovering this specific section -->
				<div
					class="group relative border-b border-gray-200 transition-colors duration-500 hover:bg-gray-50"
				>
					<!-- 1. JOB HEADER (Sticky relative to this row) -->
					<div
						class="sticky top-0 z-20 flex flex-col justify-between border-b border-gray-100 bg-white/90 p-8 backdrop-blur-sm md:flex-row md:items-end md:p-12"
					>
						<div>
							<div class="mb-2 flex items-center gap-3 font-mono text-xs text-gray-400">
								<span class="font-bold text-black">0{index + 1}</span>
								<span>///</span>
								<span>{job.location}</span>
							</div>
							<h2 class="text-4xl leading-none font-black tracking-tighter uppercase md:text-6xl">
								{job.company}
							</h2>
							<h3 class="mt-1 font-mono text-lg font-bold text-gray-500">{job.role}</h3>
						</div>

						<!-- Date Badge -->
						<div class="mt-4 font-mono text-xs font-bold md:mt-0">
							<span class="bg-black px-3 py-1 text-white transition-colors group-hover:bg-blue-600">
								{job.period}
							</span>
						</div>
					</div>

					<!-- 2. JOB CONTENT -->
					<div class="p-8 md:p-12">
						<ul class="space-y-6">
							{#each job.points as point}
								<li class="flex items-start gap-4">
									<span
										class="mt-2.5 h-1.5 w-1.5 bg-gray-300 transition-colors group-hover:bg-black"
									></span>
									<p class="max-w-2xl font-sans text-lg leading-relaxed font-medium text-gray-800">
										{point}
									</p>
								</li>
							{/each}
						</ul>

						<!-- Tech Tags -->
						<div class="mt-10 flex flex-wrap gap-2">
							{#each job.tech as t}
								<span
									class="cursor-default border border-gray-200 bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase transition-all hover:border-black hover:bg-black hover:text-white"
								>
									{t}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}

			<!-- END OF LOG DECORATION -->
			<div
				class="flex h-24 items-center justify-center bg-gray-100 font-mono text-xs text-gray-400"
			>
				// END_OF_LOGS
			</div>
		</div>
	</div>
</section>
