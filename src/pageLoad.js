import './style.css';
import { loadSidebarDOM } from './sidebarDOM.js';
import { mainDOMLoad, mainDOMLoadAll } from './mainDOM.js';
import { loadHeader, loadHeaderforPersonalWebsite } from './headerDOM.js';

function pageLoader() {
    loadHeader();
    loadSidebarDOM();
    const content = document.getElementById('content');
    const div = document.createElement('div');
    content.appendChild(div);
    mainDOMLoadAll();
}

function personalSitePageLoader() {
    let organizerBody = document.createElement(div);
    organizerBody.setAttribute('id', 'body');
    document.body.appendChild(organizerBody);
    loadHeaderforPersonalWebsite();
    loadSidebarDOM();

    let content = document.createElement('div');
    div.setAttribute('id', 'content');
    organizerBody.appendChild(content);
    const div = document.createElement('div');
    content.appendChild(div);
    mainDOMLoadAll();
}



export { pageLoader }