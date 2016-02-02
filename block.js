"use strict";

// BLOCK //
function Block(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillStyle = '#da7b29';
}

Block.prototype.Collide = function(ball, game) {
    if (ball.y < this.y+this.height+ball.radius && ball.x+ball.radius > this.x && ball.x-ball.radius < this.x+this.width ) {
        game.ctx.clearRect(this.x, this.y, this.width, this.height);
        return true;
    }
}