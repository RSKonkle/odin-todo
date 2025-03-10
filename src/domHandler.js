// domManager.js - generates landing page content, handles 
import {saveToLocalStorage, addNewList, getLists} from './storage.js';
import removeIcon from './images/icons8-remove-50.png';
import removeIconDark from './images/icons8-removeDark-50.png';
import moreIcon from './images/icons8-more-30.png';
import Task from './task.js';

// Initialize body & content sections
const content = document.getElementById("content");

// Load side-nav and refresh content
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
    newListButton.textContent = "+ New List";

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

// Create/refresh list items in nav, add even listeners
export function refreshLists() {
    const taskList = document.querySelector("#task-list ul");
    taskList.innerHTML = "";

    getLists().forEach((list, index) => {
        const listRemove = document.createElement("img");
        listRemove.src = removeIcon;
        listRemove.classList.add("remove-icon");
        listRemove.dataset.index = index;
        listRemove.addEventListener("click", () => {
            const lists = getLists();
            lists.splice(index, 1);
            saveToLocalStorage();
            refreshLists();
        });
        const listItem = document.createElement("li");
        listItem.textContent = list.name;
        listItem.dataset.index = index;
        listItem.addEventListener('click', () => loadTaskList(index));

        const listItemWrap = document.createElement("div");
        listItemWrap.classList.add("list-item-wrap");
        listItemWrap.appendChild(listRemove);
        listItemWrap.appendChild(listItem);

        taskList.appendChild(listItemWrap);
    });
}

function loadTaskList(index) {
    const lists = getLists();
    const selectedList = lists[index];

    content.innerHTML = `<h2>${selectedList.name}</h2>`;

    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";

    // Display existing tasks
    selectedList.tasks.forEach((task, taskIndex) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        // Build task meta fields conditionally
        let taskMetaHTML = "";
        if (task.dueDate) {
            taskMetaHTML += `<p>Due: ${task.dueDate}</p>`;
        }
        if (task.priority && task.priority !== "None") {
            taskMetaHTML += `<p>Priority: ${task.priority}</p>`;
        }

        taskElement.innerHTML = `
        <div class="task-header">
            <h3>${task.title}</h3>
            <img class='more-icon' src='${moreIcon}' data-index="${taskIndex}">
            <img class='remove-icon' src='${removeIconDark}' data-index="${taskIndex}">
        </div>
        <p>${task.description || ""}</p>
        ${taskMetaHTML ? `<div class="task-meta">${taskMetaHTML}</div>` : ""}
        `;

        // Remove Task Event Listener
        taskElement.querySelector(".remove-icon").addEventListener("click", () => {
            selectedList.tasks.splice(taskIndex, 1);
            saveToLocalStorage();
            loadTaskList(index);
        });

        // Edit Task Event Listener
        taskElement.querySelector(".more-icon").addEventListener("click", () => {
            enableTaskEditing(taskElement, selectedList, taskIndex, index);
        });

        taskContainer.appendChild(taskElement);
    });

    // **Restore the "+ add task here..." input**
    const addTaskInput = document.createElement("div");
    addTaskInput.classList.add("task", "new-task");
    addTaskInput.innerHTML = `
        <input type="text" id="new-task-title" placeholder="+ add task here..." />
        <div id="task-details" class="hidden">
            <input type="text" id="new-task-description" placeholder="Description (optional)" />
            <div class="task-meta">
                <input type="date" id="new-task-dueDate" />
                <select id="new-task-priority">
                    <option value="">Select Priority</option>
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
            </div>
        </div>
    `;

    const titleInput = addTaskInput.querySelector("#new-task-title");
    const detailsSection = addTaskInput.querySelector("#task-details");

    // Show extra fields when user types in title
    titleInput.addEventListener("input", () => {
        if (titleInput.value.trim().length > 0) {
            detailsSection.classList.remove("hidden");
        } else {
            detailsSection.classList.add("hidden");
        }
    });

    // Apply blur event to ALL inputs
    [titleInput, 
     addTaskInput.querySelector("#new-task-description"), 
     addTaskInput.querySelector("#new-task-dueDate"), 
     addTaskInput.querySelector("#new-task-priority")
    ].forEach((input) => {
        input.addEventListener("blur", () => {
            setTimeout(() => {
                if (!addTaskInput.contains(document.activeElement)) {
                    saveNewTask(index);
                }
            }, 100);
        });
    });

    taskContainer.appendChild(addTaskInput);
    content.appendChild(taskContainer);
}

function enableTaskEditing(taskElement, selectedList, taskIndex, listIndex) {
    const task = selectedList.tasks[taskIndex];

    // Replace static task display with input fields
    taskElement.innerHTML = `
        <div class="task-header">
            <input type="text" class="edit-task-title" value="${task.title}">
            <img class='save-icon' src='${moreIcon}'>
            <img class='remove-icon' src='${removeIconDark}'>
        </div>
        <textarea class="edit-task-description" placeholder="Description...">${task.description || ""}</textarea>
        <div class="task-meta">
            <input type="date" class="edit-task-dueDate" value="${task.dueDate || ""}">
            <select class="edit-task-priority">
                <option value="">Select Priority</option>
                <option value="Low" ${task.priority === "Low" ? "selected" : ""}>Low</option>
                <option value="Medium" ${task.priority === "Medium" ? "selected" : ""}>Medium</option>
                <option value="High" ${task.priority === "High" ? "selected" : ""}>High</option>
            </select>
        </div>
    `;

    // Add Save Event Listener
    taskElement.querySelector(".save-icon").addEventListener("click", () => {
        saveEditedTask(taskElement, selectedList, taskIndex, listIndex);
    });

    // Save Task When User Clicks Outside (Blur Event)
    taskElement.addEventListener("focusout", () => {
        setTimeout(() => {
            if (!taskElement.contains(document.activeElement)) {
                saveEditedTask(taskElement, selectedList, taskIndex, listIndex);
            }
        }, 100);
    });
}

function saveNewTask(listIndex) {
    const lists = getLists();
    const selectedList = lists[listIndex];

    const titleInput = document.getElementById("new-task-title");
    const title = titleInput.value.trim();
    const description = document.getElementById("new-task-description").value.trim();
    const dueDate = document.getElementById("new-task-dueDate").value;
    const priority = document.getElementById("new-task-priority").value;

    if (title === "") return; // Don't save if empty

    // Create and add new task
    const newTask = new Task(title, description, dueDate, priority);
    selectedList.tasks.push(newTask);
    saveToLocalStorage();

    // Clear input fields immediately to prevent duplicate triggers
    titleInput.value = "";
    document.getElementById("new-task-description").value = "";
    document.getElementById("new-task-dueDate").value = "";
    document.getElementById("new-task-priority").value = "Low";

    // Hide task details again
    document.getElementById("task-details").classList.add("hidden");

    // Reload the list to show the new task
    loadTaskList(listIndex);
}

function saveEditedTask(taskElement, selectedList, taskIndex, listIndex) {
    const task = selectedList.tasks[taskIndex];

    // Get new values from input fields
    const newTitle = taskElement.querySelector(".edit-task-title").value.trim();
    const newDescription = taskElement.querySelector(".edit-task-description").value.trim();
    const newDueDate = taskElement.querySelector(".edit-task-dueDate").value || null;
    const newPriority = taskElement.querySelector(".edit-task-priority").value || null;

    if (newTitle === "") return; // Don't allow empty title

    // Update the task
    task.title = newTitle;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.priority = newPriority;

    saveToLocalStorage();
    loadTaskList(listIndex);
}

// Function to add a new list dynamically
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('new-list-btn').addEventListener('click', () => {
        const newListName = prompt('Enter new list name:');
        if (newListName) {
          addNewList(newListName);
          refreshLists();
        }

        const lists = getLists();
        const newIndex = lists.length - 1;
        loadTaskList(newIndex);
      });
      
      document.addEventListener('DOMContentLoaded', refreshLists);
})


