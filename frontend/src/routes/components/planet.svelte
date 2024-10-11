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

<section class='planet-container mb-3 ml-2 odd:translate-x-12'>
    <div class='planet-wrapper flex flex-col gap-4'>
        <button class='text-[1.3rem] capitalize border-[1px] border-blue-700 border-solid rounded-lg py-[10px] text-white hover:bg-blue-700' on:click={() => focusPlanet(planet)}>{planet.name}</button>
    </div>
</section>

<style>
    h2{
        text-align: center;
        font-size: 18px;
        line-height: 1em;
        text-transform: capitalize;
    }

    .planet-wrapper>button{
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(30px);
    }
    .planet-wrapper>button:hover{
        @apply bg-blue-700 transition-colors duration-150 text-black
    }
</style>