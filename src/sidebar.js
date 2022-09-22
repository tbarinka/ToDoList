import './style.css';

function loadSidebarDOM() {
    const content = document.getElementById('content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        sidebar.textContent = "awefawefawefa"

    content.appendChild(sidebar);
}
export { loadSidebarDOM }