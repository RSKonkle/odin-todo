// domManager.js - generates landing page content, handles 
import {saveToLocalStorage, loadFromLocalStorage, addNewList, getLists} from './storage.js';

// Initialize body & content sections
const content = document.getElementById("content");

export function loadNav() {
    console.log("loadNav is running...");
    // Create left-fixed page nav
    const nav = document.createElement("nav");
    nav.id = "nav";
    
    // Create page title at top of nav
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Task Master";

    // Create 'Add List' button in nav
    const newListButton = document.createElement("button");
    newListButton.id = "new-list-btn";
    newListButton.textContent = "New List";

    // Create 'task list' in nav
    const taskListWrap = document.createElement("div");
    taskListWrap.id = "task-list";
    const taskListHeader = document.createElement("h3");
    taskListHeader.textContent = "Your Lists";
    const taskList = document.createElement("ul");
    const initialList = document.createElement("li");
    initialList.textContent = "My First List";

    // Append children to task list wrap
    taskList.appendChild(initialList);
    taskListWrap.appendChild(taskListHeader);
    taskListWrap.appendChild(taskList);

    // Append children to nav
    nav.appendChild(title);
    nav.appendChild(newListButton);
    nav.appendChild(taskListWrap);

    // Append nav to body
    document.body.appendChild(nav);

    document.addEventListener("DOMContentLoaded", () => {
        console.log("Loading stored lists...")
        refreshLists();
    });

    console.log("loadHome functions successfully.");
}

export function refreshLists() {
    const taskList = document.querySelector("#task-list ul");
    taskList.innerHTML = "";

    getLists().forEach((list, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = list.name;
        listItem.dataset.index = index;
        listItem.addEventListener('click', () => loadTaskList(index));
        taskList.appendChild(listItem);
    });
}

function loadTaskList(index) {
    const selectedList = getLists()[index];

    content.innerHTML = `<h2>${selectedList.name}</h2>`

    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";

    selectedList.tasks.forEach((task, taskIndex) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Priority: ${task.priority}</p>
        <p>Due: ${task.dueDate}</p>
        <button class="remove-task" data-index="${taskIndex}">x</button>
        `;

        taskElement.querySelector(".remove-task").addEventListener("click", () => {
            selectedList.tasks.splice(taskIndex, 1);
            saveToLocalStorage();
            loadTaskList(index);
        });

        taskContainer.appendChild(taskElement);
    });

    content.appendChild(taskContainer);
}

// Function to add a new list dynamically
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('new-list-btn').addEventListener('click', () => {
        const newListName = prompt('Enter new list name:');
        if (newListName) {
          addNewList(newListName);
          refreshLists();
        }
      });
      
      document.addEventListener('DOMContentLoaded', refreshLists);
})


