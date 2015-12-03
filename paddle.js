"use strict";

// PADDLE //
function Paddle(x, height, width) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.rightPressed = false;
    this.leftPressed = false;
}

Paddle.prototype.Draw = function(game) {
    game.ctx.beginPath();
    game.ctx.rect(this.x, game.canvas.height-this.height, this.width, this.height);
    game.ctx.fillStyle = "#0095DD";
    game.ctx.fill();
    game.ctx.closePath();

    if (this.rightPressed && this.x < game.canvas.width-this.width) {
        this.x += 7;
    } else if (this.leftPressed && this.x > 0) {
        this.x -= 7;
    }
}

Paddle.prototype.keyDownHandler = function() {
    if (event.keyCode == 39) {
        this.rightPressed = true;
    } else if (event.keyCode == 37) {
        this.leftPressed = true;
    }
}

Paddle.prototype.keyUpHandler = function() {
    if (event.keyCode == 39) {
        this.rightPressed = false;
    } else if (event.keyCode == 37) {
        this.leftPressed = false;
    }
}