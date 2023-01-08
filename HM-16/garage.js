"use strict"
function Garage (gOwner, gCars) {
    this.gowner = gOwner;
    this.cars = gCars;

    this.showGarage = function() {
        gOwner.showOwner();
        for (const car of gCars){
            car.showCar();
        }
    };
}
