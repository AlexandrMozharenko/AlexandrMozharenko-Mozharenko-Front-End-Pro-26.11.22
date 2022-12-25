do {
    qOwner = +prompt("Введіть кількість людей");

    if(qOwner === 'null') {
        break;
    }
} while (qOwner === '' || qOwner === null || isNaN(qOwner) || qOwner === 0);

for (let i = 1; i <= qOwner; i++){
    createPerson();
}

function createPerson() {
    let pName;
    let pAge;
    let cQuant;

    let cOwner = this.repQuestion();

    const datOutput = +prompt("Виберіть спосіб виведення данних:" + "\n" + "1. Консоль;" + "\n" + "2. Alert;" + "\n" + "3. Екран;");

    let cars1 = [];

    do {
        cQuant = +prompt("Введіть кількість автомобілей");

        if(cQuant === 'null') {
            break;
        }
    } while (cQuant === '' || cQuant === null || isNaN(cQuant) || cQuant === 0);


    for (let i = 1; i <= cQuant; i++) {
        let cBrand;
        let cCarcase;
        let cColor;
        let cNumber;
        do {
            cBrand = prompt("Введіть бренд вашого автомобіля " + (i));
            cCarcase = prompt("Введіть тип кузову автомобіля " + (i));
            cColor = prompt("Введіть колір автомобіля " + (i));
            cNumber = prompt("Введіть номер автомобіля " + (i));

            if(cBrand === 'null' && cCarcase === 'null' && cColor === 'null' && cNumber === 'null') {
                break;
            }
        } while (cBrand === '' && cCarcase === '' && cColor === '' && cNumber === '' ||  cBrand === null && cCarcase === null && cColor === null && cNumber === null);

        let value = new Car(cBrand, cCarcase, cColor, cNumber, cOwner);
        cars1.push(value);
    }

    const garage1 = new Garage ([cOwner], [cars1])
    
    do {
        repQuestionPrompt = prompt("Бажаєте ввести інформацію?" + '\n' + 'Так?' + '\n' + 'Ні?');
    }
    while (repQuestionPrompt !== 'Так' && repQuestionPrompt !== 'Ні') 
        switch (repQuestionPrompt) {
          case "Так":
              this.outputData(datOutput, cOwner, cars1, garage1, cQuant);
              break;
          case "Ні":
              alert('....');
              break;
          default:
              break;
      }
}  

// Functions

function Owner (oName, oAge) {
    this.name = oName;
    this.age = oAge;
}

function repQuestion () {
    do {
        pName = prompt("Введіть ваше ім'я та прізвище");

        if(pName === 'null') {
            break;
        }
    } while (pName === '' ||  pName === null)

    do {
        pAge = +prompt("Введіть ваш вік");

        if(pAge === 'null') {
            break;
        }
    } while (pAge === '' || pAge === null || isNaN(pAge) || pAge === 0 || pAge < 18);


    let cOwner = new Owner(pName, pAge)

    return cOwner;

}

function Car (cBrand, cCarcase, cColor, cNumber, cOwner) {
    this.brand = cBrand;
    this.carcase = cCarcase;
    this.color = cColor;
    this.number = cNumber;
    this.owner = cOwner;
}

function Garage (gOwner, gCars) {
    this.gowner = gOwner;
    this.cars = gCars;
}

function outputData(datOutput, cOwner, cars1, garage1, cQuant){
    switch (datOutput) {
        case 1:
            console.log(cOwner, cars1, garage1);
            break;
        case 2:
            alert('Ім`я: ' + cOwner.name + '\n' +
                'Вік: ' + cOwner.age +  '\n' +
                'Кількість машин: ' + cQuant + '\n' +
                'Бренд: ' + cars1[0].brand + '\n' +
                'Тип кузову: ' + cars1[0].carcase + '\n' +
                'Колір: ' + cars1[0].color + '\n' +
                'Номер машини: ' + cars1[0].number);
            break;
        case 3:
            document.write('<p>' +'Ім`я: ' + cOwner.name + '<br/>' +
            'Вік: ' + cOwner.age + '<br/>' +
            'Кількість машин: ' + cQuant + '<br/>' +
            'Бренд: ' + cars1[0].brand + '<br/>' +
            'Тип кузову: ' + cars1[0].carcase + '<br/>' +
            'Колір: ' + cars1[0].color + '<br/>' +
            'Номер машини: ' + cars1[0].number + '</p>');
            break;
        default:
            alert('Введіть один із доступних вам варіантів');
            break;
    }
}
