<!-- src/components/fQyLogo.svelte -->
<div class="group relative flex h-12 w-12 cursor-pointer items-center justify-center select-none">
	<!-- THE OUTER FRAME (Chamfered) -->
	<!-- Inverts color on hover -->
	<div
		class="absolute inset-0 border-2 border-black bg-white transition-all duration-300 group-hover:bg-black"
		style="clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);"
	></div>

	<!-- THE TEXT -->
	<div class="relative z-10 flex items-center justify-center">
		<!-- The 'f' -->
		<span
			class="-translate-x-0.5 -translate-y-2 font-mono text-[10px] font-bold transition-colors group-hover:text-white"
			>f</span
		>

		<!-- The 'Q' (Massive and Bold) -->
		<span class="text-2xl font-black tracking-tighter transition-colors group-hover:text-white"
			>Q</span
		>

		<!-- The 'y' -->
		<span
			class="translate-x-0.5 translate-y-2 font-mono text-[10px] font-bold transition-colors group-hover:text-white"
			>y</span
		>
	</div>

	<!-- DECORATIVE DOTS (Like a circuit board) -->
	<div
		class="absolute top-1 right-1 flex gap-0.5 opacity-30 transition-opacity group-hover:opacity-100"
	>
		<div class="h-1 w-1 bg-black group-hover:bg-green-500"></div>
		<div class="h-1 w-1 bg-black group-hover:bg-green-500"></div>
	</div>

	<!-- SIDE LABEL -->
	<div
		class="absolute top-1/2 -left-8 hidden -translate-y-1/2 -rotate-90 transition-all group-hover:block"
	>
		<span class="font-mono text-[8px] font-black tracking-widest text-black uppercase">
			USER_AUTH
		</span>
	</div>
</div>
