"use strict";

// GAME //
function Game() {
    var thisGame = this;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.messages = document.getElementById("gameMessages");
    this.end = false;
}

Game.prototype.Start = function() {
    var thisGame = this;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height-30, -2, -2, 10, "#0095DD");
    this.paddle = new Paddle(this.canvas.width/2, 10, 75);
    this.blocks = new Block();
    document.addEventListener("keydown", function(){thisGame.paddle.keyDownHandler()}, false);
    document.addEventListener("keyup", function(){thisGame.paddle.keyUpHandler()}, false);

    this.messages.innerText = '';
    startButton.className = 'hidden';
    window.gamePlay = setInterval(function() {thisGame.Render()}, 10);
    this.end = false;
}

Game.prototype.End = function(result) {
    if (this.end === false) {
        if (result === 'win') {
            this.messages.className = 'good';
            this.messages.innerText = 'YOU WIN!';
            clearInterval(window.gamePlay);
        } else if (result === 'lose') {
            this.messages.className = 'bad';
            this.messages.innerText = 'GAME OVER!';
            startButton.className = '';
            setTimeout(function(){clearInterval(window.gamePlay)}, 300);
        }
        this.end = true;
    }
}

Game.prototype.Render = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.Draw(this);
    this.paddle.Draw(this);
    this.blocks.Draw(this);
    
    // Canvas left, right bounds collision detection for ball
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
        this.ball.dx = -this.ball.dx;
    }

    // Bounce off top
    if (this.ball.y + this.ball.dy < this.ball.radius) {
        this.ball.dy = -this.ball.dy;
    // Check for paddle collision
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius - this.paddle.height) {
        if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x+this.paddle.width) {
            this.ball.dy = -this.ball.dy;
            this.ball.color = randomColor();
        } else {
            this.End('lose');
        }
    }

    // Check for blocks collision
    if (this.blocks.Collide(this.ball, this) === true) {
        if (topBlocks.length > 0) {
            this.ball.dy = -this.ball.dy;
        } else {
            this.End('win');
        }
    }

    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;
}