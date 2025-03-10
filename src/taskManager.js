// taskManager.js - for task handling (adding, removing, retrieving, saving)
import Task from './task.js';

export default class TaskList {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks.map(task => new Task(task.title, task.description, task.dueDate, task.priority));
    }
    
    addTask(title, description, dueDate, priority) {
        const newTask = new Task(title, description, dueDate, priority);
        this.tasks.push(newTask);
        saveToLocalStorage();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        saveToLocalStorage();
    }

    getTasks() {
        return this.tasks;
    }
}

console.log("taskManager.js running successfully.")