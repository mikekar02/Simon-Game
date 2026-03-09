var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

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

function animatePress(currentColor) {
    $("#" + currentColor)
        .addClass("pressed")
        .dequeue()
        .delay(100)
        .queue(function () {
            $("#" + currentColor).removeClass("pressed");
        });
}

$(document).ready(() => {
    $(document).keydown(function (event) {
        if (started == false) {
            started = true;
            nextSequence();
        }
    });
});
