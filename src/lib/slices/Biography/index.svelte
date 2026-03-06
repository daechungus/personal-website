<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import { theme } from '$lib/stores/theme';
	import Avatar from './Avatar.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let slice: Content.BiographySlice;

	let component: HTMLDivElement;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion || !component) return;

		const elements = component.querySelectorAll('.bio-animate');
		gsap.fromTo(
			elements,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: component,
					start: 'top bottom-=100px',
					end: 'bottom center',
					toggleActions: 'play none none none'
				}
			}
		);
	});
</script>

<Bounded id="about" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div bind:this={component} class="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
		<Heading size="lg" class="bio-animate opacity-0 col-start-1">
			{slice.primary.heading}
		</Heading>

		<div class="bio-animate opacity-0 col-start-1 prose prose-xl leading-relaxed text-lg
			{$theme === 'opus' ? 'text-white/80' : 'text-sage-800'}">
			<PrismicRichText field={slice.primary.description} />
		</div>
		<div class="bio-animate opacity-0">
			<Button linkField={slice.primary.button_link} label={slice.primary.button_label} />
		</div>

		<Avatar image={slice.primary.avatar} class="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
	</div>
</Bounded>