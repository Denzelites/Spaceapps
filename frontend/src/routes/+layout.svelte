<script lang='ts' >
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import '../styles/app.css'
	import Navbar from './components/navbar.svelte';
  import { cameraStore, initCamera, sceneStore, planetsStore,rendererStore } from './context/store';
  
  
  export let canvas;
  let galaxy: object
  let camera: THREE.PerspectiveCamera;

onMount(async ()=>{
  const{Planets: Planets, Scene: Scenery} = await import('./context/solar')
  planetsStore.set(Planets)
  let planets = $planetsStore
  initCamera(); // Initialize camera on the client
  cameraStore.subscribe(value => {
    camera = value;
  });
  
  //setting up the scene
  let scene = Scenery
  //setting up the renderer
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
  })

  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  //setting up the materials
  const sunTexture = new THREE.TextureLoader().load('/textures/2k_sun.jpg')
  // const sunNormalTexture = new THREE.TextureLoader().load('/textures/normal.jpg')
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(16,30,30),
    new THREE.MeshStandardMaterial({map: sunTexture}),

  ); scene.add(sun);


  const controls = new OrbitControls(camera, renderer.domElement)

  function animate(){
    requestAnimationFrame( animate );
    renderer.render(scene, camera)
    const radial_rotation = [0.004, 0.002, 0.02, 0.018, 0.04, 0.038, 0.03, 0.032]
    const orbital_speed =[0.04, 0.015, 0.01, 0.008, 0.002, 0.0009, 0.0004, 0.0001]

    sun.rotation.x += 0.0001
    sun.rotation.y += 0.002
    planets.map(({mesh, obj}, index)=>{mesh.rotateY(radial_rotation[index]);obj.rotateY(orbital_speed[index])})
  }

  function addStar(){
    const geometry = new THREE.SphereGeometry(0.1, 24, 24);
    const colors = [0xffffff, 0xe0ffff, 0xb0e0e6, 0xd8f0ff]

    const material = new THREE.MeshStandardMaterial({
    color: colors[Math.floor(Math.random() * colors.length)],
    emissive: 0xffffff,  // Simulate stars glowing
    emissiveIntensity: 0.5,  // Adjust the glow intensity
    metalness: 0.5,
    roughness: 0.3
  });    const star = new THREE.Mesh(geometry, material)

  const scale = THREE.MathUtils.randFloat(0.5, 1.5);
  star.scale.set(scale, scale, scale);

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200))
    star.position.set(x, y, z)

    if (Math.random() > 0.7) {  // 10% chance to add a light for brighter stars
    const light = new THREE.PointLight(0xffffff, 1, 50);  // Brighter white light
    light.position.set(x, y, z);
    scene.add(light);
  }
    scene.add(star)
  }

  Array(100).fill().forEach(addStar)
  animate()
  sceneStore.set(scene)
  rendererStore.set(render)


  onDestroy(() => {
      // Stop animations or event listeners
      // Remove objects from the scene and dispose of geometries/materials
      scene.remove(sun)
      planets.forEach(({mesh, obj})=>{scene.remove(mesh, obj)})
      // Dispose renderer
      renderer.dispose();

      // Optionally remove references
      scene = null;
      renderer = null;
      camera = null;
    });
})
</script>

<canvas bind:this={canvas} id="bg"></canvas>

<main>
  <Navbar />
  <slot {canvas}>

  </slot>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
  /* border: solid 1px red, */
}
canvas{
  position: fixed;
  top: 0;
  left: 0;

}

main{
  @apply mt-16;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  position: relative;
  z-index: 99;
  /* margin: 100px auto 0px; */
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 300px;
}
</style>