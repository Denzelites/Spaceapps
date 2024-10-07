<script lang='ts'>
	import Overview from "./components/overview.svelte";
	import { conceptsIndex } from "../context/store";
	import Goals from "./components/goals.svelte";
	import Method from "./components/method.svelte";
	import Types from "./components/types.svelte";
	import Namesys from './components/namesys.svelte';

	let index: number;
	$: index = $conceptsIndex
	$: console.log(index)


	let pages = [
		Overview,
		Types,
		Namesys,
		Method,
		Goals,
	]
</script>

<svelte:component this={pages[index]}/>
