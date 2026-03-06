<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { Float, createTransition } from '@threlte/extras';
	import * as THREE from 'three';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;
	export let label: string = '';
	export let onHover: ((pos: [number, number, number]) => void) | undefined = undefined;
	export let onUnhover: (() => void) | undefined = undefined;

	let visible = false;
	let reducedMotionRate = 0;
	let hovered = false;
	let groupRef: THREE.Group;

	const materialParams = [
		{ color: 0xFF7669, roughness: 0.1, metalness: 0.5 },
		{ color: 0xF35327, roughness: 0.1, metalness: 0.5 },
		{ color: 0xA55FFF, roughness: 0.1, metalness: 0.5 },
		{ color: 0x2CD088, roughness: 0.1, metalness: 0.5 },
		{ color: 0x2EBEFE, roughness: 0.1, metalness: 0.5 },
	];

	function getRandomMaterial() {
		return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
	}

	const bounce = createTransition((ref: THREE.Object3D | any) => {
		return {
			tick(t) {
				if (t > 0) visible = true;
				ref.scale.set(t, t, t);
			},
			easing: elasticOut,
			duration: gsap.utils.random(800, 1200),
			delay: gsap.utils.random(0, 1000)
		};
	});

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		reducedMotionRate = prefersReducedMotion ? 0 : 1;
	});

	$: compoundRate = rate * reducedMotionRate;

	function handlePointerEnter() {
		hovered = true;
		if (groupRef) {
			gsap.to(groupRef.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.3, ease: 'back.out(1.7)' });
		}
		onHover?.(position);
	}

	function handlePointerLeave() {
		hovered = false;
		if (groupRef) {
			gsap.to(groupRef.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'power2.out' });
		}
		onUnhover?.();
	}
</script>

<Threlte.Group position={[position[0]*2, position[1]*2, position[2]*2]} bind:ref={groupRef}>
    <Float
        speed={5*rate}
        rotationSpeed={5*rate}
        rotationIntensity={6*rate}
        floatIntensity={5*rate}
    >
        <Threlte.Mesh
            {geometry}
            {visible}
            in={bounce}
            material={getRandomMaterial()}
            on:pointerenter={handlePointerEnter}
            on:pointerleave={handlePointerLeave}
        >
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
