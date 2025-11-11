import { formValidation } from "./validation";

//Instance of the validator which provides all the methods
const validator = formValidation();

const form = document.querySelector("#todo-form");
const title = document.querySelector("#title");
const details = document.querySelector("#details");
const startDate = document.querySelector("#start-date");
const dueDate = document.querySelector("#due-date");
const priority = document.querySelector("#priority");
const errorMessages = document.querySelectorAll(".error-message");

class TodoCreator {
  constructor(title, details, startDate, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.startDate = startDate;
    this.dueDate = dueDate;
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
  dueDate.value = "";
  priority.value = "high";
};

const clearErrorMessages = () => {
  errorMessages.forEach((item) => (item.textContent = ""));
};

export const createTodo = (e) => {
  e.preventDefault();
  const titleValue = title.value.trim();
  const detailsValue = details.value.trim();
  const startDateValue = startDate.value;
  const dueDateValue = dueDate.value;
  const priorityValue = priority.value;

  //implement the validator process by calling validator.isValid
  const validationResult = validator.isFormValid({
    title: titleValue,
    details: detailsValue,
    startDate: startDateValue,
    dueDate: dueDateValue,
  });

  if (validationResult.isValid === true) {
    const todo = new TodoCreator(
      titleValue,
      detailsValue,
      startDateValue,
      dueDateValue,
      priorityValue
    );
    resetform();
    return todo;
  } else {
    clearErrorMessages();
    validationResult.errors.forEach((error) => {
      document.querySelector(`#${error.field}-error`).textContent =
        error.message;
    });
  }
};

init();
