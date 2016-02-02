'use strict';

function KeyboardManager() {
    var that = this;
    this.direction = null;

    document.addEventListener("keydown", function() {
        that.keyDownHandler(event)
    }, false);
    document.addEventListener("keyup", function() {
        that.keyUpHandler(event)
    }, false);
}

KeyboardManager.prototype.keyDownHandler = function(event) {
    if (event.keyCode == 39) {
        this.direction = 'right';
    } else if (event.keyCode == 37) {
        this.direction = 'left';
    }
}

KeyboardManager.prototype.keyUpHandler = function(event) {
    if (event.keyCode == 39) {
        this.direction = null;
    } else if (event.keyCode == 37) {
        this.direction = null
    }
}