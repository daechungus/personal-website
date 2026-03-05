import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const [page, projects, blogPosts] = await Promise.all([
		client.getByUID('page', 'home'),
		client.getAllByType('project', {
			orderings: [{ field: 'my.project.date', direction: 'desc' }]
		}),
		client.getAllByType('blogpost', {
			orderings: [{ field: 'my.blogpost.date', direction: 'desc' }]
		})
	]);

	return {
		page,
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