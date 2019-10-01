'use strict';
// A constructor for defining new trucks
class Truck { 
    constructor(options) {
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}
console.log('A truck class');
module.exports = Truck;
