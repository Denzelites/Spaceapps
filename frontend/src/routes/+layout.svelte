<script lang='ts' >
  import { onMount } from 'svelte';
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import '../styles/app.css'
	import Navbar from './components/navbar.svelte';
  
  
  let canvas;
  //planets
  let mercury;
  let scene;
  let planets: Array<Object>
  
  onMount(async ()=>{
    const {mercury: mercuryObject, scene: ScenePlanets, planets: Planets} = await import('./3d/solar')
    mercury = mercuryObject
    planets = Planets

  const spaceTexture = new THREE.TextureLoader().load('space-bg.jpg')
  //setting up the scene
  scene = ScenePlanets
  //setting up the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //setting up the renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
  })

  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.position.set(-90, 140, 100);
  //setting up the materials
  const sunTexture = new THREE.TextureLoader().load('/textures/8k_sun.jpg')
  const sunNormalTexture = new THREE.TextureLoader().load('/textures/normal.jpg')
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(16,30,30),
    new THREE.MeshStandardMaterial({map: sunTexture, normalMap: sunNormalTexture}),

  ); scene.add(sun);
  //light sources
  const pointLight = new THREE.PointLight(0xFFFFFF)
  // console.log(sun.position.x,sun.position.y,sun.position.z)
  pointLight.position.set(sun.position.x, sun.position.y, sun.position.z)
  const ambientLight = new THREE.AmbientLight(0x333333);
  
  scene.add(pointLight); scene.add(ambientLight)

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

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(400))
    star.position.set(x, y, z)

    if (Math.random() > 0.7) {  // 10% chance to add a light for brighter stars
    const light = new THREE.PointLight(0xffffff, 1, 50);  // Brighter white light
    light.position.set(x, y, z);
    scene.add(light);
  }
    scene.add(star)
  }
  Array(100).fill().forEach(addStar)

  // scene.background = spaceTexture
  animate()
})


</script>

<canvas bind:this={canvas} id="bg"></canvas>
<!-- <main>
  <Navbar />
  <slot>

  </slot>
</main> -->

<style>

  *{
    /* border: solid; */
    border: solid 1px red,
  }
  canvas{
    position: fixed;
    top: 0;
    left: 0;

  }

  main{
    position: absolute;
    z-index: 99;
    margin: 0px auto;
    width: 100%;


    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>