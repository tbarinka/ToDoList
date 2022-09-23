//note: a lot of the factory functions are lifted from createListDOM. Future cleanup 
//should integrate them under a single file.

import './style.css';

function createTaskDOMLoad() {

    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(taskTitle());
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

            card.remove();
        });
};

function taskTitle(name) {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
        inputText.setAttribute("id", "cardInput");
    const label = document.createElement('label');
        label.setAttribute("for", "cardInput");
        label.textContent = "Task Title: ";
    div.appendChild(label);
    div.appendChild(inputText);
    return div;
};

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