import './style.css';
import plus from './images/plus.png';

function loadSidebarDOM() {
    const content = document.getElementById('content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

    content.appendChild(sidebar);
    sidebar.appendChild(sidebarItemIntegrater("Home"));
    sidebar.appendChild(sidebarItemIntegrater("Today"));
    sidebar.appendChild(sidebarItemIntegrater("This Week"));
    sidebar.appendChild(sidebarItemIntegrater("Lists", "y"));

}
export { loadSidebarDOM }

function sidebarItemIntegrater(title, toggleRightComponent) {
    const div = document.createElement('div');
    div.classList.add('sidebarIntegratedItem');
    
    if (toggleRightComponent == "y") {
        div.appendChild(leftSidebarComponent(title))
        div.appendChild(rightSidebarAddItem());
    } else {
        div.appendChild(leftSidebarComponent(title))
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
        button.appendChild(addBtn);
        return button;
        }