import { Task, pushTaskToArray, userTasks } from './createTaskApp.js';

const userLists = [];

function createListArrayObject(name) {
    return { name }
}

function pushToUserLists(name) {
    userLists.push(createListArrayObject(name));
    console.log(userLists);
}


//this returns an array containing the tasks that belong to a list named in (string)
function filterTaskstoList(listTitle) {
    //const filteredTasks = userTasks.filter(task.list == listTitle);
    //console.log(filteredTasks);
    //const filteredTasks = userTasks.filter(function(task) {
        //console.log(task.list == listTitle);
        //if (task.list == listTitle) return task.title;
    //});
    const filteredList = [];
    const filteredTasks = userTasks.filter(function(task) {
        if (task.list == listTitle) filteredList.push(task);
    });
    console.log(filteredList);
    return filteredList;
}

export { userLists, pushToUserLists, filterTaskstoList }