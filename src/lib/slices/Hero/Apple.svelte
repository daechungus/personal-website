<script lang="ts">
    import { T as Threlte } from '@threlte/core';
    import { Float, createTransition } from '@threlte/extras';
    import * as THREE from 'three';

    import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
    
    export let position: [number, number, number] = [0, 0, 0];
    export let rate = 0.5;
    export let layers=0;

    let visible = false;
	let reducedMotionRate = 0;

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
    <Float speed={5*rate} rotationSpeed={5*rate} rotationIntensity={6*rate} floatIntensity={6*rate} rotation={[0, Math.PI/12, Math.PI/2]}>
        <!-- Main Body (thinner and longer) -->
        <Threlte.Mesh position={[0, 0, 0]} rotation={[0, Math.PI, Math.PI / 2]}>
            <Threlte.CylinderGeometry 
                args={[0.2, 0.2, 6, 32]} 
            />
            <Threlte.MeshStandardMaterial 
                color="#FAFAFA" 
                metalness={0.1}
                roughness={0.1}
            />
        </Threlte.Mesh>

        <!-- Tip Base (transition to tip) -->
        <Threlte.Mesh position={[-3.3, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Threlte.CylinderGeometry 
                args={[0.2, 0.05, 0.6, 32]} 
            />
            <Threlte.MeshStandardMaterial 
                color="#FAFAFA" 
                metalness={0.1}
                roughness={0.1}
            />
        </Threlte.Mesh>

         <!-- Rounded Tip -->
         <Threlte.Mesh position={[-3.6,  0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Threlte.SphereGeometry 
                args={[0.05, 32, 32]} 
            />
            <Threlte.MeshStandardMaterial 
                color="#FAFAFA" 
                metalness={0.1}
                roughness={0.1}
            />
        </Threlte.Mesh>

        <!-- Cap End (subtle rounded end) -->
        <Threlte.Mesh position={[3, 0, 0]} rotation={[0, Math.PI, Math.PI / 2]}>
            <Threlte.SphereGeometry 
                args={[0.2, 32, 32]} 
            />
            <Threlte.MeshStandardMaterial 
                color="#FAFAFA"
                metalness={0.1}
                roughness={0.1}
            />
        </Threlte.Mesh>

        <!-- Optional: Subtle band near the tip
        <Threlte.Mesh position={[-2.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.CylinderGeometry 
                args={[0.21, 0.21, 0.1, 32]}
            />
            <Threlte.MeshStandardMaterial 
                color="#CCCCCC"
                metalness={0.9}
                roughness={0.1}
            />
        </Threlte.Mesh> -->
    </Float>
</Threlte.Group>