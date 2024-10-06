<script lang="ts">
  import { onDestroy } from "svelte";
  let currentIndex = 0;
  const totalSlides = 3;

  // Array of slide content (you can replace with actual content later)
  const slides = [
    {'img':'carousel-1.jpg', 'text':'Demystify exoplanets and understand what makes them so exiting', "arrow":"right-arrow.png", "link":"explore", "link_text":"explore the stars"},
    {'img':'carousel-1.jpg', 'text':'Learn how we name them, what types exist, how many we\'ve discovered and how we discovered them and what NASA\'s reasons for looking for exoplanets are', "arrow":"right-arrow.png", "link":"explore", "link_text":"explore the stars"},
    {'img':'carousel-1.jpg', 'text':"Use charts and graphs to understand and visualize trends in the discovery and frequency of certain types of exoplanets", "link":"explore", "link_text":"explore the stars", "arrow":"right-arrow.png"},
  ];
  // const slides = [
  //   {'img':'carousel-1.jpg', 'text':'Demystify exoplanets and understand what makes them so exiting', "arrow":"right-arrow.png", "link":"explore", "link_text":"explore the stars"},
  //   {'img':'carousel-1.jpg', 'text':'Learn how we name them, what types exist, how many we\'ve discovered and how we discovered them and what NASA\'s reasons for looking for exoplanets are', "arrow":"right-arrow.png", "link":"explore", "link_text":"explore the stars"},
  //   {'img':'carousel-3.jpg', 'text':"Use charts and graphs to understand and visualize trends in the discovery and frequency of certain types of exoplanets", "link":"explore", "link_text":"explore the stars", "arrow":"right-arrow.png"},
  // ];
  let noOfSlides = slides.length

  // Change slide based on index
  function goToSlide(index) {
    currentIndex = index;
  }

  const scrollCarousel = (arrow: number) =>{
    // console.log(arrow)
    if(arrow == 1){
      currentIndex = (currentIndex + 1) % totalSlides;
      console.log(currentIndex)
    } else if(arrow == -1){
      if(currentIndex == 0){
        currentIndex = 3
      }
      currentIndex = (currentIndex - 1) % totalSlides;
      console.log(currentIndex)
    }
    clearInterval(interval);
  }

  // Auto-advance every 5 seconds
  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
  }, 5000);

  // Cleanup interval on component destroy
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="carousel">
<!-- <div class='carousel-head text-red-700'>
  <h3>
    Top picks
  </h3>
</div> -->


<div class="carousel-inner" style="transform: translateX({-currentIndex * (100/noOfSlides)}%); width: {noOfSlides * 100}%">
  {#each slides as { img, text, arrow, link_text, link }}
    <div class="carousel-item">
      <img class='carol-img' src={img} alt='carousel'/>
      <div class="info-col">
        <p class="text-white">{text}</p>
        <button class='carol-btn'><a href={link}>{link_text}</a></button>
        <div class="right-arrow"><img on:keydown on:click={()=>scrollCarousel(-1)} src={arrow} alt='right arrow'/></div>
        <div class="left-arrow"><img on:keydown on:click={()=>scrollCarousel(1)} src={arrow} alt='left arrow'/></div>
      </div>
    </div>
  {/each}
</div>

<!-- Carousel Indicators -->
<div class="carousel-indicators">
  {#each Array(totalSlides) as _, index}
    <span 
      class="indicator {index === currentIndex ? 'active' : ''}" 
      on:click={() => goToSlide(index)} on:keypress>
    </span>
  {/each}
</div>

</div>

<style>
  .carousel {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    height: 100%; /* Fill the carousel height */
    transition: transform 0.5s ease;
    will-change: transform; /* Improve performance */
  }
  
  
  .carousel-item {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(15px);
    padding: 0.5rem 0.5rem 2.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:1.5rem;
    border-radius:5px;
    /* width: 100%; */
  }
  
  .carol-img {
    border-radius:5px 5px 0 0;
    max-width: 100%; /* Ensure image does not overflow */
    object-fit: cover; 
    height: 70%;
  }
  .info-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  position: relative;
  text-align: center;
  }
  .info-col > .right-arrow{
  position: absolute;
  left:0;
  bottom:0;
  cursor: pointer;
  width:40px;
  transform: rotateY(180deg);
  }
  .info-col > .left-arrow{
  position: absolute;
  right:0;
  bottom:0;
  cursor: pointer;
  width:40px;
  }
  .info-col div img{
  width:100%
  
  }
  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .indicator.active {
    background-color: #333;
  }
  
    .carol-btn{
       @apply bg-blue-500;
        color: #fefefe;
        padding: .5rem;
        font-size: 14px;
        border-radius: 5px;
    }
  </style> 