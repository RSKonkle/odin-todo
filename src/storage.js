// storage.js - for handling local storage of lists and tasks
let lists = JSON.parse(localStorage.getItem('taskLists')) || [];

export function saveToLocalStorage() {
  localStorage.setItem('taskLists', JSON.stringify(lists));
}

export function loadFromLocalStorage() {
  lists = JSON.parse(localStorage.getItem('taskLists')) || [];
  return lists;
}

export function addNewList(name) {
  const newList = { name, tasks: [] };
  lists.push(newList);
  saveToLocalStorage();
}

export function getLists() {
  return lists;
}
