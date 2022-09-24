import { userLists } from './createListApp.js'

let userTasks = [];

class Task {
    constructor(name) {
        this.name = name;
        //this.date = date;
        //this.list = list;
    } 

}

function pushTaskToArray(task) {
    const t = new Task(task);
    userTasks.push(t);
    console.log(userTasks);
    console.log(userTasks[0].name);
}

function filterTasksbyList(List) {
    //for any task, if task.list = List
    //then put on the mainDOM
}

export { Task, pushTaskToArray, userTasks }
