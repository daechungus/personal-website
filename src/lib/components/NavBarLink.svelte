<script lang="ts">
	import { page } from '$app/stores';
	import { asLink, type KeyTextField, type LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import { theme } from '$lib/stores/theme';

	export let field: LinkField | undefined = undefined;
	export let label: KeyTextField;
	export let onLinkClick: (event: MouseEvent) => void;
	export let type: 'desktop' | 'mobile';
	export let href: string | undefined = undefined;

	const path = field ? asLink(field) : href;

	const sectionMap: Record<string, string> = {
		'/about': '/#about',
		'/projects': '/#projects',
		'/project': '/#projects',
		'/blog': '/#blog'
	};

	$: resolvedHref = (path && sectionMap[path]) || href || path;
	$: isAnchor = typeof resolvedHref === 'string' && resolvedHref.includes('#');
	$: isActive = resolvedHref && (
		isAnchor
			? false
			: $page.url.pathname.includes(resolvedHref ?? '')
	);

	// Desktop: white header in opus → dark text; Mobile: dark overlay in opus → white text
	$: textClass = type === 'desktop'
		? ($theme === 'opus' ? 'text-black/80' : 'text-matcha-600')
		: ($theme === 'opus' ? 'text-white/90' : 'text-matcha-600');
	$: bgClass = $theme === 'opus' ? 'bg-black/10' : 'bg-matcha-700';
	$: bgClassMobile = $theme === 'opus' ? 'bg-white/20' : 'bg-matcha-600';
</script>

{#if type === 'desktop'}
	{#if isAnchor}
		<a
			class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold {textClass}"
			href={resolvedHref}
			on:click={onLinkClick}
		>
			<span
				class="absolute inset-0 z-0 h-full rounded {bgClass} transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"
			></span>
			<span class="relative">{label}</span>
		</a>
	{:else}
		<PrismicLink
			class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold {textClass}"
			{field}
			on:click={onLinkClick}
			aria-current={isActive ? 'page' : undefined}
		>
			<span
				class={`absolute inset-0 z-0 h-full rounded ${bgClass} transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? 'translate-y-6' : 'translate-y-8'}`}
			></span>
			<span class="relative">{label}</span>
		</PrismicLink>
	{/if}
{:else}
	{#if isAnchor}
		<a
			class="group relative block overflow-hidden rounded px-3 text-3xl font-bold {textClass}"
			href={resolvedHref}
			on:click={onLinkClick}
		>
			<span
				class="absolute inset-0 z-0 h-full rounded {bgClassMobile} transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-16"
			></span>
			<span class="relative">{label}</span>
		</a>
	{:else}
		<PrismicLink
			class="group relative block overflow-hidden rounded px-3 text-3xl font-bold {textClass}"
			{field}
			on:click={onLinkClick}
			aria-current={isActive ? 'page' : undefined}
		>
			<span
				class={`absolute inset-0 z-0 h-full rounded ${bgClassMobile} transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? 'translate-y-6' : 'translate-y-16'}`}
			></span>
			<span class="relative">{label}</span>
		</PrismicLink>
	{/if}
{/if}
