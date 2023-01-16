const savedProducts = {};

const showCategories = categories => {
    clearElements(['categories', 'products', 'details']);

    const categoriesElem = document.querySelector('.categories');

    categories.forEach(({name, id}) => {
        const categoryElem = document.createElement('p');

        categoryElem.setAttribute('data-category-id', id);
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {
    clearElements(['products', 'details']);

    const productsElem = document.querySelector('.products');
    const categoryId = target.getAttribute('data-category-id');
    const products = findProducts(DATA, +categoryId);

    products.forEach(({name, id}) => {
        const productElem = document.createElement('p');
        productElem.className = 'goods';
        productElem.setAttribute('data-category-id', categoryId);
        productElem.setAttribute('data-product-id', id);
        productElem.textContent = name;
        productElem.onclick = showDetails;

        productsElem.appendChild(productElem);
    });
};

const showDetails = ({target}) => {
    clearElements(['details']);

    const detailsElem = document.querySelector('.details');
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');

    const makeOrderButtonElem = document.createElement('button');
    const product = findProducts(DATA, +categoryId, productId);
    const details = product[productId];

    Object.keys(product).forEach((elem) => {
        const detailDiv = document.createElement('p');
        detailDiv.className = 'goods inf';
        detailDiv.textContent = product[elem];
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
    makeOrderButtonElem.onclick = infAboutBuy;
    makeOrderButtonElem.textContent = 'Buy';
    makeOrderButtonElem.className = 'btnBuy';
    detailsElem.appendChild(makeOrderButtonElem);
};
