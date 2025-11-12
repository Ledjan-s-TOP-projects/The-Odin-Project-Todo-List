import { createTodo } from "./todo_creator";
import { init, toggleStatus } from "./utils";

const form = document.querySelector("#todo-form");

//array to store todos
const todos = [];

init(form, handleTodoCreation);

//Retrive data from localStorage (|| [] -> if there is no todo saved it will start with an empty array)
const savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || [];

function handleTodoCreation(event) {
  const todo = createTodo(event);
  if (todo) {
    todos.push(todo);
    //update localStorage with the new todos
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  }
}

function handleStatus(id) {
  toggleStatus(todos, id);
  localStorage.setItem("savedTodos", JSON.stringify(todos));
}
