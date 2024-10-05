<script>
    //local components
	import Navbar from "./components/navbar.svelte";
	import Sidebar from "./components/sidebar.svelte";


</script>

<section class='concepts-container bg-white'>
    <Navbar />
    <Sidebar />
    <div class="container">
        <slot />
    </div>
    
    
    <!-- Footer -->
    <footer>
        <p>© 2024 ExoExplorer. All Rights Reserved.</p>
    </footer>      
</section>

<style>
    /* Global styles */
    :global(main){
        position: relative;
    }
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