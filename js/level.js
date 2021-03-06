"use strict";

// LEVEL //
function Level(levelNumber, canvasWidth, canvasHeight) {
	this.scorePointValue = 50*levelNumber;
	this.Ballx = canvasWidth/2;
    this.Bally = canvasHeight/3;
    this.Balldx = Math.random();
    this.Balldy = 3;
    this.Ballradius = 10;
    this.Ballcolor = "#0095DD";

    this.blocksNum = 4;
    this.blockWidth = 113;
    this.blockHeight = 30;
    this.blockCoordinates = [
	    {'x':5, 'y':5},
	    {'x':123, 'y':5},
	    {'x':241, 'y':5},
	    {'x':359, 'y':5}
	];

	this.paddleWidth = 75;
	this.paddleHeight = 10;
	this.paddlex = canvasWidth/2;
	this.paddleSpeed = 5;
}