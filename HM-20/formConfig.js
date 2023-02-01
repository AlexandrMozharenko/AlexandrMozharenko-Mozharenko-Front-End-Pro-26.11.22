'use strict'

const FORM_CONFIG = [
    {
        tagName: 'label',
        attributes: {id: 'usernameLabel', for: 'username'}, content: 'Введіть ваше ім\'я, прізвище та ім\'я по батькові',
        inputs: [
            {attributes: {placeholder: 'ПІБ',id:'username', name:'userData', required: 'required'}},
        ],
    },
    {
        tagName: 'select',
        attributes: {name: 'cities', class: 'user-cities'},
        options: [
            {attributes: {value:'Вінниця'}, content: 'Вінниця'},
            {attributes: {value:'Дніпро'}, content: 'Дніпро'},
            {attributes: {value:'Запоріжжя'}, content: 'Запоріжжя'},
            {attributes: {value:'Київ'}, content: 'Київ'},
            {attributes: {value:'Кропивницький'}, content: 'Кропивницький'},
            {attributes: {value:'Львів'}, content: 'Львів'},
            {attributes: {value:'Маріуполь'}, content: 'Маріуполь'},
            {attributes: {value:'Миколаїв'}, content: 'Миколаїв'},
            {attributes: {value:'Одеса'}, content: 'Одеса'},
            {attributes: {value:'Рівне'}, content: 'Рівне'},
            {attributes: {value:'Суми'}, content: 'Суми'},
            {attributes: {value:'Черкаси'}, content: 'Черкаси'}
        ],
    },

    {
        tagName: 'label',
        attributes: {id: 'usermailLabel', for: 'mail'}, content: 'Введіть № відділення Нової пошти вашого міста',
        inputs: [
            {attributes: {placeholder: '№ відділення', id:'mail', required: 'required', name: 'userMail'}},
        ],
    },
    {
        tagName: 'p',
        attributes: {class: 'type-of-payment'}, content: 'Оберіть спосіб оплати',
    },
    {
        tagName: 'label',
        attributes: {id: 'paymentLabel1', for: 'payment1'}, content: 'Післяплати',
        inputs: [
            {attributes: {type:'radio', id:'payment1', value: 'Післяплати', name:'pay', required: 'required'}},
        ],
    },
    {
        tagName: 'label',
        attributes: {id: 'paymentLabel2', for: 'payment2'}, content: 'Банківська карта',
        inputs: [
            {attributes: {type:'radio', id:'payment2', value: 'Банківська карта', name:'pay', required: 'required'}},
        ],
    },
    {
        tagName: 'label',
        attributes: {id: 'quantLabel', for: 'quant'}, content: 'Кількість продукції',
        inputs: [
            {attributes: {type:'number', id:'quant', value: '1',  required: 'required'}},
        ],
    },
    {
        tagName: 'textarea',
        attributes: {id: 'comment', placeholder: 'Залиште будьласка коментар до замовлення', rows: '5', cols: '50'},
    },
    {
        tagName: 'input',
        attributes: {id: 'submitButton', type:'submit', className: 'submit'},
        events:{click: e => {
                e.preventDefault()
                const form = document.querySelector('form');
                if (form.checkValidity()) {
                    outputInformation();
                    const delForm = document.querySelector('.userForm');
                    delForm.remove()
                }
            }}
    },
];

