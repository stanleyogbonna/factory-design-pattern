'use strict';
let carFactory = require('./factory.js');
let truckFactory = require('./factory.js');

let car = carFactory.createVehicle({
    carType: 'car',
    color: 'Red',
    wheelSize: 'small'
});


let myBigTruck = truckFactory.createVehicle( { 
    // carType: 'truck',
    state: "omg..so bad.", 
    color: "pink", 
    wheelSize: "so big" 
});
console.log(car);
console.log(myBigTruck);
