<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { PrismicLink } from '@prismicio/svelte';
	import { formatDate } from '$lib/formatDate';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { theme } from '$lib/stores/theme';

	export let data;
</script>

<Bounded>
	<Heading tag="h1" size="md">My Quaint Life</Heading>

	<div class="mt-12 grid gap-8 md:mt-12">
		{#each data.blogPosts as post}
			<article class="border-b pb-8 last:border-b-0
				{$theme === 'opus' ? 'border-white/10' : 'border-brown-600'}">
				<PrismicLink field={post} class="group">
					<h2 class="text-2xl font-bold transition-colors
						{$theme === 'opus' ? 'text-white group-hover:text-white' : 'text-sage-800 group-hover:text-brown-600'}">
						{post.data.title}
					</h2>
				</PrismicLink>

				<div class="mt-2 flex gap-2 {$theme === 'opus' ? 'text-white/60' : 'text-brown-700'}">
					{#each post.tags as tag}
						<span class="text-sm font-semibold">
							{tag}
						</span>
					{/each}
				</div>

				<p class="mt-2 text-md font-medium {$theme === 'opus' ? 'text-white/60' : 'text-brown-700'}">
					{formatDate(post.data.date)}
				</p>

				{#if post.data.meta_description}
					<p class="mt-2 {$theme === 'opus' ? 'text-white/60' : 'text-sage-700'}">
						{post.data.meta_description}
					</p>
				{/if}
			</article>
		{/each}
	</div>
</Bounded>
