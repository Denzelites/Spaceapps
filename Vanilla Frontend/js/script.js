// Import the Hugging Face inference module
// import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.8.1/+esm';
// import { createRepo, commit, deleteRepo, listFiles } from "https://cdn.jsdelivr.net/npm/@huggingface/hub@0.17.0/+esm";


// // Initialize Hugging Face inference instance
// const hf = new HfInference('api_key');
// const user_input = document.getElementById('chat-input');
// // Get elements
// const openai = new HfInference(OPENAI_TOKEN).endpoint("https://api.openai.com");
const chatbotButton = document.getElementById('chatbot-button');
const chatbotPanel = document.getElementById('chatbot-panel');
const closeChatbot = document.getElementById('close-chatbot');
const overlay = document.getElementById('overlay');

// Show chatbot panel when button is clicked
chatbotButton.addEventListener('click', () => {
    chatbotPanel.classList.add('open');
    chatbotPanel.classList.toggle('hidden');

    // overlay.classList.add('show');
});

// Close chatbot panel when close button is clicked
closeChatbot.addEventListener('click', () => {
    chatbotPanel.classList.remove('open');
    overlay.classList.remove('show');
});

// Optional: Close chatbot when clicking outside the panel
overlay.addEventListener('click', () => {
    chatbotPanel.classList.remove('open');
    overlay.classList.remove('show');
});

// let out = "";
// for await (const chunk of openai.chatCompletionStream({
//   model: "gpt-3.5-turbo",
//   messages: [
//     { role: "user", content:` Your role is to act as an  any questions about concepts on exoplanet and other related topics.
//         a/an {option} from African literature excerpts using {synopsis} that can be fed into an image-generator
//     ` },
//   ],
//   max_tokens: 500,
//   temperature: 0.1,
//   seed: 0,
// })) {
//   if (chunk.choices && chunk.choices.length > 0) {
//     out += chunk.choices[0].delta.content;
//   }
// }

// const out = await mistal.chatCompletion({
//     model: "mistralai/Mistral-7B-Instruct-v0.2",
//     messages: [{ role: "user", content: "Complete the this sentence with words one plus one is equal " }],
//     max_tokens: 100,
//    });
//    console.log(out.choices[0].message);