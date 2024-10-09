<script>
	import { onMount } from "svelte";
    export let hidden

</script>

<!-- Optional Background overlay when chatbot is open -->
<div id="overlay" class="{hidden ? 'hidden' : ''}"></div>
    

<!-- Chatbot Panel (Initially hidden) -->
<div id="chatbot-panel" class="{hidden ? 'hidden' : ''}">
    <div class="chatbot-header">
        <h2>Hi, I'm ExoAI</h2>
        <button id="close-chatbot">X</button>
</div>

<div class="{hidden ? 'hidden' : ''}">
    <div id="chat-output">
        <p>Hello, I'm here to help with your questions.</p>
        <!-- Chat will be dynamically added here -->
    </div>
</div>

<div class="chatbot-footer">
        <input type="text" placeholder="Ask a question" id="chat-input">
        <button id="send-button">Send</button>
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

#chatbot-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
}

#chatbot-panel.open {
    transform: translateX(0);
}

.chatbot-header {
    display: flex;
    justify-content: space-between;
    background-color: red;
    padding: 10px;
    color: white;
}

.chatbot-body {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    border-bottom: 1px solid #ccc;
}

#chat-output {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.chatbot-footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

#chat-input {
    flex-grow: 1;
    padding: 5px;
    font-size: 14px;
}
#send-button {
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
}
.chat-bubble {
    padding: 10px;
    border-radius: 15px;
    max-width: 80%;
    margin-bottom: 10px;
}

.chat-bubble.user {
    background-color: #e0e0e0;
    align-self: flex-end;
}

.chat-bubble.bot {
    background-color: #c1e1ff;
    align-self: flex-start;
}
#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: none;
}

#overlay.show {
    display: block;
}

/* Hide elements initially */
.hidden {
    display: none;
}

#close-chatbot {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

</style>