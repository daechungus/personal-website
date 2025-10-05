<script lang="ts">
    import { T as Threlte } from '@threlte/core';
    import { Float, createTransition } from '@threlte/extras';
    import * as THREE from 'three';

    import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';

    let visible = false;
	let reducedMotionRate = 0;
    
    export let position: [number, number, number] = [0, 0, 0];
    export let rate = 0.5;
    export let layers=0;

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

<Threlte.Group position={position} layers={layers} {visible} in={bounce}>
    <Float speed={2*rate} rotationSpeed={1*rate} rotationIntensity={2*rate} floatIntensity={1*rate}>
        <!-- Book Cover -->
        <Threlte.Mesh position={[0, 0, 0.1]}>
            <Threlte.BoxGeometry args={[2.5, 3.5, 0.2]} />
            <Threlte.MeshStandardMaterial 
                color="#8B4513"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>

        <!-- Book Pages -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.BoxGeometry args={[2.4, 3.4, 0.8]} />
            <Threlte.MeshStandardMaterial 
                color="#FFF8DC"
                metalness={0.05}
                roughness={0.9}
            />
        </Threlte.Mesh>

        <!-- Book Back Cover -->
        <Threlte.Mesh position={[0, 0, -0.1]}>
            <Threlte.BoxGeometry args={[2.5, 3.5, 0.2]} />
            <Threlte.MeshStandardMaterial 
                color="#8B4513"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>

        <!-- Book Spine -->
        <Threlte.Mesh position={[1.3, 0, 0]}>
            <Threlte.BoxGeometry args={[0.1, 3.5, 1]} />
            <Threlte.MeshStandardMaterial 
                color="#654321"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>

        <!-- Book Title (simplified) -->
        <Threlte.Mesh position={[0, 0.5, 0.21]}>
            <Threlte.BoxGeometry args={[1.5, 0.1, 0.01]} />
            <Threlte.MeshStandardMaterial 
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Book Author (simplified) -->
        <Threlte.Mesh position={[0, -0.5, 0.21]}>
            <Threlte.BoxGeometry args={[1, 0.05, 0.01]} />
            <Threlte.MeshStandardMaterial 
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
