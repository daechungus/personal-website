import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', 'projects');
	
	const projects = await client.getAllByType('project', {
		orderings: [
			{ field: 'my.project.date', direction: 'desc' }
		]
	});

	return {
		page,
		projects,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
};
