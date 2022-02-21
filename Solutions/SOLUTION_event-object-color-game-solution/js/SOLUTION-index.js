// * ===============================
// * PART ONE - SETTING UP THE GAME:
// * ===============================

// Array variable containing the HTML "square" elements
const squares = document.querySelectorAll(".square");

// Variable for the "color-display" span
const colorDisplay = document.querySelector("#color-display");

// Variable to hold the color the user needs to guess
let colorToGuess;

// Function to generate a random number between 0 and 255
const generateRandomColor = () => {
    // Generate random number between 0 and 255
    let rgbColor = Math.floor(Math.random() * 256);
    // Return the random number
    return rgbColor;
}

// Function to generate a random RGB color
const colorGenerator = () => {
    let red = generateRandomColor();
    let green = generateRandomColor();
    let blue = generateRandomColor();

    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
}

// Create an array containing the 6 colors we will use as the box background colors
let colorsArray = [
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator()
];

// Generate random number between 0 and 5
let randomIndex = Math.floor(Math.random() * 6);

// Run a "for" loop 6 times
// Each time get a different square element from the "squares" array
// Then set the square's background-color to one of the colors in the "colorsArray"
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorsArray[i];
}

// Choose a random color in the array to be the one the user has to guess
colorToGuess = colorsArray[randomIndex];
// Update the "color-display" span with this color
colorDisplay.textContent = colorToGuess;

// * ============================================
// * PART TWO - RESPONDING TO THE USER'S GUESSES:
// * ============================================

// Check if the background color of the box the user clicked is the same as the color they need to guess
// Respond with an alert, whether they are correct or incorrect
const respondToGuess = event => {
    if (event.target.style.backgroundColor == colorToGuess) {
        alert("Success!");
    } else {
        alert("Sorry, try again!");
    }
}

// * =====================================
// * PART THREE - SETTING EVENT LISTENERS:
// * =====================================

// Set event listeners to listen for clicks on the squares
// When a square is clicked, the "respondToGuess" function will execute
squares.forEach(square => {
    square.addEventListener("click", respondToGuess);
});