import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'matcha' | 'opus';

// ── Time-based theme configuration ──
// Edit these hours (0-23) to control when the theme switches.
// Default: matcha (light) from 6:00 AM to 5:59 PM, opus (dark) from 6:00 PM to 5:59 AM
const DAY_START_HOUR = 6;   // 6 AM — switch to matcha
const NIGHT_START_HOUR = 18; // 6 PM — switch to opus

function getTimeBasedTheme(): Theme {
	const hour = new Date().getHours();
	return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? 'matcha' : 'opus';
}

function createThemeStore() {
	const initial: Theme = browser ? getTimeBasedTheme() : 'matcha';

	const { subscribe, set, update } = writable<Theme>(initial);

	let intervalId: ReturnType<typeof setInterval> | undefined;

	function applyTheme(t: Theme) {
		if (browser) {
			document.documentElement.setAttribute('data-theme', t);
		}
	}

	return {
		subscribe,
		toggle() {
			update((current) => {
				const next: Theme = current === 'matcha' ? 'opus' : 'matcha';
				if (browser) {
					// Manual override: store preference and stop auto-switching for this session
					sessionStorage.setItem('theme-manual', '1');
					localStorage.setItem('theme', next);
				}
				applyTheme(next);
				return next;
			});
		},
		init() {
			if (!browser) return;

			const manualOverride = sessionStorage.getItem('theme-manual');

			if (manualOverride) {
				// User manually toggled this session — respect their choice
				const saved = localStorage.getItem('theme') as Theme | null;
				const t = saved || getTimeBasedTheme();
				set(t);
				applyTheme(t);
			} else {
				// Auto mode: use time-based theme
				const t = getTimeBasedTheme();
				set(t);
				applyTheme(t);
			}

			// Check every minute for time-based changes (only if no manual override)
			intervalId = setInterval(() => {
				if (sessionStorage.getItem('theme-manual')) return;
				const t = getTimeBasedTheme();
				set(t);
				applyTheme(t);
			}, 60_000);
		}
	};
}

export const theme = createThemeStore();
