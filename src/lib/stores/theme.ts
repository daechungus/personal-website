import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'matcha' | 'opus';

function createThemeStore() {
	const initial: Theme = browser
		? (localStorage.getItem('theme') as Theme) || 'matcha'
		: 'matcha';

	const { subscribe, set, update } = writable<Theme>(initial);

	return {
		subscribe,
		toggle() {
			update((current) => {
				const next: Theme = current === 'matcha' ? 'opus' : 'matcha';
				if (browser) {
					localStorage.setItem('theme', next);
					document.documentElement.setAttribute('data-theme', next);
				}
				return next;
			});
		},
		init() {
			if (browser) {
				const saved = localStorage.getItem('theme') as Theme | null;
				const theme = saved || 'matcha';
				set(theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
		}
	};
}

export const theme = createThemeStore();
