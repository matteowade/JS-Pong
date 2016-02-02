'use strict';

function InputManager(managerType) {
    this.currentManager = this.loadManager(managerType);
}

InputManager.prototype.loadManager = function(managerType) {
    switch(managerType) {
        case 'keyboard':
            this.currentManager = new KeyboardManager();
            break;
        case 'mouse':
            this.currentManager = new MouseManager();
            break;
        default:
            this.currentManager = new KeyboardManager();
            break;
    }
}