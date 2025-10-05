<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let slice: Content.HeroSlice;

	const first_name_letters = slice.primary.firstname?.split("") ?? "";
	const last_name_letters = slice.primary.lastname?.split("") ?? "";

	onMount(()=>{
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion){
			gsap.to('.name-animation', { opacity: 1 });
			gsap.to('.job-title', { opacity: 1 });
			return;
		}
		const tl = gsap.timeline();
		tl.fromTo(".name-animation",
			{
				x:-100,
				opacity:0,
				rotate:-10
			},
			{
				x:0,
				rotate:0,
				opacity:1,
				ease: 'elastic.out(1, 0.3)',
				duration: 1,
				transformOrigin: 'left top',
				delay:0.5,
				stagger:{
					each:.1,
					from: 'random',
				}

			}
		);
		tl.fromTo(".job-title", {
			y:20,
			opacity:0,
			scale:1.2
		}, {
			opacity:1,
			y:0,
			duration:1,
			scale:1,
			ease: 'elastic.out(1, 0.3)',
			delay: -0.5,
		})
	});


</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="px-4 md:px-6">
	<div class="mx-auto w-full max-w-7xl"> 
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div class="col-start-1 md:col-span-1 md:row-span-1 md:col-start-1 order-2 md:order-1">
				<h1 class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,11rem)] font-extrabold leading-none tracking-tighter text-nowrap" aria-label={slice.primary.firstname + ' ' + slice.primary.lastname}>
					{#if first_name_letters.length && last_name_letters.length}
					<span  class="block text-matcha-600 opacity-95">
						{#each first_name_letters as letter}
						<span class ="name-animation inline-block opacity-100">{letter}</span>
						{/each}
					</span>
					{/if}
					<span class="block text-matcha-500 -mt-[.2em] opacity-90">
						{#each last_name_letters as letter}
						<span class ="name-animation inline-block opacity-100">{letter}</span>
						{/each}					
					</span>
				</h1>
				<span class="px-2 job-title block bg-gradient-to-tr from-sage-300 via-matcha-500 to-sage-300 bg-clip-text text-transparent text-xl font-bold uppercase tracking-[.2em] md:text-4xl opacity-100">
					{slice.primary.tagline}
			   </span>
			</div>
			<div class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0 order-1 md:order-2">
				<Scene />

			</div>
		</div>
	</div>
</section>
