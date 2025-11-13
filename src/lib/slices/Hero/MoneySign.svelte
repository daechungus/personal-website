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
    <Float speed={4*rate} rotationSpeed={3*rate} rotationIntensity={4*rate} floatIntensity={3*rate}>
        <!-- Dollar Sign - Vertical Line -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.1, 0.1, 3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Dollar Sign - Top S -->
        <Threlte.Mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.TorusGeometry args={[0.6, 0.15, 8, 16, Math.PI]} />
            <Threlte.MeshStandardMaterial 
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Dollar Sign - Bottom S -->
        <Threlte.Mesh position={[0, -0.8, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Threlte.TorusGeometry args={[0.6, 0.15, 8, 16, Math.PI]} />
            <Threlte.MeshStandardMaterial 
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
