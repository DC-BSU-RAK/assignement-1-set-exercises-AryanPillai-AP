// Initial variables
let lives = 3;
let score = 0;
let correctColor;
let options = [];

// Function to start a new game
function startGame() {
  lives = 3;
  score = 0;
  document.getElementById("lives").querySelector("span").textContent = lives;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("feedback").textContent = "";
  document.getElementById("restart").style.display = "none";
  nextRound();
}

// Function to generate random RGB color
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to start the next round
function nextRound() {
  // Generate a random target color and three random color options
  correctColor = randomRGB();
  document.getElementById("rgb-value").textContent = `Guess this color: ${correctColor}`;

  options = [
    correctColor,
    randomRGB(),
    randomRGB()
  ];

  // Shuffle the options array to randomize the positions
  options = options.sort(() => Math.random() - 0.5);

  // Clear any previous options
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = '';

  // Create clickable color options
  options.forEach(color => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.style.backgroundColor = color;
    optionDiv.onclick = () => checkAnswer(color);
    optionsContainer.appendChild(optionDiv);
  });
}

// Function to check if the selected color is correct
function checkAnswer(selectedColor) {
  const feedback = document.getElementById("feedback");
  if (selectedColor === correctColor) {
    feedback.textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = "Score: " + score;
  } else {
    feedback.textContent = "Incorrect!";
    lives--;
    document.getElementById("lives").querySelector("span").textContent = lives;
  }

  // Check if the game is over
  if (lives > 0) {
    setTimeout(nextRound, 1000);
  } else {
    endGame();
  }
}

// Function to end the game
function endGame() {
  document.getElementById("feedback").textContent = `Game Over! Your final score is ${score}.`;
  document.getElementById("restart").style.display = "block";
}

// Start the game when the page loads
startGame();

// another one that took wayy too long