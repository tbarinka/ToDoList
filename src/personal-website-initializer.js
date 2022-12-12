import './style.css';
import plus from './images/plus.png';
import checklist from './images/clipboard-check-multiple-outline.png';
import mdiTrashCanOutline from './images/mdiTrashCanOutline.png';



const content = document.getElementById('content');
function altPageLoader() {
    loadHeaderforPersonalWebsite();
    loadSidebarDOM();
    const div = document.createElement('div');
    content.appendChild(div);
    mainDOMLoadAll();
}



//header functions

function loadHeaderforPersonalWebsite() {
    const header = document.createElement('div');
        header.setAttribute('id', 'headerContainer');
    header.appendChild(leftHeaderContent());
    header.appendChild(rightHeaderContent());
    let body = document.getElementById('body');
    body.insertBefore(header,content);
}

function leftHeaderContent() {
    const left = document.createElement('div');
        left.classList.add('leftHeaderContent');
    const h = document.createElement('p');
        h.classList.add("toDo")
        h.textContent = "ToDo"
    left.appendChild(headerIcon())
    left.appendChild(h);
    return left
}
function headerIcon() {
    const icon = new Image();
    icon.src = checklist;
    icon.classList.add('headerIcon');
    return icon;
}
function rightHeaderContent() {
    const right = document.createElement('div');
    right.appendChild(removeAppBtn());
    return right;
}
function removeAppBtn() {
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.setAttribute('id', 'removeOrgnizerBtn');
    btn.addEventListener('click', removeApp)
    return btn;
}
function removeApp() {
    let body = document.getElementById('body');
    body.remove();
}

//sidebar functions
function loadSidebarDOM() {
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
    content.appendChild(sidebar);
    sidebar.appendChild(createTaskButton());
    sidebar.appendChild(createAll());
    sidebar.appendChild(createToday());
    sidebar.appendChild(createThisWeek());
    sidebar.appendChild(sidebarItemIntegrater("Lists", "y"));
}

    //These functions add create individual sidebar items with event listeners
    function createAll() {
        const all = sidebarItemIntegrater("All");
        all.addEventListener('click', () => mainDOMLoadAll());
        all.setAttribute('id', 'all');
        return all;
    }
    function createToday() {
        const today = sidebarItemIntegrater("Today")
        today.addEventListener('click', () => mainDOMLoadToday());
        today.setAttribute('id', 'today');
        return today
    }
    function createThisWeek() {
        const thisWeek = sidebarItemIntegrater("This Week")
        thisWeek.addEventListener('click', () => mainDOMLoadThisWeek());
        thisWeek.setAttribute('id', 'thisWeek');
        return thisWeek
    }


    function createTaskButton() {
        const div = document.createElement('div');
            div.classList.add('sidebarAddTaskButton')
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
        div.classList.add("listContainer");
    return div;
}

//mainDOMfunctions

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


//createTaskDOM from createTaskDOM.js

function createTaskDOMLoad() {
    const card = document.createElement('div');
        card.classList.add('newTaskCard');
    card.appendChild(taskInfo());
    card.appendChild(taskButtonIntegrator('Cancel', 'Add Task'));
        //cancel button event listener --> removes card from DOM
        card.lastChild.firstChild.addEventListener('click', (event) => {
            card.remove();
        });
        card.lastChild.firstChild.setAttribute("id", "cancelTask")
        //event listener on create button
        card.lastChild.lastChild.addEventListener('click', (event) => {
            const date = document.getElementById('date');
            const list = document.getElementById('list');
            const title = document.getElementById('title');
            if (title.value == "") { return }
            pushTaskToArray(title.value, date.value, list.value);
            card.remove();
            refreshPage();
        });
        card.lastChild.lastChild.setAttribute("id", "addTask")

    if (document.body.nextSibling !== null) {
        document.body.nextSibling.remove();
    };
    document.body.after(card);
};

function taskInfo() {
    const div = document.createElement('div');
        div.classList.add('taskCardTextBorder');
    const firstRow = document.createElement('div');
        firstRow.classList.add('taskInfoFirstRow');
        firstRow.appendChild(taskTitle());
        firstRow.appendChild(taskDate());
    div.appendChild(firstRow);
    div.appendChild(taskList());
    return div;
};

    function taskTitle() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const title = document.createElement('input');
            title.classList.add('cardInputText');
            title.setAttribute("id", "title");
        const titleLabel = document.createElement('label');
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Task: ";
        div.appendChild(titleLabel);
        div.appendChild(title);
        return div;
    }
    function taskList() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const listLabel = document.createElement('label');
            listLabel.setAttribute("for", "cardInput");
            listLabel.textContent = "List: ";
        const list = document.createElement('select');
            list.classList.add('cardInputText');
            list.setAttribute("id", "list");
        userLists.forEach(userList => {
            const option = document.createElement('option');
                option.innerHTML = userList.name;
                list.appendChild(option);
        })
        div.appendChild(listLabel);
        div.appendChild(list);
        return div;
    }
    function taskDate() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const date = document.createElement('input');
            date.classList.add('cardInputText');
            date.setAttribute("type", "date");
            date.setAttribute("id", "date");
        const dateLabel = document.createElement('label');
            dateLabel.setAttribute("type", "date");
            dateLabel.setAttribute("for", "date");
            dateLabel.textContent = "Date: ";
        div.appendChild(dateLabel);
        div.appendChild(date);
        return div;
    }

function taskButtonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
}

function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('taskCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
        buttonText.classList.add('taskButtonText')
    button.appendChild(buttonText);
    return button;
}

//createListDOM


function addListCardDOMLoad(s1, s2) {
    //const content = document.getElementById('content');
    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));
    //event listener: pushes user text into userLists array when click 'create';
    card.lastChild.lastChild.addEventListener('click', (event) => {
        let name = card.firstChild.lastChild.value;
        if (name == "") { return }
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
        p.addEventListener('click', () => {
            mainDOMLoadList(p.textContent)
        });
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
            deleteList();
        })
    const trashIcon = new Image();
        trashIcon.src = trash;
        trashIcon.classList.add('sidebarListIcon');
    button.appendChild(trashIcon);
    return button;

    function deleteList() {
        const listName = button.parentNode.firstChild.textContent;

        userLists.forEach(list => {
            if (list.name == listName) {
                userLists.splice(userLists.indexOf(list), 1);
            }
        });
    }
};

function cardInput() {
    const listName = document.createElement('label'); 
        listName.setAttribute("for", "listName");
        listName.setAttribute("id", "listNameLabel")
        listName.textContent = "Name Your List: "
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
        inputText.setAttribute("id", "listName");
    div.appendChild(listName);
    div.appendChild(inputText);

    return div;
}

function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(listCardButton(s1));
        div.firstChild.setAttribute("id", "listCancel");
    div.appendChild(listCardButton(s2));
        div.lastChild.setAttribute("id", "listAdd")

    return div;
}
function listCardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
}

//createTaskApp

let userTasks = [];

class Task {
    constructor(title, date, list, description, time) {
        this.title = title;
        this.date = date;
        this.list = list;
    } 

}
function pushTaskToArray(title, date, list) {
    const t = new Task(title, date, list);
    userTasks.push(t);
}
function filterTaskstoList(listTitle) {
    const filteredList = [];
    const filteredTasks = userTasks.filter(function(task) {
        if (task.list == listTitle) filteredList.push(task);
    });
    return filteredList;
}
function sortTasksToAll() {
    const sortedTasks = userTasks.sort(function(a, b) {
        var keyA = new Date(a.date),
            keyB = new Date(b.date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0
    })
    return sortedTasks;
}
function filterTodayTasks() {
    var today = format(new Date(), 'YYY-MM-dd').toString();
    const filteredTasks = userTasks.filter(function(task) {
        if (today.includes(task.date)) return task;
    })
    return filteredTasks;
}
function filterThisWeekTasks() {
    const filteredTasks = userTasks.filter(function(task) {
        if (isSameWeek(new Date(), new Date(task.date.replace("-", "/")))) return task;
    });
    return filteredTasks;
}

//createListApp

const userLists = [];

function createListArrayObject(name) {
    return { name }
}

function pushToUserLists(name) {
    userLists.push(createListArrayObject(name));
    console.log(userLists);
}

export { altPageLoader }