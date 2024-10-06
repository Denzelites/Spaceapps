<script lang='ts'>
    export let planetData
    console.log(planetData)
</script>

    <div class='explain-head'>
        <h2 class='text-center font-semibold text-lg'>{planetData.name}</h2>
    </div>
    <div class='explain-body'>
        <p>{planetData.description}</p>
        <p>{planetData.distanceFromSun}</p>
        <p>{planetData.yearLength}</p>
    </div>
