<script>
    // import '../../styles/concepts.css'
</script>

<section class='concepts-container bg-white'>
    <section id="edu-content">
        <nav>
          <ul>
            <li><a href="visual.html">Data visualizations</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li><a href="concepts.html">Concepts</a></li>
            <li><a href="resources.html">Additional Educational Resources</a></li>
          </ul>
        </nav>
      </section>
    
      <!-- Main Content with Sidebar -->
      <div class="content-container">
        <aside class="sidebar">
          <ul>
            <li><a href="concepts_overview.html">Brief Overview</a></li>
            <li><a href="concepts_types.html">Types of Exoplanets</a></li>
            <li><a href="concepts_namesys.html">Naming Systems</a></li>
            <li><a href="concepts_discovery.html">Methods of Discovering Exoplanets</a></li>
            <li><a href="concepts_timeline.html">Timeline & Important Discoveries</a></li>
            <li><a href="concepts_goals.html">NASA's Goals</a></li>
          </ul>
        </aside>
    
         <!-- Chatbot Button -->
         <div id="chatbot-button">
          <div class="chatbot-text">
              <p>May I help you?</p>
              <span>Hi there! I'm here to help you.</span>
          </div>
      </div>
      </div>
    
      <!-- Optional Background overlay when chatbot is open -->
      <div id="overlay" class="hidden"></div>
      
    
     <!-- Chatbot Panel (Initially hidden) -->
     <div id="chatbot-panel" class="hidden">
      <div class="chatbot-header">
          <h2>Ask ExoExplorer Bot</h2>
          <button id="close-chatbot">X</button>
      </div>
      <div class="chatbot-body">
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
    
        <!-- Footer -->
        <footer>
          <p>© 2024 ExoExplorer. All Rights Reserved.</p>
        </footer>      
</section>

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