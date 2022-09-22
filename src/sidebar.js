import './style.css';
import plus from './images/plus.png';
//import { addListCardDOMLoad, userLists } from './addListPopup.js'

function loadSidebarDOM() {
    const content = document.getElementById('content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

    content.appendChild(sidebar);
    sidebar.appendChild(sidebarItemIntegrater("Home"));
    sidebar.appendChild(sidebarItemIntegrater("Today"));
    sidebar.appendChild(sidebarItemIntegrater("This Week"));
    sidebar.appendChild(sidebarItemIntegrater("Lists", "y"));
    content.appendChild(addListCardDOMLoad("Cancel", "Create"));

}


function sidebarItemIntegrater(title, toggleRightComponent) {
    const div = document.createElement('div');
    
    if (toggleRightComponent == "y") {
        const top = document.createElement('div');
            top.classList.add('sidebarIntegratedItem');
        top.appendChild(leftSidebarComponent(title));
        top.appendChild(rightSidebarAddItem());
        div.appendChild(top);
        div.appendChild(listsContent());
            div.classList.add('sidebarIntegratedItem2');
    } else {
        div.appendChild(leftSidebarComponent(title));
            div.classList.add('sidebarIntegratedItem');
        const item = document.createElement('div');
            item.classList.add('SideBarItemRightComponent');
        div.appendChild(item);
    }
    return div;

}

function leftSidebarComponent(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarItemLeftComponent');

    item.appendChild(header(title));
    return item;
};

    function header(title) {
        const sideHeader = document.createElement('h3')
        sideHeader.classList.add('sideBarHeader');
        sideHeader.textContent = title;
        return sideHeader;
    };

function rightSidebarAddItem() {
    const item = document.createElement('div');
        item.classList.add('sideBarItemRightComponent');
    item.appendChild(addButton());
    return item;
}
    function addButton() {
        const button = document.createElement('button');
            button.classList.add('sideBarRightComponentButtonContainer')
        const addBtn = new Image();
            addBtn.src = plus;
            addBtn.classList.add('sideBarRightComponentButton')
            addBtn.addEventListener('click', () => addListCardDOMLoad("Cancel", "Create"));
        button.appendChild(addBtn);
        return button;
        }


function listsContent() {
    const div = document.createElement('div');
    div.classList.add("lists-container");
    div.setAttribute('id', "lists-container")
    const p = document.createElement("p");
    p.textContent = "Here is some text just to get started."
    div.appendChild(p);
    return div;
}


function addListCardDOMLoad(s1, s2) {
    //const content = document.getElementById('content');
    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));

    //event listener: pushes user text into userLists array when click 'create';
    card.lastChild.lastChild.addEventListener('click', (event) => {
        const name = card.firstChild.firstChild.value;
        pushToUserLists(name);
        console.log(content.firstChild.nextSibling.lastChild.lastChild);
    });
    return card;
}
function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('textarea');
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

const userLists = [];

    function createListObject(name) {
        return { name }
    }

    function pushToUserLists(name) {
        userLists.push(createListObject(name));
        console.log(userLists[0].name);
    }

export { loadSidebarDOM }