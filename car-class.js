'use strict';
class Car {
    constructor(options) {
        // some defaults
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }
}

module.exports = Car;