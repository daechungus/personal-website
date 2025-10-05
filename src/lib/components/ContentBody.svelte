<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	import { components } from '$lib/slices';
	import { formatDate } from '$lib/formatDate';

	import Bounded from './Bounded.svelte';
	import Heading from './Heading.svelte';

	export let page: Content.BlogpostDocument | Content.ProjectDocument;

	const formattedDate = formatDate(page.data.date);
</script>

<Bounded tag="article">
	<div class="text-md rounded-2xl border-2 border-brown-800 bg-sage-50 px-4 py-10 md:px-10 md:py-12 opacity-80">
		<Heading tag="h1" size="sm">{page.data.title}</Heading>
		<div class="flex gap-4 text-brown-700">
			{#each page.tags as tag}
				<span class="text-lg font-bold py-2">
					{tag}
				</span>
			{/each}
		</div>
		<p class="mt-8 border-b border-brown-600 text-lg font-medium text-brown-700">{formattedDate}</p>

		<div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20 text-matcha-600">
			<SliceZone slices={page.data.slices} {components} />
		</div>
	</div>
</Bounded>