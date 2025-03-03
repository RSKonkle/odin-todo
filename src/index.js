// import scripts
import Task from './task.js';
import TaskList from './taskManager.js';
import {loadNav, refreshLists} from './domHandler.js';
import {saveToLocalStorage, loadFromLocalStorage, addNewList, getLists} from './storage.js';

//import styles
import './styles.css';

loadNav();
console.log("index.js running successfully.");

// consider new font for title
// consider module that creates pop-up introduction for first-time visitors
// consider offering 'choice of nav color' to personalize page