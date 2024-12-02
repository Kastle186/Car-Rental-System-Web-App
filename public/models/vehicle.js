// File: vehicle.js

class Vehicle {
    constructor(make, model, year, mileage, gas) {
        if (new.target === Vehicle) {
            throw new TypeError('Vehicle is an abstract class, so cannot instantiate.');
        }

        this.make = make;
        this.model = model;
        this.mileage = mileage;
        this.gas = gas;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, mileage, gas) {
        super(make, model, year, mileage, gas);
    }
}
