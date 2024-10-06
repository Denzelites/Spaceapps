<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher()
    export let planet
    export let index: number;

    const focusPlanet = (planet: [])=>{
        dispatch('focus',{'planet':planet, 'index':index})
    }

    const generateColor = (planet) =>{
        // console.log(planet)
    }
    generateColor(planet)
</script>

<section class='planet-container'>
    <div class='planet-wrapper flex flex-col justify-center'>
        <div>
            <h2 class='planet-head'>{planet.name}</h2>
        </div>
        <button class='p-2 border text-sm bg-[red] hover: bg-gradient-to-r hover: from-blue-200 via-purple-300
         to-yellow-100 border-blue-100 text-center' on:click={() => focusPlanet(planet)}>Click to view {planet.name}</button>
    </div>
</section>

<style>
    h2{
        text-align: center;
        font-size: 18px;
        line-height: 1em;
        text-transform: capitalize;
    }

    /* .planet-wrapper{

    } */

</style>