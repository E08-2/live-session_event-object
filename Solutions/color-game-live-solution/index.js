// * ===============================
// * PART ONE - SETTING UP THE GAME:
// * ===============================

// Array variable containing the HTML "square" elements
const squares = document.querySelectorAll(".square");

// Variable for the "color-display" span
const colorDisplay = document.querySelector("#color-display");

// Function to generate a random number between 0 and 255
const generateColor = () => {
    let rgbColor = Math.floor(Math.random() * 256);
    return rgbColor;
}

// rgb(red, green, blue)

// Function to generate a random RGB color
const colorGenerator = () => {
    let red = generateColor();  // 0-255
    let green = generateColor();  // 0-255
    let blue = generateColor();  // 0-255

    let newColor = `rgb(${red}, ${green}, ${blue})`;    // "rgb(x, y, z)"
    // Return random rgb color
    return newColor;
}

// Create an array containing 6 random colors we will use as the box background colors
// const colorsArray = [
//     colorGenerator(),   // Random color 1
//     colorGenerator(),   // Random color 2...
//     colorGenerator(),
//     colorGenerator(),
//     colorGenerator(),
//     colorGenerator()
// ];

// Giorgio alternative to the above
const colorsArray = [];
for (let i = 0; i < 6; i++) {
    colorsArray.push(colorGenerator());
}

// Generate random number between 0 and 5
let randomIndex = Math.floor(Math.random() * 6);

// Variable to hold the color the user needs to guess
// Choose a random color in the array to be the one the user has to guess
let colorToGuess = colorsArray[randomIndex];

// Update the "color-display" span with this color
colorDisplay.textContent = colorToGuess;

// Give each HTML square one of the random colors as a background color
for (let i = 0; i < 6; i++) {
    squares[i].style.backgroundColor = colorsArray[i];
}

// =====================================================================

// * ============================================
// * PART TWO - RESPONDING TO THE USER'S GUESSES:
// * ============================================

// Check if the background color of the box the user clicked is the same as the color they need to guess
// Respond with an alert, whether they are correct or incorrect

const respondToGuess = event => {
    // Did the user guess correctly?
    // "Is the color the user needs to guess EQUAL to the background color of the box they clicked?"
    // event.target = the <div> the user clicked to trigger the event listener!
    if (colorToGuess === event.style.backgroundColor) {
        alert("Correct!");        
    } else {
        alert("Try again!");
    }
}

// ====================================================================

// * =====================================
// * PART THREE - SETTING EVENT LISTENERS:
// * =====================================

// Set event listeners to listen for clicks on the squares
// When a square is clicked, the "respondToGuess" function will execute
squares.forEach(square => {
    square.addEventListener("click", respondToGuess);
})