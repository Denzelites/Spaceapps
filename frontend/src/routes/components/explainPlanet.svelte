<script lang='ts'>
    export let planetData
    console.log(planetData)
</script>

    <div class='explain-head flex flex-1 flex-row justify-center items-cente'>
        <div class='ml-2'>
            <h2 class='text-center font-semibold text-lg'>{planetData.name}</h2>
            <img src={planetData.tagline_icon} />
        </div>
    </div>
    <div class='explain-body'>
        <p>{planetData.description}</p>
        <div class='mt-2 font-semibold text-lg text-[#ddd]'>
            <p>Distance from the sun: {planetData.distanceFromSun}</p>
            <p>Number of days in a year: {planetData.yearLength}</p>            
        </div>
    </div>
