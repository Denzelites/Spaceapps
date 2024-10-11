<script lang='ts'>
  let index: number = 1
  import { conceptsIndex } from "../../context/store";

  const setIndex = (value)=>{
    $conceptsIndex = value
    console.log($conceptsIndex)
  }
</script>

<div class="container">
  <h1 class="text-blue-700 text-[3.75rem] text-center font-bold">Brief Overview</h1>
  <div class="introduction text-lg">
    <p>Okay, exoplanets, what are they, how can they be found, what makes them so cool? An exoplanet is any planet <b>beyond</b> our solar system. Most of them orbit other stars, but some free-floating exoplanets, called <b>rogue planets</b>, are untethered to any star. We’ve confirmed more than 5,600 exoplanets out of the billions that we believe exist. Get ready to go on an <b>ex</b>-citing
      journey across the galaxy (and maybe even beyond!) as we learn about exoplanets. We'll discuss...</p>
    </div>
    <ul class="font-bold pt-4 *:mb-2 text-lg">
        <li><p class='cursor-pointer hover:text-blue-700' on:click={()=>{setIndex(2)}}>Their Types --></p></li>
        <li><p class='cursor-pointer hover:text-blue-700' on:click={()=>{setIndex(3)}}>How We Name Them --></p></li>
        <li><p class='cursor-pointer hover:text-blue-700' on:click={()=>{setIndex(4)}}>How We Find Them --></p></li>
        <li><p class='cursor-pointer hover:text-blue-700' on:click={()=>{setIndex(5)}}>Why Even Look For Them? --></p></li>
    </ul>
        <a href="/" class="quiz-button">Take a quiz</a>
  </div>

  <style>
  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
    }
  
    .sidebar {
      width: 100%;
      text-align: center;
    }
  
    .concept-content {
      padding: 10px;
    }
  }
  .quiz-button {
    display: inline-block;
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #1f2937;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
    transition: background-color 0.3s ease;
}
.quiz-button:hover {
    background-color: #218838;
}

  </style>