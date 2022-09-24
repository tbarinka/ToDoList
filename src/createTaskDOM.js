//note: a lot of the factory functions are lifted from createListDOM. Future cleanup 
//should integrate them under a single file.

import './style.css';
import { Task, pushTaskToArray, userTasks } from './createTaskApp.js';

function createTaskDOMLoad() {

    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(taskInfo());
    card.appendChild(buttonIntegrator('Cancel', 'Add Task'));
    content.appendChild(card);
        //cancel button event listener --> removes card from DOM
        card.lastChild.firstChild.addEventListener('click', (event) => {
            let name = card.lastChild.firstChild;
            console.log(name);
            card.remove();
        });
        //event listener on create button
        card.lastChild.lastChild.addEventListener('click', (event) => {
            console.log(card.firstChild.firstChild.lastChild.value);
            console.log(card.firstChild.lastChild.lastChild.value);
            pushTaskToArray(card.firstChild.firstChild.lastChild.value, card.firstChild.lastChild.lastChild.value);
            card.remove();
        });
};

function taskInfo() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    div.appendChild(taskTitle());
    div.appendChild(taskList());
    return div;
};

    function taskTitle() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const title = document.createElement('input');
            title.classList.add('cardInputText');
            title.setAttribute("id", "cardInput");
        const titleLabel = document.createElement('label');
            titleLabel.setAttribute("for", "cardInput");
            titleLabel.textContent = "Task Title: ";
        div.appendChild(titleLabel);
        div.appendChild(title);
        return div;
    }
    function taskList() {
        const div = document.createElement('div');
            div.classList.add('taskInfoItemContainer');
        const list = document.createElement('input');
            list.classList.add('cardInputText');
            list.setAttribute("id", "cardInput");
        const listLabel = document.createElement('label');
            listLabel.setAttribute("for", "cardInput");
            listLabel.textContent = "List: ";
        div.appendChild(listLabel);
        div.appendChild(list);
        return div;
    }

function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
}

function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
}

function taskDate() {

}

export { createTaskDOMLoad }