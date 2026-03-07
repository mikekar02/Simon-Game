var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    $("#" + randomChosenColor)
        .fadeOut(100)
        .fadeIn(100);

    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();
    gamePattern.push(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

nextSequence();
