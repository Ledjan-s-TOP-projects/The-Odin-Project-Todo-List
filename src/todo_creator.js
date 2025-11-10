import { formValidation } from "./validation";

//Instance of the validator which provides all the methods
const validator = formValidation();

const form = document.querySelector("#todo-form");
const title = document.querySelector("#title");
const details = document.querySelector("#details");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const priority = document.querySelector("#priority");

class TodoCreator {
  constructor(title, details, startDate, endDate, priority) {
    this.title = title;
    this.details = details;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
    this.completed = false;
  }
}

const init = () => {
  form.addEventListener("submit", createTodo);
};

const resetform = () => {
  title.value = "";
  details.value = "";
  startDate.value = "";
  endDate.value = "";
  priority.value = "high";
};

export const createTodo = (e) => {
  e.preventDefault();
  const titleValue = title.value.trim();
  const detailsValue = details.value.trim();
  const startDateValue = startDate.value;
  const endDateValue = endDate.value;
  const priorityValue = priority.value;

  const todo = new TodoCreator(
    titleValue,
    detailsValue,
    startDateValue,
    endDateValue,
    priorityValue
  );
  resetform();
  return todo;
};

init();
