"use strict";

var topBlocks = [
    {'x':5, 'y':5},
    {'x':123, 'y':5},
    {'x':241, 'y':5},
    {'x':359, 'y':5}
];

// BLOCK //
function Block() {
    this.height = 30;
    this.width = 113;
}

Block.prototype.Draw = function(game) {
    for (var i = 0; i < topBlocks.length; i++) {
        game.ctx.beginPath();
        game.ctx.rect(topBlocks[i].x, topBlocks[i].y, this.width, this.height);
        game.ctx.fillStyle = '#da7b29';
        game.ctx.fill();
        game.ctx.closePath();
    }
}

Block.prototype.Collide = function(ball, game) {
    for (var i = 0; i < topBlocks.length; i++) {
        if (ball.y < topBlocks[i].y+this.height+ball.radius && ball.x+ball.radius > topBlocks[i].x && ball.x-ball.radius < topBlocks[i].x+this.width ) {
            game.ctx.clearRect(topBlocks[i].x, topBlocks[i].y, this.width, this.height);
            topBlocks.splice(i, 1);
            return true;
        }
    }
}