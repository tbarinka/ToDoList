import './style.css';
import { loadSidebarDOM } from './sidebarDOM.js';
import { mainDOMLoad } from './mainDOM.js'

loadSidebarDOM();
//mainDOMLoad("List Title", "Item Title");
const content = document.getElementById('content');
const div = document.createElement('div');
content.appendChild(div);