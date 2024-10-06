import { writable } from 'svelte/store'
import * as THREE from 'three'



export const Scene = new THREE.Scene()

const textureloader = new THREE.TextureLoader()

export const createPlanet = (name: string, size: number, texture: any, position: number, ring) =>{
    const geometry = new THREE.SphereGeometry(size,10,10)
    const material = new THREE.MeshStandardMaterial({
        map: texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    const obj = new THREE.Object3D()
    obj.add(mesh)
    Scene.add(obj)
    mesh.position.x = position
    if(ring){
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32
        )
        const ringMat = new THREE.MeshStandardMaterial({
            map: textureloader.load(ring.texture),
            side: THREE.DoubleSide
        })
        const ringMesh = new THREE.Mesh(ringGeo, ringMat)
        obj.add(ringMesh)
        ringMesh.position.x = position
        ringMesh.rotation.x += -0.5 * Math.PI
    }
    return {name, mesh, obj}
}

let saturnRingTexture = '/textures/8k_saturn_ring_alpha.png'

export const mercury = createPlanet('mercury',3.2, textureloader.load('/textures/2k_mercury.jpg') ,28)
export const venus = createPlanet('venus',5.4, textureloader.load('/textures/2k_mercury.jpg') ,44)
export const earth = createPlanet('earth',6, textureloader.load('/textures/2k_earth_daymap.jpg') ,62)
export const mars = createPlanet('mars',4, textureloader.load('/textures/2k_mars.jpg') ,78)
export const jupiter = createPlanet('jupiter',12, textureloader.load('/textures/2k_jupiter.jpg') ,100)
export const saturn = createPlanet('saturn',10, textureloader.load('/textures/2k_saturn.jpg') ,138, {
    innerRadius: 20,
    outerRadius: 30,
    texture: saturnRingTexture
})
export const uranus = createPlanet('uranus',7, textureloader.load('/textures/2k_uranus.jpg') ,176)
export const neptune = createPlanet('neptune',7, textureloader.load('/textures/2k_neptune.jpg') ,200)

export const Planets = [mercury, venus, earth, mars,  jupiter, saturn, uranus, neptune]

const pointLight = new THREE.PointLight(0xFFFFFF, 1000, 1200)
pointLight.castShadow = true;
Planets.forEach(({mesh})=>{mesh.castShadow = true})
const ambientLight = new THREE.AmbientLight(0x333333);

Scene.add(pointLight); Scene.add(ambientLight)
const cubeTextureLoader = new THREE.CubeTextureLoader();
const starsTexture = '/textures/8k_stars.jpg'
const starsTexture2 = '/textures/8k_stars_milky_way.jpg'
Scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
])