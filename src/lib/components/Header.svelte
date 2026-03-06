<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import NavBarLink from './NavBarLink.svelte';
	import Button from './Button.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme';

	import IconMenu from '~icons/ic/baseline-menu';
	import IconClose from '~icons/ic/baseline-close';

	export let settings: Content.SettingsDocument;

	let open = false;

	function onLinkClick() {
		open = false;
	}
</script>

<header class="top-0 z-50 md:sticky md:top-4 relative px-4 md:px-6">
	<nav class="mx-auto w-full max-w-7xl">
		<div
			class="flex flex-col justify-between rounded-b-lg px-4 py-2 shadow-sm md:m-4 md:flex-row md:items-center md:rounded-xl transition-colors duration-300
				{$theme === 'opus' ? 'bg-white border border-black/5' : 'bg-sage-50'}"
		>
			<div class="flex items-center justify-between">
				<a
					href="/"
					aria-label="Homepage"
					class="text-xl font-extrabold tracking-tighter transition-colors duration-300
						{$theme === 'opus' ? 'text-black' : 'text-matcha-600'}">{settings.data.name}</a
				>
				<button
					aria-expanded={open}
					aria-label="Open Menu"
					class="block p-2 text-2xl md:hidden transition-colors duration-300
						{$theme === 'opus' ? 'text-black' : 'text-matcha-600'}"
					on:click={() => (open = true)}
				>
					<IconMenu />
				</button>
			</div>
			<!-- Mobile Nav -->
			<ul
				class={`fixed inset-0 z-50 flex flex-col items-end gap-4 pr-4 pt-14 transition-all duration-300 ease-in-out md:hidden ${$theme === 'opus' ? 'bg-[#0a0a0a]' : 'bg-sage-50'} ${open ? 'translate-x-0' : 'translate-x-[100%]'}`}
			>
				<li>
					<button
						aria-expanded={open}
						aria-label="Close Menu"
						class="fixed right-4 top-3 block p-2 text-2xl md:hidden transition-colors duration-300
							{$theme === 'opus' ? 'text-white' : 'text-matcha-600'}"						on:click={() => (open = false)}
					>
						<IconClose />
					</button>
				</li>
				{#each settings.data.nav_item as { label, link }}
					<li class="first:mt-8">
						<NavBarLink field={link} {label} {onLinkClick} type="mobile" />
					</li>
				{/each}
				{#if isFilled.link(settings.data.cta_link)}
					<Button linkField={settings.data.cta_link} label={settings.data.cta_label} />
				{/if}
				<li class="mt-4">
					<ThemeToggle />
				</li>
			</ul>

			<!-- Desktop Nav -->
			<ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
				{#each settings.data.nav_item as { label, link }}
					<li>
						<NavBarLink field={link} {label} {onLinkClick} type="desktop" />
					</li>
				{/each}
				{#if isFilled.link(settings.data.cta_link)}
					<Button linkField={settings.data.cta_link} label={settings.data.cta_label} class="ml-3" />
				{/if}
				<li class="ml-2">
					<ThemeToggle />
				</li>
			</ul>
		</div>
	</nav>
</header>