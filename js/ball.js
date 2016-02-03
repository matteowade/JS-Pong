"use strict";

// BALL //
function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
}

Ball.prototype.Move = function() {
    this.x += this.dx;
    this.y += this.dy;
}

Ball.prototype.ReverseYDirection = function() {
    this.dy = -this.dy;
}

Ball.prototype.CheckCanvasCollision = function(canvasWidth) {
    // side collision
    if (this.x + this.dx > canvasWidth - this.radius || this.x + this.dx < this.radius) {
        this.dx = -this.dx;
    }
    // top collision
    if (this.y + this.dy < this.radius) {
        this.dy = -this.dy;
    }
}

Ball.prototype.CheckPaddleCollision = function(canvasHeight, paddleX, paddleWidth, paddleHeight) {
    if (this.y + this.dy > canvasHeight - this.radius - paddleHeight) {
        if (this.x > paddleX && this.x < paddleX+paddleWidth) {
            this.dy = -this.dy;
            this.color = randomColor();
            return true;
        } else {
            return false;
        }
    }
}

Ball.prototype.CheckBlockCollision = function(block) {
    if (this.y < block.y+block.height+this.radius && this.x+this.radius > block.x && this.x-this.radius < block.x+block.width ) {
        return true;
    }
}