import './style.css';
import checklist from './images/clipboard-check-multiple-outline.png';

const content = document.getElementById('content');
function loadHeader() {
    const header = document.createElement('div');
        header.setAttribute('id', 'headerContainer');
    header.appendChild(leftHeaderContent());
    let body = document.getElementById('body');
    body.insertBefore(header,content);
}
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

export { loadHeader, loadHeaderforPersonalWebsite };