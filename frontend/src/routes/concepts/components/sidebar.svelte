<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { conceptsIndex } from "../../context/store";
  import { HfInference } from "@huggingface/inference";
  import { HfAgent } from "@huggingface/agents";

  let dispatch = createEventDispatcher();
  let chatbotbtn: HTMLElement;
  let hidden: boolean = true;
  let chatbotPanel: HTMLElement;
  let chatInput: HTMLInputElement;
  let chatOutput: HTMLElement;
  let overlay: HTMLElement;

  const inference = new HfInference(""); 
  const toggle = () => {
    hidden = !hidden;
    dispatch("toggleChat", { hidden });
    
    if (chatbotPanel) {
      chatbotPanel.classList.toggle("hidden", hidden);
    }
    
    if (overlay) {
      overlay.classList.toggle("hidden", hidden);
    }
    
    // Hide chatbot button when panel is opened
    if (chatbotbtn) {
      chatbotbtn.classList.toggle("hidden", !hidden);
    }
  };

  const closeChatbot = () => {
    hidden = true;
    
    if (chatbotPanel) {
      chatbotPanel.classList.add("hidden");
    }
    
    if (overlay) {
      overlay.classList.add("hidden");
    }
    
    // Show chatbot button when panel is closed
    if (chatbotbtn) {
      chatbotbtn.classList.remove("hidden");
    }
  };

  const setIndex = (value: number) => {
    $conceptsIndex = value;
    console.log($conceptsIndex);
  };

  const addMessage = (message: string, sender: "user" | "bot"): void => {
    const messageElement = document.createElement("div");
    // Common styles for all chat bubbles
  messageElement.style.padding = "10px";
  messageElement.style.borderRadius = "8px";
  messageElement.style.margin = "5px 0";
  messageElement.style.maxWidth = "70%";
  messageElement.style.wordWrap = "break-word";
  messageElement.style.lineHeight = "1.5";
  messageElement.style.display = "inline-block";

  // Conditional styling for user and bot messages
  if (sender === "user") {
    messageElement.style.backgroundColor = "#1f2937"; // Dark gray
    messageElement.style.color = "white";
    messageElement.style.alignSelf = "flex-end"; // Align user messages to the right
    messageElement.style.textAlign = "right";
  } else if (sender === "bot") {
    messageElement.style.backgroundColor = "#e5e5e5"; // Light gray
    messageElement.style.color = "black";
    messageElement.style.alignSelf = "flex-start"; // Align bot messages to the left
    messageElement.style.textAlign = "left";
  }

  messageElement.textContent = message;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight;
  };

  const getBotResponse = async (userMessage: string): Promise<any> => {
    const response = await inference.chatCompletion({
      model: "microsoft/Phi-3-mini-4k-instruct",
      messages: [{ role: "user", content: `${userMessage}` }],
      max_tokens: 512
    });
    console.log(response.choices[0])
    return response.choices[0].message.content || "Sorry, I couldn't understand that.";
  };

  const handleBotResponse = async (userMessage: string): Promise<void> => {
  // Add "Thinking..." placeholder
  const thinkingMessage = document.createElement("div");
  thinkingMessage.classList.add("chat-bubble", "bot", "thinking");
  thinkingMessage.textContent = "Thinking...";
  chatOutput.appendChild(thinkingMessage);
  chatOutput.scrollTop = chatOutput.scrollHeight;

  try {
    // Get the bot's response
    const response = await getBotResponse(userMessage);

    // Remove "Thinking..." message
    if (thinkingMessage.parentNode) {
      thinkingMessage.parentNode.removeChild(thinkingMessage);
    }

    // Add the actual bot response
    addMessage(response, "bot");
  } catch (error) {
    console.error("Error generating bot response:", error);
    if (thinkingMessage.parentNode) {
      thinkingMessage.parentNode.removeChild(thinkingMessage);
    }
    addMessage("Sorry, something went wrong. Please try again.", "bot");
  }
};


  const sendMessage = () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, "user");
      chatInput.value = "";
      handleBotResponse(userMessage);
    }
  };
</script>

<aside class="flex flex-col justify-between sidebar">
  <ul>
    <li>
      <p class="cursor-pointer" on:click={() => setIndex(0)}>Brief Overview</p>
    </li>
    <li>
      <p class="cursor-pointer" on:click={() => setIndex(1)}>Types of Exoplanets</p>
    </li>
    <li>
      <p class="cursor-pointer" on:click={() => setIndex(2)}>Naming Systems</p>
    </li>
    <li>
      <p class="cursor-pointer" on:click={() => setIndex(3)}>Discovery methods</p>
    </li>
    <li>
      <p class="cursor-pointer" on:click={() => setIndex(4)}>NASA's Goals</p>
    </li>
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

<div id="chatbot-panel" class="hidden" bind:this={chatbotPanel}>
  <div class="chatbot-header">
    <h2>Ask ExoExplorer Bot</h2>
    <button id="close-chatbot" on:click={closeChatbot}>X</button>
  </div>
  <div id="chat-output" bind:this={chatOutput}></div>
  <div class="input-container">
    <input id="chat-input" bind:this={chatInput} type="text" placeholder="Type your message..." />
    <button on:click={sendMessage} class="send-btn">Send</button>
  </div>
</div>

<div id="overlay" class="hidden" bind:this={overlay}></div>

<style>
  /* Previous styles remain the same */
  
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
  }

  #chat-input {
    flex-grow: 1;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    background-color: #1f2937;
  }
  #chatbot-button {
    /* display:none; */
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #1f2937;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    /* display: flex; */
    align-items: center;
    z-index: 1000;
  }
  .chatbot-header {
    display: flex;
    justify-content: space-between;
    background-color: red;
    padding: 10px;
    color: white;
  }
  .chatbot-text {
    margin-left: 10px;
  }

  #chatbot-panel {
    position: fixed;
    right: 0;
    top: 90;
    width: 500px;
    height: 85%;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: scroll;
  }

  #chat-output {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }

  .send-btn {
    background-color: #1f2937;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  #chat-input {
    border: none;
    padding: 10px;
    width: calc(100% - 20px);
  }

  /* .hidden {
    display: none;
  } */
  .sidebar{
    @apply bg-blue-700/65;
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