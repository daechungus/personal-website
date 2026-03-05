import { asText, mapSliceZone } from '@prismicio/client';

import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const [page, aboutPage, projects, blogPosts] = await Promise.all([
		client.getByUID('page', 'home'),
		client.getByUID('page', 'about'),
		client.getAllByType('project', {
			orderings: [{ field: 'my.project.date', direction: 'desc' }]
		}),
		client.getAllByType('blogpost', {
			orderings: [{ field: 'my.blogpost.date', direction: 'desc' }]
		})
	]);

	const aboutSlices = await mapSliceZone(aboutPage.data.slices, mappers, { client });

	return {
		page,
		aboutSlices,
		projects,
		blogPosts,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}