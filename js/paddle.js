"use strict";

// PADDLE //
function Paddle(x, y, height, width, maxWidth, speed) {
    this.height     = height;
    this.width      = width;
    this.x          = x;
    this.y          = y;
    this.fillStyle  = '#0095DD';
    this.speed      = speed;
    this.maxWidth   = maxWidth;
}

Paddle.prototype.Move = function(direction) {
    if (direction === "right") {
        if( this.x < this.maxWidth-this.width) {
            this.x += this.speed;
        }
    } else if (direction === "left") {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    }
}