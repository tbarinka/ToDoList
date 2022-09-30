import './style.css';
import { userLists, pushToUserLists } from './createListApp.js';
import { filterTaskstoList } from './createTaskApp.js';
import { mainDOMLoadList, checkSelectedListItems } from './mainDOM.js';
import trash from './images/trash-can-outline.png';


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
        lists.appendChild(loadDOMSidebarLists());
        card.remove();
        checkSelectedListItems();
        
    });
    //cancel button event listener --> removes card from DOM
    card.lastChild.firstChild.addEventListener('click', (event) => {
        let name = card.lastChild.firstChild;
        console.log(name);
        card.remove();
    });
    
    if (document.body.nextSibling !== null) {
        document.body.nextSibling.remove();
    };
    document.body.after(card);
}

function loadDOMSidebarLists() {
    const item = document.createElement("div");
    userLists.forEach((userList) => {
        let div = document.createElement('div');
            div.classList.add('sidebarListItemContainer')
        let p = document.createElement("p");
        p.textContent = userList.name;
        p.addEventListener('click', () => (
            mainDOMLoadList(p.textContent)
        ));
        div.appendChild(p);
        div.appendChild(listIcon());
        item.appendChild(div);
    })

    return item;
}
    function listIcon() {
        const button = document.createElement('button');
            button.classList.add('sidebarListIconButton');
            button.addEventListener('click', () => {
                button.parentNode.remove();
            })
        const trashIcon = new Image();
            trashIcon.src = trash;
            trashIcon.classList.add('sidebarListIcon');
        button.appendChild(trashIcon);
        return button;
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

export { addListCardDOMLoad, loadDOMSidebarLists }