import { createTodo } from "./todo_creator";
import { init } from "./utils";

const form = document.querySelector("#todo-form");

init(form, handleTodoCreation);
//Temporary array to store todos
const todos = [
  {
    title: "Buy grocieries",
    details: "Cheese, milk, eggs",
    startDate: "2025-11-20",
    dueDate: "2025-11-21",
    priority: "mid",
  },
];

function handleTodoCreation(event) {
  const todo = createTodo(event);
  if (todo) {
    todos.push(todo);
    console.log(todos);
  }
}
