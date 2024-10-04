<script>
    import { onDestroy } from "svelte";
    let currentIndex = 0;
    const totalSlides = 3;
  
    // Array of slide content (you can replace with actual content later)
    const slides = [
      {'img':'carousel-1.jpg', 'text':'Discover and learn more about the planets in our solar system'},
      {'img':'carousel-1.jpg', 'text':'Discover and learn more about planets beyond the barycentric orbit'},
      {'img':'carousel-1.jpg', 'text':'Discover and learn more about planets beyond the barycentric orbit'},
    ];
    let noOfSlides = slides.length
  
    // Change slide based on index
    function goToSlide(index) {
      currentIndex = index;
    }
  
    // Auto-advance every 5 seconds
    // const interval = setInterval(() => {
    //   currentIndex = (currentIndex + 1) % totalSlides;
    // }, 5000);
  
    // // Cleanup interval on component destroy
    // onDestroy(() => {
    //   clearInterval(interval);
    // });
  </script>

<div class="carousel">
  <div class='carousel-head text-red-700'>
    <h3>
      Top picks
    </h3>
  </div>
  

  <div class="carousel-inner" style="transform: translateX({-currentIndex * (100/noOfSlides)}%); width: {noOfSlides * 100}%">
    {#each slides as { img, text }}
      <div class="carousel-item">
        <img class='carol-img' src={img} alt='carousel'/>
        <div class='col-start-4'>
          <p>{text}</p>
          <button class='carol-btn'>Click to explore</button>
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
    height: 400px; /* Adjust height as necessary */
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
    width: 100%; 
    height: 100%; /* Fill the carousel height */
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four equal columns */
    justify-items: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    background-color: #f0f0f0;
    padding: 0.5em; /* Space around the content */
  }

  .carol-img {
    grid-column: 1 / span 2; /* Take up two columns */
    max-height: 100%; /* Ensure image does not overflow */
    object-fit: cover; /* Maintain aspect ratio and cover the area */
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
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .indicator.active {
    background-color: #333;
  }

    .carol-btn{
        border: solid 1px rgb(93, 174, 194);
        background-color: rgb(93, 174, 194);
        color: #fefefe;
        padding: 2px;
        font-size: 14px;
        border-radius: 25px  25px;
    }
  </style> 