import './style.css';
import checklist from './images/clipboard-check-multiple-outline.png'

function loadHeader() {
    const header = document.createElement('div');
        header.classList.add('headerContainer');
    header.appendChild(leftHeaderContent());
    document.body.insertBefore(header,content);
}

function leftHeaderContent() {
    const left = document.createElement('div');
        left.classList.add('leftHeaderContent');
    const h = document.createElement('h1');
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

export { loadHeader };