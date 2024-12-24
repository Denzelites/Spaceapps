// Elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotPanel = document.getElementById('chatbot-panel');
const closeChatbot = document.getElementById('close-chatbot');
const overlay = document.getElementById('overlay');
const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Show chatbot panel when button is clicked
chatbotButton.addEventListener('click', () => {
  chatbotPanel.classList.add('open');
  chatbotPanel.classList.toggle('hidden');
});

// Close chatbot panel when close button is clicked
closeChatbot.addEventListener('click', () => {
    chatbotPanel.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Optional: Close chatbot when clicking outside the panel
overlay.addEventListener('click', () => {
    chatbotPanel.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Handle sending a message
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage !== '') {
        addMessage(userMessage, 'user');
        chatInput.value = '';
        handleBotResponse(userMessage);
    }
});

// Add message to chat
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-bubble', sender);
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
async function getBotResponse(userMessage) {
  const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `
      },
      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          prompt: userMessage,
          max_tokens: 150
      })
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}

// Simulate bot response
async function handleBotResponse(userMessage) {
    addMessage('Thinking...', 'bot');
    
    // Simulated API call (replace with actual API call using OpenAI or HuggingFace)
    setTimeout(async () => {
        const response = await getBotResponse(userMessage);
        const thinkingMessage = document.querySelector('.chat-bubble.bot:last-child');
        if (thinkingMessage) {
            thinkingMessage.remove();  // Remove "Thinking..." bubble
        }
        addMessage(response, 'bot');
    }, 1000);
}

// Replace this function with the actual API call
async function getBotResponse(userMessage) {
    // Simulating a response - Replace with OpenAI or HuggingFace integration
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':Bearer
        },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    return data.reply || 'Sorry, I don\'t have an answer for that.';
}
