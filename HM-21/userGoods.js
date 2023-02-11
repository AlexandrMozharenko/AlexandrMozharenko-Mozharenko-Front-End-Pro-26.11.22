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
            let i = products.findIndex(elem => elem.name === newProd.textContent);
            const detailsTag = document.createElement('div');
            for (let item in products[i]) {
                if (item !== 'id' && item !== 'name') {
                    const elemTag = document.createElement('p');
                    elemTag.textContent = products[i][item];
                    detailsTag.appendChild(elemTag);
                }
            }
            detailsTag.className = 'selected-product-inf';
            divElem.appendChild(detailsTag);
        }
    });

}

