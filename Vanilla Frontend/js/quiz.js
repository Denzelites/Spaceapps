// Import the Hugging Face inference module
import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.8.1/+esm';
import { createRepo, commit, deleteRepo, listFiles } from "https://cdn.jsdelivr.net/npm/@huggingface/hub@0.17.0/+esm";


// Initialize Hugging Face inference instance
const hf = new HfInference('api_key');

let currentQuestionIndex = 0;
let totalQuestions = 3;
let quizData = [];
const urlParams = new URLSearchParams(window.location.search);
const aspect = urlParams.get('title');

// Use the title variable as needed
console.log(aspect);

// Set the number of questions dynamically
function setNumberOfQuestions() {
    const slider = document.getElementById('numQuestions');
    totalQuestions = slider.value;
    document.getElementById('questionCount').textContent = totalQuestions;
    generateQuiz(totalQuestions);
}

// Fetch quiz data based on the number of questions
async function generateQuiz(numQuestions) {
    quizData = [];
    let prompt;
  
    // Define prompt based on the aspect
    if (aspect === "overview") {
      prompt = `You are an exoplanet quiz generator. Your task is to generate a quiz based on specific concepts of exoplanets. In this case, the aspect is 'overview'. 
      Provide a json response.\n##\n{quiz: The Kepler mission discovers a planet when the star's light dims periodically as the planet passes in front of it. What method of discovery is this?\nOption1:Transit method,option2: Radial velocity, option3:Direct imaging\nCorrect Answer: Transit method}\n##
      \n{quiz: John is given a task in his astronomy class to identify types of exoplanets. The first question depicts a planet that is very close to its star, leading to extremely high temperatures. What type of planet is this?\noption1: Hot Jupiter, option2: Super-Earth,option3:Ice giant\nCorrect Answer: Hot Jupiter}\n##`;
    } else if (aspect === "naming-systems") {
      prompt = `You are an exoplanet quiz generator. Your task is to generate a quiz based on specific concepts of exoplanets. In this case, the aspect is 'naming-systems'. Provide two examples of a quiz.\n##\nquiz: An exoplanet is named Kepler-452b. What does the “452b” part of the name indicate?\nOptions: A) It is the 452nd exoplanet discovered, B) It orbits the 452nd star discovered by Kepler, C) It is the first planet discovered orbiting star Kepler-452\nCorrect Answer: C) It is the first planet discovered orbiting star Kepler-452\n##\nquiz: When a planet is found around a star like HD 209458, the planet is given a name starting with the star's name followed by a letter. What does the letter represent?\nOptions: A) The planet's size, B) The order of discovery, C) The distance from the star\nCorrect Answer: B) The order of discovery\n##`;
    } else if (aspect === "discovery-methods") {
      prompt = `You are an exoplanet quiz generator. Your task is to generate a quiz based on specific concepts of exoplanets. 
      In this case, the aspect is 'discovery-methods'.
      \n##\n{quiz: John is analyzing data from an exoplanet mission.He notices the star’s light slightly wobbles due to the gravitational influence of an unseen planet. 
      Which method is John observing?\nOption1: Radial velocity, option2: Transit method, option3: Direct imaging\nCorrect Answer: Radial velocity}\n##\n{quiz: A new mission detects a planet when the star's light brightens as the planet passes behind the star. What discovery method is this?
      \nOption1: Transit method, option2: Gravitational lensing, option3: Direct imaging\nCorrect Answer: Direct imaging}\n##`;
    } else if (aspect === "exoplanet-types") {
      prompt = `You are an exoplanet quiz generator. Your task is to generate a quiz based on specific concepts of exoplanets. In this case, the aspect is 'Exoplanet-types'. Provide two examples of a quiz.\n##\nquiz: Micheals’s astronomy class asks him to identify different types of exoplanets. He encounters a planet with a rocky surface, thin atmosphere, and Earth-like conditions. What type of planet is this?\nOptions: A) Gas giant, B) Terrestrial planet, C) Ice giant\nCorrect Answer: B) Terrestrial planet\n##\nquiz: Based on these features — a massive planet with a thick atmosphere, mostly composed of hydrogen and helium — which of the following types best describes this planet?\nOptions: A) Super-Earth, B) Gas giant, C) Ice giant\nCorrect Answer: B) Gas giant\n##`;
    } else {
      return "Aspect not recognized!";
    }
    for (let i = 0; i < numQuestions; i++) {
        const response = await hf.textGeneration({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            inputs: prompt,
            parameters: { max_new_tokens: 100 }
        });

        // Simulate the JSON response for this example
        const quiz = JSON.parse(response.generated_text);
        quizData.push(quiz);
    }
    loadQuestion(currentQuestionIndex);
}

// Load the current question
function loadQuestion(index) {
    const currentQuiz = quizData[index];
    document.getElementById("questionText").textContent = currentQuiz.question;
    document.getElementById("option1").textContent = currentQuiz.option1;
    document.getElementById("option2").textContent = currentQuiz.option2;
    document.getElementById("option3").textContent = currentQuiz.option3;

    // Handle option selection
    document.querySelectorAll('.options li').forEach(option => {
        option.classList.remove('correct', 'wrong');
        option.onclick = function () {
            if (this.textContent === currentQuiz.correctOption) {
                this.classList.add('correct');
            } else {
                this.classList.add('wrong');
            }
            checkCompletion();
        };
    });
}

// Navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        checkCompletion();
    }
}

// Navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Check if the quiz is completed
function checkCompletion() {
    if (currentQuestionIndex === totalQuestions - 1) {
        alert('Congratulations! You completed the quiz! You can read more about exoplanet discovery methods or types of exoplanets.');
    }
}

// Initialize the quiz on page load
window.onload = function() {
    generateQuiz(totalQuestions);
};