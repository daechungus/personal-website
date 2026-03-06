<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { isFilled, asImageSrc } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import { formatDate } from '$lib/formatDate';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let data;

	let projectGridRef;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		if (projectGridRef) {
			const cards = projectGridRef.querySelectorAll('.project-card');
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
						trigger: projectGridRef,
						start: 'top bottom-=100px',
						end: 'bottom center',
						toggleActions: 'play none none none'
					}
				}
			);
		}
	});
</script>

<SliceZone slices={data.page.data.slices} {components} />

<!-- About Section -->
<div id="about">
	<SliceZone slices={data.aboutSlices} {components} />
</div>

<!-- Projects Section -->
<Bounded id="projects">
	<Heading tag="h2" size="md">A Peek in My Head</Heading>

	<div bind:this={projectGridRef} class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as project}
			<PrismicLink field={project} class="group block">
				<article class="project-card opacity-0 h-[360px] flex flex-col overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
					{$theme === 'opus' ? 'border-white/10 bg-[#111111]' : 'border-brown-800 bg-sage-50'}">
					<div class="flex flex-1 flex-col overflow-hidden p-4">
						<h3 class="line-clamp-2 text-xl font-bold transition-colors
							{$theme === 'opus' ? 'text-white group-hover:text-white' : 'text-sage-800 group-hover:text-brown-600'}">
							{project.data.title}
						</h3>

						{#if project.tags.length > 0}
							<div class="mt-2 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="rounded-full px-3 py-0.5 text-xs font-semibold
										{$theme === 'opus' ? 'bg-white/10 text-white/70' : 'bg-matcha-100 text-matcha-700'}">
										{tag}
									</span>
								{/each}
							</div>
						{/if}

						<p class="mt-2 text-sm font-medium {$theme === 'opus' ? 'text-white/40' : 'text-brown-700'}">
							{formatDate(project.data.date)}
						</p>

						{#if project.data.meta_description}
							<p class="mt-2 line-clamp-2 text-sm {$theme === 'opus' ? 'text-white/50' : 'text-sage-700'}">
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

<!-- Blog Section -->
<Bounded id="blog">
	<Heading tag="h2" size="md">My Quaint Life</Heading>

	<div class="mt-12 grid gap-8 md:mt-12">
		{#each data.blogPosts as post}
			<article class="border-b pb-8 last:border-b-0 {$theme === 'opus' ? 'border-white/10' : 'border-brown-600'}">
				<PrismicLink field={post} class="group">
					<h3 class="text-2xl font-bold transition-colors
						{$theme === 'opus' ? 'text-white group-hover:text-white' : 'text-sage-800 group-hover:text-brown-600'}">
						{post.data.title}
					</h3>
				</PrismicLink>

				<div class="mt-2 flex gap-2 {$theme === 'opus' ? 'text-white/40' : 'text-brown-700'}">
					{#each post.tags as tag}
						<span class="text-sm font-semibold">
							{tag}
						</span>
					{/each}
				</div>

				<p class="mt-2 text-md font-medium {$theme === 'opus' ? 'text-white/40' : 'text-brown-700'}">
					{formatDate(post.data.date)}
				</p>

				{#if post.data.meta_description}
					<p class="mt-2 {$theme === 'opus' ? 'text-white/50' : 'text-sage-700'}">
						{post.data.meta_description}
					</p>
				{/if}
			</article>
		{/each}
	</div>
</Bounded>
