const btnGoods = document.querySelector('.btn-goods');
btnGoods.addEventListener('click', ()=> {
    const products = JSON.parse(localStorage.getItem('product')) || []
    displayProducts(products);
})

const displayProducts = (products) => {
    const goodsElem = document.querySelector('.array-products');
    clearElements(['array-products'])

    products.forEach(usrProduct => {
        const divElem = document.createElement('div');
        divElem.classList.add('cont-for-products');
        goodsElem.appendChild(divElem);

        const newProd = document.createElement('p');
        newProd.classList.add('usr-prod');
        newProd.innerText = usrProduct.name;
        divElem.appendChild(newProd);

        const delProductBtn = document.createElement('button');
        delProductBtn.classList.add('del-product-btn');
        delProductBtn.textContent = '-';
        divElem.appendChild(delProductBtn);

        delProductBtn.onclick = () => {
            divElem.remove();
            const selProducts = JSON.parse(localStorage.getItem('product')) || [];
            localStorage.setItem('product', JSON.stringify(selProducts.filter(({id}) => id !== usrProduct.id)));
        };

        newProd.onclick = () => {
            clearElements(['forForm']);
            displayProductInfo(usrProduct);
        }

    });
}
    const displayProductInfo = (usrProduct) => {
        const forForm = document.querySelector('.forForm');
        const contForElem = document.createElement('div');
        contForElem.className = 'cont-for-elem'
        forForm.appendChild(contForElem)
        for (const [key, value] of Object.entries((usrProduct))) {
            if (key !== 'id' && key  !== 'name') {
                createElements(
                    'p',
                    {className: 'prod-descr-elem'},
                    null,
                    `${key}: ${value}`,
                    contForElem
                );
            }}
    }

