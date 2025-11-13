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
    <Float speed={1*rate} rotationSpeed={0.5*rate} rotationIntensity={1*rate} floatIntensity={0.5*rate}>
        <!-- Clock Face -->
        <Threlte.Mesh position={[0, 0, 0]}>
            <Threlte.CylinderGeometry args={[1.5, 1.5, 0.2, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#F8F8FF"
                metalness={0.1}
                roughness={0.3}
            />
        </Threlte.Mesh>

        <!-- Clock Rim -->
        <Threlte.Mesh position={[0, 0, -0.1]}>
            <Threlte.CylinderGeometry args={[1.6, 1.6, 0.1, 16]} />
            <Threlte.MeshStandardMaterial 
                color="#C0C0C0"
                metalness={0.8}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Hour Hand -->
        <Threlte.Mesh position={[0, 0, 0.11]} rotation={[0, 0, Math.PI / 6]}>
            <Threlte.BoxGeometry args={[0.05, 0.8, 0.02]} />
            <Threlte.MeshStandardMaterial 
                color="#2C2C2C"
                metalness={0.3}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Minute Hand -->
        <Threlte.Mesh position={[0, 0, 0.12]} rotation={[0, 0, Math.PI / 3]}>
            <Threlte.BoxGeometry args={[0.03, 1.2, 0.02]} />
            <Threlte.MeshStandardMaterial 
                color="#2C2C2C"
                metalness={0.3}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Center Dot -->
        <Threlte.Mesh position={[0, 0, 0.13]}>
            <Threlte.SphereGeometry args={[0.05, 8, 6]} />
            <Threlte.MeshStandardMaterial 
                color="#2C2C2C"
                metalness={0.3}
                roughness={0.7}
            />
        </Threlte.Mesh>

        <!-- Hour Markers -->
        <Threlte.Mesh position={[0, 1.3, 0.11]} rotation={[0, 0, 0]}>
            <Threlte.BoxGeometry args={[0.05, 0.1, 0.01]} />
            <Threlte.MeshStandardMaterial color="#2C2C2C" />
        </Threlte.Mesh>
        <Threlte.Mesh position={[1.3, 0, 0.11]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.BoxGeometry args={[0.05, 0.1, 0.01]} />
            <Threlte.MeshStandardMaterial color="#2C2C2C" />
        </Threlte.Mesh>
        <Threlte.Mesh position={[0, -1.3, 0.11]} rotation={[0, 0, 0]}>
            <Threlte.BoxGeometry args={[0.05, 0.1, 0.01]} />
            <Threlte.MeshStandardMaterial color="#2C2C2C" />
        </Threlte.Mesh>
        <Threlte.Mesh position={[-1.3, 0, 0.11]} rotation={[0, 0, Math.PI / 2]}>
            <Threlte.BoxGeometry args={[0.05, 0.1, 0.01]} />
            <Threlte.MeshStandardMaterial color="#2C2C2C" />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>
