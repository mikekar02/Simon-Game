let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    $("#" + randomChosenColor)
        .fadeOut(100)
        .fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    gamePattern.push(randomChosenColor);
}

nextSequence();
