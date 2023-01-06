"use strict"
function Garage (gOwner, gCars) {
    this.gowner = gOwner;
    this.cars = gCars;

    this.showInfo = function() {

        if (gCars.length > 1) {
            document.write('<p>' + 'Власник авто: ' + this.gowner[0].name + '<br/>' + 
            'Авто(1) в гаражі: ' + this.cars[0].brand + '<br/>' + 
            'Номер авто(1): ' + this.cars[0].number + '<br/>' +
            'Авто(2) в гаражі: ' + this.cars[1].brand + '<br/>' + 
            'Номер авто(2): ' + this.cars[1].number + '</p>'); 
        } else {
            document.write('<p>' + 'Власник авто: ' + this.gowner[0].name + '<br/>' + 
            'Авто в гаражі: ' + this.cars[0].brand + '<br/>' + 
            'Номер авто: ' + this.cars[0].number + '<br/>' +
            '</p>'); 
        }
    };
}
