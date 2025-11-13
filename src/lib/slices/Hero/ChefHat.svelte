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
        <!-- Hat Base/Cylinder -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.CylinderGeometry args={[1.5, 1.5, 0.8, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#F5F5DC"
                metalness={0.1}
                roughness={0.9}
            />
        </Threlte.Mesh>

        <!-- Hat Top (Tall Cylinder) -->
        <Threlte.Mesh position={[0, 1.2, 0]}>
            <Threlte.CylinderGeometry args={[0.8, 0.8, 2.4, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#F5F5DC"
                metalness={0.1}
                roughness={0.9}
            />
        </Threlte.Mesh>

        <!-- Hat Rim -->
        <Threlte.Mesh position={[0, -0.4, 0]}>
            <Threlte.CylinderGeometry args={[1.7, 1.7, 0.2, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#F5F5DC"
                metalness={0.1}
                roughness={0.9}
            />
        </Threlte.Mesh>

        <!-- Pleats/Folds -->
        <Threlte.Mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
            <Threlte.CylinderGeometry args={[1.6, 1.6, 0.1, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#E6E6FA"
                metalness={0.1}
                roughness={0.9}
            />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
