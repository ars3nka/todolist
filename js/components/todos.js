import createMovieList from "../utils/createMovieList.js";
import {todoList, enterToDoInput} from "./header.js";

const todos = {
  list: [],
  push() {
    this.list.push({
      id: this.list.length,
      date: (new Date()).toString().slice(4,21),
      text: enterToDoInput.value,
      isChecked: false,
    });
    createMovieList(this.list, todoList);
  }
};

export default todos;