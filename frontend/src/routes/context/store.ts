import { writable } from "svelte/store";
import * as THREE from 'three'

// Store to hold the camera
export const sceneStore = writable<THREE.Scene | null>(null);
export const rendererStore = writable<THREE.WebGLRenderer | null>(null);

// Create a writable store for planets (could be an array or an object)
export const planetsStore = writable<THREE.Object3D[]>([]);

const cameraStore = writable<THREE.PerspectiveCamera | null>(null);

// Function to initialize the camera (client-side)
export function initCamera() {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
  camera.position.set(-90,20,40);
  cameraStore.set(camera);
}

export { cameraStore };

export let conceptsIndex = writable(0)

export const setPageIndex = (input: number)=>{
  conceptsIndex.set((value)=>{value = input})
}