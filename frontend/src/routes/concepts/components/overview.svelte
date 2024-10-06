<script lang='ts'>
  import { conceptsIndex } from "../../context/store";

  const setIndex = (value)=>{
    $conceptsIndex = value
    console.log($conceptsIndex)
  }
</script>

<div class="container">
    <h1>Brief Overview</h1>
    <p>Okay, exoplanets, what are they, how can they be found, what makes them so cool? An exoplanet is any planet beyond our solar system. Most of them orbit other stars, but some free-floating exoplanets, called rogue planets, are untethered to any star. We’ve confirmed more than 5,600 exoplanets out of the billions that we believe exist. Get ready to go on an ex-citing
       journey across the galaxy (and maybe even beyond!) as we learn about exoplanets and their:</p>
    <ul>
        <li><p class='cursor-pointer' on:click={()=>{setIndex(1)}}>Types of Exoplanets</p></li>
        <li><p class='cursor-pointer' on:click={()=>{setIndex(2)}}>How We Name Them</p></li>
        <!-- <li><a href="">How We Find Them</a></li>
        <li><a href="">Which Ones We've Found</a></li>
        <li><a href="">Why Even Look For Them?</a></li> -->
    </ul>
    <div id="chart"></div>
    <div id="grouping-options">
      <label>Group by:</label>
      <input type="radio" name="grouping" value="planet_type" checked> Planet Type
      <input type="radio" name="grouping" value="detection_method"> Detection Method
    </div>
       <!-- Button to link to quiz page -->
        <a href="/" class="quiz-button">Take a quiz</a>
  </div>

  <style>
    /* Global styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  margin: 20px;
}
p{ 
color: #333;
}
h1, h2 {
  color: #333;
}
.container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.example {
  font-style: italic;
  color: #555;
}
.note {
  background-color: #e7f3fe;
  padding: 10px;
  border-left: 5px solid #2196F3;
  margin: 10px 0;
}
  
  /* Header styles */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #1f2937;
  }
  
  header .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  header nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  header nav ul li {
    display: inline;
  }
  
  header nav ul li a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  header nav ul li a:hover {
    color: #007bff;
  }
  
  header nav ul li a.active {
    color: #007bff;
    font-weight: bold;
  }
  
  /* Edu-content section */
  #edu-content nav ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
    background-color: #1f2937;
  }
  
  #edu-content nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
  }
  
  #edu-content nav ul li a:hover {
    color: #007bff;
  }
  
  /* Content Container */
  .content-container {
    display: flex;
    min-height: calc(100vh - 100px); /* Adjust based on your header height */
  }
  
  /* Sidebar */
  .sidebar {
    display:flex;
    align-items:space-between;
    width: 250px;
    background-color: #1f2937;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 15px 0;
  }
  
  .sidebar ul li a {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
  }
  
  .sidebar ul li a:hover {
    color: #007bff;
  }
  
  /* Main Concept Content */
  .concept-content {
    flex: 1;
    padding: 20px;
  }
  
  .concept-content h1 {
    font-size: 32px;
  }
  
  .concept-content p {
    font-size: 18px;
  }
  /* #quiz-container{
    background-color:brown;
  } */
  /* Responsive Design */
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
   /* Footer */
   footer {
    background-color: #1f2937;
    padding: 16px;
    text-align: center;
  }
  
  footer p {
    font-size: 14px;
    color: #ffffff;
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
#chart {
  width: 800px;
  height: 600px;
}

.bar {
  fill: steelblue;
}

.tooltip {
  position: absolute;
  text-align: center;
  width: 200px;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.5s;
}
  </style>