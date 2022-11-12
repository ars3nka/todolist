import createElement from "../utils/createElement.js";
import createMovieList from "../utils/createMovieList.js";
import todos from "./todos.js";

const header = createElement('div', {className: 'header'});
const deleteAllButton = createElement('button', {className: 'header__button', innerText: 'Delete All'});
const addButton = createElement('button', {className: 'header__button', innerText: 'Add'});
const enterToDoInput = createElement('input', {className: 'header__input', placeholder: 'Enter todo ...'});

const todoList = createElement('ul', {className: 'todo_list'});

addButton.addEventListener('click', function(){
  if (!enterToDoInput.value) return;
  todos.push();
  enterToDoInput.value = '';
});

deleteAllButton.addEventListener('click', () => {
  todoList.innerHTML = '';
  todos.list = [];
});

header.append(deleteAllButton, enterToDoInput, addButton);

window.addEventListener("DOMContentLoaded", () => {
  let localList = JSON.parse(localStorage.getItem('storage'));
  if (localList) {
    todos.list = localList;
    createMovieList(localList, todoList);
  }
  console.log('localList:');
  console.log(localList);
});

window.addEventListener("beforeunload", () => {
  const stringifyList = JSON.stringify(todos.list);
  localStorage.setItem('storage', stringifyList);
});

export {header, todoList, enterToDoInput};