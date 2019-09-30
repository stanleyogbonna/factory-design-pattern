// 'use strict';
class Car {
    constructor(options) {
        // some defaults
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }
}

// A constructor for defining new trucks
class Truck {
    constructor(options) {
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}

//Factory method skeleton
class vehicleFactory {
    constructor() { }
    // Factory to instantiate vehicle objects
    createVehicle(options) {
        if (options.carType === 'car') {
            this.vehicleClass = Car;
            console.log(this);
        }
        if (options.carType === 'truck') {
            this.vehicleClass = Truck;
            console.log(this);
        }
        return new this.vehicleClass(options);
        
        
    }
};
// Default vehicle class
vehicleFactory.prototype.vehicleClass = Car;
//Create instance of vehicleFactory
let carFactory = new vehicleFactory();
let car = carFactory.createVehicle({
    carType: 'car',
    state: 'virgin',
    color: 'deep red'
});


function TruckFactory () {}
TruckFactory.prototype = new vehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( { 
    state: "omg..so bad.", 
    color: "pink", 
    wheelSize: "so big" 
});
console.log(car);
console.log(myBigTruck);


