<nav class='z-[150] navbar flex justify-between items-center'>
  <div class='left-nav-sec flex items-center'>
    <div class="logo">
      <img src='logo.jpeg' alt='exo logo'/>
    </div>
    <h2>EduExo</h2>
  </div>
<div class="dark-overlay bg-black text-white opacity-90 absolute inset-0" class:active={isMenuOpen}></div>
  <img src=" hamburger.svg" alt="" class="z-10 menu-icon open pr-6" width=60 height = 60 on:click={toggleMenu} class:active={!isMenuOpen}>
  <ul class='z-10 flex items-start pt-16 pl-4 md:pt-0' class:active={isMenuOpen}>
    <img src="close.svg" alt="" class="menu-icon close ml-4 mt-[-50px] mb-8" width=40 height=40 on:click={toggleMenu} class:active={isMenuOpen}>
    <li><a href="/">Home</a></li>
    <li><a href="/explore">Explore</a></li>
    <li><a href="/concepts">Concepts</a></li>
    <li><a href="/visual">Visualization</a></li>
    <li><a href="#gallery">Meet the team</a></li>
  </ul>
</nav>

<script lang="ts">
 let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  updateBodyOverflow();
}
function updateBodyOverflow() {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
</script>