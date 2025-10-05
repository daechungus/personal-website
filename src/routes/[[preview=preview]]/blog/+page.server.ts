import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const blogPosts = await client.getAllByType('blogpost');

	return {
		blogPosts
	};
}
