import './style.css';
import { userLists, pushToUserLists } from './createListApp.js';
import { filterTaskstoList, sortTasksToAll, filterTodayTasks, filterThisWeekTasks } from './createTaskApp.js';
import mdiTrashCanOutline from './images/mdiTrashCanOutline.png';
import mdiPencilOutline from './images/mdiPencilOutline.png';
import mdiInformationOutline from './images/mdiInformationOutline.png';
import { loadDOMSidebarLists } from './createListDOM.js';
import { userTasks } from './createTaskApp.js';

//Functions that govern how tasks are sorted/filtered into the main container
    //List Loader Suite
const content = document.getElementById("content");

function mainDOMLoadList(listTitle) {
    const container = document.createElement('div');
        container.classList.add('mainContainer');
        container.setAttribute('id', 'mainContainer');
    
    content.lastChild.remove();
    container.appendChild(mainIntegratorListLoader(listTitle))
    content.appendChild(container);
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
    unselectTop3SidebarItems();
}

    function checkSelectedListItems() {
        const nodeList = document.querySelectorAll('.sidebarListItemContainer');
        const secondNodeList = document.querySelectorAll('sidebarListItemContainerSelected');
        
        for (let i = 0; i < secondNodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.getElementById('mainContainer');
            item.classList.remove('sidebarListItemContainerSelected');
            item.classList.add('sidebarListItemContainer');
        }

        for (let i = 0; i < nodeList.length; i++) {
            let item = nodeList[i];
            let mainContainer = document.getElementById('mainContainer');
            if (item.firstChild.textContent == mainContainer.firstChild.firstChild.textContent) {
                item.classList.remove('sidebarListItemContainer');
                item.classList.add('sidebarListItemContainerSelected');
            } 
            else {
                item.classList.remove('sidebarListItemContainerSelected');
                item.classList.add('sidebarListItemContainer');
            }
        } 

    }
    function unselectTop3SidebarItems() {
        const all = content.firstChild.nextSibling.firstChild.nextSibling;
        const today = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
        const thisWeek = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
        if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
        if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
        if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}

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
        console.log(element.date);
        container.appendChild(listItemIntegrator(element.title, element.date));
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

    const all = content.firstChild.nextSibling.firstChild.nextSibling;
    const today = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling;
    const thisWeek = content.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
    all.classList.add('sidebarItemSelected')
    if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
    if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}
    
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    if (lists.hasChildNodes() == true) {
        lists.firstChild.remove();
    }
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();

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
        container.appendChild(listItemIntegrator(element.title, element.date));
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


    today.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (thisWeek.classList.contains('sidebarItemSelected')) {thisWeek.classList.remove('sidebarItemSelected') && thisWeek.classList.add('sidebarIntegratedItem')}
    
    
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
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
            container.appendChild(listItemIntegrator(element.title, element.date));
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

    thisWeek.classList.add('sidebarItemSelected')
    if (all.classList.contains('sidebarItemSelected')) {all.classList.remove('sidebarItemSelected') && all.classList.add('sidebarIntegratedItem')}
    if (today.classList.contains('sidebarItemSelected')) {today.classList.remove('sidebarItemSelected') && today.classList.add('sidebarIntegratedItem')}
    
    let lists = content.firstChild.nextSibling.lastChild.lastChild;
    lists.firstChild.remove();
    lists.appendChild(loadDOMSidebarLists());
    checkSelectedListItems();
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
        container.appendChild(listItemIntegrator(element.title, element.date));
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
function listItemIntegrator(itemTitle, itemDate) {
    const container = document.createElement('div');
        container.classList.add('listItemContainer');
    container.appendChild(listItem(itemTitle));
    container.appendChild(listIcons(itemDate));
        container.lastChild.firstChild.addEventListener('click', () => {
            const taskTitle = container.firstChild.firstChild.textContent;
            userTasks.forEach(task =>  {
                if (taskTitle == task.title) {
                    userTasks.splice(userTasks.indexOf(task), 1);
                    console.log(userTasks);
                }
                container.remove();
            })
        });
    return container;
}
function listItem(itemTitle) {
    const container = document.createElement('div');
        container.classList.add('leftListItem');
    const label = document.createElement("label");
        label.setAttribute("for", "checkbox");
        label.textContent = itemTitle;
    container.appendChild(label);
    return container;
}
function listIcons(itemDate) {
    const div = document.createElement('div');
    div.classList.add('listItemIconContainer');
    div.appendChild(itemDateProducer(itemDate));
    div.appendChild(trashCan());
    return div;
}
function itemDateProducer(itemDate) {
    let div = document.createElement('div');
    div.classList.add('listItemDate');
    div.textContent = itemDate;
    return div;
}
    function trashCan() {
        const button = document.createElement('button');
        const trash = new Image();
            trash.src = mdiTrashCanOutline;
            trash.classList.add('listItemIconButton');
        button.appendChild(trash);
        return button;
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

//this function refreshes the main page whenever you add a new task, to make the new task appear
function refreshPage() {
    //const content = document.getElementById("content");
    const mainTitle = content.firstChild.nextSibling.nextSibling.firstChild.firstChild.firstChild.textContent;

    if (mainTitle == "All Tasks") { mainDOMLoadAll() }
    else if (mainTitle == "Today") { mainDOMLoadToday() }
    else if (mainTitle == "This Week") { mainDOMLoadThisWeek() }
    else {
        mainDOMLoadList(mainTitle)
    }
}

//List Item
    //Item Container
    //Item Title
    //Item Control Icon Container
        //Item Control Icons

export { mainDOMLoadList, mainDOMLoadAll, mainDOMLoadToday, mainDOMLoadThisWeek, checkSelectedListItems, refreshPage }



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