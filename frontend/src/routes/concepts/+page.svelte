<script lang='ts'>
	import Overview from "./components/overview.svelte";
	import { conceptsIndex } from "../context/store";
	import Goals from "./components/goals.svelte";
	import Types from "./components/types.svelte";
	import Namesys from './components/namesys.svelte';

	let index: number;
	$: index = $conceptsIndex
	$: console.log(index)


	let pages = [
		Overview,
		Types,
		Namesys,
	]
</script>

<svelte:component this={pages[index]}/>
