<script lang='ts'>
	import { onDestroy, onMount } from "svelte";
    import { sceneStore, planetsStore, cameraStore, rendererStore } from "../context/store";
    import * as THREE from 'three'
    import {gsap} from 'gsap'
	import Planet from "../components/planet.svelte";
	import ExplainPlanet from "../components/explainPlanet.svelte";

    export let canvas;
    export let data;
    let planetsData = data.prop?.planetsData
    // console.log(planetData[0])
    let planets;
    let planetData;
    let scene: any;
    let camera;
    let renderer;
    let explain: boolean = false

   $: planets = $planetsStore
   scene = $sceneStore
   camera = $cameraStore
   renderer = $rendererStore

   const resetCamera = ()=>{
    if(camera){
      if(camera.parent){
        camera.removeFromParent()
      }
      gsap.to(camera.position,{
        duration: 2.2,
        x: -90,
        y: 20,
        z: 40,
        ease: 'power2.out',
        onUpdate: () => {
        camera.lookAt(0,0,0); // Keep looking at the planet mesh
      }
      })
    }
   }
   
   async function focusOnPlanet(planet, index:number) {
    if (camera.parent){
      camera.removeFromParent()
    }

    const offsetRadius = planet.mesh.geometry.parameters.radius
    const targetPosition = planet.mesh.position.clone().add(new THREE.Vector3(-((7.1*offsetRadius)-7/offsetRadius), (1.1*offsetRadius), 10+offsetRadius));
    
    gsap.to(camera.position, {
      duration: 1,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      onUpdate: () => {
        // camera.lookAt(planet.mesh.position); // Keep looking at the planet mesh
      }
    });

    planet.obj.add(camera)
    planetData = planetsData[index]
    explain = true
  }


  onDestroy(()=>{
    resetCamera()
  })

if(canvas){
    canvas.focus()
}
</script>


<section class='explore-container'>

    <section class='explore-nav'>
        {#if planets}
        <div>
          <h1 class='text-center font-mono font-semibold text-[20px]'>Planets in the Solar System:</h1>
          <ul class='m-2 items-center'>
            {#each planets as planet, index}
              <Planet {planet} {index} on:focus={(event)=> focusOnPlanet(event.detail.planet, event.detail.index)} />
            {/each}
          </ul>
        </div>
        <div>
          <h1 class='text-center font-mono font-semibold text-[20px]'>Some planets outside our Solar System:</h1>
          <ul class='m-2 items-center'>
            
          </ul>
        </div>
      {/if}
    </section>
    
    <section class='explain-nav'>
      {#if explain}
        <ExplainPlanet {planetData} />
      {:else}
        <h1 class='text-center text-[#f7e3e3] font-mono font-semibold text-[20px]'>View a Planet to learn more</h1>
      {/if}
    </section>

</section>

<style>
    .explore-container{
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: repeat(12,1fr);
        display: grid;
        width: 100vw;
        position: relative;
    }
</style>