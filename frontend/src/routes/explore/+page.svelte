<script lang='ts'>
	import { onDestroy, onMount } from "svelte";
    import { sceneStore, planetsStore, cameraStore, rendererStore } from "../context/store";
    import * as THREE from 'three'
    import {gsap} from 'gsap'

    export let canvas;
    let planets;
    let scene: any;
    let  camera;
    let renderer;

   planets = $planetsStore
   scene = $sceneStore
   camera = $cameraStore
   renderer = $rendererStore
   console.log(planets)

   function focusOnPlanet(planet) {
    const targetPosition = planet.mesh.position.clone().add(new THREE.Vector3(0, 0, 5));
    gsap.to(camera.position, {
      duration: 1,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      onUpdate: () => {
        camera.lookAt(planet.mesh.position); // Keep looking at the planet mesh
      }
    });
  }

//   onDestroy(()=>{
//     camera.position.set(-90,20,40)
//   })

if(canvas){
    canvas.focus()
}
</script>


<section class='explore-container'>
    <section class='explore-nav'>
        {#if planets}
        <div>
          <h1 class='text-center font-semibold text-[20px]'>Planets in the Solar System:</h1>
          <ul>
            {#each planets as planet}
              <li>
                {planet.name}
                <button on:click={() => focusOnPlanet(planet)}>View</button>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
        
    </section>
    
    <section>
    
    </section>

</section>

<style>
    .explore-container{
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(12,1fr);
    }
</style>