import { userLists } from './createListApp.js'

let userTasks = [];

class Task {
    constructor(title, list) {
        this.title = title;
        this.date = date;
        this.list = list;
    } 

}

function pushTaskToArray(title, list) {
    const t = new Task(title, list);
    console.log(t);
    userTasks.push(t);
}

function filterTasksbyList(List) {
    //for any task, if task.list = List
    //then put on the mainDOM
}

export { Task, pushTaskToArray, userTasks }





//function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
    div.appendChild(inputText);

    return div;
//}