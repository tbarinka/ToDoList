import './style.css';
import { userLists, pushToUserLists } from './createListApp.js';
import { filterTaskstoList, sortTasksToAll, filterTodayTasks, filterThisWeekTasks } from './createTaskApp.js';
import mdiTrashCanOutline from './images/mdiTrashCanOutline.png';
import mdiPencilOutline from './images/mdiPencilOutline.png';
import mdiInformationOutline from './images/mdiInformationOutline.png';

//Functions that govern how tasks are sorted/filtered into the main container
    //List Loader Suite

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

    //All Tasks Loader Suite

function mainDOMLoadAll() {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorAllLoader())
    content.appendChild(container);
}

function mainIntegratorAllLoader() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader("All Tasks"));
    integratedItem.appendChild(loadAllTasks());
    return integratedItem;
}


function loadAllTasks() {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');
    const array = sortTasksToAll();

    array.forEach((element) => {
        container.appendChild(listItemIntegrator(element.title));
    });
    return container;
}

    //Today Loader Suite

function mainDOMLoadToday() {
    const container = document.createElement('div');
    container.classList.add('mainContainer');

    content.lastChild.remove();
    container.appendChild(mainIntegratorTodayLoader());
    content.appendChild(container);
}

function mainIntegratorTodayLoader() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');

    integratedItem.appendChild(titleLoader("Today"));
    integratedItem.appendChild(loadTodayTasks());
    return integratedItem;
};

function loadTodayTasks() {
        const container = document.createElement('div');
            container.classList.add('listContentContainer');
        const array = filterTodayTasks();
        array.forEach((element) => {
            container.appendChild(listItemIntegrator(element.title));
        });
        return container;
};

    //This Week Suite

function mainDOMLoadThisWeek() {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorThisWeek());
    content.appendChild(container);
}

function mainIntegratorThisWeek() {
    const integratedItem = document.createElement('div');
        integratedItem.classList.add('integratedItem');
    
    integratedItem.appendChild(titleLoader("This Week"));
    integratedItem.appendChild(loadThisWeekTasks());
    return integratedItem;
    };

function loadThisWeekTasks() {
    const container = document.createElement('div');
        container.classList.add('listContentContainer');
    const array = filterThisWeekTasks();
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
    container.appendChild(listIcons());
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
    const div = document.createElement('div');
        div.classList.add('listItemIconContainer')
    div.appendChild(trashCan());
    div.appendChild(pencil());
    div.appendChild(info());
    return div;

}
    function trashCan() {
        const div = document.createElement('button');
        const trash = new Image();
            trash.src = mdiTrashCanOutline;
            trash.classList.add('listItemIconButton');
        div.appendChild(trash);
        return div;
    }
    function pencil() {
        const div = document.createElement('button');
        const pencil = new Image();
            pencil.src = mdiPencilOutline;
            pencil.classList.add('listItemIconButton');
        div.appendChild(pencil);
        return div;
    }
    function info() {
        const div = document.createElement('button');
        const info = new Image();
            info.src = mdiInformationOutline;
            info.classList.add('listItemIconButton');
        div.appendChild(info);
        return div
    }


//List Item
    //Item Container
    //Item Title
    //Item Control Icon Container
        //Item Control Icons

export { mainDOMLoadList, mainDOMLoadAll, mainDOMLoadToday, mainDOMLoadThisWeek }



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