import './style.css';
import plus from './images/plus.png';
import { addListCardDOMLoad } from './createListDOM.js'
import { createTaskDOMLoad } from './createTaskDOM.js'
import { mainDOMLoad } from './mainDOM.js'

function loadSidebarDOM() {
    const content = document.getElementById('content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

    content.appendChild(sidebar);
    sidebar.appendChild(createTaskButton());
    sidebar.appendChild(sidebarItemIntegrater("Home"));
    sidebar.appendChild(sidebarItemIntegrater("Today"));
    sidebar.appendChild(sidebarItemIntegrater("This Week"));
    sidebar.appendChild(sidebarItemIntegrater("Lists", "y"));
}

function createTaskButton() {
    const div = document.createElement('div');
        div.classList.add('SidebarAddTaskButton')
    const button = document.createElement('button');
        button.classList.add('createTask');
        button.textContent = "+ Create a Task"
        button.addEventListener('click', () => createTaskDOMLoad());
    
    div.appendChild(button);
    return div;
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

        p.addEventListener('click', () => mainDOMLoad("List Title", "Item Title"));

    div.appendChild(p);
    return div;
}

export { loadSidebarDOM }