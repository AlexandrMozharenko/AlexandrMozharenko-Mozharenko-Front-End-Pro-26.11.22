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
    const product = findProducts(DATA, +categoryId, productId);

    this.showProductDetails(product, detailsElem);
    const makeOrderButtonElem = document.createElement('button');
    makeOrderButtonElem.onclick = infAboutBuy(product);
    makeOrderButtonElem.textContent = 'Buy';
    makeOrderButtonElem.className = 'btnBuy';
    detailsElem.appendChild(makeOrderButtonElem);
};
function showProductDetails(product, detailsElem) {
    Object.keys(product).forEach((elem) => {
        const detailDiv = document.createElement('p');
        detailDiv.className = 'inf';
        detailDiv.textContent = product[elem];
        detailsElem.appendChild(detailDiv);
    });
}
const infAboutBuy = (product) => ()=> {
    const childElems = document.querySelectorAll('.goods');
    const infChildren = document.querySelectorAll('.inf');

    cycle(childElems);
    cycle(infChildren);

    const btnQuant = document.querySelector('.btnBuy');
    btnQuant.remove();

    const container= document.querySelector('.container');
    const containerForm = document.createElement('div');
    containerForm.className = 'cont-for-form';
    container.appendChild(containerForm);
    clearElements(['cont-for-form']);

    const form = createElements('form', {className:'userForm'}, null, '', containerForm);
    formOperations(form);
    const products = JSON.parse(localStorage.getItem('product')) || []
    products.push(product)
    localStorage.setItem('product', JSON.stringify(products))
}