<script lang="ts">
    import { T as Threlte } from '@threlte/core';
    import { Float, createTransition } from '@threlte/extras';
    import * as THREE from 'three';
    import { DoubleSide } from 'three';

    import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';

    let visible = false;
	let reducedMotionRate = 0;
    
    export let position: [number, number, number] = [0, 0, 0];
    export let rate = 0.5;
    export let layers = 0;

    function createRoundedRectGeometry( 
        width: number, 
        height: number, 
        depth: number, 
        radius: number, 
        bevelSize: number = 0.02,
        bevelThickness: number = 0.02,
        bevelSegments: number = 3
    ) {
        const shape = new THREE.Shape();
        
        shape.moveTo(-width/2 + radius, -height/2);
        shape.lineTo(width/2 - radius, -height/2);
        shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
        shape.lineTo(width/2, height/2 - radius);
        shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
        shape.lineTo(-width/2 + radius, height/2);
        shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
        shape.lineTo(-width/2, -height/2 + radius);
        shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);

        const extrudeSettings = {
            depth: depth,
            bevelEnabled: true,
            bevelSegments: bevelSegments,
            bevelSize: bevelSize,
            bevelThickness: bevelThickness
        };

        return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    }

    const phoneGeometry = createRoundedRectGeometry(3.5, 7, 0.4, 0.5);
    const cameraModuleGeometry = createRoundedRectGeometry(1.6, 1.6, 0.15, 0.3, 0.01, 0.01);

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
    <Float speed={5*rate} rotationSpeed={5*rate} rotationIntensity={6*rate} floatIntensity={3*rate} rotate={[0, Math.PI, Math.PI/10]} >
        
        <!-- Main Phone Body with Rounded Corners -->
        <Threlte.Mesh 
            geometry={phoneGeometry}
            position={[0, 0, -0.1]}
        >
            <Threlte.MeshStandardMaterial 
                color="#202020"
                metalness={1}
                roughness={0.2}
                emissive="#000000"
                emissiveIntensity={1}
                flatShading={false}  
                side={THREE.DoubleSide}  
            />
        </Threlte.Mesh>

        <!-- Camera Module Background (Squared with rounded corners) -->
        <Threlte.Mesh 
            geometry={cameraModuleGeometry}
            position={[-0.8, 2.5, 0.25]}>

            <Threlte.MeshStandardMaterial 
                color="#0d0d0d"
                metalness={0.9}
                roughness={0.2}
            />
        </Threlte.Mesh>

        <!-- Main Camera -->
        <Threlte.Mesh position={[-1.1, 2.85, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.27, 0.27, 0.08, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#0d0d0d"
                metalness={0.95}
                roughness={0.1}
                flatShading={false}  
                side={THREE.DoubleSide}
            />
        </Threlte.Mesh>

        <Threlte.Mesh position={[-1.1, 2.85, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.03, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#727272" 
                metalness={0.9}
                roughness={0.05}
            />
        </Threlte.Mesh>

        <!-- Ultra Wide Camera Lens -->
        <Threlte.Mesh position={[-0.5, 2.5, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.27, 0.27, 0.08, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#0d0d0d"
                metalness={0.95}
                roughness={0.1}
                flatShading={false}  
                side={THREE.DoubleSide}
            />
        </Threlte.Mesh>

        <Threlte.Mesh position={[-0.5, 2.5, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.03, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#727272"
                metalness={0.9}
                roughness={0.05}
            />
        </Threlte.Mesh>

        <!-- Telephoto Camera Lens -->
        <Threlte.Mesh position={[-1.1, 2.15, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.27, 0.27, 0.08, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#0d0d0d"
                metalness={0.95}
                roughness={0.1}
            />
        </Threlte.Mesh>

        <Threlte.Mesh position={[-1.1, 2.15, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.3, 0.3, 0.03, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#727272"
                metalness={0.9}
                roughness={0.05}
            />
        </Threlte.Mesh>

        <!-- Flash Lens -->
        <Threlte.Mesh position={[-0.5, 3, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.14, 0.14, 0.05, 32]} />
                <Threlte.MeshStandardMaterial 
                color="#121212"
                metalness={0.3}
                roughness={0.2}
                emissive="#ffffe5"
                emissiveIntensity={1}  
            />
        </Threlte.Mesh>
        
        <!-- Flash Lens Cover (optional) -->    
        <Threlte.Mesh position={[-0.5, 3, 0.42]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.13, 0.13, 0.02, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#fffe15"
                metalness={0.1}
                roughness={0.1}
                transparent={true}
                opacity={0.6}
            />
        </Threlte.Mesh>

         <!-- Bottom Lens -->
         <Threlte.Mesh position={[-0.5, 2, 0.4]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.14, 0.14, 0.05, 32]} />
                <Threlte.MeshStandardMaterial 
                color="#202020"
                metalness={0.3}
                roughness={0.2}
            />
        </Threlte.Mesh>
        
        <Threlte.Mesh position={[-0.5, 2, 0.42]} rotation={[Math.PI/2, 0, 0]}>
            <Threlte.CylinderGeometry args={[0.13, 0.13, 0.02, 32]} />
            <Threlte.MeshStandardMaterial 
                color="#202020"
                metalness={0.95}
                roughness={0.1}
                transparent={true}
                opacity={1}
            />
        </Threlte.Mesh>

        <!-- Side Buttons (Volume) -->
        <Threlte.Mesh position={[1.76, 1.5, 0.1]}>
            <Threlte.BoxGeometry args={[0.05, 0.5, 0.2]} />
            <Threlte.MeshStandardMaterial color="#363636" />
        </Threlte.Mesh>

        <Threlte.Mesh position={[1.76, 0.9, 0.1]}>
            <Threlte.BoxGeometry args={[0.05, 0.5, 0.2]} />
            <Threlte.MeshStandardMaterial color="#363636" />
        </Threlte.Mesh>

        <!-- Power Button -->
        <Threlte.Mesh position={[-1.76, 1.2, 0.1]}>
            <Threlte.BoxGeometry args={[0.05, 0.8, 0.2]} />
            <Threlte.MeshStandardMaterial color="#363636" />
        </Threlte.Mesh>
    </Float>
</Threlte.Group>