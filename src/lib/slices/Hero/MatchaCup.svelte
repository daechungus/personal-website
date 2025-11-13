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
    <Float speed={3*rate} rotationSpeed={2*rate} rotationIntensity={3*rate} floatIntensity={2*rate}>
        <!-- Cup Body -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.CylinderGeometry args={[1.2, 1, 2.5, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#2D5016"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>

        <!-- Cup Handle -->
        <Threlte.Mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.TorusGeometry args={[0.3, 0.1, 8, 16, Math.PI]} />
            <Threlte.MeshStandardMaterial 
                color="#2D5016"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>

        <!-- Matcha Liquid Surface -->
        <Threlte.Mesh position={[0, 1.25, 0]}>
            <Threlte.CylinderGeometry args={[1.1, 1.1, 0.1, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#1A3A0A"
                metalness={0.2}
                roughness={0.3}
            />
        </Threlte.Mesh>

        <!-- Steam/Foam -->
        <Threlte.Mesh position={[0, 1.8, 0]}>
            <Threlte.SphereGeometry args={[0.3, 8, 6]} />
            <Threlte.MeshStandardMaterial 
                color="#F5F5DC"
                transparent={true}
                opacity={0.7}
            />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
