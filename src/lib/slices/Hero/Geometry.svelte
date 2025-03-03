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

	let visible = false;
	let reducedMotionRate = 0;

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
</script>
<!-- <Threlte.Group position={position.map((p) => p*2)}> -->
<Threlte.Group position={[position[0]*2, position[1]*2, position[2]*2]}>
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
        >
        </Threlte.Mesh>
    </Float>
</Threlte.Group>

<!-- change material, rate, roughness, color to whatever you desire-->