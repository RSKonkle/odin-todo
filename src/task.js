// task.js - creates Task class for constructing tasks

export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
}

console.log("task.js running successfully.")