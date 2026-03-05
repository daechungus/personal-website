<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	import { components } from '$lib/slices';
	import { formatDate } from '$lib/formatDate';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import Bounded from './Bounded.svelte';
	import Heading from './Heading.svelte';

	export let page: Content.BlogpostDocument | Content.ProjectDocument;

	const formattedDate = formatDate(page.data.date);

	let containerRef: HTMLDivElement;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion || !containerRef) return;

		const elements = containerRef.querySelectorAll('.content-animate');
		gsap.fromTo(
			elements,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.15
			}
		);
	});
</script>

<Bounded tag="article">
	<div bind:this={containerRef} class="text-md rounded-2xl border-2 border-brown-800 bg-sage-50 px-4 py-10 md:px-10 md:py-12 opacity-80">
		<Heading tag="h1" size="sm" class="content-animate opacity-0">{page.data.title}</Heading>
		<div class="content-animate opacity-0 flex flex-wrap gap-2 mt-2">
			{#each page.tags as tag}
				<span class="rounded-full bg-matcha-100 px-3 py-1 text-sm font-semibold text-matcha-700">
					{tag}
				</span>
			{/each}
		</div>
		<p class="content-animate opacity-0 mt-8 border-b border-brown-600 pb-2 text-lg font-medium text-brown-700">{formattedDate}</p>

		<div class="content-animate opacity-0 prose prose-lg mt-12 w-full !max-w-none md:mt-20 prose-headings:text-matcha-600 prose-p:text-sage-800 prose-strong:text-matcha-700 prose-a:text-matcha-600 [&>*]:max-w-none">
			<SliceZone slices={page.data.slices} {components} />
		</div>
	</div>
</Bounded>