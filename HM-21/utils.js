const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);
        elem.innerHTML = '';
    }
}
const findProducts = (data, categoryId, productId = null) => {
    const products = data.find(({id}) => id === categoryId).products;

    if (productId) {
        return products.find(({id}) => id === productId);
    }

    return products;
};

const createElements = (tagName, attributes, events, textContent, parentElement) => {
    const newElem = document.createElement(tagName);

    if(attributes) {
        for (let key in attributes) {
            if (key === 'className') {
                newElem.setAttribute('class', attributes[key]);
            } else {
                newElem.setAttribute(key, attributes[key]);
            }
        }
    }

    if(events) {
        for (let event in events) {
            newElem.addEventListener(event, events[event]);
        }
    }
    newElem.textContent = textContent || '';
    parentElement.appendChild(newElem);
    return newElem;
}
const cycle = (childElems) => {
    for (const childElem of childElems) {
        childElem.remove();
    }
}



