"use strict"
function Car (cBrand, cCarcase, cColor, cNumber, cOwner) {
    this.brand = cBrand;
    this.carcase = cCarcase;
    this.color = cColor;
    this.number = cNumber;
    this.owner = cOwner;

    this.showCar = function() {
         document.write('<p>' + 'Бренд автомобіля: ' + this.brand + '<br/>' +
            'Кузов автомобіля: ' + this.carcase + '<br/>' +
            'Колір автомобіля: ' + this.color + '<br/>' +
            'Номер автомобіля: ' + this.number + '<br/>' +
            'Власник автомобіля: ' + this.owner.name + '</p>');
    };
}
