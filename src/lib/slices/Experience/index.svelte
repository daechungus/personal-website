<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let slice: Content.ExperienceSlice;

	let component: HTMLDivElement;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion || !component) return;

		const items = component.querySelectorAll('.experience-item');
		items.forEach((item) => {
			gsap.fromTo(
				item,
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 1.3,
					ease: 'elastic.out(1,0.3)',
					scrollTrigger: {
						trigger: item,
						start: 'top bottom-=100px',
						end: 'bottom center',
						toggleActions: 'play none none none'
					}
				}
			);
		});
	});
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div bind:this={component}>
		<Heading tag="h2" size="lg">
			{slice.primary.heading}
		</Heading>
		{#each slice.primary.item as item}
			<div class="experience-item opacity-0 ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
				<Heading tag="h3" size="sm">
					{item.title}
				</Heading>

				<p
					class="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-light text-slate-400"
				>
					<span>{item.time_period}</span>
					{' '}
					<span class="text-3xl font-extralight">/</span>{' '}
					<span>{item.institution}</span>
				</p>
				<div class="prose prose-invert prose-slate mt-4 prose-xl text-slate-300 leading-relaxed text-lg">
					<PrismicRichText field={item.description} />
				</div>
			</div>
		{/each}
	</div>
</Bounded>