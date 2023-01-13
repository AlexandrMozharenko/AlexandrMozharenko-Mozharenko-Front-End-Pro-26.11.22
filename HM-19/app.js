const showCategories = () => {
    const categoriesElem = document.querySelector('.categories');

    DATA.forEach(({name}, id) => {
        const categoryElem = document.createElement('p');

        categoryElem.setAttribute('data-category-id', id);
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {
    const productsElem = document.querySelector('.products');
    const categoryId = target.getAttribute('data-category-id');
    const products = DATA[categoryId].products;

    productsElem.innerHTML = '';

    products.forEach(({name}, id) => {
        const productElem = document.createElement('p');
        productElem.className = 'goods';
        const product = products[id];

        productElem.setAttribute('data-category-id', categoryId);
        productElem.setAttribute('data-product-id', id);
        productElem.textContent = name;
        productElem.onclick = showDetails;

        productsElem.appendChild(productElem);
    });
};

const showDetails = ({target}) => {
    const detailsElem = document.querySelector('.details');
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');
    const details = DATA[categoryId].products[productId];

    detailsElem.innerHTML = '';

    Object.keys(details).forEach((elem) => {
         const detailDiv = document.createElement('p');
         detailDiv.className = 'goods inf';
         detailDiv.textContent = details[elem];
         detailsElem.appendChild(detailDiv);
    });
    const infAboutBuy = () => {
        alert('Товар куплений');
        const childElem = document.getElementsByClassName('goods')

        for (let i = 0; i < childElem.length; i+1) {
            childElem[i].remove()
        }
        
        const btnQuant = document.getElementsByClassName('btnBuy');
        for (let i = 0; i < btnQuant.length; i++) {
            btnQuant[i].remove()
        }
    }   
    const btn = document.createElement('button')
    btn.onclick = infAboutBuy;
    btn.innerText = 'Buy';
    btn.className = 'btnBuy';
    detailsElem.appendChild(btn);
};

showCategories();