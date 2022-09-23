import './style.css';
import { UserLists, pushToUserLists, createDOMListItems } from './createListApp.js'


function addListCardDOMLoad(s1, s2) {
    //const content = document.getElementById('content');
    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));

    //event listener: pushes user text into userLists array when click 'create';
    card.lastChild.lastChild.addEventListener('click', (event) => {
        let name = card.firstChild.firstChild.value;
        pushToUserLists(name);
        let lists = content.firstChild.nextSibling.lastChild.lastChild;
        lists.textContent = "";
        lists.appendChild(createDOMListItems());
        card.remove();
    });
    //cancel button event listener --> removes card from DOM
    card.lastChild.firstChild.addEventListener('click', (event) => {
        let name = card.lastChild.firstChild;
        console.log(name);
        card.remove();
    });
    content.appendChild(card);
}

function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
    div.appendChild(inputText);

    return div;
}
function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
}

function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
}

export { addListCardDOMLoad }