<script lang="ts">
	import clsx from 'clsx';
	import { theme } from '$lib/stores/theme';

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
	export let size: 'xl' | 'lg' | 'md' | 'sm' = 'lg';
	let className: string = '';
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={clsx(
		'font-bold leading-tight tracking-tight transition-colors duration-300',
		$theme === 'opus' ? 'text-white' : 'text-matcha-600',
		size === 'xl' && 'text-7xl md:text-9xl',
		size === 'lg' && 'text-6xl md:text-8xl',
		size === 'md' && 'text-5xl md:text-6xl',
		size === 'sm' && 'text-4xl md:text-5xl',
		className
	)}
>
	<slot />
</svelte:element>