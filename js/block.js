"use strict";

// BLOCK //
function Block(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillStyle = '#da7b29';
}

Block.prototype.Draw = function(game) {
    game.ctx.beginPath();
    game.ctx.rect(this.x, this.y, this.width, this.height);
    game.ctx.fillStyle = '#da7b29';
    game.ctx.fill();
    game.ctx.closePath();
}

Block.prototype.Collide = function(ball, game) {
    if (ball.y < this.y+this.height+ball.radius && ball.x+ball.radius > this.x && ball.x-ball.radius < this.x+this.width ) {
        game.ctx.clearRect(this.x, this.y, this.width, this.height);
        return true;
    }
}