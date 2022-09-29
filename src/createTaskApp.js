import { userLists } from './createListApp.js';
import { format, isSameWeek, addWeeks } from 'date-fns';

let userTasks = [];

class Task {
    constructor(title, date, list, description, time) {
        this.title = title;
        this.date = date;
        this.list = list;
    } 

}
function pushTaskToArray(title, date, list) {
    const t = new Task(title, date, list);
    console.log(t);
    userTasks.push(t);
}
function filterTaskstoList(listTitle) {
    const filteredList = [];
    const filteredTasks = userTasks.filter(function(task) {
        if (task.list == listTitle) filteredList.push(task);
    });
    return filteredList;
}
function sortTasksToHome() {
    const sortedTasks = userTasks.sort(function(a, b) {
        var keyA = new Date(a.date),
            keyB = new Date(b.date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0
    })
    //console.log(sortedTasks);
    return sortedTasks;
}
function filterTodayTasks() {
    var today = format(new Date(), 'YYY-MM-dd').toString();
    const filteredTasks = userTasks.filter(function(task) {
        if (today.includes(task.date)) return task;
    })
    return filteredTasks;
}
function filterThisWeekTasks() {
    //const weekBegin = new Date(); const weekTerminus = addWeeks(new Date(), 1); console.log(weekTerminus);
    const filteredTasks = userTasks.filter(function(task) {
        //console.log(task.date);
        //console.log(new Date(task.date.replace("-", "/")));
        console.log(isSameWeek(new Date(), new Date(task.date.replace("-", "/"))));
        if (isSameWeek(new Date(), new Date(task.date.replace("-", "/")))) return task;
    });
    return filteredTasks;
}

export { Task, pushTaskToArray, userTasks, filterTaskstoList, sortTasksToHome, filterTodayTasks, filterThisWeekTasks }
