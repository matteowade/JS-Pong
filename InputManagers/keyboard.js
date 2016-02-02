'use strict';

function KeyboardManager()
{
    var that = this;
    this.direction = null;

    document.addEventListener("keydown", function() {
        that.keyDownHandler(event)
    }, false);
    document.addEventListener("keyup", function() {
        that.keyUpHandler(event)
    }, false);

    this.keyDownHandler = function(event) {
        if (event.keyCode == 39) {
            that.direction = 'right';
        } else if (event.keyCode == 37) {
            that.direction = 'left';
        }
    };

    this.keyUpHandler = function(event) {
        if (event.keyCode == 39) {
            that.direction = null;
        } else if (event.keyCode == 37) {
            that.direction = null
        }
    };
}

