export const init = (form, createTodo) => {
  form.addEventListener("submit", createTodo);
};

export const resetForm = (fields) => {
  fields.forEach((field) => {
    if (field.tagName === "SELECT") {
      //Sets the priority field to the first option
      field.selectedIndex = 0;
    } else {
      field.value = "";
    }
  });
};

export const clearErrorMessages = (errorMessages) => {
  errorMessages.forEach((item) => (item.textContent = ""));
};
