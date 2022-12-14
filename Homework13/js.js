const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

let messageOne = "Write product number:";
let messageTwo = 'Write product count:';

outputProducts(products);

let prodNum = inputMessage(messageOne);
let prodCount = inputMessage(messageTwo);

prodNum = getProductNumber(prodNum, products);
condition(prodNum, prodCount, products);

function outputProducts(products){
    for (let prodId = 0; prodId < products.length;prodId++) {
        console.log(`${prodId + 1} ${products[prodId].name} ${products[prodId].price}`);
    }
}

function inputMessage(message){
    return prompt(message);
}

function getProductNumber(prodNum, products){
    do {
        if (prodNum === null) {
            break;
        }
        prodNum--;
    } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));

    return prodNum;
}

function getProductCount(prodCount){
    do {
        if (prodCount === null) {
            break;
        }
        prodCount = +prodCount;
    } while(prodCount <= 0 || isNaN(prodCount));

    return prodCount;
}

function condition(prodNum, prodCount, products){
    if (typeof prodNum === 'number') {
        const product = products[prodNum];

        console.log(product);

        prodCount = getProductCount(prodCount);

        if (typeof prodCount === 'number') {
            const totalProdPrice = prodCount * product.price;

            console.log(`Total price: $${totalProdPrice}`);

            if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
                console.log(`Congrats, you get a discount ${DISCOUNT}%`);
                console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
            }
        }
    }
}

