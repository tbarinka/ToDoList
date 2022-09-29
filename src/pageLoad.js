import './style.css';
import { loadSidebarDOM } from './sidebarDOM.js';
import { mainDOMLoad } from './mainDOM.js';
import { loadHeader } from './headerDOM.js';

function pageLoader() {
    loadHeader();
    loadSidebarDOM();
    const content = document.getElementById('content');
    const div = document.createElement('div');
    content.appendChild(div);
}
export { pageLoader }