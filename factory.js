let Car = require('./car-class.js');
let Truck = require('./truck-class.js');

//Factory method skeleton
class vehicleFactory {
    constructor() { }
    //creation of the different instances of vehicle objects
    createVehicle(options) {
        if (options.carType === 'car') {
            this.vehicleClass = Car;
        }
        if (options.carType === 'truck') {
            this.vehicleClass = Truck;
        }
        return new this.vehicleClass(options);
    }
}

//Default class
vehicleFactory.prototype.vehicleClass = Car;
//Create an instance of vehicleFactory
let carFactory = new vehicleFactory();



module.exports = carFactory;
// module.exports = vehicleFactory;
