<script lang='ts'>
  let chatbotbtn;
  import { createEventDispatcher } from "svelte";
  import { conceptsIndex } from "../../context/store";
  let dispatch = createEventDispatcher()

  let hidden: Boolean = true

  const toggle = ()=>{
    dispatch('toggleChat',
    {'hidden':hidden})
  }

  const setIndex = (value)=>{
    $conceptsIndex = value
    console.log($conceptsIndex)
  }
</script>

    <aside class="flex flex-col justify-between sidebar">
      <ul>
            <li><p class='cursor-pointer' on:click={()=>{setIndex(0)}} >Brief Overview</p></li>
            <li><p class='cursor-pointer' on:click={()=>{setIndex(1)}} >Types of Exoplanets</p></li>
            <li><p class='cursor-pointer' on:click={()=>{setIndex(2)}}>Naming Systems</p></li>
            <li><p class='cursor-pointer' on:click={()=>{setIndex(3)}}>Discovery methods</p></li>
            <li><p class='cursor-pointer' on:click={()=>{setIndex(4)}}>NASA’s Goals</p></li>
        </ul>
        <footer class="flex-end text-white">
          <p>© 2024 ExoExplorer. All Rights Reserved.</p>
      </footer> 
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
    
    .sidebar{
      @apply bg-blue-700/65;
      /* background-color: rgba(19, 51, 141, 0.95); */
      backdrop-filter: blur(20px);
      border-top:1px solid black;
      display:flex;
      align-items:space-between;
      width: 275px;
      padding: 20px 20px 10px;
      position: sticky;
      top:112px;
      align-self: stretch;
      height:calc(100vh - 112px)
    }
    
    .sidebar ul {
      list-style: none;
    }
    
    .sidebar ul li {
      margin: 25px 0;
    }
    
    .sidebar ul li p{
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
    
    .sidebar ul li a:hover {
      color: #007bff;
    }
</style>