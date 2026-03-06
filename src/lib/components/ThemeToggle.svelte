<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		theme.init();
		mounted = true;
	});
</script>

{#if mounted}
	<button
		on:click={() => theme.toggle()}
		class="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 overflow-hidden
			{$theme === 'matcha'
				? 'border-matcha-600 bg-sage-50 hover:bg-matcha-100'
				: 'border-black/15 bg-black/5 hover:bg-black/10'}"
		aria-label="Toggle theme between matcha and opus"
		title={$theme === 'matcha' ? 'Switch to Opus (dark)' : 'Switch to Matcha (light)'}
	>
		<!-- Sun (matcha) -->
		<span
			class="absolute transition-all duration-500 ease-out
				{$theme === 'matcha'
					? 'opacity-100 rotate-0 scale-100'
					: 'opacity-0 rotate-90 scale-0'}"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-matcha-600">
				<circle cx="12" cy="12" r="5"/>
				<line x1="12" y1="1" x2="12" y2="3"/>
				<line x1="12" y1="21" x2="12" y2="23"/>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
				<line x1="1" y1="12" x2="3" y2="12"/>
				<line x1="21" y1="12" x2="23" y2="12"/>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
			</svg>
		</span>

		<!-- Moon (opus) -->
		<span
			class="absolute transition-all duration-500 ease-out
				{$theme === 'opus'
					? 'opacity-100 rotate-0 scale-100'
					: 'opacity-0 -rotate-90 scale-0'}"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
			</svg>
		</span>
	</button>
{/if}
