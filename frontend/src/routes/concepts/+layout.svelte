<script lang='ts'>
    //local components
	import Chatbot from "./components/chatbot.svelte";
  import Navbar from "./components/navbar.svelte";
	import Sidebar from "./components/sidebar.svelte";


  let hidden: Boolean = false
  const toggleHidden = (hidden)=>{
    hidden = hidden
  }

</script>

<section class='concepts-container'>
    <Navbar />
    <div class="content-container">
      <Sidebar on:toggle={toggleHidden} />
        <div class="container">
          <slot />
        </div>
      </div>
      <Chatbot {hidden} />
  </section>

<style>

  .concepts-container{
    background: none;
  }
  .content-container {
    background: none;
    display: flex;
    align-items: stretch;
    width:100%;
  }
  .container {
    padding-inline:20%;
    margin:auto;
    color:#333;
    background-color: #eeeeee;
    min-height:100vh;
    padding-block:1rem;
    
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