'use strict'
const formOperations = (form) => {
    for (let value of FORM_CONFIG) {
        const currentElement = createElements(value.tagName, value.attributes, value.events, value.content, form);
        if (value.tagName === 'label' && value.inputs.length > 0) {
            for (let input of value.inputs) {
                createElements('input', input.attributes, input.events, input.content, currentElement);
            }
        }
        if (value.tagName === 'select' && value.options.length > 0) {
            for (let option of value.options) {
                createElements('option', option.attributes, option.events, option.content, currentElement);
            }
        }
        const testFun = ()=> {
            console.log('click')
        }
    }
}
const outputInformation = ()=> {
    const infForForm = document.querySelector('.forForm');
    const userData = document.querySelector('#username').value
    createElements(
        'p',
        {className:'user-data'},
        null,
        'Ваше ПІБ: ' + userData,
        infForForm
    )
    const userCity = document.querySelector('.user-cities').value
    createElements(
        'p',
        {className:'user-city'},
        null,
        'Ваше місто: ' + userCity,
        infForForm
    )
    const userMail = document.querySelector('#mail').value
    createElements(
        'p',
        {className:'user-mail'},
        null,
        'Відділення Нової Пошти: ' + userMail,
        infForForm
    )

    if(document.querySelector('#payment1').checked) {
        const userPayment = document.querySelector('#payment1').value
        createElements(
            'p',
            {className:'user-payment'},
            null,
            'Спосіб оплати: ' + userPayment,
            infForForm
        )
    } else {
        const userPayment = document.querySelector('#payment2').value
        createElements(
            'p',
            {className:'user-payment'},
            null,
            'Спосіб оплати: ' + userPayment,
            infForForm
        )
    }

    const userPtoductQuant = document.querySelector('#quant').value
    createElements(
        'p',
        {className:'user-product-quant'},
        null,
        'Кількість продукції: ' + userPtoductQuant,
        infForForm
    )
}
