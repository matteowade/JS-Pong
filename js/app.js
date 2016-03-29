"use strict";

function randomColor() {
    return '#'+(Math.random().toString(16) + '0000000').slice(2, 8);
}

var g = new Game();
g.SizeCanvas();
var startButton = document.getElementById("startButton");
var gameScore = document.getElementById("gameScore");

startButton.addEventListener('click', function(){
    g.Start();
});