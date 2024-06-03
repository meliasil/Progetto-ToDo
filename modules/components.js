{/* <section class="list">
        <div class="list__card">
            <img class="list__icon" src="Img/icons8-elemento-fuoco-30.png" alt="pippo">
            <div class="container-todo">
                <h2 class="list__title-item"></h2>
                <p class="list__comment"></p>
            </div>
            <button class="list__button">
                <img src="Img/icons8-meno-24.png" alt="">
            </button>
        </div>
    </section> */}

/* const bannerGen = () => {
    const banner = document.createElement('div');    
    const titleBannerPriority = document.createElement('h2');
    const bannerSelect = document.createElement('select');
    const optionHigh = document.createElement('option');
    const optionMedium = document.createElement('option');
    const optionLow = document.createElement('option');
    const textArea = document.createElement('textarea');

    banner.className = 'banner';
    titleBannerPriority.className = 'bannertitle-item';
    bannerSelect.name = "Seleziona priorità";
    bannerSelect.id = "select-priority";
    textArea.name = "Inserisci un commento";
    textArea.id = "bannertextarea";

    bannerSelect.append(optionHigh, optionMedium, optionLow);
    banner.append(titleBannerPriority, bannerSelect, textArea);
    return banner;
} */

const cardElGen = (obj) => {
    const containerListCard = document.createElement('div');
    const iconEl = document.createElement('img');
    const containerToDoEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const commentEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    const minusEl = document.createElement('img');

    const arrowBtn = document.createElement('button');
    //const arrowUp = document.createElement('button');
    const imgArrowBtn = document.createElement('img');
    //const imgArrowUp = document.createElement('img');
    
    arrowBtn.className = "list__arrow";
    arrowBtn.classList.add("arrow-down", "btn-component");

    commentEl.id = `comment-${obj.id}`;
    arrowBtn.id = `arrow-${obj.id}`;
    
    //arrowUp.className = "list__arrow";
    //arrowUp.classList.add("arrow-up", "btn-component");
    /* arrowUp.classList = "btn-component"; */

    imgArrowBtn.src = "./Img/icons8-freccia-espandi-50.png";
    imgArrowBtn.alt = "Espandi";
    //imgArrowUp.src = "./Img/icons8-freccia-comprimi-50.png";
    //imgArrowUp.alt = "Comprimi";
    
    arrowBtn.append(imgArrowBtn);
    //arrowUp.append(imgArrowUp);

    //containerToDoEl.append(arrowBtn);

    containerListCard.className = "list__card";
    iconEl.className = "list__icon";
    containerToDoEl.className = "list__container-todo";
    titleEl.className = "list__title-item";
    commentEl.className = "list__comment";
    buttonEl.className = "list__button";

    iconEl.src = obj.img;
    iconEl.alt = "pippo";

    titleEl.textContent = obj.title;
    
    minusEl.src = obj.button.imgbutton;
    minusEl.alt = "pippo";

    containerToDoEl.append(titleEl , commentEl, arrowBtn);
    buttonEl.append(minusEl);
    containerListCard.append(iconEl, containerToDoEl, buttonEl);
    return containerListCard;
}

const cardListGen = () => {
	const containerSectionList = document.createElement('section');

    containerSectionList.className = 'list';

    return containerSectionList
}

export {
	cardElGen,
	cardListGen,
    //bannerGen
}