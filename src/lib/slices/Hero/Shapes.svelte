<script lang="ts">
    import { T as Threlte } from '@threlte/core';
    import * as THREE from 'three';
    import Geometry from './Geometry.svelte';
    import Pencil from './Pencil.svelte';
    import Apple from './Apple.svelte';
    import Phone from './Phone.svelte';
	import { ContactShadows, Environment, interactivity, transitions, HTML } from '@threlte/extras';

    interactivity();
    transitions();

    let hoveredLabel: string | null = null;
    let labelPos: [number, number, number] = [0, 0, 0];

    function onHover(label: string, pos: [number, number, number]) {
        hoveredLabel = label;
        labelPos = [pos[0] * 2, pos[1] * 2 + 3, pos[2] * 2];
    }

    function onUnhover() {
        hoveredLabel = null;
    }
</script>

<Threlte.PerspectiveCamera
    makeDefault
    position={[0,0,25]}
    aspect={1}
    fov={30}
    near={1}
    far={40}
/>

<!-- HDR environment for geometric shapes -->
<Environment
    url="/smallroom.hdr"
/>

<ContactShadows position={[0,-5,0]} opacity={0.65} scale={60} blue={2} far={10} />

<!-- Floating label -->
{#if hoveredLabel}
    <HTML position={labelPos} center>
        <div class="pointer-events-none select-none rounded-lg bg-black/80 px-3 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-sm whitespace-nowrap"
            style="animation: labelFadeIn 0.2s ease-out;"
        >
            {hoveredLabel}
        </div>
    </HTML>
{/if}

<!-- Gem -->
<Geometry
    position={[1,-1.2,1]}
    rate={0.8}
    geometry={new THREE.IcosahedronGeometry(1.5)}
    label="Creativity"
    onHover={(pos) => onHover('Creativity', pos)}
    onUnhover={onUnhover}
/>

<!-- Phone -->
<Phone
    position={[0,0.5,-1]}
    rate={0.5}
    label="Developer"
    onHover={(pos) => onHover('Developer', pos)}
    onUnhover={onUnhover}
/>

<!-- Soccer Ball -->
<Geometry
    position={[-1.5,1,-3]}
    rate={0.6}
    geometry={new THREE.DodecahedronGeometry(1.3)}
    label="Teamwork"
    onHover={(pos) => onHover('Teamwork', pos)}
    onUnhover={onUnhover}
/>

<!-- Pencil -->
<Pencil
    position={[4,1,-4]}
    rate={0.5}
    label="Design"
    onHover={(pos) => onHover('Design', pos)}
    onUnhover={onUnhover}
/>

<!-- Diamond -->
<Geometry
    position={[1.6,1.8,-4]}
    rate={0.7}
    geometry={new THREE.OctahedronGeometry(2)}
    label="Precision"
    onHover={(pos) => onHover('Precision', pos)}
    onUnhover={onUnhover}
/>

<!-- Apple Pencil -->
<Apple
    position={[-1.6,0,1.6]}
    rate={0.5}
    label="Create"
    onHover={(pos) => onHover('Create', pos)}
    onUnhover={onUnhover}
/>
