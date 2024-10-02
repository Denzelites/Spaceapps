<script lang='ts'>
    import '../app.css'
    import Navbar from './components/navbar.svelte';
	import Navbar2 from './components/navbar2.svelte';
	import Sidebar from './components/sidebar.svelte';
</script>

<div>
    <Navbar />
    <section id='edu-content'>
        <Navbar2 />
    </section>

    <div class="content-container">
        <aside>
            <Sidebar />
        </aside>

        <main>
            <slot>

            </slot>
        </main>
    </div>
</div>

<style>

</style>