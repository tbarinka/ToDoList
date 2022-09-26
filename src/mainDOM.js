import './style.css';
import { userLists, pushToUserLists, filterTaskstoList } from './createListApp.js';

function mainDOMLoad(listTitle) {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    container.appendChild(mainIntegrator(listTitle))
    content.appendChild(container);
}

function mainIntegrator(lTitle) {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(listTitle(lTitle));
    integratedItem.appendChild(listContentContainer(lTitle));
    return integratedItem;
}

function listTitle(listTitle) {
    const div = document.createElement('div');
        div.classList.add('listTitleContainer');
    const header = document.createElement('h1');
        header.classList.add('listHeader')
        header.textContent = listTitle;
    div.appendChild(header);
    return div;
}

//this function should append all list items to a single container
function listContentContainer(listTitle) {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');

    const array = filterTaskstoList(listTitle)
    array.forEach((element) => {
        console.log(element.title);
        container.appendChild(listItemIntegrator(element.title));
    });
    return container;
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

export { mainDOMLoad }



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