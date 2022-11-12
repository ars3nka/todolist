import createElement from "./utils/createElement.js";
import { header, todoList } from "./components/header.js";

const wrapper = createElement('div', {className: 'wrapper'});

document
  .querySelector('#root')
  ?.append(wrapper);

wrapper.append(header, todoList);



