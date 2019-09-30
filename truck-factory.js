'use strict';
let carFactory = require('./factory.js');

function TruckFactory() {}
TruckFactory.prototype = new carFactory();
TruckFactory.prototype.vehicleClass = Truck;
let truckFactory = new TruckFactory();

module.exports = truckFactory;

