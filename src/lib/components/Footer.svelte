<script lang="ts">

    import {type Content, isFilled, asLink } from '@prismicio/client';
    import { PrismicLink } from '@prismicio/svelte';
    import IconGithub from '~icons/fa-brands/github';
    import IconLinkedin from '~icons/fa-brands/linkedin';
    import IconInstagram from '~icons/fa-brands/instagram';
    import Bounded from './Bounded.svelte';
    import { theme } from '$lib/stores/theme';

    export let settings: Content.SettingsDocument;

    const sectionMap: Record<string, string> = {
        '/about': '/#about',
        '/projects': '/#projects',
        '/project': '/#projects',
        '/blog': '/#blog'
    };

    function resolveHref(link: any): string {
        const path = asLink(link);
        if (path && sectionMap[path]) return sectionMap[path];
        return path || '/';
    }

    $: socialClass = $theme === 'opus'
        ? 'text-white/70 hover:text-white hover:scale-125'
        : 'text-matcha-600 hover:text-matcha-700 hover:scale-125';

</script>


<Bounded class={$theme === 'opus' ? 'text-white/80' : 'text-sage-900'}>
	<div
		class="container mx-auto flex mt-12 flex-col items-center justify-between gap-6 border-t py-8 sm:flex-row transition-colors duration-300
			{$theme === 'opus' ? 'border-white/10' : 'border-sage-300'}"
	>
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"
		>
			<a
				href="/"
				class="text-xl font-extrabold tracking-tighter transition-colors duration-150
					{$theme === 'opus' ? 'text-white hover:text-white/70' : 'text-matcha-600 hover:text-matcha-700'}"
			>
				{settings.data.name}
			</a>
			<span
				class="hidden text-5xl font-extralight leading-[0] sm:inline
					{$theme === 'opus' ? 'text-white/30' : 'text-matcha-600'}"
				aria-hidden="true">/</span
			>
			<p class="text-sm {$theme === 'opus' ? 'text-white/30' : 'text-sage-300'}">
				© {new Date().getFullYear()}
				{settings.data.name}
			</p>
		</div>


		<!-- footer -->
		<nav class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { link, label }, index}
					<li>
						<a
							href={resolveHref(link)}
							class="block px-3 py-1 text-base font-bold transition-colors duration-150
								{$theme === 'opus' ? 'text-white/80 hover:text-white' : 'text-matcha-600 hover:text-matcha-700'}"
						>{label}</a>
					</li>
					{#if index < settings.data.nav_item.length - 1}
						<span class="text-4xl font-thin leading-[0] {$theme === 'opus' ? 'text-white/20' : 'text-matcha-600'}" aria-hidden="true">
							/
						</span>
					{/if}
				{/each}
			</ul>
		</nav>
		<div class="socials inline-flex justify-center sm:justify-end">
			{#if isFilled.link(settings.data.github_link)}
				<PrismicLink
					field={settings.data.github_link}
					class="p-2 text-2xl transform transition-all duration-150 {socialClass}"
					aria-label={settings.data.name + ' on Github'}
				>
					<IconGithub />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.linkedin_link)}
				<PrismicLink
					field={settings.data.linkedin_link}
					class="p-2 text-2xl transform transition-all duration-150 {socialClass}"
					aria-label={settings.data.name + ' on Linkedin'}
				>
					<IconLinkedin />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.instagram_link)}
				<PrismicLink
					field={settings.data.instagram_link}
					class="p-2 text-2xl transform transition-all duration-150 {socialClass}"
					aria-label={settings.data.name + ' on Instagram'}
				>
					<IconInstagram />
				</PrismicLink>
			{/if}
		</div>
	</div>
</Bounded>
