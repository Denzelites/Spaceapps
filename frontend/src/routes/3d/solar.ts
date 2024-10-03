import * as THREE from 'three'

export const scene = new THREE.Scene()
const textureloader = new THREE.TextureLoader()
export const createPlanet = (size: number, texture: any, position: number) =>{
    const geometry = new THREE.SphereGeometry(size,10,10)
    const material = new THREE.MeshStandardMaterial({
        map: texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    const obj = new THREE.Object3D()
    obj.add(mesh)
    scene.add(obj)
    mesh.position.x = position
    return {mesh, obj}
}


export const mercury = createPlanet(3.2, textureloader.load('/textures/2k_mercury.jpg') ,28)
export const venus = createPlanet(5.4, textureloader.load('/textures/2k_mercury.jpg') ,44)
export const earth = createPlanet(6, textureloader.load('/textures/2k_earth_daymap.jpg') ,62)
export const mars = createPlanet(4, textureloader.load('/textures/2k_mars.jpg') ,78)
export const jupiter = createPlanet(12, textureloader.load('/textures/2k_jupiter.jpg') ,100)
export const saturn = createPlanet(10, textureloader.load('/textures/2k_saturn.jpg') ,138)
export const uranus = createPlanet(7, textureloader.load('/textures/2k_uranus.jpg') ,176)
export const neptune = createPlanet(7, textureloader.load('/textures/2k_neptune.jpg') ,200)

export const planets = [mercury, venus, earth, mars,  jupiter, saturn, uranus, neptune]