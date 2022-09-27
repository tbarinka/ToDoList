import './style.css';
import { userLists, pushToUserLists } from './createListApp.js';
import { filterTaskstoList, sortTasksToHome } from './createTaskApp.js';

//these functions govern how tasks are sorted/filtered into the main container

//List Loader

function mainDOMLoadList(listTitle) {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorListLoader(listTitle))
    content.appendChild(container);
}

function mainIntegratorListLoader(title) {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader(title));
    integratedItem.appendChild(loadList(title));
    return integratedItem;
}

function loadList(listTitle) {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');

    const array = filterTaskstoList(listTitle);
    array.forEach((element) => {
        console.log(element.title);
        container.appendChild(listItemIntegrator(element.title));
    });
    return container;
}

//Home Loader

function mainDOMLoadHome() {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorHomeLoader())
    content.appendChild(container);
}

function mainIntegratorHomeLoader() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader("Home"));
    integratedItem.appendChild(loadHomeTasks());
    return integratedItem;
}

function loadHomeTasks() {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');
    const array = sortTasksToHome();

    array.forEach((element) => {
        container.appendChild(listItemIntegrator(element.title));
    });
    return container;
}

// This function is repeated in each of the loader suites above

function titleLoader(title) {
    const div = document.createElement('div');
        div.classList.add('titleContainer');
    const header = document.createElement('h1');
        header.classList.add('titleHeader')
        header.textContent = title;
    div.appendChild(header);
    return div;
}

//this function integrates icon & title under a single list unit
function listItemIntegrator(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('listItemContainer');
    container.appendChild(listItem(itemTitle));
    //when I upload the icons, append that to container
    return container;
}
function listItem(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('leftListItem');
    const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add('listCheckbox');
    const label = document.createElement("label");
        label.setAttribute("for", "checkbox");
        label.textContent = itemTitle;
    
    container.appendChild(checkBox);
    container.appendChild(label);
    return container;
}
function listIcons() {
    //edit
    //move project
    //trash
}
//List Item
    //Item Container
    //Item Title
    //Item Control Icon Container
        //Item Control Icons

export { mainDOMLoadList, mainDOMLoadHome }



//Main Container
//List Title
    //Title Container
    //Title Item
//List Container
//List Item
    //Item Container
    //Item Title
    //Item Control Icon Container
        //Item Control Icons