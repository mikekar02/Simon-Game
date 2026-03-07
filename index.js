let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
}

$("#gamePattern").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
