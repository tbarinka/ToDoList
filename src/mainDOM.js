import './style.css';

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

function mainDOMLoad(listTitle, itemTitle) {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    container.appendChild(mainIntegrator(listTitle, itemTitle))
    content.appendChild(container);
}

function mainIntegrator(lTitle, iTitle) {
    const integratedItem = document.createElement('div');
    integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(listTitle(lTitle));
    integratedItem.appendChild(listContentContainer(iTitle));
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
function listContentContainer(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');

    container.appendChild(listItemIntegrator(itemTitle));
    return container;
}

function listItemIntegrator(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('listItemContainer');
    container.appendChild(listItem(itemTitle));
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