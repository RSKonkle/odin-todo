// storage.js - for handling local storage of lists and tasks
import TaskList from './taskManager.js';

let lists = JSON.parse(localStorage.getItem('taskLists'))?.map(list => new TaskList(list.name, list.tasks)) || [];

export function saveToLocalStorage() {
    localStorage.setItem('taskLists', JSON.stringify(lists));
}

export function loadFromLocalStorage() {
    lists = JSON.parse(localStorage.getItem('taskLists'))?.map(list => new TaskList(list.name, list.tasks)) || [];
    return lists;
}

export function addNewList(name) {
    const newList = new TaskList(name);
    lists.push(newList);
    saveToLocalStorage();
}

export function getLists() {
    return lists;
}
