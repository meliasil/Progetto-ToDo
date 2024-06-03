import { listToDo } from "./data/todos.js";
import { cardElGen, cardListGen } from "./modules/components.js"


const mainSectionEl = document.querySelector('main');
//

const renderListToDo = function(){
    mainSectionEl.innerHTML = "";
    
    const cardList = cardListGen();
    
    listToDo.forEach((i) => {
        const cardEl = cardElGen(i);
        cardList.append(cardEl);
    })
    return cardList;
}

window.onload = mainSectionEl.append(renderListToDo());

//
const btnPlus = document.querySelector('.insert__button');
const inputInsert = document.querySelector('input');
const modalError = document.querySelector('.modal-error');
const btnError = document.querySelector('.modal-error__btn-OK');

const arrowBtn = document.querySelectorAll('.list__arrow');

const modalBox1 = document.querySelector('.box-modal1');

btnPlus.onclick = function(){
    const titleTxtEl = inputInsert.value;
    //inserire effetto button

    this.style.rotate = '360deg';

    if (listToDo.some(i => i.title === titleTxtEl)) {
        console.log('Hai già inserito questa attività');
        
        modalError.style.display = 'block';

    } else {

        /* modalBox1.style.display = 'flex';

        const modal1Btn = document.getElementById('modal1-btn-ok');

        modal1Btn.onclick */
        const newToDo = {
            id: listToDo.length + 1,
            img: "Img/icons8-elemento-fuoco-30.png",
            title: titleTxtEl,
            description: "Ciao Pippo",
            button:  { imgbutton: "Img/icons8-meno-24.png" }
        }

        listToDo.push(newToDo);//Aggiungere element: icon, comment

        mainSectionEl.append(renderListToDo());

}}


btnError.onclick = () => modalError.style.display = 'none';

arrowBtn.forEach(nodo => {
    nodo.onclick = () => {

        console.log(listToDo);
        const imgUrl = nodo.firstChild.src;

        if (imgUrl.includes('Img/icons8-freccia-espandi-50.png')){
            nodo.firstChild.src = 'Img/icons8-freccia-comprimi-50.png';
            nodo.previousElementSibling.textContent = listToDo[(nodo.id.slice(6))-1].description;
        } else {
            nodo.firstChild.src = 'Img/icons8-freccia-espandi-50.png';
            nodo.previousElementSibling.textContent = '';
        }
}});