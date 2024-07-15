// Generate a random number between 1 and 100
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let numberOfAttempts = 0;

function guess() {
    // Get the user's guess from the input field
    let userGuess = document.getElementById("guessInput").value;
    numberOfAttempts++;
    
    // Provide feedback on the user's guess
    let message = "";
    if (userGuess < numberToGuess) {
        message = "Your guess is too low. Try again.";
    } else if (userGuess > numberToGuess) {
        message = "Your guess is too high. Try again.";
    } else {
        message = "Congratulations! You guessed the number.";
        message += "<br>It took you " + numberOfAttempts + " attempts.";
    }
    
    // Update the message and attempts count in the DOM
    document.getElementById("message").innerHTML = message;
    document.getElementById("attempts").innerHTML = "Number of attempts: " + numberOfAttempts;
}
