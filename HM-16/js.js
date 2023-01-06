 "use strict"
// Messages 
const qOwnerMessage = "Введіть кількість людей";
const cQuantCarsMessage = "Введіть кількість автомобілей";

// Car's messages
const brandMessage = "Введіть бренд автомобіля ";
const carcaseMessage = "Введіть тип кузову автомобіля ";
const colorMessage = "Введіть колір автомобіля ";
const numberMessage = "Введіть номер автомобіля ";

// Logic
// Person 1
let person1 = repQuestion();
let car1 = createCar(brandMessage, carcaseMessage, colorMessage, numberMessage, person1, 1);
let car2 = createCar(brandMessage, carcaseMessage, colorMessage, numberMessage, person1, 2);
const garage1 = new Garage ([person1], [car1, car2]);
console.log(person1)
console.log(car1)

// Person 2
let person2 = repQuestion();
let car3 = createCar(brandMessage, carcaseMessage, colorMessage, numberMessage, person2, 1);
const garage2 = new Garage ([person2], [car3]);

let repQuestionPrompt;
do {
    repQuestionPrompt = prompt("Бажаєте ввести інформацію?" + '\n' + 'Так?' + '\n' + 'Ні?');
}
while (repQuestionPrompt !== 'Так' && repQuestionPrompt !== 'Ні') 
    switch (repQuestionPrompt) {
      case "Так":
        person1.showInfo();
        car1.showInfo();
        car2.showInfo();
        garage1.showInfo();
        person2.showInfo();
        car3.showInfo();
        garage2.showInfo();
          break;
      case "Ні":
          alert('....');
          break;
      default:
          break;
  }

function repQuestion () {
    let pName;
    do {
        pName = prompt("Введіть ваше ім'я та прізвище");
    } while (pName === '' ||  pName === null)

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

function createCar(brandMessage, carcaseMessage, colorMessage, numberMessage, owner, carIndex){
    let cBrand = carsQuestion(brandMessage, carIndex);
    let cCarcase = carsQuestion(carcaseMessage, carIndex);
    let cColor = carsQuestion(colorMessage, carIndex);
    let cNumber = carsQuestion(numberMessage, carIndex);

    let newCar = new Car(cBrand, cCarcase, cColor, cNumber, owner);

    return newCar;
}

function carsQuestion(message, carIndex){
    let result;
    do {
        result = prompt(message + carIndex);
    } while (result === '' || result === null);

    return result
}