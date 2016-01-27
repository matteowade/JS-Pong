"use strict";

// LEVEL //
function Level(levelNumber, game) {
	this.scorePointValue = 50*levelNumber;
	this.Ballx = game.canvas.width/2;
    this.Bally = game.canvas.height-30;
    this.Balldx = -2;
    this.Balldy = -2;
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
}