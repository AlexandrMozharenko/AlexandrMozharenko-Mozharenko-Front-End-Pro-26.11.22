// Task 1

const taskOne = document.getElementById('task-one')

const onHoverAdd = () => {
    const divInf = document.createElement ('div');
    divInf.innerHTML = '<b>Lorem Ipsum</b> — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным. Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, а совсем недавно - с программным обеспечением для настольных издательских систем, таким как Aldus PageMaker, включая версии Lorem Ipsum.'
    divInf.className = 'lorem-inform';

    taskOne.appendChild(divInf)
}

const outHoverDel = () => {
    const divInfCont = document.getElementsByClassName('lorem-inform');
    for (let i = 0; i <= divInfCont.length; i++) {
        divInfCont[i].remove()
    }
}

const loremIpsAdd = document.getElementById('text-hover');
loremIpsAdd.onmouseover = onHoverAdd;

const loremIpsDel = document.getElementById('text-hover')
loremIpsDel.onmouseleave = outHoverDel;

// Task 2
const onClickAddLink = () => {
    const recieveLink = prompt('Введіть ваше посилання');  

    let clearLink;
    if (recieveLink.search("http"|| "https") === -1) {
        clearLink = ("https://" + recieveLink);    
    } else {
        clearLink = recieveLink
    }

    const onClickJump = (clearLink) => {
        let link = document.getElementById('link');
        link.setAttribute('href', clearLink);
    }
    
    const jumpToSiteBtn = document.getElementById ('jump-to-site');
    jumpToSiteBtn.onclick = onClickJump(clearLink);
}

const addLinkBut = document.getElementById ('add-link');
addLinkBut.onclick = onClickAddLink;

// Task 3
const carPhotos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
]
const showImage = () => {
    let ranValue = Math.floor(Math.random()* carPhotos.length);
    console.log(ranValue);
    let img = carPhotos[ranValue]
    console.log(img)
    const containerImage = document.getElementById('image-shover').src = `./Task3 Photos/${img}`;
}

const genCar = document.getElementById('generator');
genCar.onclick = showImage;


