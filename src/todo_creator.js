import { formValidation } from "./validation";
import { resetForm, clearErrorMessages, valueCollector } from "./utils";

//Instance of the validator which provides all the methods
const validator = formValidation();

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
//Creates a todo object from each submit
export const createTodo = (e) => {
  e.preventDefault();
  //Collects the form field values from the DOM elements
  const {
    titleValue,
    detailsValue,
    startDateValue,
    dueDateValue,
    priorityValue,
  } = valueCollector(title, details, startDate, dueDate, priority);

  //implement the validator process by calling validator.isValid
  const validationResult = validator.isFormValid({
    title: titleValue,
    details: detailsValue,
    startDate: startDateValue,
    dueDate: dueDateValue,
  });

  if (validationResult.isValid) {
    const todo = new TodoCreator(
      titleValue,
      detailsValue,
      startDateValue,
      dueDateValue,
      priorityValue
    );
    resetForm([title, details, startDate, dueDate, priority]);
    return todo;
  } else {
    clearErrorMessages(errorMessages);
    validationResult.errors.forEach((error) => {
      document.querySelector(`#${error.field}-error`).textContent =
        error.message;
    });
  }
};
