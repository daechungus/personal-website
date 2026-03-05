<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { isFilled } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.ImageBlockSlice;
</script>

<figure class="my-10 md:my-14 lg:my-16">
	<PrismicImage
		field={slice.primary.image}
		class="not-prose w-full h-full rounded-md"
	/>
	{#if isFilled.keyText(slice.primary.caption)}
		<figcaption class="mt-2 text-center text-sm italic text-sage-600">
			{slice.primary.caption}
		</figcaption>
	{/if}
</figure>