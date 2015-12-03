"use strict";

function randomColor() {
    return '#'+(Math.random().toString(16) + '0000000').slice(2, 8);
}

var g = new Game();

var startButton = document.getElementById("startButton");

startButton.addEventListener('click', function(){
    g.Start();
});