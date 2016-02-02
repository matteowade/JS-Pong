"use strict";

// PADDLE //
function Paddle(x, y, height, width) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.fillStyle = '#0095DD';
    this.speed = 5;
}

Paddle.prototype.Move = function(direction, canvasWidth) {
    if (direction === "right") {
        if( this.x < canvasWidth-this.width) {
            this.x += this.speed;
        }
    } else if (direction === "left") {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    }
}