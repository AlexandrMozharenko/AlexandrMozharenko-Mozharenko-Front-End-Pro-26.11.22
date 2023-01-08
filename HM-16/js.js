"use strict"
let cBrand;
let cCarcase;
let cColor;
let cNumber;
// Person 1
let person1 = createOwner();
let car1 = createCar(cBrand, cCarcase, cColor, cNumber, person1, 1);
let car2 = createCar(cBrand, cCarcase, cColor, cNumber, person1, 2);
const garage1 = new Garage (person1, [car1, car2]);

// Person 2
let person2 = createOwner();
let car3 = createCar(cBrand, cCarcase, cColor, cNumber, person2, 1);
const garage2 = new Garage (person2, [car3]);

let createOwnerPrompt;
do {
    createOwnerPrompt = prompt("Бажаєте ввести інформацію?" + '\n' + 'Так?' + '\n' + 'Ні?');
}
while (createOwnerPrompt !== 'Так' && createOwnerPrompt !== 'Ні') 
    switch (createOwnerPrompt) {
      case "Так":
        garage1.showGarage();
        garage2.showGarage();
          break;
      case "Ні":
          alert('....');
          break;
      default:
          break;
  }
function createOwner () {
    let pName;
    do {
        pName = prompt("Введіть ваше ім'я та прізвище");
    } while (pName === '' || pName === null)

    let pAge;
    do {
        pAge = +prompt("Введіть ваш вік");
    } while (pAge === '' || pAge === null || isNaN(pAge) || pAge === 0 || pAge < 18);

    let cOwner = new Owner(pName, pAge)
    return cOwner;
}

function promptMessage(message){
    let number;
    do {
        number = +prompt(message);
    } while (number === '' || number === null || isNaN(number) || number === 0);

    return number;
}

function createCar(cBrand, cCarcase, cColor, cNumber, cOwner, carIndex){
    cBrand = carsQuestion("Введіть бренд автомобіля ", carIndex);
    cCarcase = carsQuestion("Введіть тип кузову автомобіля ", carIndex);
    cColor = carsQuestion("Введіть колір автомобіля ", carIndex);
    cNumber = carsQuestion("Введіть номер автомобіля ", carIndex);

    let newCar = new Car(cBrand, cCarcase, cColor, cNumber, cOwner);
    return newCar;
}

function carsQuestion(message, carIndex){
    let result;
    do {
        result = prompt(message + carIndex);
    } while (result === '' || result === null);

    return result
}