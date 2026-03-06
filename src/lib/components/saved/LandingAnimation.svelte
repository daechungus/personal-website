<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { theme } from '$lib/stores/theme';

	export let firstName: string = '';
	export let lastName: string = '';

	let overlayRef: HTMLDivElement;
	let firstNameRef: HTMLSpanElement;
	let lastNameRef: HTMLSpanElement;
	let done = false;
	let mounted = false;

	const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

	function scrambleText(element: HTMLSpanElement, finalText: string, duration: number = 1.5): Promise<void> {
		return new Promise((resolve) => {
			const length = finalText.length;
			let progress = { value: 0 };

			// Start with random characters
			element.textContent = Array.from({ length }, () =>
				scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
			).join('');

			gsap.to(progress, {
				value: 1,
				duration,
				ease: 'power2.inOut',
				onUpdate() {
					const chars = finalText.split('').map((char, i) => {
						// Characters resolve left-to-right based on progress
						if (i / length < progress.value) {
							return char;
						}
						return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
					});
					element.textContent = chars.join('');
				},
				onComplete() {
					element.textContent = finalText;
					resolve();
				}
			});
		});
	}

	onMount(() => {
		mounted = true;

		// Check if animation has already played this session
		if (sessionStorage.getItem('landing-played')) {
			done = true;
			return;
		}

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			done = true;
			sessionStorage.setItem('landing-played', '1');
			return;
		}

		// Prevent scrolling during animation
		document.body.style.overflow = 'hidden';

		const tl = gsap.timeline({
			onComplete() {
				document.body.style.overflow = '';
				done = true;
				sessionStorage.setItem('landing-played', '1');
			}
		});

		// Phase 1: Start with scramble text (already visible via CSS)
		tl.call(() => {
			scrambleText(firstNameRef, firstName, 1.2);
			scrambleText(lastNameRef, lastName, 1.4);
		});

		// Phase 2: Hold the resolved text briefly
		tl.to({}, { duration: 1.8 });

		// Phase 3: Scale down and fade out the overlay
		tl.to(overlayRef, {
			scale: 0.5,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.inOut'
		});
	});
</script>

{#if mounted && !done}
	<div
		bind:this={overlayRef}
		class="fixed inset-0 z-[9999] flex flex-col items-center justify-center
			{$theme === 'opus' ? 'bg-black' : 'bg-sage-50'}"
	>
		<div class="text-center">
			<span
				bind:this={firstNameRef}
				class="block text-[clamp(3rem,18vmin,10rem)] font-extrabold leading-none tracking-tighter
					{$theme === 'opus' ? 'text-white' : 'text-matcha-600'}"
			>
				{firstName}
			</span>
			<span
				bind:this={lastNameRef}
				class="block text-[clamp(3rem,18vmin,10rem)] font-extrabold leading-none tracking-tighter -mt-[.15em] opacity-80
					{$theme === 'opus' ? 'text-white/70' : 'text-matcha-500'}"
			>
				{lastName}
			</span>
		</div>
	</div>
{/if}
