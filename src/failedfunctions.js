


function checkSelectedListItems(listTitle) {
    const nodeList = document.querySelectorAll('.sidebarListItemContainer');
    const secondNodeList = document.querySelectorAll('sidebarListItemContainerSelected')
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
    } (let i = 0; i < secondNodeList.length; i++) {
        let item = secondNodeList[i];
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
