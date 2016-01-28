"use strict";

// GAME //
function Game() {
    var thisGame = this;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.messages = document.getElementById("gameMessages");
    this.end = false;
    this.levelNum = 1;
    this.score = 0;
}

Game.prototype.Start = function() {
    var thisGame = this;
    this.level = new Level(this.levelNum, thisGame);
    this.ball = new Ball(this.level.Ballx, this.level.Bally, this.level.Balldx, this.level.Balldy, this.level.Ballradius, this.level.Ballcolor);
    this.paddle = new Paddle(this.level.paddlex, this.level.paddleHeight, this.level.paddleWidth);
    this.blocks = [];
    for (var i = 0; i < this.level.blockCoordinates.length; i++) {
        var newBlock = new Block(this.level.blockCoordinates[i].x, this.level.blockCoordinates[i].y, this.level.blockWidth, this.level.blockHeight);
        this.blocks.push(newBlock);
    }
    document.addEventListener("keydown", function(){thisGame.paddle.keyDownHandler()}, false);
    document.addEventListener("keyup", function(){thisGame.paddle.keyUpHandler()}, false);

    this.messages.innerText = '';
    startButton.className = 'hidden';
    if (this.levelNum === 1) {
        this.score = 0;
    }
    window.gamePlay = setInterval(function() {thisGame.Render()}, 10);
    this.end = false;
    this.hideScore();
}

Game.prototype.End = function(result) {
    if (this.end === false) {
        if (result === 'win') {
            this.messages.className = 'good';
            this.messages.innerText = 'GREAT JOB!';
            this.levelNum++;
            startButton.innerText = "Play Level " + this.levelNum;
            startButton.className = '';
            this.ball.Kill(this);
        } else if (result === 'lose') {
            this.messages.className = 'bad';
            this.messages.innerText = 'GAME OVER!';
            this.levelNum = 1;
            startButton.innerText = "Start Over";
            startButton.className = '';
        }
        clearInterval(window.gamePlay);
        this.end = true;
        this.showScore();
    }
}

Game.prototype.showScore = function() {
    var thisGame = this;
    gameScore.innerText = 'Score: ' + this.score;
    gameScore.classList.add('visible');
    if (this.end === false) {
        setTimeout(function(){ 
            gameScore.classList.add('fadeout');
            setTimeout(function(){ thisGame.hideScore() }, 800);
        }, 100);  
    }
}

Game.prototype.hideScore = function() {
    gameScore.innerText = 'Score: ' + this.score;
    gameScore.classList.remove('visible', 'fadeout');
}

Game.prototype.Render = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.Draw(this);
    this.paddle.Draw(this);
    for (var i = 0; i < this.blocks.length; i++) {
        this.blocks[i].Draw(this);
    }
    
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
    for (var i = 0; i < this.blocks.length; i++) {
        if (this.blocks[i].Collide(this.ball, this) === true) {
            this.blocks.splice(i, 1);
            if (this.blocks.length > 0) {
                this.ball.dy = -this.ball.dy;
                this.score = this.score+this.level.scorePointValue;
                this.showScore();
            } else {
                this.End('win');
            }
        }
    }

    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;
}