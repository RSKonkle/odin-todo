// domManager.js - generates landing page content, handles 

export function loadPage() {
    // Initialize content
    const content = document.getElementById("content");

    // Create left-fixed page nav
    const nav = document.createElement("nav");
    nav.id = "nav";
    
    // Create page title at top of nav
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Task Master";

    // Create 'Add Task' button in nav
    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "Add Task";

    // Create 'task list' in nav
    const taskListWrap = document.createElement("div");
    taskListWrap.id = "task-list";
    const taskList = document.createElement("ul");
    const taskListHeader = document.createElement("h3");
    taskListHeader.textContent = "Your Lists";
    taskListWrap.appendChild(taskListHeader);

    // Append children to nav
    nav.appendChild(title);
    nav.appendChild(newTaskButton);
    nav.appendChild(taskListWrap);

    // Append nav to content
    content.appendChild(nav);
    console.log("loadHome functions successfully.");
}