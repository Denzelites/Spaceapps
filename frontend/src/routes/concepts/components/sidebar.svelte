<script lang='ts'>
  let chatbotbtn;
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()

  let hidden: Boolean = true

  const toggle = ()=>{
    dispatch('toggleChat',
    {'hidden':hidden})
  }
</script>

    <aside class="sidebar">
        <ul>
            <li><a href="/concepts/overview">Brief Overview</a></li>
            <li><a href="concepts_types.html">Types of Exoplanets</a></li>
            <li><a href="concepts_namesys.html">Naming Systems</a></li>
            <li><a href="concepts_discovery.html">Methods of Discovering Exoplanets</a></li>
            <li><a href="concepts_timeline.html">Timeline & Important Discoveries</a></li>
            <li><a href="concepts_goals.html">NASA's Goals</a></li>
        </ul>
    </aside>
    
    <div id="chatbot-button" bind:this={chatbotbtn} on:click={toggle}>

        <div class="chatbot-text">
            <p>May I help you?</p>
            <span>Hi there! I'm here to help you.</span>
        </div>
    </div>
    


<style>
    
#chatbot-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color:  #1f2937;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    z-index: 1000;
}

.chatbot-text {
    margin-left: 10px;
}
    .content-container{
      display: flex;
      min-height: calc(100vh - 100px); /* Adjust based on your header height */
    }
    
    .sidebar{
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
</style>