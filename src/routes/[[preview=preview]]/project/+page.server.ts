import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const projects = await client.getAllByType('project');

	return {
		projects
	};
}
