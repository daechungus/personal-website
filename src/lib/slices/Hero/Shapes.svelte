<script lang="ts">
    import { T as Threlte } from '@threlte/core';
    import * as THREE from 'three';
    import Geometry from './Geometry.svelte';
    import Pencil from './Pencil.svelte';
    import Apple from './Apple.svelte';
    import Phone from './Phone.svelte';
	import { ContactShadows, Environment, interactivity, transitions } from '@threlte/extras';
    
    interactivity();
    transitions();
</script>

<Threlte.PerspectiveCamera
    makeDefault
    position={[0,0,25]}
    aspect={1}
    fov={30}
    near={1}
    far={40}
/>

<!-- Standard lighting for phone, pencil, and apple -->
<!-- <Threlte.DirectionalLight 
    position={[0,10,50]} 
    intensity={4} 
    layers={0}
/>-->

<!-- HDR environment for geometric shapes -->
<Environment 
    url="/smallroom.hdr" 
/>

<ContactShadows position={[0,-5,0]} opacity={0.65} scale={60} blue={2} far={10} />

<!-- Gem -->
<Geometry position={[1,-1.2,1]} rate={0.8} geometry={new THREE.IcosahedronGeometry(1.5)} />

<!-- Phone -->
<Phone position={[0,0.5,-1]} rate={0.5} />

<!-- Soccer Ball -->
<Geometry position={[-1.5,1,-3]} rate={0.6} geometry={new THREE.DodecahedronGeometry(1.3)} />

<!-- Pencil -->
 <Pencil position={[4,1.6,-4]} rate={0.5} />

<!-- Diamond -->
 <Geometry position={[1.6,1.8,-4]} rate={0.7} geometry={new THREE.OctahedronGeometry(2)} />

<!-- Apple Pencil -->
 <Apple position={[-1.6,0,1]} rate={0.5} />
