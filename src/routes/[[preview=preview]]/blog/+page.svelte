<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { PrismicLink } from '@prismicio/svelte';
	import { formatDate } from '$lib/formatDate';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let data;
</script>

<Bounded>
	<div class="rounded-2xl border-2 border-brown-800 bg-sage-50 px-4 md:px-8 md:py-10 opacity-80">
		<Heading tag="h1" size="md" class="text-matcha-600">My Blog</Heading>
		
		<div class="mt-12 grid gap-8 md:mt-12">
			{#each data.blogPosts as post}
				<article class="border-b border-brown-600 pb-8 last:border-b-0">
					<PrismicLink field={post} class="group">
						<h2 class="text-2xl font-bold text-sage-800 group-hover:text-brown-600 transition-colors">
							{post.data.title}
						</h2>
					</PrismicLink>
					
					<div class="mt-2 flex gap-2 text-brown-700">
						{#each post.tags as tag}
							<span class="text-sm font-semibold">
								{tag}
							</span>
						{/each}
					</div>
					
					<p class="mt-2 text-md font-medium text-brown-700">
						{formatDate(post.data.date)}
					</p>
					
					{#if post.data.meta_description}
						<p class="mt-2 text-sage-700">
							{post.data.meta_description}
						</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</Bounded>
