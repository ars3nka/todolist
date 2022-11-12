import createElement from "./createElement.js";
import todos from "../components/todos.js";

function createMovieList(array, parent) {
  parent.innerHTML = '';
  array.forEach((element, index) => {

      const todoItem = createElement('li', { className: 'todo_item'});
      const todoCheckbox = createElement('input', {className: 'todo_item_checkbox'});
            todoCheckbox.type = 'checkbox';
            todoCheckbox.checked = false;
      const todoRemoveButton = createElement('button', { className: 'todo_item_remove', textContent: 'X' });
      const todoText = createElement('p', { className: 'todo_item_text', textContent: `${element.text}` });
      const todoDate = createElement('p', { className: 'todo_item_date', textContent: `${element.date}` });
      const todoRemoveDate = createElement('div', {className: 'todo_item_removedate'});

      todoCheckbox.addEventListener('click', function() {
        todoItem.classList.toggle('checked');
        element.isChecked = !element.isChecked;
      });

      if (element.isChecked) {
        todoItem.className = 'checked';
        todoCheckbox.checked = true;
      }

      element.id = index;

      todoRemoveButton.addEventListener('click', (array) => {
        todoItem.remove();
        todos.list.splice(element.id, 1);
      });
      
      parent.append(todoItem);
      todoItem.append(todoCheckbox, todoText, todoRemoveDate);
      todoRemoveDate.append(todoRemoveButton, todoDate);
      
  });
}

export default createMovieList; 