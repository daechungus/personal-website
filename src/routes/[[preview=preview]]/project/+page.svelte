<script>
	import { isFilled, asImageSrc } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import { formatDate } from '$lib/formatDate';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let data;

	let gridRef;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion || !gridRef) return;

		const cards = gridRef.querySelectorAll('.project-card');
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 1.3,
				ease: 'elastic.out(1,0.3)',
				stagger: 0.15,
				scrollTrigger: {
					trigger: gridRef,
					start: 'top bottom-=100px',
					end: 'bottom center',
					toggleActions: 'play none none none'
				}
			}
		);
	});
</script>

<Bounded>
	<Heading tag="h1" size="md" class="text-matcha-600">A Peek in My Head</Heading>

	<div bind:this={gridRef} class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as project}
			<PrismicLink field={project} class="group block">
				<article class="project-card opacity-0 h-[360px] flex flex-col overflow-hidden rounded-lg border-2 border-brown-800 bg-sage-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
					<div class="flex flex-1 flex-col overflow-hidden p-4">
						<h2 class="line-clamp-2 text-xl font-bold text-sage-800 transition-colors group-hover:text-brown-600">
							{project.data.title}
						</h2>

						{#if project.tags.length > 0}
							<div class="mt-2 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="rounded-full bg-matcha-100 px-3 py-0.5 text-xs font-semibold text-matcha-700">
										{tag}
									</span>
								{/each}
							</div>
						{/if}

						<p class="mt-2 text-sm font-medium text-brown-700">
							{formatDate(project.data.date)}
						</p>

						{#if project.data.meta_description}
							<p class="mt-2 line-clamp-2 text-sm text-sage-700">
								{project.data.meta_description}
							</p>
						{/if}
					</div>

					{#if isFilled.image(project.data.hover_image)}
						<div class="aspect-[16/10] overflow-hidden">
							<img
								src={asImageSrc(project.data.hover_image, { w: 600, h: 375, fit: 'crop' })}
								alt={project.data.hover_image.alt || project.data.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
					{/if}
				</article>
			</PrismicLink>
		{/each}
	</div>
</Bounded>