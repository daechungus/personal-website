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
        <!-- Main Puzzle Piece Body -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.BoxGeometry args={[2, 2, 0.3]} />
            <Threlte.MeshStandardMaterial 
                color="#4A90E2"
                metalness={0.2}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Top Tab (outward) -->
        <Threlte.Mesh position={[0, 1.2, 0]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#4A90E2"
                metalness={0.2}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Bottom Tab (inward) -->
        <Threlte.Mesh position={[0, -1.2, 0]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#4A90E2"
                metalness={0.2}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Left Tab (inward) -->
        <Threlte.Mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#4A90E2"
                metalness={0.2}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Right Tab (outward) -->
        <Threlte.Mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#4A90E2"
                metalness={0.2}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Puzzle Piece Design/Pattern -->
        <Threlte.Mesh position={[0, 0, 0.16]}>
            <Threlte.CircleGeometry args={[0.3, 8]} />
            <Threlte.MeshStandardMaterial 
                color="#FF6B6B"
                metalness={0.1}
                roughness={0.8}
            />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
