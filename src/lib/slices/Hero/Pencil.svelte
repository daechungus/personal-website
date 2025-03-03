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
    <Float speed={6*rate} rotationSpeed={5*rate} rotationIntensity={6*rate} floatIntensity={6*rate} rotation={[0, 0, -Math.PI / 2]}>
        <!-- Pencil Body -->
        <Threlte.Mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 4, 6]} />
            <Threlte.MeshStandardMaterial color="#FFD700" />
        </Threlte.Mesh>

        <!-- Pencil Tip (wood section) -->
        <Threlte.Mesh position={[2.3, -1, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Threlte.ConeGeometry args={[0.3, 0.6, 6]} />
            <Threlte.MeshStandardMaterial color="##FFD700" />
        </Threlte.Mesh>

        <!-- Inner Graphite Tip -->
        <Threlte.Mesh position={[2.45, -1, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Threlte.ConeGeometry args={[0.152, 0.3, 6]} />
            <Threlte.MeshStandardMaterial 
                color="#2B2B2B"
                metalness={0.4}
                roughness={0.6}
            />
        </Threlte.Mesh>

        <!-- Metal Band -->
        <Threlte.Mesh position={[-2.1, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry args={[0.31, 0.31, 0.3, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#C0C0C0"  
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Eraser -->
        <Threlte.Mesh position={[-2.25, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
            <Threlte.MeshStandardMaterial color="#FF69B4" />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>